'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import lang from './../../../services/lang';
import log from './../../../services/log';
import $ from './../../../lib/jbone';
import info from './../../../services/info';
import util from './../../../services/util';
import Queue from './../../../lib/queue';
import _ from './../../../lib/lodash';
import tansInfo from './../tangram/models/tans-info';
import textureInfo from './../tangram/models/texture-info';

var HomeView = BaseView.extend({

	events: {
		scroll: 'stopEvent',
		'click .js-set-game-difficult': 'setGameDifficult',
		'click .js-save-textures': 'saveTextures'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('home')({
			lang: lang,
			info: info,
			textureInfo: textureInfo
		}));

		view.render().then(function () {

			if (view.get('isHidden')) {
				return;
			}

			view.publish('previewSectionHelper:initialize');

			//view.publish('app-cache:check-cache');
			view.rateUsPopup();

		});

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	setGameDifficult: function (e) {

		var view = this,
			$node = $(e.currentTarget),
			difficult = $node.attr('data-difficult');

		info.set('gameDifficult', difficult);

		view.publish('navigate', 'sections', {trigger: true});

	},

	saveTextures: function () {

		// preload all textures

		var view = this,
			queue = new Queue();

		//[0].forEach(function (index) {
		[0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(function (index) {
			queue.push(function () {
				return view.saveTexture(index);
			});
		});

		queue.run().done(function () {
			log('all textures are done');
		});

	},

	saveTexture: function (index) {

		var svg = document.querySelector('.js-save-texture-svg[data-name="' + index + '"]'),
			scale = 1024,
			defer = $.Deferred(),
			queue = new Queue();

		function clearSVG(svg) {
			var polygon = svg.querySelector('polygon');
			return polygon && svg.removeChild(polygon);
		}

		function saveTan(data, key) {

			var defer = $.Deferred(),
				coordinates = data.coordinates,
				polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon'),
				points = coordinates.map(function (xy) {
					return xy.x * scale + ',' + xy.y * scale;
				}).join(' ');

			clearSVG(svg);

			polygon.setAttribute('points', points);
			polygon.setAttribute('fill', 'url(#' + (data.patternId || 'default' ) + ')');
			polygon.setAttribute('stroke-linejoin', 'miter');
			polygon.setAttribute('style', 'stroke: #fff; stroke-width: 5px;');

			svg.appendChild(polygon);

			util.svgToCanvas({
				svg: svg
			}, function (data) {
				var a = $('<a href="' + data.canvas.toDataURL() + '" download="texture-' + index + '-' + key + '"></a>');
				a.trigger('click');
				defer.resolve();
			});

			return defer.promise();

		}

		_.each(tansInfo, function (data, key) {

			queue.push(function () {
				return saveTan(data, key);
			});

		});

		queue.run().done(function () {
			defer.resolve();
		});

		return defer.promise();

	}

});

export default HomeView;
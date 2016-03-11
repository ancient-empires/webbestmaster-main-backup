'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import TanCollection from './models/tan-collection';
import Timer from './models/timer';
import RotaterModel from './rotater/rotater-model';
import device from './../../../services/device';
import log from './../../../services/log';
import info from './../../../services/info';
import mediator from './../../../services/mediator';
import lang from './../../../services/lang';
import util from './../../../services/util';
import tangrams from './../../data/tangrams';
import _ from './../../../lib/lodash';
import $ from './../../../lib/jbone';

var tanCollectionProto = TanCollection.prototype;

var TangramView = BaseView.extend({

	events: {
		scroll: 'stopEvent',
		//'click .js-save-atoms': 'saveAtoms',
		'click .js-tangram-menu-button': 'menu',
		'click .js-flip-tan': 'flipTan'
		//'click .js-back-to-section': 'backToSection'
	},

	initialize: function (dataArg) {

		var view = this,
			data = dataArg || {},
			tanCollection = new TanCollection(),
			rotater = new RotaterModel(),
			scale,
			minX = 0,
			minY = 0,
			maxX = device.get('width'),
			maxY = device.get('height'),
			sizeX = maxX - minX,
			sizeY = maxY - minY,
			viewData = {
				minX: minX,
				minY: minY,
				maxX: maxX,
				maxY: maxY,
				sizeX: sizeX,
				sizeY: sizeY
			},
			patternSvg,
			sectionId = data.id,
			index = data.index,
			pattern = _.find(tangrams.data, function (data) {
				// {name: name}
				return data.id === sectionId;
			}).data[index],
			tangramInfo = {
				id: sectionId,
				index: Number(index)
			},
			timer;

		view.set('tan-collection', tanCollection);

		view.set(viewData);
		tanCollection.setData(viewData);
		tanCollection.setData('hash', pattern.hash);

		// get test tangram
		//var pattern = tangrams.data[0].data[0];

		scale = view.detectScale(pattern);

		view.setElement(tm.get('tangram')({
			info: info,
			size: scale
		}));

		view.bindEventListeners();

		tanCollection.setData('tangram-info', tangramInfo);
		view.set('tangram-info', tangramInfo);

		tanCollection.setScale(scale);
		tanCollection.initPattern(pattern);
		tanCollection.drawPattern().then(function (canvas) {
			view.$el.append(canvas);
		});
		tanCollection.createTans();
		tanCollection.addDrawFieldTo(view.$el);
		tanCollection.drawTans();
		tanCollection.setData('rotater', rotater);

		view.set('$menuButton', view.$el.find('.js-tangram-menu-button'));
		view.set('$flipButton', view.$el.find('.js-flip-tan'));

		rotater.initialize({
			parentView: view,
			size: scale
		});

		//view.subscribe('tangram-is-done', view.hideMenuButton);
		view.subscribe('tangram-is-done', view.hideButtons);

		timer = new Timer(view.$el.find('.js-timer'));
		view.set('timer', timer);
		tanCollection.setData('timer', timer);

		view.render().then(function () {
			timer.start();
		});

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	hide: function () {

		var view = this,
			tanCollection = view.get('tan-collection'),
			$svg = view.$el.find('svg'),
			removedItems = ['image', 'pattern', 'defs', 'polygon'];

		tanCollection.destroy();

		removedItems.forEach(function (item) {
			$svg.find(item).remove();
		});

		// base hide
		return BaseView.prototype.hide.apply(view, arguments);

	},

	bindEventListeners: function () {

		var view = this;

		view.subscribe('flip-btn', view.setFlipBtnState);

	},

	setFlipBtnState: function (state) {

		var $btn = this.get('$flipButton');

		if (state) {
			$btn.addClass('flip-btn_active');
		} else {
			$btn.removeClass('flip-btn_active');
		}

	},

	flipTan: function () {

		this.publish('tan-collection:flipLastActiveTan');

	},

	/*
	 drawPattern: function (data) {

	 var view = this,
	 triangles = data.triangles,
	 scale = view.get('scale');

	 console.log('drawPattern!!!!');
	 console.log(triangles);

	 },
	 */

	detectScale: function (pattern) {

		var view = this,
			minX = view.get('minX'),
			minY = view.get('minY'),
			maxX = view.get('maxX'),
			maxY = view.get('maxY'),
			sizeX = maxX - minX,
			sizeY = maxY - minY,
			viewQ = sizeX / sizeY,
			patternQ,
			atoms = pattern.data,
			patternMaxX = -Infinity,
			patternMaxY = -Infinity,
			patternMinX = Infinity,
			patternMinY = Infinity,
			patterSizeX,
			patterSizeY,
			scale,
			atomToTriangle = tanCollectionProto.atomToTriangle,
			minScreenSize = device.get('minScreenSize'),
			spaceSize = (maxX - minX) * (maxY - minY),
			maxScale;

		maxScale = Math.round(Math.sqrt(spaceSize / minScreenSize) * 180);

		atoms.forEach(function (atom) {

			var triangle = atomToTriangle(atom, 1);

			triangle.forEach(function (xy) {

				var x = xy.x,
					y = xy.y;

				if (x > patternMaxX) {
					patternMaxX = x;
				}

				if (y > patternMaxY) {
					patternMaxY = y;
				}

				if (x < patternMinX) {
					patternMinX = x;
				}

				if (y < patternMinY) {
					patternMinY = y;
				}

			});

		});

		patterSizeX = patternMaxX - patternMinX;
		patterSizeY = patternMaxY - patternMinY;

		view.get('tan-collection').setData({
			patternWidth: patterSizeX,
			patternHeight: patterSizeY
		});

		patternQ = patterSizeX / patterSizeY;

		scale = (patternQ > viewQ) ? (sizeX / patterSizeX) : (sizeY / patterSizeY);

		scale = scale * 0.75;

		scale = Math.min(scale, maxScale);

		view.set('scale', scale);

		return scale;

	},

	hideButtons: function () {
		this.$el.find('.js-tangram-menu-button').addClass('tangram-menu-button_hidden');
		this.$el.find('.js-flip-tan').addClass('flip-tan_hidden');

	},

	menu: function () {

		var view = this;

		return view.get('menu-is-open') ? view.hideMenu() : view.showMenu();

	},

	showMenu: function () {

		var view = this,
			data = util.getSectionInfo(view.get('tangram-info'));

		data.lang = lang;
		data.info = info;

		view.set('menu-is-open', true);

		view.publish('show-popup', {
			//cssClass: 'myClass',
			hideOnClick: true,
			name: 'tangram-menu',
			onHide: {
				fn: 'hideMenu',
				context: view
			},
			data: data,
			extraEvents: [
				{
					selector: '.js-one-more-tangram',
					event: 'click',
					fn: function (e) {

						var $node = $(e.currentTarget),
							index = $node.attr('data-index'),
							id = $node.attr('data-id');

						//view.hide();

						mediator.publish('hide-main-view');

						mediator.publish('tangram-view', {
							id: id,
							index: index
						});

					}
				},
				{
					selector: '.js-set-game-difficult',
					event: 'click',
					fn: function (e) {

						var $node = $(e.currentTarget),
							difficult = $node.attr('data-difficult'),
							index = $node.attr('data-index'),
							id = $node.attr('data-id');

						info.set('gameDifficult', difficult);

						mediator.publish('hide-main-view');

						mediator.publish('tangram-view', {
							id: id,
							index: index
						});

					}
				},
				{
					selector: '.js-back-to-section',
					event: 'click',
					fn: function () {

						var fragment = Backbone.history.fragment;
						fragment = fragment.split('/');
						fragment.pop();

						BaseView.prototype.backTo(fragment.join('/'));

					}
				}
			]

		});

		view.get('$menuButton').addClass('tangram-menu-button_active');

	},

	hideMenu: function () {

		var view = this,
			$menuButton = view.get('$menuButton');

		/*
		 if (view.get('need-hide-by-router')) {
		 mediator.publish('router-hide-popup');
		 }
		 */

		view.set('menu-is-open', false);
		return $menuButton && $menuButton.removeClass('tangram-menu-button_active');

	}

});

export default TangramView;
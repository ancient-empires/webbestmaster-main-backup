'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import TanCollection from './models/tan-collection';
import RotaterModel from './rotater/rotater-model';
import device from './../../../services/device';
import log from './../../../services/log';
import mediator from './../../../services/mediator';
import tangrams from './../../data/tangrams';
import _ from './../../../lib/lodash';
import tanCollection from './../tangram/models/tan-collection';

var tanCollectionProto = tanCollection.prototype;

var TangramView = BaseView.extend({

	events: {
		scroll: 'stopEvent',
		'click .js-save-atoms': 'saveAtoms'
	},

	initialize: function (dataArg) {

		var view = this,
			data = dataArg || {},
			tanCollection = new TanCollection(),
			rotater = new RotaterModel(),
			mode = data.mode || 'normal',
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
			name = data.name || 'person',
			index = data.index || 0,
			pattern = _.find(tangrams.data, {name: name}).data[index];

		log(mode);

		view.set('mode', mode);

		view.set('tan-collection', tanCollection);

		view.set(viewData);
		tanCollection.setData(viewData);

		// get test tangram
		//var pattern = tangrams.data[0].data[0];

		scale = view.detectScale(pattern);

		view.setElement(tm.get('tangram')({
			mode: mode,
			size: scale
		}));

		//view.bindEventListeners();

		tanCollection.setScale(scale);
		tanCollection.initPattern(pattern);
		patternSvg = tanCollection.drawPattern();
		tanCollection.createTans();
		tanCollection.addDrawFieldTo(view.$el);
		tanCollection.drawTans();
		tanCollection.setData('rotater', rotater);

		view.$el.append(patternSvg);

		rotater.initialize({
			parentView: view,
			size: scale
		});

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	hide: function () {

		var view = this,
			tanCollection = view.get('tan-collection');

		tanCollection.destroy();

		// base hide

		BaseView.prototype.hide.apply(view, arguments);

	},

/*
	bindEventListeners: function () {

		var view = this;

		//view.subscribe('tangram-view:drawPattern', view.drawPattern);

	},
*/

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
			spaceSize = (maxX - minX) * (maxY - minY);

		if (view.get('mode') === 'constructor') {

			scale = Math.round(Math.sqrt(spaceSize / minScreenSize) * 150);

			view.set('scale', scale);

			return scale;

		}

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

		scale = Math.round(scale * 0.75);

		console.log(scale * 0.75);

		view.set('scale', scale);

		return scale;

	},

	saveAtoms: function () {

		this.publish('tan-collection:saveAtoms');

	}

});

export default TangramView;
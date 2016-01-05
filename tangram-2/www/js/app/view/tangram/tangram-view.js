'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import TanCollection from './models/tan-collection';
import RotaterModel from './rotater/rotater-model';
import device from './../../../services/device';

var TangramView = BaseView.extend({

	events: {
		scroll: 'stopEvent'
	},

	initialize: function (dataArg) {

		var view = this,
			data = dataArg || {},
			tanCollection = new TanCollection(),
			rotater = new RotaterModel(),
			mode = data.mode || 'normal',
			scale;

		view.set('mode', mode);

		view.set({
			minX: 0,
			minY: 0,
			maxX: device.get('width'),
			maxY: device.get('height')
		});

		scale = view.detectScale();

		view.setElement(tm.tmplFn.tangram());

		view.set('tan-collection', tanCollection);

		tanCollection.setScale(scale);
		tanCollection.createTans();
		tanCollection.addDrawFieldTo(view.$el);
		tanCollection.drawTans();
		tanCollection.setData('rotater', rotater);

		rotater.initialize({
			parentView: view,
			size: scale
		});

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	detectScale: function () {

		var view = this,
			scale,
			minScreenSize = device.get('minScreenSize'),
			spaceSize = (view.get('maxX') - view.get('minX')) * (view.get('maxY') - view.get('minY'));

		if (view.get('mode') === 'constructor') {

			scale = Math.round(spaceSize / minScreenSize * 130);

		}

		view.set('scale', scale);

		console.log(view.get('scale'));

		return scale;

	}

});

export default TangramView;
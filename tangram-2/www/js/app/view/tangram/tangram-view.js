'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import TanCollection from './models/tan-collection';
import RotaterModel from './rotater/rotater-model';
import device from './../../../services/device';
import tangrams from './../../data/tangrams';

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
			viewData = {
				minX: 0,
				minY: 0,
				maxX: device.get('width'),
				maxY: device.get('height')
			};

		view.set('mode', mode);

		view.set(viewData);
		tanCollection.setData(viewData);

		// get test tangram

		var pattern = tangrams.data[0].data[0];

		scale = view.detectScale();

		view.setElement(tm.tmplFn.tangram({
			mode: mode
		}));

		view.set('tan-collection', tanCollection);

		tanCollection.setScale(scale);
		tanCollection.initPattern(pattern);
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
			scale = Math.round( Math.sqrt(spaceSize / minScreenSize ) * 130 );
		}

		view.set('scale', scale);

		return scale;

	},

	saveAtoms: function () {

		this.get('tan-collection').saveAtoms();

	}

});

export default TangramView;
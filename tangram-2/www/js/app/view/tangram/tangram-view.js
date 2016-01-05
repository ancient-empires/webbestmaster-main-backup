'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import TanCollection from './models/tan-collection';
import RotaterModel from './rotater/rotater-model';

var TangramView = BaseView.extend({

	events: {
		scroll: 'stopEvent'
	},

	initialize: function () {

		var view = this,
			tanCollection = new TanCollection(),
			rotater = new RotaterModel(),
			scale = 200;

		view.setElement(tm.tmplFn.tangram());

		view.set('tan-collection', tanCollection);

		tanCollection.setData('scale', scale);
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

	}

});

export default TangramView;
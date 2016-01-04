'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import TanCollection from './models/tan-collection';
import RotaterModel from './rotater/rotater-model';

var TangramView = BaseView.extend({

	events: {},

	initialize: function () {

		var view = this,
			tanCollection = new TanCollection(),
			rotater = new RotaterModel();

		view.setElement(tm.tmplFn.tangram());

		view.set('tan-collection', tanCollection);

		tanCollection.detectScale();
		tanCollection.createTans();
		tanCollection.addDrawFieldTo(view.$el);
		tanCollection.drawTans();
		tanCollection.setData('rotater', rotater);

		rotater.initialize({
			parentView: view
		});

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default TangramView;
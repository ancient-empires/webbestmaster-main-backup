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
			tanCollection = new TanCollection();

		view.setElement(tm.tmplFn.tangram());

		view.set('tan-collection', tanCollection);

		tanCollection.detectScale();
		tanCollection.createTans();
		tanCollection.addDrawFieldTo(view.$el);
		tanCollection.drawTans();

		view.set('rotaterModel', new RotaterModel({
			parentView: view
		}));

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	}

});

export default TangramView;
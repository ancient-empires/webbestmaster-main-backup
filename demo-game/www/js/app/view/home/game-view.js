'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import ColCollection from './col-collection';

var HomeView = BaseView.extend({

	events: {

		'click .js-spin': 'spin'

		//scroll: 'stopEvent'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('home')());

		view.set('col-collection', new ColCollection());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	render: function () {

		var view = this,
			$wrapper = view.$el.find('.js-columns-wrapper');

		view.get('col-collection').each(function (model) {
			$wrapper.append(model.get('view').$el);
		});

		return BaseView.prototype.render.apply(view, arguments);

	},

	spin: function () {

		this.get('col-collection').spin();

	}


});

export default HomeView;
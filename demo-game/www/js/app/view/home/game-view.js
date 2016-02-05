'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import ColCollection from './column-collection';
import GameModel from './game-model';

var HomeView = BaseView.extend({

	events: {

		'click .js-spin': 'spin'

		//scroll: 'stopEvent'
	},

	initialize: function () {

		var view = this;

		view.set('model', new GameModel());

		view.setElement(tm.get('home')());

		view.set('column-collection', new ColCollection());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	render: function () {

		var view = this,
			$wrapper = view.$el.find('.js-columns-wrapper');

		view.get('column-collection').each(function (model) {
			$wrapper.append(model.get('view').$el);
		});

		return BaseView.prototype.render.apply(view, arguments);

	},

	spin: function () {

		var view = this,
			model = view.get('model');

		switch (model.get('state')) {

			case 'idle':
				view.get('column-collection').spin();
				model.set('state', 'spin-begin');
				break;

			case 'spin-main':
				view.get('column-collection').stop();
				model.set('state', 'spin-end');

				setTimeout(function () {
					model.set('state', 'idle');
					view.get('column-collection').each(function (model) {
						model.get('view').set('state', 'idle');
					});
				}, 3300);

		}


	}

});

export default HomeView;
'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import GameCollection from './game-collection';

var HomeView = BaseView.extend({

	events: {
		//scroll: 'stopEvent'
	},

	initialize: function () {

		var view = this;

		view.setElement(tm.get('home')());

		view.set('game-collection', new GameCollection());

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	render: function () {

		var view = this,
			$wrapper = view.$el.find('.js-columns-wrapper');

		view.get('game-collection').each(function (model) {
			$wrapper.append(model.get('view').$el);
		});

		return BaseView.prototype.render.apply(view, arguments);

	}


});

export default HomeView;
'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import SchedulerCollection from './scheduler-collection';

var HomeView = BaseView.extend({

		events: {

		},

		initialize: function () {

			var view = this,
				collection = new SchedulerCollection([
					{gender: 'man'},
					{gender: 'woman'}
				]);

			view.setElement(tm.tmplFn.home());

			collection.setViewWrapper(view.$el.find('.js-scheduler-view-wrapper'));

			collection.renderToWrapper();

			view.render();

			return BaseView.prototype.initialize.apply(view, arguments);

		}

	});

export default HomeView;
'use strict';
/*global window */

import BaseView from './core/base';
import tm from './../../services/template-master';

var win = window,
	HomeView = BaseView.extend({

		events: {

		},

		initialize: function () {

			var view = this;

			view.setElement(tm.tmplFn.home());

			view.bindEventListeners();

			view.render();

			view.setVerticalSwiper();

			view.scrollToTop();

			return BaseView.prototype.initialize.apply(view, arguments);

		}

	});

export default HomeView;
'use strict';
/*global window */

import Backbone from './../../lib/backbone';
import _ from './../../lib/lodash';
import BaseView from './../view/base';
import HomeView from './../view/home';

var win = window,
	Router = Backbone.Router.extend({

		routes: {
			'': 'home',
			'page': 'page',
			'book/:bookFolder': 'openBook'
		},

		home: function () {
			console.log('home');
			new HomeView();
		},

		openBook: function (bookFolder) {

			new win.APP.BB.BookView({
				bookFolder: bookFolder
			});

		},

		//page: function () {
		//	new win.APP.BB.PageView();
		//},

		getAction: function () {

			var e = window.event || {},
				newURL = e.newURL || '',
				oldURL = e.oldURL || '',
				popupPart = BaseView.prototype.popupUrl,
				viewAction;

			if (newURL.indexOf(popupPart) !== -1) {
				viewAction = 'showPopup';
			}

			if (oldURL.indexOf(popupPart) !== -1) {
				viewAction = 'hidePopup';
			}

			// other action is here
			return viewAction;

		},

		constructor: function () {

			var router = this,
				originalFunctions = {},
				proto = router.constructor.prototype;

			_.each(router.routes, function (value) {

				originalFunctions[value] = proto[value];

				proto[value] = function () {

					var router = this,
						viewAction = router.getAction(),
						baseProto = BaseView.prototype;

					if (!viewAction) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						case 'hidePopup':
							baseProto.hidePopup();
							break;
						case 'showPopup':
							break;
					}

				};

			});

			return Backbone.Router.prototype.constructor.apply(router, arguments);

		}

	});

export default new Router();
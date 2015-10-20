'use strict';
/*global window */

import Backbone from './../../lib/backbone';
import _ from './../../lib/lodash';

var win = window,
	Router = Backbone.Router.extend({

		routes: {
			'': 'home',
			'page': 'page',
			'book/:bookFolder': 'openBook'
		},

		home: function () {
			new win.APP.BB.HomeView();
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

			// todo: fix here win.APP.BB.BaseView.prototype.popupUrl

			var e = window.event || {},
				newURL = e.newURL || '',
				oldURL = e.oldURL || '',
				popupPart = 'fix it' ,
				//popupPart = 'win.APP.BB.BaseView.prototype.popupUrl,
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
						viewAction = router.getAction();
					// todo: fix here baseProto

					//baseProto = win.APP.BB.BaseView.prototype;

					if (!viewAction) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						case 'hidePopup':
							// todo: fix here baseProto


							//baseProto.hidePopup();
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
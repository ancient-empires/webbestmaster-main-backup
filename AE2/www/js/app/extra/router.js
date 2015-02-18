(function (win) {

	"use strict";
	/*global window */
	/*global Backbone, APP, $ */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title',
			settings: 'settings'
		},

		title: function () {
			new APP.BB.TitleView();
		},

		settings: function () {
			new APP.BB.SettingsView();
		},

		constructor: function () {

			var originalFunctions = {},
				proto = APP.BB.Router.prototype,
				router = this;

			function getPopupAction() {

				var e = window.event || {},
					newURL = e.newURL || '',
					oldURL = e.oldURL || '',
					popupPart = APP.BB.BaseView.prototype.popupUrl,
					popupAction;

				if (newURL.indexOf(popupPart) !== -1) {
					popupAction = 'showPopup';
				}

				if (oldURL.indexOf(popupPart) !== -1) {
					popupAction = 'hidePopup';
				}

				return popupAction;

			}

			$.each(this.routes, function (key, value) {
				originalFunctions[value] = proto[value];
				proto[value] = function () {

					var popupAction = getPopupAction();

					if ( popupAction ) {

						if (popupAction === 'hidePopup') {
							APP.BB.BaseView.prototype.hidePopup();
						}

						return false;
					}

					return originalFunctions[value].apply(router, arguments);

				};

			});

			return Backbone.Router.prototype.constructor.apply(this, arguments);

		}


	});

}(window));
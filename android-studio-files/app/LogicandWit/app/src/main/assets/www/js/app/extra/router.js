(function (win) {

	"use strict";
	/*global window */
	/*global Backbone, APP, $ */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title',
			'section/:id': 'section',
			'setting': 'setting'
		},

		title: function () {
			APP.bb.title = new APP.BB.TitleView();
		},

		section: function (id) {
			APP.bb.section = new APP.BB.SectionView({ id: id });
		},

		setting: function () {
			APP.bb.setting = new APP.BB.SettingView();
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
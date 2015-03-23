/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global Backbone, APP, $ */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title',
			'settings': 'settings',
			'play': 'play',
			'about': 'about',
			'instructions': 'instructions',
			'load-game': 'loadGame',
			'select-level': 'selectLevel',
			'skirmish-select-map': 'skirmishSelectMap',
			'skirmish-setup-map/:jsMapKey': 'skirmishSetupMap',
			'battle': 'battle'

		},

		title: function () {
			new APP.BB.TitleView();
		},

		settings: function () {
			new APP.BB.SettingsView();
		},

		play: function () {
			new APP.BB.PlayView();
		},

		about: function () {
			new APP.BB.AboutView();
		},

		instructions: function () {
			new APP.BB.InstructionsView();
		},

		loadGame: function () {
			new APP.BB.LoadGameView();
		},

		selectLevel: function () {
			new APP.BB.SelectLevelView();
		},

		skirmishSelectMap: function () {
			new APP.BB.SkirmishSelectMapView();
		},

		skirmishSetupMap: function (jsMapKey) {
			new APP.BB.SkirmishSetupMapView(jsMapKey);
		},

		battle: function () {

			$('.js-unit-store-wrapper').trigger('hide-unit-store');

			// todo: unbind unit store view
			// todo: unbind game menu

			console.log(' todo: unbind/undelegate event listeners --- battle from route --- ');


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

			_.each(this.routes, function (value) {
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
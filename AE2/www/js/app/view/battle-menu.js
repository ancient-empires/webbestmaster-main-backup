/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP, Backbone */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BattleMenuView = APP.BB.BaseView.extend({

		selectors: {
			'battleMenuWrapper': '.js-battle-menu-static-wrapper'
		},

		settings: {
			url: 'main-battle-menu'
		},

		events: {
			'click .js-popup-container': 'stopEvent',
			'hide-battle-menu': 'hide',
			'click .js-restart-battle': 'restartBattle',
			'click .js-quit-battle': 'quitBattle',
			'click .js-show-objective': 'showObjective'
		},

		initialize: function (data) {

			var view = this;

			if (Backbone.history.fragment !== view.settings.url) {
				view.navigate(view.settings.url);
			}

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				battleView = view.get('view'),
				$menuWrapper = battleView.$el.find(view.selectors.battleMenuWrapper),
				$contentWrapper = $(view.tmpl['popup-wrapper']()),
				$content = $(view.tmpl['battle-menu']());

			$contentWrapper.removeClass('js-popup-wrapper').addClass('js-battle-menu-wrapper battle-menu-wrapper');

			$contentWrapper.find('.js-popup-container').html($content.html());

			view.$el = $contentWrapper;

			$menuWrapper.append(view.$el);

		},

		restartBattle: function () {

			var view = this;

			view.routeBack();

			setTimeout(function () {
				view.showPopup({
					popupName: 'popup-confirm-restart-battle',
					parentView: view.get('view')
				});
			}, 50);

		},

		quitBattle: function () {

			var view = this;

			view.routeBack();

			setTimeout(function () {
				view.showPopup({
					popupName: 'popup-confirm-quit-battle',
					parentView: view.get('view')
				});
			}, 50);

		},

		showObjective: function () {

			var view = this;

			view.routeBack();
			setTimeout(function () {
				view.get('view').showObjective();
			}, 50);

		}



	});

}(window));

/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.PopupView = APP.BB.BaseView.extend({

		events: {
			'click .js-popup-container': 'stopEvent',
			'click .js-confirmed-end-turn': 'confirmedEndTurn',
			'click .js-restart-battle': 'restartBattle',
			'click .js-quit-battle': 'quitBattle'
		},

		selectors: {
			popupContainer: '.js-popup-container'
		},

		initialize: function(data) {

			var view = this;

			view.extendFromObj(data); // popupName, parentView, popupData(objToView)

			view.routeToPopup();

			view.$el = $(view.tmpl['popup-wrapper']());

			view.proto.initialize.apply(this, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				popupData = view.get('popupData') || {},
				$content = $(view.tmpl[view.get('popupName')](popupData)),
				$container = view.$el.find(view.selectors.popupContainer);

			$container.html( $content.html() );

			view.$wrapper.append(view.$el);

		},

		// actions

		confirmedEndTurn: function (e) {

			var view = this,
				parentView = view.get('parentView');

			view.stopEvent(e);
			view.routeBack();

			parentView.confirmedEndTurn();

		},

		restartBattle: function () {

			var view = this,
				parentView = view.get('parentView'),
				battleData = win.APP.bb.battleData;

			battleData.isEndGame = 'yes';
			battleData.gameTo = 'restart';

			view.hide();
			view.routeBack();
			parentView.restart();

		},

		quitBattle: function () {

			var view = this,
				battleData = win.APP.bb.battleData;

			battleData.isEndGame = 'yes';
			battleData.gameTo = 'quit';

			view.hide();
			view.routeBack();

			// see router to quit

		}



	});

}(window));
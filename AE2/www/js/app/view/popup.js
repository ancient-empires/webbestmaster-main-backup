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
			'click .js-quit-battle': 'quitBattle',
			'click .js-open-map-in-editor': 'openMapInEditor'
		},

		selectors: {
			popupContainer: '.js-popup-container'
		},

		initialize: function(data) {

			var view = this,
				popupUrl = view.popupUrl,
				url = win.location.href;

			if ( url.indexOf(popupUrl) === -1 ) {
				view.routeToPopup();
			}

			view.extendFromObj(data); // popupName, parentView, popupData(objToView)

			view.$el = $(view.tmpl['popup-wrapper']());

			view.proto.initialize.apply(this, arguments);

			view.render();

			view.showInAnimation();

		},

		render: function () {

			var view = this,
				popupData = view.get('popupData') || {},
				$content = $(view.tmpl[view.get('popupName')](popupData)),
				$container = view.$el.find(view.selectors.popupContainer);

			$container.html( $content.html() );

			view.$wrapper.append(view.$el);

		},

		hide: function () {

			var view = this;
			view.showOutAnimation().then(function () {
				view.proto.hide.call(view);
				view.get('deferred').resolve();
			});

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
			setTimeout(function () {
				parentView.restart();
			}, 50);

		},

		quitBattle: function () {

			var view = this,
				battleData = win.APP.bb.battleData;

			battleData.isEndGame = 'yes';
			battleData.gameTo = 'quit';



			view.hide();
			view.routeBack();



		},

		showInAnimation: function () {

			var view = this;
			setTimeout(function () { // show animation
				view.$el.addClass('show-in');
			}, 50);

		},

		showOutAnimation: function () {

			var view = this,
				$el = view.$el,
				deferred = $.Deferred(),
				transitionEnd = view.info.get('transitionEnd', true);

			$el.one(transitionEnd, function () {
				deferred.resolve();
			}); // work only one time

			$el.addClass('show-out');

			return deferred.promise();

		},

		openMapInEditor: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				parentView = view.get('parentView'),
				jsName = $this.attr('data-map-name');


			win.APP.map.db.getMap({
				jsName: jsName
			}).then(function (map) {

				parentView.initialize({
					map: map
				});


			});



		}



	});

}(window));
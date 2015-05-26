/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.PopupView = APP.BB.BaseView.extend({

		events: {
			'click .js-popup-container': 'stopEvent'
		},

		selectors: {
			popupContainer: '.js-popup-container'
		},

		initialize: function(data) { // cssClass, from, popupData {text, header ...}, append$el, playSound, onShow {context, fn}, onHide {context, fn}

			var view = this,
				popupUrl = view.popupUrl,
				url = win.location.href;

			if ( url.indexOf(popupUrl) === -1 ) {
				view.routeToPopup();
			}

			view.extendFromObj(data); // popupName, parentView, popupData(objToView)

			view.$el = $(view.tmpl['popup-wrapper']());

			view.$el.addClass(data.from || 'left');

			if (data.cssClass) {
				view.$el.addClass(data.cssClass);
			}

			view.proto.initialize.apply(this, arguments);

			view.render();

			view.showInAnimation();

		},

		render: function () {

			var view = this,
				append$el = view.get('append$el'),
				popupData = view.get('popupData') || {},
				playSound = view.get('playSound'),
				$content = $(view.tmpl[view.get('popupName')](popupData)),
				$container = view.$el.find(view.selectors.popupContainer),
				onShow = view.get('onShow'),
				context;

			if (playSound) {
				win.APP.soundMaster.play(playSound);
			}

			$container.html( $content.html() );

			if (append$el) {
				$container.append(append$el);
			}

			view.$wrapper.append('<div class="js-popup-protector popup-protector"></div>');
			view.$wrapper.append(view.$el);

			if (!onShow) {
				return;
			}

			context = onShow.context || view;
			context[onShow.fn].apply(context, onShow.args);

		},

		hide: function () {

			var view = this;


			view.showOutAnimation().then(function () {

				var $popupProtector = view.$wrapper.find('.js-popup-protector');
				setTimeout(function () {
					$popupProtector.remove();
				}, view.info.actionTime() + 50);

				view.proto.hide.call(view);
				view.get('deferred').resolve();

				var onHide = view.get('onHide'),
					//battleData = win.APP.bb.battleData,
					context;

				if (!onHide) {
					return;
				}

				context = onHide.context || view;

				context[onHide.fn].apply(context, onHide.args);

			});

		},

		// actions

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

		}


	});

}(window));
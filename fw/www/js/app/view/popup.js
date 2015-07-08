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

		initialize: function(data) { // timeout, cssClass, from, data {text, header ...}, append$el, sound, onShow {context, fn}, onHide {context, fn}

			var view = this,
				popupUrl = view.popupUrl,
				url = win.location.href;

			if ( url.indexOf(popupUrl) === -1 ) {
				view.routeToPopup();
			}

			view.extendFromObj(data); // name, parentView, data(objToView)

			view.$el = $(view.tmpl['popup-wrapper']());

			if (data.cssClass) {
				view.$el.addClass(data.cssClass);
			}

			view.proto.initialize.apply(this, arguments);

			view.render();

			view.showInAnimation();

			view.bindEventListeners();

		},

		bindEventListeners: function () {

			var view = this,
				timeout = view.get('timeout'),
				timeoutId;

			if (timeout) {
				timeoutId = setTimeout(function () {
					view.hidePopupByRouter();
				}, timeout);
				view.set('timeoutId', timeoutId);
			}

		},

		unbindEventListeners: function () {

			var view = this,
				timeout = view.get('timeout');

			if (timeout) {
				clearTimeout(view.get('timeoutId'))
			}

		},

		render: function () {

			var view = this,
				append$el = view.get('append$el'),
				data = view.get('data') || {},
				sound = view.get('sound'),
				$content = $(view.tmpl[view.get('name')](data)),
				$container = view.$el.find(view.selectors.popupContainer),
				onShow = view.get('onShow'),
				context;

			if (sound) {
				win.APP.soundMaster.play(sound);
			}

			$container.append($content);

			view.$wrapper.append(view.$el);

			if (onShow) {
				context = onShow.context || view;
				context[onShow.fn].apply(context, onShow.args);
			}

		},

		hide: function () {

			var view = this;

			view.showOutAnimation().then(function () {

				var onHide = view.get('onHide'),
					context;

				if (onHide) {
					context = onHide.context || view;
					context[onHide.fn].apply(context, onHide.args);
				}

				view.proto.hide.call(view);

				view.get('deferred').resolve();

			});

		},

		// actions
		showInAnimation: function () {
			var view = this;
			view.$el.find(view.selectors.popupContainer).addClass('popup-container-show-in');
		},

		showOutAnimation: function () {

			var view = this,
				$el = view.$el,
				$container = $el.find(view.selectors.popupContainer),
				deferred = $.Deferred(),
				animationEnd = view.info.get('animationEnd', true);

			$container.one(animationEnd, function () {
				deferred.resolve();
			}); // work only one time

			$container.addClass('popup-container-show-out');

			return deferred.promise();

		}


	});

}(window));
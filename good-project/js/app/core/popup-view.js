define(['jquery', 'backbone', 'router', 'log', 'BaseView'], function ($, bb, router, log, BaseView) {

	'use strict';

	return BaseView.extend({

		events: {
			'click .js-popup-container': 'stopEvent'
		},

		selectors: {
			popupContainer: '.js-popup-container'
		},

		//tmpl: templateMaster.tmplFn,
		//
		//info: info,

		initialize: function(dataArg) { // timeout, cssClass, from, data {text, header ...}, append$el, sound, onShow {context, fn}, onHide {context, fn}

			router.routeToPopup();

			var view = this,
				data = dataArg || {},
				onShowDeferred = $.Deferred(),
				onHideDeferred = $.Deferred(),
				onShowPromise = onShowDeferred.promise(),
				onHidePromise = onHideDeferred.promise();

			view.unsubscribe();
			view.subscribe('hide-popup', view.hide);

			view.data = {
				name: data.name, // name of template for content
				cssClass: data.cssClass || '',
				content: data.content || {},
				timeout: data.timeout || 0,

				sound: data.sound || null, // optional - path to media file
				onShow: data.onShow || null, // optional {context: [context || view], fn: <function>, args: [args || optional]}
				onHide: data.onHide || null, // optional {context: [context || view], fn: <function>, args: [args || optional]}

				onShowDeferred: onShowDeferred,
				onHideDeferred: onHideDeferred,
				onShowPromise: onShowPromise,
				onHidePromise: onHidePromise,

				timeoutId: null // self set

			};

			view.$el = $(view.tmpl['popup-wrapper']());

			view.$el.addClass(view.data.cssClass);

			//view.proto.initialize.apply(this, arguments);

			view.render();

			view.showInAnimation();

			view.bindEventListeners();

		},

		bindEventListeners: function () {

			var view = this,
				timeout = view.data.timeout;

			if (timeout) {
				view.data.timeoutId = setTimeout(function () {
					//view.publish('hide-popup');
					router.hidePopup();
				}, timeout);
			}

		},

		unbindEventListeners: function () {

			var view = this;

			if ( view.data.timeout ) {
				clearTimeout(view.data.timeoutId);
			}

		},

		render: function () {

			var view = this,
				data = view.data,
				sound = data.sound,
				$content = $(view.tmpl[data.name](data.content)),
				$container = view.$el.find(view.selectors.popupContainer),
				onShow = data.onShow,
				context;

			if (sound) {
				log('sound -', sound);
				//win.APP.soundMaster.play(sound);
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

			view.unsubscribe();

			view.showOutAnimation().then(function () {

				var onHide = view.data.onHide,
					context;

				if (onHide) {
					context = onHide.context || view;
					context[onHide.fn].apply(context, onHide.args);
				}

				BaseView.prototype.hide.call(view);

			});

		},

		// actions
		showInAnimation: function () {

			var view = this,
				$el = view.$el,
				$container = $el.find(view.selectors.popupContainer),
				deferred = $.Deferred(),
				animationEnd = view.info.get('animationEnd', true);

			$container.one(animationEnd, function () {
				view.data.onShowDeferred.resolve();
				deferred.resolve();
			}); // work only one time

			$container.addClass('popup-container-show-in');

			return deferred.promise();

		},

		showOutAnimation: function () {

			var view = this,
				$el = view.$el,
				$container = $el.find(view.selectors.popupContainer),
				deferred = $.Deferred(),
				animationEnd = view.info.get('animationEnd', true);

			$container.one(animationEnd, function () {
				view.data.onHideDeferred.resolve();
				deferred.resolve();
			}); // work only one time

			$container.addClass('popup-container-show-out');

			return deferred.promise();

		}


	});

});
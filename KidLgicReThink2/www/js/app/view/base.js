/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc) {

	"use strict";
	/*global window, document, location, Image */
	/*global Backbone, $, APP, log */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	var proto;

	APP.BB.BaseView = Backbone.View.extend({

		events: {
			// base
			'click [data-sound]': 'playSound',
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink',
			'click .js-stop-event': 'stopEvent',

			// hide view
			'hide': 'hide',

			// no scroll
			'touchmove .js-no-scroll': 'stopEvent',
			'gesturestart .js-no-scroll': 'stopEvent',
			'gesturechange .js-no-scroll': 'stopEvent',
			'gestureend .js-no-scroll': 'stopEvent',

			// fix extra scroll for iOS
			'touchstart .js-scroll-area-container': 'touchStartAutoScroll',

			// external
			'click .js-list-backward[data-group-name]': 'changeSelect',
			'click .js-list-changed-item[data-group-name]': 'changeSelect',
			'click .js-list-forward[data-group-name]': 'changeSelect',

			// tabs
			'click .js-tab-button': 'tabAction',
			'click .js-tab-close': 'tabClose'

		},

		popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper',
			viewWrapper: '.js-view-wrapper'
		},

		// will be change after initStatic
		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend'],
			dbl: ['dblclick', 'doubletap']
		},

		initStatic: function () {

			proto.$wrapper = $(this.selectors.wrapper);

			var info = win.APP.info,
				isTouch = info.get('isTouch', true),
				eventTypesIndex = Number(isTouch),
				types = this.eventTypes,
				os = info.get('os', true);

			_.each(types, function (typesArr, key) {
				types[key] = typesArr[eventTypesIndex];
			});

			proto.$wrapper.addClass(os);
			proto.$wrapper.addClass('isMobile_' + isTouch);

			$(doc.body).on('contextmenu', this.stopEvent);

		},

		constructor: function() {

			this.events = $.extend( {}, proto.events, this.events );

			this.selectors = $.extend( {}, proto.selectors, this.selectors );

			this.attr = {};

			this.setClassNames();

			return Backbone.View.prototype.constructor.apply(this, arguments);
		},

		setClassNames: function () {

			this.classNames = {};

			_.each(this.selectors, function (value, key) {
				this[key] = value.replace(/\./g, ' ').trim();
			}, this.classNames);

		},

		initialize: function() {

			//this.delegateEvents(); // fix for case -> get html async

		},

		changeSelect: function (e) { // external

			var $this = $(e.currentTarget),
				direction = $this.hasClass('js-list-backward') ? -1 : 1,
				groupName = $this.attr('data-group-name'),
				$container = this.$el.find('.js-list-changed-item[data-full-list][data-group-name="' + groupName + '"]'),
				listData = JSON.parse(decodeURI($container.attr('data-full-list'))),
				listLength = listData.length,
				currentKey = $container.attr('data-key'),
				followIndex = 0,
				followData;

			// find current index
			listData.every(function (obj, i) {
				if ( obj.key.toString() === currentKey ) {
					followIndex = i + direction;
					return false;
				}
				return true;
			});

			// adjust follow index
			if ( followIndex < 0 ) {
				followIndex = listLength - 1;
			}

			if ( followIndex >= listLength ) {
				followIndex = 0;
			}

			followData = listData[followIndex];

			$container.attr('data-key', followData.key);
			$container.attr('data-value', followData.value);
			$container.html(followData.value);

			$container.trigger('change');

		},

		hide: function () {
			log('hide view');

			var view = this,
				$el = view.$el,
				transitionEnd = view.info.get('transitionEnd', true);

			view.undelegateEvents();

			if (view.unbindEventListeners) {
				view.unbindEventListeners();
			}

			if ($el.hasClass('show-view-animation')) {
				$el.one(transitionEnd, function () {
					$(this).remove();
				});
				$el.addClass('hide-view-animation');
			} else {
				$el.remove();
			}

		},

		render: function () {

			var view = this,
				$oldContainer = $(view.$wrapper[0].querySelectorAll(view.selectors.viewWrapper));
			$oldContainer.trigger('hide');

			view.$el.addClass(view.classNames.viewWrapper);

			this.$wrapper.append(view.$el);
			this.util.setSizes();
			this.util.toTop();

		},

		showAppearAnimation: function () {
			this.$el.addClass('show-view-animation');
		},

		navigate: function() { //url, options
			APP.bb.router.navigate.apply(APP.bb.router, arguments);
		},

		routeTo: function(e) {

			var $this = $(e.currentTarget),
				route = $this.attr('data-route');

			this.navigate(route, true);

		},

		routeByUrl: function(route, options) {
			this.navigate(route, options);
		},

		routeToPopup: function () {

			var view = this;

			view.routeByUrl(Backbone.history.fragment + '?' + view.popupUrl);

		},

		routeBack: function(e) {

			this.stopEvent(e);

			if (location.hash) {
				Backbone.history.history.back();
			}

		},

		backTo: function (url, data) {

			data = data || {};

			var view = this,
				router = win.APP.bb.router;
			router.isForce = data.isForce;

			(function backTo() {
				setTimeout(function () {
					if (Backbone.history.fragment === url) {
						router.isForce = false;
						return;
					}
					view.routeBack();
					backTo();
				}, 200);
			}());

		},

		showPopup: function(data) {

			var view = this,
				deferred = $.Deferred(),
				popup;

			view.hidePopup();

			popup =	new APP.BB.PopupView(data);
			popup.set('deferred', deferred);

			return deferred.promise();

		},

		//showTicket: function (data) {
		//
		//	var deferred = $.Deferred(),
		//		popup;
		//
		//	setTimeout(function () {
		//		popup =	new APP.BB.TicketView(data);
		//		popup.set('deferred', deferred);
		//	}, 50);
		//
		//	return deferred.promise();
		//
		//},

		hidePopup: function () {

			$('.js-popup-wrapper').trigger('hide');

		},

		//hidePopups: function (data) {
		//
		//	data = data || {};
		//
		//	var view = this,
		//		deferred = $.Deferred();
		//
		//	(function hidePopups () {
		//		setTimeout(function () {
		//			if (view.isPopupExist()) {
		//				view.routeBack();
		//				hidePopups();
		//			} else {
		//				deferred.resolve();
		//			}
		//		}, data.timePadding || 0); // def se time out for routing is 50
		//	}());
		//
		//	return deferred.promise();
		//
		//},

		isPopupExist: function () {
			var view = this,
				url = win.location.href,
				popupPart = view.popupUrl;

			return url.indexOf(popupPart) !== -1;

		},

		stopEvent: function(e) {

			if (!e) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

		},

		toExternalLink: function(e) {

			var view = this,
				$this = $(e.currentTarget),
				needConfirm = $this.attr('data-need-confirm'),
				url = $this.attr('data-href');

			view.stopEvent(e);

			if (needConfirm === 'yes') {

				view.prompt({
					url: url
				});

			} else {
				win.open(url);
			}

		},

		prompt: function (data) {

			var view = this,
				a = view.util.getRandomBetween(4, 14),
				b = view.util.getRandomBetween(4, 14),
				result = prompt(a + ' + ' + b + ' = ?');

			if ( result === null || result === '') {
				return;
			}

			if (Number(result) === a + b) {
				win.open(data.url);
			} else {
				view.prompt(data);
			}

		},

		loadUrl: function () {
			Backbone.history.loadUrl();
		},

		changeBy: function (key, delta) {
			return this.set(key, this.get(key) + delta);
		},

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},
		get: function (key) {
			return this.attr[key];
		},

		extendFromObj: function (data) {
			_.extend(this.attr, data);
		},

		touchStartAutoScroll: function (e) {

			if ( !this.info.get('isIOS', true) ) { // do for IOS only
				return;
			}

			var $wrapper = $(e.currentTarget),
				$scrollArea = $wrapper.find('> div'),
				scrollTop = $wrapper.scrollTop(),
				wrapperHeight,
				scrollAreaHeight,
				maxScrollTop;

			if (scrollTop <= 0) {
				$wrapper.scrollTop(1);
				return;
			}

			wrapperHeight = $wrapper.outerHeight();
			scrollAreaHeight = $scrollArea.outerHeight();
			maxScrollTop = scrollAreaHeight - wrapperHeight;

			if ( scrollTop >= maxScrollTop ) {
				$wrapper.scrollTop(maxScrollTop - 1);
			}

		},

		tabAction: function (e) {

			var view = this,
				$el = view.$el,
				$button = $(e.currentTarget),
				tabId = $button.attr('data-tab-id'),
				tabState = $button.attr('data-tab-state'),
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$block = $el.find(tabBlockSelector + '[data-tab-id="' + tabId + '"]'),
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

			if (tabState === 'close') {
				$button
					.attr('data-tab-state', 'open')
					.removeClass(tabButtonClassPrefix + 'close')
					.addClass(tabButtonClassPrefix + 'open');
				$block.removeClass('hidden');
			}

		},

		tabClose: function () {

			var view = this,
				$el = view.$el,
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

		},

		playSound: function (e) {

			var $this = $(e.currentTarget),
				sound = $this.attr('data-sound');

			win.APP.soundMaster.play({
				sound: sound,
				road: 3,
				isLoop: false
			});

		}

	});

	proto = win.APP.BB.BaseView.prototype;

	proto.tmpl = win.APP.templateMaster.tmplFn;
	proto.proto = proto;
	proto.info = win.APP.info;

	proto.util = {

		getRandomBetween: function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		},

		toTop: function () {
			win.scrollTo(0, 0);
		},
		setSizes: function () {

			log('set sizes');

		},
		onResize: function () {
			log('on resize');
			this.setSizes();
		},
		init: function () {
			win.addEventListener('resize', this.onResize.bind(this), false);
		},
		copyJSON: function (obj) { // external
			return JSON.parse(JSON.stringify(obj));
		},

		runIfConnect: function (calback, context) {
			var img = new Image();
			img.addEventListener('load', calback.call(context), false);
			img.src = 'http://statlex.com/i/statlex-icon.png?t=' + Date.now();
		},
		getStringFromXY: function (x, y) {
			return 'x' + x + 'y' + y;
		},
		findIn: function (context, selector) {
			return context.querySelector(selector);
		},
		findInAll: function (context, selector) {
			return Array.prototype.slice.call(context.querySelectorAll(selector));
		}

	};

	proto.util.init();

}(window, document));
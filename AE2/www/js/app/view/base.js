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
			'click .js-list-forward[data-group-name]': 'changeSelect'
		},

		popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper'
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
			proto.$wrapper.addClass('isMobile' + isTouch);

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
			$container.html(followData.value);

		},

		hide: function () {
			log('hide view');

			this.undelegateEvents();

			if (this.unbindEventListeners) {
				this.unbindEventListeners();
			}

			this.$el.remove();

		},

		render: function () {

			var $oldContainer = this.$wrapper.find('> div');
			$oldContainer.trigger('hide');

			this.$wrapper.append(this.$el);
			this.util.setSizes();
			this.util.toTop();

		},

		navigate: function() { //url, options
			APP.bb.router.navigate.apply(APP.bb.router, arguments);
		},

		routeTo: function(e) {

			var $this = $(e.target),
				route = $this.attr('data-route');

			this.navigate(route, true);

		},

		routeByUrl: function(route, options) {
			this.navigate(route, options);
		},

		routeToPopup: function () {

			this.routeByUrl(Backbone.history.fragment + '?' + this.popupUrl);

		},

		routeBack: function(e) {

			this.stopEvent(e);

			if (location.hash) {
				Backbone.history.history.back();
			}

		},

		showPopup: function(data) {

			APP.bb.popup = new APP.BB.PopupView(data);

		},

		hidePopup: function () {

			$('.js-popup-wrapper').trigger('hide');

		},

		stopEvent: function(e) {

			if (e && e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}

		},

		toExternalLink: function(e) {

			this.stopEvent(e);

			var $this = $(e.currentTarget),
				url = $this.attr('href');

			win.open(url);

		},
		loadUrl: function () {
			Backbone.history.loadUrl();
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

		}

	});

	proto = win.APP.BB.BaseView.prototype;

	proto.tmpl = win.APP.templateMaster.tmplFn;
	proto.proto = proto;
	proto.info = win.APP.info;

	proto.util = {
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
		copyJSON: function (obj) { // extermal
			return JSON.parse(JSON.stringify(obj));
		},

		//themeList: ['coffee', 'black-coffee', 'owl', 'owl owl-black'],
		//themeDefault: 'coffee',
		//
		//setTheme: function (themeName) {
		//
		//	var $body = $(doc.body);
		//
		//	_.each(this.themeList, function (themeName) {
		//		$body.removeClass(themeName);
		//	});
		//
		//	$body.addClass(themeName);
		//
		//	win.APP.info.set('theme', themeName);
		//
		//},
		//loadSavedTheme: function () {
		//
		//	var themeName = win.APP.info.get('theme') || this.themeDefault;
		//
		//	this.setTheme(themeName);
		//
		//},
		runIfConnect: function (calback, context) {
			var img = new Image();
			img.addEventListener('load', calback.call(context), false);
			img.src = 'http://statlex.com/i/statlex-icon.png?t=' + Date.now();
		},
		getXYFromStringXY: function (xy) {
			return {
				x: parseInt(xy.replace(/^x(\d+)y\d+$/, '$1'), 10),
				y: parseInt(xy.replace(/^x\d+y(\d+)$/, '$1'), 10)
			};
		},
		getStringFromXY: function (x, y) {
			return 'x' + x + 'y' + y;
		},
		getXyFromStyle: function (style) {
			var xy = style.replace(/^[\s\S]+translate3d\(/, '').match(/\-?\d+(\.\d*)?/g);

			return {
				x: parseInt(xy[0], 10),
				y: parseInt(xy[1], 10)
			};
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
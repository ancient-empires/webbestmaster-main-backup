(function (win, doc) {

	"use strict";
	/*global window, document, location */
	/*global Backbone, $, APP, log */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	var proto;

	APP.BB.BaseView = Backbone.View.extend({

		events: {
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink',
			'click .js-stop-event': 'stopEvent',
			'hide': 'hide',
			'click .js-list-backward[data-group-name]': 'changeSelect',
			'click .js-list-changed-item[data-group-name]': 'changeSelect',
			'click .js-list-forward[data-group-name]': 'changeSelect'
		},

		popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper'
		},

		initStatic: function () {
			proto.$wrapper = $(this.selectors.wrapper);

		},

		constructor: function() {

			this.events = $.extend( {}, proto.events, this.events );

			this.attr = {};

			this.info = win.APP.info;

			return Backbone.View.prototype.constructor.apply(this, arguments);
		},

		initialize: function() {

		},

		changeSelect: function (e) {

			var $this = $(e.target),
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

			var $this = $(e.target),
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
		}

	});

	proto = APP.BB.BaseView.prototype;

	proto.tmpl = win.APP.templateMaster.tmplFn;
	proto.proto = proto;

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
		copyJSON: function (obj) {
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
		}

	};

	proto.util.init();

}(window, document));
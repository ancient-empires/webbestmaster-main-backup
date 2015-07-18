/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc, docElem) {

	"use strict";
	/*global window, document, location, Image */
	/*global Backbone, $, APP, log */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	win.APP.BB.BaseView = Backbone.View.extend({

		events: {
			// base
			'click [data-sound]': 'playSound',
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink',
			'click .js-stop-event': 'stopEvent',

			// hide view
			'hide': 'hide',
			'click .js-hide-popup': 'hidePopupByRouter',

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

			var view = this,
				info = win.APP.info,
				isTouch = info.get('isTouch', true),
				eventTypesIndex = Number(isTouch),
				types = view.eventTypes,
				fontSize,
				proto = win.APP.BB.BaseView.prototype;

			proto.$wrapper = $(view.selectors.wrapper);
			view.tmpl = win.APP.templateMaster.tmplFn;
			view.info = win.APP.info;

			// adjust font size
			fontSize = Math.round( 14 * Math.pow( docElem.clientWidth * docElem.clientHeight / 153600, 0.5) ); // 153600 = 320 * 480
			fontSize = Math.min(fontSize, 24);
			fontSize = Math.max(fontSize, 14);
			fontSize = Math.round(fontSize / 2) * 2;
			docElem.style.fontSize = fontSize + 'px';

			_.each(types, function (typesArr, key) {
				types[key] = typesArr[eventTypesIndex];
			});

			$(doc.body).on('contextmenu', view.stopEvent);

		},

		constructor: function() {

			var view = this,
				proto = win.APP.BB.BaseView.prototype;

			view.events = $.extend( {}, proto.events, view.events );

			view.selectors = $.extend( {}, proto.selectors, view.selectors );

			view.attr = {};

			view.setClassNames();

			view.proto = proto;

			return Backbone.View.prototype.constructor.apply(view, arguments);
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
			$container.attr('data-value', followData.value);
			$container.html(followData.value);

			$container.trigger('change');

		},

		destroyView: function() {

			var view = this;

			view.undelegateEvents();

			view.$el.removeData().unbind().remove().empty();

			view.remove();
			view.unbind();

			Backbone.View.prototype.remove.call(view);

		},

		hide: function () {

			var view = this,
				info = view.info,
				$el = view.$el,
				animationEnd = info.get('animationEnd', true),
				isScreenAnimation = info.get('screenAnimation') === 'on',
				deferred = $.Deferred();

			if (view.unbindEventListeners) {
				view.unbindEventListeners();
			}

			if (isScreenAnimation && $el.hasClass('show-view-animation')) {
				$el.one(animationEnd, function () {
					view.destroyView();
					deferred.resolve();
				});
				//$el.removeClass('show-view-animation');
				$el.addClass('hide-view-animation');
			} else {
				view.destroyView();
				deferred.resolve();
			}

			return deferred.promise();

		},

		render: function () {

			var view = this,
				$oldContainer = $(view.$wrapper[0].querySelectorAll(view.selectors.viewWrapper));
			
			$oldContainer.trigger('hide');

			view.$el.addClass(view.classNames.viewWrapper);

			view.$wrapper.append(view.$el);
			//view.util.setSizes();
			//view.util.toTop();
			return view.showAppearAnimation();

		},

		showAppearAnimation: function () {

			var view = this,
				info = view.info,
				isScreenAnimation = info.get('screenAnimation') === 'on',
				$el = view.$el,
				deferred = $.Deferred(),
				animationEnd = info.get('animationEnd', true);

			if (isScreenAnimation) {
				$el.one(animationEnd, function () {
					deferred.resolve();
				});
				$el.addClass('show-view-animation');
			} else {
				$el.addClass('show-view-no-animation');
				deferred.resolve();
			}

			return deferred.promise();

		},

		navigate: function() { //url, options
			win.APP.bb.router.navigate.apply(win.APP.bb.router, arguments);
		},

		routeTo: function(e) {

			var view = this,
				$this = $(e.currentTarget),
				route = $this.attr('data-route');

			view.navigate(route, true);

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

		//backTo: function (url, data) {
		backTo: function (url) {

			//data = data || {};

			var view = this;
				//router = win.APP.bb.router;
			//router.isForce = data.isForce;

			(function backTo() {
				setTimeout(function () {
					if (Backbone.history.fragment === url || !Backbone.history.fragment) { // needed url or ''
						//router.isForce = false;
						return;
					}
					view.routeBack();
					backTo();
				}, 10);
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

		hidePopupByRouter: function () {

			var view = this,
				oldURL = Backbone.history.fragment,
				popupPart = win.APP.BB.BaseView.prototype.popupUrl;

			if ( oldURL.indexOf(popupPart) !== -1 ) {
				view.routeBack();
			}

		},

		hidePopup: function () {

			$('.js-popup-wrapper').trigger('hide');

		},

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
				util = win.APP.util,
				a = util.getRandomBetween(4, 14),
				b = util.getRandomBetween(4, 14),
				result = prompt( [' ', a, '+', b, '= ?'].join(' ') );

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

}(window, window.document, window.document.documentElement));
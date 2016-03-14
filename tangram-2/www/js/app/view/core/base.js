'use strict';
/*global window */

import Backbone from './../../../lib/backbone';
import $ from './../../../lib/jbone';
import _ from './../../../lib/lodash';
import info from './../../../services/info';
//import tm from './../../../services/template-master';
import util from './../../../services/util';
import mediator from './../../../services/mediator';
import sm from './../../../sound/sound-master';
import lang from './../../../services/lang';
import device from './../../../services/device';
import log from './../../../services/log';

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	BaseView = Backbone.View.extend({

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

		extraEvents: {
			noScroll: ['mousewheel', 'touchmove', 'gesturestart', 'gesturechange', 'gestureend']
		},

		//popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper',
			verticalSwiper: '.js-scroll-container',
			noScroll: '.js-no-scroll'
		},

		// will be changed after initStatic
		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend']
			//dbl: ['dblclick', 'doubletap']
		},

		initStatic: function () {

			var view = this,
				isTouch = device.get('isTouch'),
				eventTypesIndex = Number(isTouch),
				types = view.eventTypes,
				fontSize;

			view.constructor.prototype.$wrapper = $(view.selectors.wrapper);

			// adjust font size
			fontSize = Math.round(14 * Math.pow(docElem.clientWidth * docElem.clientHeight / 153600, 0.5)); // 153600 = 320 * 480
			fontSize = Math.min(fontSize, 24);
			fontSize = Math.max(fontSize, 14);
			fontSize = Math.round(fontSize / 2) * 2;
			docElem.style.fontSize = fontSize + 'px';

			info.set('remSize', fontSize, true);

			_.each(types, function (typesArr, key) {
				types[key] = typesArr[eventTypesIndex];
			});

			$(doc.body).on('contextmenu', view.stopEvent);

			view.listenTo(device, 'resize', function () {
				view.resizeWrapper();
			});

			view.resizeWrapper();

		},

		resizeWrapper: function () {
			this.constructor.prototype.$wrapper.css({
				width: device.get('width') + 'px',
				height: device.get('height') + 'px'
			});
		},

		constructor: function () {

			var view = this,
				proto = BaseView.prototype,
				newEvents = {},
				noScrollEvents = proto.extraEvents.noScroll,
				noScrollSelector = proto.selectors.noScroll;

			view.events = $.extend({}, proto.events, view.events);

			// prepare extra events from eventTypes
			_.each(view.events, function (functionName, eventAndSelector) {
				newEvents[view.getFullEventNameAndSelector(eventAndSelector)] = functionName;
			});

			_.each(noScrollEvents, function (name) {
				newEvents[name + ' ' + noScrollSelector] = 'stopEvent';
			});

			if (newEvents.scroll === 'stopEvent') {
				newEvents.scroll = null; // let gc clean ram
				delete newEvents.scroll;
				_.each(noScrollEvents, function (name) {
					newEvents[name] = 'preventDefaultEvent';
				});
			}

			view.events = newEvents;

			view.selectors = $.extend({}, proto.selectors, view.selectors);

			view.attr = {
				animations: []
			};

			//view.setClassNames();

			mediator.installTo(view);

			return Backbone.View.prototype.constructor.apply(view, arguments);
		},

		pushAnimation: function () {

			return this.attr.animations.push.apply(this.attr.animations, arguments);

		},

		destroyAnimations: function () {

			return this.attr.animations.forEach(function (animation) {
				animation.stop();
				animation.remove();
			});

		},



/*
		setClassNames: function () {

			var classNames = this.classNames = {};

			_.each(this.selectors, function (value, key) {
				classNames[key] = value.replace(/\./g, ' ').trim();
			});

		},
*/

		getFullEventNameAndSelector: function (eventNameAndSelector) {

			var view = this,
				arr = eventNameAndSelector.split(' '),
				newEventName = view.eventTypes[arr[0]];

			if (newEventName) {
				return [newEventName, arr[1]].join(' ');
			}

			return eventNameAndSelector;

		},

	 	// still not implemented
		//initialize: function() {
		//	console.log('base initialize');
		//},

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
			listData.every(function(obj, i) {
				if (obj.key.toString() === currentKey) {
					followIndex = i + direction;
					return false;
				}
				return true;
			});

			// adjust follow index
			if (followIndex < 0) {
				followIndex = listLength - 1;
			}

			if (followIndex >= listLength) {
				followIndex = 0;
			}

			followData = listData[followIndex];

			$container.attr('data-key', followData.key);
			$container.attr('data-value', followData.value);
			$container.html(followData.value);

			$container.trigger('change');

		},

		destroyView: function () {

			var view = this;

			view.destroyAnimations();

			view.empty();

			// view.$el.removeData().unbind().remove().empty(); // use with jQuery
			view.$el.remove().empty();

			view.remove();
			view.unbind();

			return Backbone.View.prototype.remove.call(view);

		},

		hide: function () {

			log('base view hide');

			var view = this,
				$el = view.$el,
				animationEnd = info.get('animationEnd', true),
				isScreenAnimation = info.get('screenAnimation') === 'on',
				deferred = $.Deferred();

			view.destroyVerticalSwiper();

			view.set('isHidden', true);

			view.unsubscribe();
			mediator.uninstallFrom(view);

			view.undelegateEvents();

			if (view.unbindEventListeners) {
				view.unbindEventListeners();
			}

			if (isScreenAnimation && $el.hasClass('show-view-animation')) {
				$el.one(animationEnd, function() {
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

			var view = this;

			view.publish('hide-main-view');
			view.subscribe('hide-main-view', view.hide);

			view.bindLoadImages();

			view.$wrapper.append(view.$el);
			//view.util.setSizes();
			//view.util.toTop();
			return view.showAppearAnimation();

		},

		bindLoadImages: function () {

			var view = this,
				$images = view.$el.find('.js-load-image');

			$images.one('load', view.bindLoadImage);

		},

		bindLoadImage: function (e) {

			$(e.currentTarget)
				.addClass('loaded-image')
				.off();

		},

		showAppearAnimation: function () {

			var view = this,
				isScreenAnimation = info.get('screenAnimation') === 'on',
				$el = view.$el,
				deferred = $.Deferred(),
				animationEnd = info.get('animationEnd', true);

			if (isScreenAnimation) {
				$el.one(animationEnd, function() {
					deferred.resolve();
				});
				$el.addClass('show-view-animation');
			} else {
				$el.addClass('show-view-no-animation');
				deferred.resolve();
			}

			return deferred.promise();

		},

		routeTo: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				route = $this.attr('data-route');

			view.publish('navigate', route, true);

		},

		routeBack: function (e) {

			this.stopEvent(e);

			if (win.location.hash) {
				Backbone.history.history.back();
			}

		},

		//backTo: function (url, data) {
		backTo: function (url) {

			//data = data || {};

			var view = this;

			(function backTo() {
				win.setTimeout(function () {
					if (Backbone.history.fragment === url || !Backbone.history.fragment) { // needed url or ''
						//router.isForce = false;
						return;
					}
					view.routeBack();
					backTo();
				}, 10);
			}());

		},

		showPopup: function (data) {

			var view = this,
				deferred = $.Deferred(),
				popup = {};

			view.hidePopupByRouter();

			view.publish('show-popup', data, popup);

			popup.view.set('deferred', deferred);

			return deferred.promise();

		},

		hidePopupByRouter: function () {

			this.publish('router-hide-popup');

		},

		isPopupExist: function () {

			var view = this,
				url = win.location.href,
				popupPart = view.popupUrl;

			return url.indexOf(popupPart) !== -1;

		},

		stopEvent: function (e) {

			if (!e) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

		},

		preventDefaultEvent: function (e) {

			if (!e) {
				return;
			}

			e.preventDefault();

		},

		toExternalLink: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				needConfirm = $this.attr('data-need-confirm'),
				url = $this.attr('data-href');

			view.stopEvent(e);

			if (needConfirm === 'yes') {
				return view.needConfirmLinkPrompt({
					url: url
				});
			}

			win.open(url);

		},

		needConfirmLinkPrompt: function (data) {

			var view = this,
				getRandomBetween = util.getRandomBetween,
				a = getRandomBetween(5, 9),
				b = getRandomBetween(5, 9),
				answer = a + b,
				i, len,
				answers = [];

			if ( a < b ) {
				b = [a, a = b][0];
			}

			for (i = 0, len = 6; i < len; i += 1) {
				answers[i] = answer + i - 4;
			}

			return view.showPopup({
				name: 'need-confirm',
				//cssClass: 'popup-title',
				data: {
					a: a,
					b: b,
					answer: answer,
					answers: util.assortArray(answers),
					url: data.url
				}
			});

			/*
			 if ( result === null || result === '') {
			 return;
			 }

			 if (Number(result) === a + b) {
			 win.open(data.url);
			 } else {
			 view.needConfirmLinkPrompt(data);
			 }
			 */

		},

		checkConnection: function () {

			var deferred = $.Deferred(),
				src = 'https://www.google.com/favicon.ico?' + Date.now(),
				$img = $('<img alt=""/>');

			$img.on('load', function () {
				$(this).off().remove();
				deferred.resolve();
			});

			$img.on('error', function () {
				$(this).off().remove();
				deferred.reject();
			});

			$img.attr('src', src);

			return deferred.promise();

		},

		rateUsPopup: function () {

			var view = this,
				dateUsData = info.get('rate-us') || {},
				now = Date.now(),
				lastShow = dateUsData.lastShow,
			//lastRemindMeLater = dateUsData.lastRemindMeLater,
				lastNoThanks = dateUsData.lastNoThanks,
				lastRateNow = dateUsData.lastRateNow,
				showPeriod = 86400e3, // one day
				noThanksPeriod = showPeriod * 2; // try to show every two days

			// do not show if user use app less than a minute
			if ( now - info.get('installTime') < 60e3 ) {
				log('do not show if user use app less than a minute');
				return;
			}

			if (lastShow && (now - lastShow < showPeriod)) {
				log('do not show popup too often');
				// do not show popup too often
				//console.log('do not show popup too often');
				return;
			}

			if (lastRateNow) {
				log('rate by rate now');
				// rate by rate now
				//console.log('it had been rate by rate now');
				return;
			}

			if (lastNoThanks && ( now - lastShow < noThanksPeriod )) {
				//console.log('no thanks - 3 * showPeriod');
				return;
			}

			// do not show any popup if user is offline
			view.checkConnection().done(function () {

				if (win.location.hash.indexOf('show-popup=popup') !== -1) {
					log('popup is open');
					return;
				}

				// set last show time
				dateUsData.lastShow = now;

				// save date-us data
				info.set('rate-us', dateUsData);

				mediator.publish('show-popup', {
						name: 'rate-us',
						//cssClass: 'popup-title',
						extraEvents: [
							{
								selector: '.js-rate-us-rate-now',
								event: 'click',
								fn: function () {
									var dateUsData = info.get('rate-us') || {};
									dateUsData.lastRateNow = Date.now();
									info.set('rate-us', dateUsData);
								}
							},
							{
								selector: '.js-rate-us-no-thanks',
								event: 'click',
								fn: function () {
									var dateUsData = info.get('rate-us') || {};
									dateUsData.lastNoThanks = Date.now();
									info.set('rate-us', dateUsData);
								}
							}
						],
						data: {
							lang: lang,
							url: info.getLinkToStore()
						}
					}
				);

			});

		},

		loadUrl: function () {
			Backbone.history.loadUrl();
		},

		changeBy: function (key, delta) {
			return this.set(key, this.get(key) + delta);
		},

		set: function (keyOrObj, value) {

			var self = this,
				attr = self.attr;

			if (typeof keyOrObj === 'string') {
				attr[keyOrObj] = value;
				return self;
			}

			Object.keys(keyOrObj).forEach(function (key) {
				this[key] = keyOrObj[key];
			}, attr);

			return self;

		},
		get: function (key) {

			return this.attr[key];

		},

		empty: function () {

			var attr = this.attr,
				key;

			for (key in attr) {
				if (attr.hasOwnProperty(key)) {
					attr[key] = null;
				}
			}

			this.attr = {};

			return this;

		},

		extendFromObj: function (data) {
			_.extend(this.attr, data);
		},

		setVerticalSwiper: function () {

			var view = this,
				$el = view.$el,
				verticalSwiper;

			// need for swiper
			$el.find('.swiper-slide').css('height', 'auto');

			verticalSwiper = new Swiper($el.find(view.selectors.verticalSwiper), {
				scrollbar: '.swiper-scrollbar',
				direction: 'vertical',
				slidesPerView: 'auto',
				mousewheelControl: true,
				freeMode: true
			});

			view.set('vertical-swiper', verticalSwiper);

		},

		destroyVerticalSwiper: function () {

			var view = this,
				verticalSwiper = view.get('vertical-swiper');

			return verticalSwiper && verticalSwiper.destroy && verticalSwiper.destroy();

		},

		scrollToTop: function () {
			doc.body.scrollTop = 0
		},

		touchStartAutoScroll: function (e) {

			if (!info.get('isIOS', true)) { // do for IOS only
				return;
			}

			var wrapper = e.currentTarget,
				scrollArea = wrapper.querySelector(':scope > div'),
				scrollTop = wrapper.scrollTop,
				wrapperHeight,
				scrollAreaHeight,
				maxScrollTop;

			if (scrollTop <= 0) {
				wrapper.scrollTop = 1;
				return;
			}

			wrapperHeight = wrapper.clientHeight;
			scrollAreaHeight = scrollArea.clientHeight;
			maxScrollTop = scrollAreaHeight - wrapperHeight;

			if (scrollTop >= maxScrollTop) {
				wrapper.scrollTop = maxScrollTop - 1;
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

			sm.play({
				sound: sound,
				road: 3,
				isLoop: false
			});

		}

	});

export default BaseView;
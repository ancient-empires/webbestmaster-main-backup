(function (win, doc) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	var handlers = {
		devicemotion: function(){}
	};

	APP.BaseView = Backbone.View.extend({

		events: {
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink'
		},

		direction: {
			forward: 'forward',
			back: 'back',
			showPopup: 'showPopup',
			hidePopup: 'hidePopup'
		},

		popupUrl: 'popup=true',

		transition: {
			duration: 200
		},

		selectors: {
			wrapper: '.js-wrapper',
			title: '.js-title'
		},

		bg: {
			q: 1.1
		},

		baseConstructor: function() {

			var proto = APP.BaseView.prototype,
				events = $.extend( {}, proto.events, this.events );

			if (APP.info.isTouch) {
				$.each( events, function( key, value ) {

					var newKey = key.replace(/^click(?=\s+)/i, 'vclick');

					if (newKey !== key) {
						delete events[key];
						events[newKey] = value;
					}

				});

			}

			this.events = events;

			proto.constructor.apply(this, arguments);

		},

		initialize: function() {

			this.$el.addClass('js-page-wrapper page-wrapper');
			this.$el.attr('data-url', this.url);

			// workaround for io8 and swipe by finger
			this.$el.on('touchmove', function(e){
				var data = {
					x: e.originalEvent.touches[0].clientX,
					time: Date.now()
				};
				APP.info.set('lastTouchMoveX', data);
			});

			APP.$wrapper.append(this.$el);

			this.showDirectionAnimation();

		},

		isNeedAnimation: function() {

			var data = APP.info.get('lastTouchMoveX') || {},
				noAnimationField = 50,
				x = data.x || noAnimationField * 2,
				time = data.time || 0,
				now = Date.now(),
				screenWidth = APP.info.screen.width;

			return x > noAnimationField && x < (screenWidth - noAnimationField) && (now - time) > 1000;

		},

		showDirectionAnimation: function(data) {

			data = data || {};

			var direction = data.direction || this.detectDirection(),
				$wrappers = APP.$wrapper.find('.js-page-wrapper'),
				$prev = $wrappers.eq(0),
				$next = $wrappers.last(),
				fullClassList = 'left-position center-position right-position transition',
				transitionTime = this.transition.duration,
				smallStep = 10,
				count = $wrappers.length,
				needAnimation = this.isNeedAnimation(); // workaround for io8 and swipe by finger

			if (direction === this.direction.hidePopup) {
				setTimeout((function(){
					$(this.selectors.wrapper + ' .js-popup-wrapper').removeClass('show');
					setTimeout((function(){
						$(this.selectors.wrapper + ' .js-popup-wrapper').remove();
					}.bind(this)), transitionTime + smallStep);
				}.bind(this)), smallStep);
			}

			if (direction === this.direction.showPopup) {

				setTimeout((function(){
					this.$el.addClass('show');
				}.bind(this)), smallStep);

			}

			if (count === 1) {
				$wrappers.removeClass(fullClassList).addClass('static');
				return;
			}

			if (direction === this.direction.forward) {

				if ( needAnimation ) {
					$next.addClass('right-position');
					$wrappers.addClass('transition');

					setTimeout(function($prev, $next){
						$prev.remove();
						$next.removeClass(fullClassList).addClass('static');
						this.fixRoute($next.attr('data-url'));
					}.bind(this, $prev, $next), transitionTime + smallStep);

					setTimeout(function(){
						$next.removeClass('right-position').addClass('center-position');
						$prev.removeClass('center-position').addClass('left-position');
					}, smallStep);

				} else {
					$prev.remove();
					$next.removeClass(fullClassList).addClass('static');
					this.fixRoute($next.attr('data-url'));
				}

			}

			if (direction === this.direction.back) {

				if ( needAnimation ) {
					$next.addClass('left-position');
					$prev.removeClass('static');
					$wrappers.addClass('transition');

					setTimeout(function($prev, $next){
						$prev.remove();
						$next.removeClass(fullClassList).addClass('static');
						this.fixRoute($next.attr('data-url'));
					}.bind(this, $prev, $next), transitionTime + smallStep);

					setTimeout(function(){
						$next.removeClass('left-position').addClass('center-position');
						$prev.removeClass('center-position').addClass('right-position');
					}, smallStep);

				} else {
					$prev.remove();
					$next.removeClass(fullClassList).addClass('static');
					this.fixRoute($next.attr('data-url'));
				}

			}

			// workaround for io8 and swipe by finger
			APP.info.set('lastTouchMoveX', {});

		},

		fixRoute: function(neededUrl) {
			// this bug might appear if user user do click 'any route button' and 'hard back button' too fast
			if (neededUrl === Backbone.history.fragment) {
				return;
			}

			this.routeByUrl(neededUrl, false);

		},

		detectDirection: function() {

			var router = APP.router,
				prevUrl = router.prevUrl,
				curUrl = Backbone.history.fragment,
				direction;

			// detect new page
			direction = curUrl.indexOf(prevUrl) !== 0 ? this.direction.back : this.direction.forward;

			// detect popup
			if ( (prevUrl + curUrl).indexOf(this.popupUrl) !== -1 ) {
				direction = curUrl.indexOf(this.popupUrl) !== -1 ? this.direction.showPopup : this.direction.hidePopup;
			} else {
				// do not track popup urls
				router.prevUrl = curUrl;
			}

			return direction;

		},

		navigate: function() { //url, options
			APP.router.navigate.apply(APP.router, arguments);
		},

		routeByUrl: function(route, options) {
			this.navigate(route, options);
		},

		routeTo: function(e) {

			if ( !this.isAvailableState() ) {
				return;
			}

			var $this = $(e.currentTarget),
				route = $this.data('route');

			this.navigate(route, true);

		},

		routeBack: function(e) {

			this.stopEvent(e);

			if ( !this.isAvailableState() ) {
				return;
			}

			if (Backbone.history.fragment) {
				Backbone.history.history.back();
			}

		},

		isAvailableState: function() {

			return !APP.$wrapper.find('.transition').length;

		},

		showPopup: function(data) {

			APP.popUp = new APP.PopUpView(data);

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

		addBackgroundParallax: function() {

			var q = this.bg.q;

			this.setBackgroundSize(q);
			this.setBackgroundPosition({ x: 0, y: 0, z: 0, q: q });

			win.removeEventListener('devicemotion', handlers.devicemotion, false);

			handlers.devicemotion = this.onMotionChange.bind(this);

			win.addEventListener('devicemotion', handlers.devicemotion, false);

		},

		onMotionChange: function(e) {

			var evt = e.accelerationIncludingGravity;

			this.setBackgroundPosition({ x: evt.x, y: evt.y, z: evt.z, q: this.bg.q });

		},

		setBackgroundSize: function(q) {

			var info = APP.info,
				preCSS = info.preCSS,
				maxSize = info.screen.get('max'),
				bgSize = Math.round(maxSize * q),
				styles = {};

			styles[preCSS + 'background-size'] = bgSize + 'px';

			this.$el.css(styles);

		},

		setBackgroundPosition: function(data) {

			var top,
				topOffset,
				leftOffset,
				left,
				info = APP.info,
				maxSize = info.screen.get('max'),
				bgSize = Math.round(maxSize * data.q),
				screenHeight = info.screen.get('height'),
				screenWidth = info.screen.get('width');

			topOffset = (1 - data.y / 40) || 1;
			leftOffset = (1 - data.x / 40) || 1;

			top = -Math.round((bgSize - screenHeight) / 2 * topOffset);
			left = -Math.round((bgSize - screenWidth) / 2 * leftOffset);

			this.$el.css('background-position', left + 'px ' + top + 'px');

		}

	});

}(window, document));
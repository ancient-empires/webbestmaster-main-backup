(function (win) {

	"use strict";
	/*global window, location */
	/*global Backbone, $, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BaseView = Backbone.View.extend({

		events: {
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink'
		},

		popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper'
		},

		constructor: function() {

			this.events = $.extend( {}, proto.events, this.events );

			return Backbone.View.prototype.constructor.apply(this, arguments);
		},

		initialize: function() {

			//this.$el.addClass('js-page-wrapper page-wrapper');
			//this.$el.attr('data-url', this.url);

			// workaround for io8 and swipe by finger
			//this.$el.on('touchmove', function(e){
			//	var data = {
			//		x: e.originalEvent.touches[0].clientX,
			//		time: Date.now()
			//	};
			//	APP.info.set('lastTouchMoveX', data);
			//});

			//this.showDirectionAnimation();

			this.$wrapper = $(this.selectors.wrapper);




		},

		render: function () {

			this.$wrapper.empty().append(this.$el);

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

		routeBack: function(e) {

			this.stopEvent(e);

			if (location.hash) {
				Backbone.history.history.back();
			}

		},

		showPopup: function(data) {

			APP.bb.popUp = new APP.BB.PopUpView(data);

		},

		hidePopup: function () {
			console.log('HIDE POPUP');
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

		}

	});

	var proto = APP.BB.BaseView.prototype;
	proto.tmpl = win.APP.templateMaster.tmplFn;
	proto.proto = proto;

}(window));
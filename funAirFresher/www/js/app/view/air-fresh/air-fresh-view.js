(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	APP.AirFreshView = APP.BaseView.extend({

		events: {
			'click .js-refresh-view': 'refreshView'
		},

		url: 'air-fresh',

		proto: APP.BaseView.prototype,

		constructor: function() {
			this.baseConstructor.apply(this, arguments);
		},
		initialize: function() {
			this.proto.initialize.apply(this, arguments);

			this.setTimers();

			this.clearFullTime = APP.util.getRandom(1, 2) * 60 * 1000;

			this.firstStepTime = APP.util.getRandom(5, 15) * 1000;

			this.transitionTime = 1000;

			this.setTimeOuts();

		},

		setTimers: function() {
			var timers = {
					hideDataCollection: APP.util.getRandom(10, 20) * 1000,
					clearingLine: []
				},
				i,
				points = [1, 5, 10, 100],
				point;

			for (i = 0; i < 17; i += 1) {
				point = APP.util.getRandom(100);
				if (points.indexOf(point) === -1) {
					points.push(point);
				}
			}

			timers.clearingLine = points.sort(function(a, b){
				return a - b;
			});

			this.timers = timers;

		},

		setTimeOuts: function() {

			this.timeoutIds = {};

			this.timeoutIds.hideDataCollection = setTimeout(function() {
				APP.$wrapper.find('.js-getting-air-data').remove();
				APP.$wrapper.find('.js-clearing-line-wrapper').removeClass('hidden');
			}, this.timers.hideDataCollection);

			this.timers.clearingLine.forEach(function(value){
				this.timeoutIds[value] = setTimeout(function(width){
					this.$el.find('.js-clearing-line').html(width + '%').css('width', width + '%');
				}.bind(this, value), this.timers.hideDataCollection + value * this.clearFullTime / 100 + this.firstStepTime);

			}, this);

			this.timeoutIds.clearFullTime = setTimeout((function(){

				if (Backbone.history.fragment !== this.url) {
					return;
				}
				this.showPopup({text: APP.langMaster.airHasBeenClean});

				this.$el.find('.js-clearing-line-wrapper').addClass('hidden');
				this.$el.find('.js-refresh-wrapper').removeClass('hidden');

			}.bind(this)), this.timers.hideDataCollection + this.clearFullTime + this.firstStepTime + this.transitionTime); // see css - .clearing-line {

		},

		clearTimeOuts: function() {
			$.each(this.timeoutIds, function(key, value) {
				clearTimeout(value);
			});
		},

		refreshView: function() {
			APP.$wrapper.empty();
			APP.airFreshView = new APP.AirFreshView({el: $(APP.templateMaster.tmplFn['air-fresh']())});
		}

	});



}(window, document, document.documentElement));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TitleView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			this.$el = $(this.tmpl.title());

			this.proto.initialize.apply(this, arguments);

			this.render();

			this.showRateUs();

		},

		showRateUs: function () {

			this.util.runIfConnect(function () {
				setTimeout(function () {
					win.APP.bb.rate = new win.APP.BB.RateView();
					win.APP.bb.rate.show();
				}, 200);
			}, this);

		}

	});

}(window));
/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.AboutView = APP.BB.BaseView.extend({

		events: {
			'click .js-set-lang': 'setLang'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.title());

			view.proto.initialize.apply(view, arguments);

			view.render();

			view.showAppearAnimation();

			log('do not show showRateUs');
			//this.showRateUs();

		},

		setLang: function (e) {

			var view = this,
				info = view.info,
				$this = $(e.currentTarget),
				lang = $this.attr('data-lang');

			info.set('language', lang);

			view.loadUrl();

		},

		showRateUs: function () {

			this.util.runIfConnect(function () {
				setTimeout(function () {
					win.APP.bb.rate = new win.APP.BB.RateView();
					win.APP.bb.rate.show();
				}, 50);
			}, this);

		}

	});

}(window));
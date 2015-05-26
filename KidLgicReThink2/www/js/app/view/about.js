/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.AboutView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.about());

			view.proto.initialize.apply(view, arguments);

			view.render();

			view.showAppearAnimation();

			log('do not show showRateUs');
			//this.showRateUs();

		}

	});

}(window));
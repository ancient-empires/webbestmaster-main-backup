/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.HomeView = APP.BB.BaseView.extend({

		events: {
			'click div': 'test'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.home());

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		test: function (e) {

			console.log(e);



		}

	});

}(window));
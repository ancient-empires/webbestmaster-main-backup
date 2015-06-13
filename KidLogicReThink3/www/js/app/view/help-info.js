/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.HelpInfoView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl['help-info']());

			view.proto.initialize.apply(view, arguments);

			view.render();


		}

	});

}(window));
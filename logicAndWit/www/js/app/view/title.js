(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TitleView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			APP.BB.BaseView.prototype.initialize.apply(this, arguments);

			this.$el = $(this.tmpl.title({}));

			this.render();

		}


	});

}(window));
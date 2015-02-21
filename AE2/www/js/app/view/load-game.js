(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.LoadGameView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			this.$el = $(this.tmpl.loadGame());

			this.proto.initialize.apply(this, arguments);

			this.render();

		}

	});

}(window));

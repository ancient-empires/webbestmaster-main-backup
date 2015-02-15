(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SettingView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			this.proto.initialize.apply(this, arguments);

			this.render();

		}

	});

}(window));
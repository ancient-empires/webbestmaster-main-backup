(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.PopupView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function(data) {

			this.routeToPopup();

			this.$el = $(this.tmpl.popup(data));

			this.proto.initialize.apply(this, arguments);

		}

	});

}(window));
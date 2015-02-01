(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.PopUpView = APP.BB.BaseView.extend({

		events: {
			'click .js-popup-container': 'stopEvent'
		},

		initialize: function(data) {

			this.routeByUrl(Backbone.history.fragment + '?' + this.popupUrl);

			this.$el = $(this.tmpl.popup(data));

			this.proto.initialize.apply(this, arguments);

		}

	});

}(window));
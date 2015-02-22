(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSetupMapView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (jsMapKey) {

			this.$el = $(this.tmpl.skirmishSetupMap());

			this.proto.initialize.apply(this, arguments);

			this.render();

		}

	});

}(window));
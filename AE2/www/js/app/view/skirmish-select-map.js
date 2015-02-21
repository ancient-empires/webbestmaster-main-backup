(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSelectMapView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			this.$el = $(this.tmpl.skirmishSelectMap());

			this.proto.initialize.apply(this, arguments);

			this.render();

		}

	});

}(window));
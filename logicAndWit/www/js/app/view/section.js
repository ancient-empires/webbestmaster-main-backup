(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SectionView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (data) {

			APP.BB.BaseView.prototype.initialize.apply(this, arguments);

			this.$el = $(this.tmpl.section( win.sections[data.id] ));

			this.render();

		}

	});

}(window));
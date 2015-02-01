(function (win, doc) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TitleView = APP.BB.BaseView.extend({

		events: {
			'click div': 'alert',
			'click *': 'alert'
		},

		initialize: function () {

			this.$el = $(this.tmpl.title({}));

			APP.BB.BaseView.prototype.initialize.apply(this, arguments);


			this.render();

		},
		alert: function () {

			console.log('//');

			this.$wrapper.empty();
		}



	});

}(window, document));
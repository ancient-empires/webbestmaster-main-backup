(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TitleView = APP.BB.BaseView.extend({

		events: {
			'click .js-go-to-section': 'showSection'
		},

		initialize: function () {

			APP.BB.BaseView.prototype.initialize.apply(this, arguments);

			this.$el = $(this.tmpl.title({}));

			this.render();

		},
		showSection: function(e) {

			var sectionName = e.currentTarget.getAttribute('data-section-name');

			//APP.bb.router.trigger('route:section/' + sectionName);

			win.location.hash = 'section/' + sectionName;

			//Backbone.history.navigate('section/' + sectionName, true);


			//APP.bb.router.navigate('section/' + sectionName, {trigger: true});

		}

	});

}(window));
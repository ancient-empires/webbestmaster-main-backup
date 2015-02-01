(function (win) {

	"use strict";
	/*global window, document */
	/*global bingo, $, info, APP */

	win.APP = win.APP || {};

	win.APP.TitleView = win.APP.MainView.extend({
		templates: ['title'],
		events: {
			'click .js-go-to-section': 'showSection'
		},
		init: function() {

			this.$el = $('<div class="title js-title view-wrapper js-view-wrapper"/>').html(this.tmpl.title({}));
			this.baseShow();

			this.setTheme();

		},
		showSection: function(e) {

			var $node = $(e.currentTarget),
				sectionName = $node.data('section-name');

			APP.router.navigate('section/' + sectionName, {trigger: true});

		},

		setTheme: function() {
			var themeName = info.get('theme-name') || APP.defaultThemeTitle;
			return themeName &&	$(document.body).addClass(themeName);
		}




	});


}(window));
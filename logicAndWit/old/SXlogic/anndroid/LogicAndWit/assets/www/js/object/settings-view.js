(function (win) {

	"use strict";
	/*global window, document */
	/*global bingo, $, info, Backbone, APP, lang */

	win.APP = win.APP || {};

	APP.defaultThemeTitle = 'white';

	win.APP.SettingsView = win.APP.MainView.extend({
		templates: ['settings'],
		events: {
			'click .js-theme-item-wrapper': 'setTheme',
			'click .js-rate-us-button': 'showRateUsForm',
			'click .js-flag-block': 'setLang'
		},
		init: function() {

			this.$el = $('<div class="settings js-settings view-wrapper js-view-wrapper"/>').html(this.tmpl.settings(this.tmplData));
			this.baseShow();

			this.$body = $(document.body);
			this.selectActiveTheme();

		},

		setTheme: function(e) {

			this.removeAllThemes();

			var $this = $(e.currentTarget || e),
				themeName = $this.data('theme-name');

			$this.addClass('active');

			this.$body.addClass(themeName);

			info.set('theme-name', themeName, true);

		},

		removeAllThemes: function() {

			this.$wrapper.find('.js-theme-item-wrapper.active').removeClass('active');

			this.tmplData.themes.forEach(function(obj){
				this.$body.removeClass(obj.title);
			}, this);

		},

		selectActiveTheme: function() {
			var activeTheme = info.get('theme-name') || APP.defaultThemeTitle;
			this.setTheme(this.$el.find('[data-theme-name="' + activeTheme + '"]'));
		},

		showRateUsForm: function() {

			APP.rateUsView = new APP.RateUsView();

		},

		setLang: function(e) {
			var $flag = $(e.currentTarget),
				newLang = $flag.data('lang');

			info.set('lang', newLang, true);

			lang.push(newLang);

			APP.settingsView = new win.APP.SettingsView({forceDraw: true});

		},

		tmplData: {
			themes: [
				{
					title: 'standard',
					name: 'стандартная'
				},
				{
					title: 'white',
					name: 'всетлая'
				},
				{
					title: 'black',
					name: 'тёмная'
				}
			]
		}

	});


}(window));
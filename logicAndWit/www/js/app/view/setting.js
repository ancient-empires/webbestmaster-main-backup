(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SettingView = APP.BB.BaseView.extend({

		events: {
			'click .js-set-lang': 'setLang'
		},

		initialize: function () {

			this.$el = $(this.tmpl.setting({ themeList: this.util.themeList }));

			this.proto.initialize.apply(this, arguments);

			this.render();

		},

		setLang: function (e) {

			var $this = $(e.target),
				langName = $this.attr('data-lang');

			this.info.set('language', langName, true);
			win.APP.lang.set(langName);

			this.loadUrl();

		}




	});

}(window));
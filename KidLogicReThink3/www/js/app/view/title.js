/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TitleView = APP.BB.BaseView.extend({

		events: {
			//'click .js-set-lang': 'setLang'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.title());

			view.proto.initialize.apply(view, arguments);

			view.render();

		}
		//,
		//
		//setLang: function (e) {
		//
		//	var view = this,
		//		info = view.info,
		//		$this = $(e.currentTarget),
		//		lang = $this.attr('data-lang');
		//
		//	info.set('language', lang);
		//
		//	view.loadUrl();
		//
		//}

	});

}(window));
(function (win) {

	"use strict";
	/*global window */
	/*global templateMaster, lang, Backbone, APP, info */

	window.APP = window.APP || {};

	var Router;

	Router = Backbone.Router.extend({
		routes: {
			'': 'title',
			'section/:id': 'section',
			'question': 'question',
			'settings': 'settings'
		},
		title: function () {
			APP.titleView = new win.APP.TitleView();
		},
		section: function (id) {
			APP.sectionView = new win.APP.SectionView({id: id});
		},
		question: function () {
			APP.questionView = new win.APP.QuestionView();
		},
		settings: function () {
			APP.settingsView = new win.APP.SettingsView();
		}

	});

	APP.router = new Router();

	// start of app here
	function main() {

		lang.push(info.lang);

		templateMaster.init();
		Backbone.history.start();

		function back() {
			if (window.location.hash) {
				Backbone.history.history.back();
				win.setTimeout(back, 200);
			}
		}

		back();
	}

	function resize() {
		return APP.titleView && APP.titleView.setStyles();
	}

	win.addEventListener('load', main, false);
	win.addEventListener('resize', resize, false);

	// other data here

//	var showAds = function() {
//		Android.displayInterstitial();
//	};
//
//	setInterval(showAds, 1000);

}(window));
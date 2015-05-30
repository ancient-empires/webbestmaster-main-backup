(function (win, doc, docElem) {

	"use strict";
	/*global window, document, location */
	/*global templateMaster, Backbone, lang, APP, $ */

	lang.push('ru');

	window.APP = window.APP || {};

	var Router;

	Router = Backbone.Router.extend({
		routes: {
			'': 'title'
		},
		title: function() {
			APP.titleView = new win.APP.TitleView();
		}

	});

	APP.router = new Router();

	$(win).on('hashchange', function(){

		var $description = $('.js-description'),
			location = win.location.hash.replace('#', ''),
			util = $();

		// hide info
		if (location === 'info') {
			$description.show();
		} else {
			$description.hide();
		}

	});

	// start of app here
	var main = function () {
		templateMaster.init();
		Backbone.history.start();

		function back() {
			if (window.location.hash) {
				Backbone.history.history.back();
				win.setTimeout(back, 200);
			}
		}

		back();

	};

	var resize = function () {
		if (win.APP.bingoView) {
			win.APP.bingoView.setCellSize();
		}
	};

	win.addEventListener('load', main, false);

	win.addEventListener('resize', resize, false);



	// other data here

}(window, document, document.documentElement));
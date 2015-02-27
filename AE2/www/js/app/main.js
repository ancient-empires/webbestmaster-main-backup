(function (win) {

	"use strict";
	/*global window, document, setTimeout, history, location, Image*/
	/*global APP, Backbone, FastClick */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function initTiles() {

		_.each(win.APP.mapTiles, function (base64, key) {
			var img = new Image();
			img.src = base64;

			win.APP.mapTiles[key] = {
				base64: base64,
				img: img
			};

		});

	}

	function start() {

		APP.templateMaster.init();
		win.APP.util.setHTMLStyle();
		win.APP.BB.BaseView.prototype.initStatic();

		FastClick.attach(document.body);

		function back() {

			if ( location.hash ) {
				history.back();
				setTimeout(back, 200);
			} else {
				//win.APP.BB.BaseView.prototype.util.loadSavedTheme();
				win.APP.bb.router = new win.APP.BB.Router();
				Backbone.history.start();
				initTiles();
			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window));
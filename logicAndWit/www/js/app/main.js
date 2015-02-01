(function (win) {

	"use strict";
	/*global window, document, setTimeout, history, location*/
	/*global APP, Backbone, FastClick */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function start() {

		win.APP.util.setHTMLStyle();
		APP.templateMaster.init();

		FastClick.attach(document.body);

		function back() {

			if ( location.hash ) {
				history.back();
				setTimeout(back, 200);
			} else {
				win.APP.bb.router = new win.APP.BB.Router();
				Backbone.history.start();
			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window));
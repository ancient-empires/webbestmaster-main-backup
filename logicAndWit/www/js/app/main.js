/*jslint white: true, nomen: true */
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
				win.APP.BB.BaseView.prototype.util.loadSavedTheme();
				win.APP.bb.router = new win.APP.BB.Router();
				Backbone.history.start();
				if (win.APP.info.withAds) {
					setTimeout(win.APP.ad.showAd, 30e3);
				}
			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window));
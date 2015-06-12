/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document, setTimeout, history, location, Image*/
	/*global APP, Backbone, FastClick, _, $ */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function start() {

		APP.templateMaster.init();
		win.APP.util.setHTMLStyle();
		win.APP.BB.BaseView.prototype.initStatic();

		FastClick.attach(document.body);

		function back() {

			if ( location.hash ) {
				history.back();
				setTimeout(back, 50);
			} else {
				// prepare map
				//win.APP.map.db.init();
				//win.APP.BB.BaseView.prototype.util.loadSavedTheme();
				win.APP.bb.router = new win.APP.BB.Router();
				Backbone.history.start();
				win.APP.soundMaster.init();
				//win.APP.soundMaster.playBgSound();

			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window));
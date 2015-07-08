/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document, setTimeout */
	/*global APP, Backbone, FastClick */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function start() {

		win.APP.templateMaster.init();
		win.APP.BB.BaseView.prototype.initStatic();

		win.FastClick.attach(win.document.body);

		(function back() {

			if ( win.location.hash ) {
				win.history.back();
				return setTimeout(back, 50);
			}

			win.APP.bb.router = new win.APP.BB.Router();
			Backbone.history.start();
			win.APP.soundMaster.init();
			//win.APP.soundMaster.playBgSound();

		}());

	}

	win.addEventListener('load', start, false);

}(window));
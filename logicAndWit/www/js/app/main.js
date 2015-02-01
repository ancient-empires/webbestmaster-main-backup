(function (win) {

	"use strict";
	/*global window, setTimeout, history, location*/
	/*global APP, Backbone */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function start() {


		win.APP.util.setHTMLStyle();
		APP.templateMaster.init();



		function back() {

			if ( location.hash ) {
				history.back();
				setTimeout(back, 200);
			} else {
				win.APP.bb.router = new win.APP.BB.Router();
				//Backbone.history.start({pushState: false});
				Backbone.history.start();

				//$('.ui-loader-default').remove();

			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window));
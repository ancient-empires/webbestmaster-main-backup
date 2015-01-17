(function (win) {

	"use strict";
	/*global window */
	/*global templateMaster */

	win.APP = win.APP || {};

	// start of app here
	var main = function () {
		templateMaster.init();

		new APP.PlayerView();


	};

	win.addEventListener('load', main, false);

	// other data here

}(window));
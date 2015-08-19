/*jslint white: true, nomen: true */
require(['initCore', 'app/home/home-view', 'backbone', 'templateMaster', 'device', 'log'], function (initCore, view, bb, templateMaster) {

	'use strict';

	templateMaster.init();

	initCore();

	new view();

	(function back() {
		var win = window;
		if ( win.location.hash ) {
			win.history.back();
			return setTimeout(back, 50);
		}
		bb.history.start();
	}());

});
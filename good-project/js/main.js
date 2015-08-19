/*jslint white: true, nomen: true */
require(['initCore', 'backbone'], function (initCore, bb) {

	'use strict';

	(function back() {
		var win = window;
		if ( win.location.hash ) {
			win.history.back();
			return setTimeout(back, 50);
		}
		bb.history.start();
	}());

});
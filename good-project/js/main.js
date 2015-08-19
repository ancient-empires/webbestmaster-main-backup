/*jslint white: true, nomen: true */
require(['initCore', 'backbone', 'BaseView'], function (initCore, bb, BaseView) {

	'use strict';

	BaseView.prototype.initStatic();

	(function back() {
		var win = window;
		if ( win.location.hash ) {
			win.history.back();
			return setTimeout(back, 50);
		}
		bb.history.start();
	}());

});
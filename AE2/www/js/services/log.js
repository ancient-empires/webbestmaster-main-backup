(function (win) {

	"use strict";
	/*global window, document */
	/*global */

	var logger = {
		isEnable: true,
		log: function () {
			if ( !this.isEnable ) {
				return;
			}
			return console.log.apply(console, arguments);
		}
	};

	function log() {
		return logger.log.apply(logger, arguments);
	}

	win.log = log;

}(window));
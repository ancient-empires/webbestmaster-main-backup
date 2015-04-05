(function (win) {

	"use strict";
	/*global window, document */
	/*global */

	win.logger = {
		on: function () {
			this.isEnable = true;
		},
		off: function () {
			this.isEnable = false;
		},
		isEnable: true,
		log: function () {
			return this.isEnable && console.log.apply(console, arguments);
		}
	};

	function log() {
		return logger.log.apply(logger, arguments);
	}

	win.log = log;

}(window));
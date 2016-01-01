'use strict';
/*global console */

var gOldOnError,
	slice = Array.prototype.slice,
	logger = {
		isEnable: true,
		log: function () {

			if (!this.isEnable) {
				return;
			}

			console.log.apply(console, arguments);

		},
		sendToServer: function () {

			if (!this.isEnable) {
				return;
			}

			var args = slice.call(arguments).map(function (arg) {
					return (arg && typeof arg === 'object') ? JSON.stringify(arg) : String(arg);
				}).join(' '),
				xhr = new XMLHttpRequest();

			xhr.open('POST', '/log/', false);

			xhr.send(args);

		}
	};

function log() {
	logger.sendToServer.apply(logger, arguments);
	return logger.log.apply(logger, arguments);
}

gOldOnError = window.onerror;

window.onerror = function (errorMsg, url, lineNumber) {

	log.apply(null, arguments);

	if (gOldOnError) {
		return gOldOnError(errorMsg, url, lineNumber);
	}

	return false;

};

export default log;


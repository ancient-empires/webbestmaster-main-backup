'use strict';
/*global window, document, console */
/*global */

var logger = {
	isEnable: false,
	log: function () {
		return this.isEnable && console.log.apply(console, arguments);
	}
};

function log() {
	return logger.log.apply(logger, arguments);
}

export default log;


(function () {

	"use strict";
	/*global console, alert */

	var fs = require('fs');

	function getFileList() {
		return fs.readdirSync('./test');
	}

	exports.tests = getFileList();

}());
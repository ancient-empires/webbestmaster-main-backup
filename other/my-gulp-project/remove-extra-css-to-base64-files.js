/*jslint white: true, nomen: true */
(function () {

	"use strict";
	/*global window */
	/*global */

	var fs = require('fs'),
		css = fs.readFileSync('./www/css/main.css', 'utf-8'),
		fileList = fs.readdirSync('./www/i/');

	fileList.forEach(function (fileName) {

		if (css.indexOf('../i/' + fileName) !== -1) {
			return;
		}

		fs.unlinkSync('./www/i/' + fileName);

	});

}());
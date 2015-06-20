/*jslint white: true, nomen: true */
(function () {

	'use strict';
	/*global window */
	/*global */

	var recursive = require('recursive-readdir'),
		fs = require('fs');

	recursive('www/', function (err, files) {
		// Files is an array of filename

		// get files only from i and img

		files = files.filter(function (file) {
			return file.indexOf('www\\i') !== -1 || file.indexOf('www\\img') !== -1;
		}).map(function (file) {
			return '\'' + file.replace(/^www\\/, '').replace(/\\/g, '/') + '\'';
		});

		fs.writeFile("files.js", '[' + files.join(', ') + ']', function(err) {
			if(err) {
				return console.log(err);
			}

			console.log("The file was saved!");
		});

	});

}());
/*jslint white: true */
(function () {

	'use strict';

	var fs = require('fs'),

		file = fs.readFileSync('all.min.js', 'utf-8'),
		maps = file.match(/APP\.maps\.skirmish_001_[\s\S]+?\}\}/g);

	maps.forEach(function (map) {

		var jsMapKey = map.match(/skirmish_001_\d+/, '')[0].trim();

		map = map.replace('!0', 'true').replace(/APP\.maps\.skirmish_001_[\s\S]+?\=/g, '').replace(/(\"|\')?([\w\-]+?)(\"|\')?\:/gi, '"$2"\:').trim();

		map = JSON.parse(map);









	});

}());
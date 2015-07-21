/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.addMap = function (map) {

		var dbMaster = win.APP.map.db,
			jsMapKey = 'userMap_' + map.name;

		dbMaster.removeMap({
			jsMapKey: jsMapKey,
			type: map.type
		}).then(function () {
			return dbMaster.insertMap(map, jsMapKey);
		});

	}

}(window));
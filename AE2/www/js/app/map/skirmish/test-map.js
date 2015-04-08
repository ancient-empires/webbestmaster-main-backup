/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.testMap = {
		"type": "skirmish",
		"size": {"width": 5, "height": 5},
		"name": "test map",
		"maxPlayers": 2,
		"units": [
			{"x": 1, "y": 2, "type": "archer", "ownerId": 1},
			{"x": 0, "y": 2, "type": "galamar", "ownerId": 0},
			{"x": 4, "y": 0, "type": "valadorn", "ownerId": 1}
		],
		"buildings": [{"x": 0, "y": 2, "type": "farm", "state": "normal", "ownerId": 0}],
		"terrain": {
			"x0y0": "terra-1",
			"x0y1": "terra-1",
			"x0y2": "terra-1",
			"x0y3": "terra-1",
			"x0y4": "terra-1",
			"x1y0": "terra-1",
			"x1y1": "terra-1",
			"x1y2": "terra-1",
			"x1y3": "terra-1",
			"x1y4": "terra-1",
			"x2y0": "water-1",
			"x2y1": "terra-1",
			"x2y2": "terra-1",
			"x2y3": "terra-1",
			"x2y4": "terra-1",
			"x3y0": "water-1",
			"x3y1": "water-1",
			"x3y2": "water-1",
			"x3y3": "water-1",
			"x3y4": "terra-1",
			"x4y0": "water-1",
			"x4y1": "water-1",
			"x4y2": "water-1",
			"x4y3": "water-1",
			"x4y4": "terra-1"
		}
	};

}(window));
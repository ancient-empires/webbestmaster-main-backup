(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.map = {
		playerColors: ['blue', 'red', 'green', 'black'],
		playerTypes: ['player', 'cpu', 'none'],
		money: [500, 1000, 2000, 5000, 10000, 25000, 50000, 75000, 100000, 150000, 200000],
		unitsLimits: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
		getTypeByTileName: function (tileName) {
			return tileName.replace(/\-\d+$/,'');
		},

		terra: {
			pathResistance: 1,
			defence: 5
		},
		road: {
			pathResistance: 1,
			defence: 0
		},
		bridge: {
			pathResistance: 1,
			defence: 0
		},
		hill: {
			pathResistance: 2,
			defence: 10
		},
		forest: {
			pathResistance: 2,
			defence: 10
		},
		stone: {
			pathResistance: 3,
			defence: 15
		},
		water: {
			pathResistance: 3,
			defence: 0
		}

	};

}(window));
(function () {

	"use strict";
	/*global window, document */
	/*global APP, util */

	APP.maps = APP.maps || {};

	var acrossBridge = {

		isDone: false,
		check: function (controller) {



		},
		run: function (controller) {

			if (this.isDone) {
				return;
			}

			this.isDone = true;

		}

	};


	APP.maps.c01_regroup = {
		"missionNumber": 1,
		"type": "mission",
		"size": {
			"width": 10,
			"height": 10
		},
		"name": "Regroup",
		"jsName": "c01_regroup",
		"units": [
			{"type": "Soldier", "x": 1, "y": 0, playerId: 0},
			{"type": "Knight", "x": 0, "y": 1, playerId: 0},
			{"type": "Archer", "x": 2, "y": 1, playerId: 0}
		],
		"buildings": [
			{"type": "farm", "x": 0, "y": 2, playerId: 0},
			{"type": "castle", "x": 8, "y": 9}
		],
		"terrain": {
			"x0y0": "green", "x1y0": "green", "x2y0": "green", "x3y0": "green", "x4y0": "green", "x5y0": "forest", "x6y0": "hill", "x7y0": "hill", "x8y0": "stone", "x9y0": "stone", "x0y1": "road", "x1y1": "road", "x2y1": "road", "x3y1": "road", "x4y1": "road", "x5y1": "green", "x6y1": "forest", "x7y1": "stone", "x8y1": "stone", "x9y1": "stone", "x0y2": "green", "x1y2": "green", "x2y2": "green", "x3y2": "green", "x4y2": "road", "x5y2": "green", "x6y2": "forest", "x7y2": "hill", "x8y2": "hill", "x9y2": "stone", "x0y3": "forest", "x1y3": "green", "x2y3": "forest", "x3y3": "green", "x4y3": "road", "x5y3": "green", "x6y3": "forest", "x7y3": "forest", "x8y3": "forest", "x9y3": "green", "x0y4": "green", "x1y4": "forest", "x2y4": "forest", "x3y4": "green", "x4y4": "road", "x5y4": "green", "x6y4": "green", "x7y4": "forest", "x8y4": "green", "x9y4": "water", "x0y5": "green", "x1y5": "stone", "x2y5": "forest", "x3y5": "green", "x4y5": "road", "x5y5": "green", "x6y5": "green", "x7y5": "green", "x8y5": "green", "x9y5": "water", "x0y6": "green", "x1y6": "green", "x2y6": "green", "x3y6": "green", "x4y6": "road", "x5y6": "green", "x6y6": "water", "x7y6": "water", "x8y6": "water", "x9y6": "water", "x0y7": "water", "x1y7": "water", "x2y7": "water", "x3y7": "water", "x4y7": "bridge-vertical", "x5y7": "water", "x6y7": "water", "x7y7": "green", "x8y7": "green", "x9y7": "green", "x0y8": "green", "x1y8": "green", "x2y8": "green", "x3y8": "green", "x4y8": "road", "x5y8": "forest", "x6y8": "forest", "x7y8": "forest", "x8y8": "forest", "x9y8": "forest", "x0y9": "stone", "x1y9": "hill", "x2y9": "hill", "x3y9": "green", "x4y9": "road", "x5y9": "road", "x6y9": "road", "x7y9": "road", "x8y9": "green", "x9y9": "forest"
		},
		steps: [acrossBridge],
		gameOverDetect: function (controller) {

			var result = controller.isGameOver();

			if (result.isEnd) {
				util.clearTimeouts();

				// get winner player
				result.winner = util.findBy(this.players, 'id', util.objToArray(controller.buildings)[0].value.playerId).item;

				result.nextMissionNumber = controller.map.missionNumber + 1;

				this.showEndGame(result);

			}

			return result.isEnd;

		}
	};

}());
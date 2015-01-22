(function () {

	"use strict";
	/*global window, document */
	/*global APP */

	APP.maps = APP.maps || {};

	APP.maps.c02_friendsAndEnemies = {
		"missionNumber": 2,
		"type": "mission",
		"size": {"width": 13, "height": 15},
		"name": "Friends and Enemies",
		"jsName": "c02_friendsAndEnemies",
		"units": [
			{"type": "Soldier", "x": 9, "y": 13, playerId: 0},
			{"type": "Archer", "x": 8, "y": 14, playerId: 0},
			{"type": "Knight", "x": 9, "y": 14, playerId: 0},
			{"type": "Soldier", "x": 10, "y": 14, playerId: 0}
		],
		"buildings": [{"type": "farm", "x": 11, "y": 0}, {"type": "castle", "x": 12, "y": 1}, {"type": "farm", "x": 10, "y": 2}, {"type": "farm", "x": 6, "y": 7}, {"type": "farm", "x": 9, "y": 12}, {"type": "farm", "x": 11, "y": 13}],
		"terrain": {
			"x0y0": "stone",
			"x1y0": "stone",
			"x2y0": "hill",
			"x3y0": "hill",
			"x4y0": "forest",
			"x5y0": "forest",
			"x6y0": "forest",
			"x7y0": "forest",
			"x8y0": "forest",
			"x9y0": "green",
			"x10y0": "bridge-horizontal",
			"x11y0": "green",
			"x12y0": "forest",
			"x0y1": "hill",
			"x1y1": "forest",
			"x2y1": "forest",
			"x3y1": "forest",
			"x4y1": "forest",
			"x5y1": "forest",
			"x6y1": "green",
			"x7y1": "forest",
			"x8y1": "green",
			"x9y1": "water",
			"x10y1": "water",
			"x11y1": "green",
			"x12y1": "green",
			"x0y2": "forest",
			"x1y2": "forest",
			"x2y2": "forest",
			"x3y2": "green",
			"x4y2": "forest",
			"x5y2": "green",
			"x6y2": "green",
			"x7y2": "green",
			"x8y2": "water",
			"x9y2": "water",
			"x10y2": "green",
			"x11y2": "green",
			"x12y2": "road",
			"x0y3": "forest",
			"x1y3": "forest",
			"x2y3": "forest",
			"x3y3": "green",
			"x4y3": "green",
			"x5y3": "water",
			"x6y3": "water",
			"x7y3": "water",
			"x8y3": "water",
			"x9y3": "green",
			"x10y3": "green",
			"x11y3": "green",
			"x12y3": "road",
			"x0y4": "forest",
			"x1y4": "forest",
			"x2y4": "forest",
			"x3y4": "forest",
			"x4y4": "green",
			"x5y4": "bridge-horizontal",
			"x6y4": "green",
			"x7y4": "green",
			"x8y4": "green",
			"x9y4": "forest",
			"x10y4": "forest",
			"x11y4": "green",
			"x12y4": "road",
			"x0y5": "hill",
			"x1y5": "forest",
			"x2y5": "green",
			"x3y5": "green",
			"x4y5": "water",
			"x5y5": "water",
			"x6y5": "green",
			"x7y5": "forest",
			"x8y5": "forest",
			"x9y5": "forest",
			"x10y5": "green",
			"x11y5": "green",
			"x12y5": "road",
			"x0y6": "green",
			"x1y6": "green",
			"x2y6": "green",
			"x3y6": "green",
			"x4y6": "water",
			"x5y6": "green",
			"x6y6": "green",
			"x7y6": "forest",
			"x8y6": "forest",
			"x9y6": "forest",
			"x10y6": "green",
			"x11y6": "green",
			"x12y6": "road",
			"x0y7": "water",
			"x1y7": "water",
			"x2y7": "green",
			"x3y7": "green",
			"x4y7": "water",
			"x5y7": "green",
			"x6y7": "green",
			"x7y7": "green",
			"x8y7": "green",
			"x9y7": "green",
			"x10y7": "green",
			"x11y7": "road",
			"x12y7": "road",
			"x0y8": "water",
			"x1y8": "water",
			"x2y8": "water",
			"x3y8": "water",
			"x4y8": "water",
			"x5y8": "green",
			"x6y8": "green",
			"x7y8": "water",
			"x8y8": "water",
			"x9y8": "water",
			"x10y8": "green",
			"x11y8": "road",
			"x12y8": "green",
			"x0y9": "water",
			"x1y9": "water",
			"x2y9": "water",
			"x3y9": "water",
			"x4y9": "water",
			"x5y9": "water",
			"x6y9": "water",
			"x7y9": "water",
			"x8y9": "water",
			"x9y9": "water",
			"x10y9": "water",
			"x11y9": "bridge-vertical",
			"x12y9": "water",
			"x0y10": "water",
			"x1y10": "water",
			"x2y10": "water",
			"x3y10": "water",
			"x4y10": "water",
			"x5y10": "water",
			"x6y10": "water",
			"x7y10": "water",
			"x8y10": "water",
			"x9y10": "green",
			"x10y10": "green",
			"x11y10": "road",
			"x12y10": "green",
			"x0y11": "water",
			"x1y11": "water",
			"x2y11": "water",
			"x3y11": "water",
			"x4y11": "water",
			"x5y11": "water",
			"x6y11": "water",
			"x7y11": "water",
			"x8y11": "green",
			"x9y11": "green",
			"x10y11": "green",
			"x11y11": "road",
			"x12y11": "green",
			"x0y12": "green",
			"x1y12": "water",
			"x2y12": "water",
			"x3y12": "water",
			"x4y12": "water",
			"x5y12": "water",
			"x6y12": "water",
			"x7y12": "green",
			"x8y12": "green",
			"x9y12": "green",
			"x10y12": "road",
			"x11y12": "road",
			"x12y12": "green",
			"x0y13": "forest",
			"x1y13": "green",
			"x2y13": "water",
			"x3y13": "water",
			"x4y13": "water",
			"x5y13": "water",
			"x6y13": "water",
			"x7y13": "green",
			"x8y13": "green",
			"x9y13": "road",
			"x10y13": "road",
			"x11y13": "green",
			"x12y13": "forest",
			"x0y14": "forest",
			"x1y14": "forest",
			"x2y14": "green",
			"x3y14": "water",
			"x4y14": "water",
			"x5y14": "water",
			"x6y14": "water",
			"x7y14": "green",
			"x8y14": "green",
			"x9y14": "road",
			"x10y14": "green",
			"x11y14": "forest",
			"x12y14": "forest"
		},
		steps: [],
		availableUnits: ['soldier', 'archer', 'lizard'],
		gameOverDetect: function (controller) {

			//var result = controller.isGameOver();

			// check castle
			// get castle
			// get castle playerId
			// if castle playerId === 0

			//return false

			// if knight is dead - defeat

			// if farms is >= 2 &&
			// if enemy troops is 0 &&
			// if bought units is ['soldier', 'archer', 'lizard']
			// player.boughtList
			return false;

			var castle = controller.buildings['x8y9'],
				human = controller.players[0],
				result = {};

			if ( castle.playerId === human.id ) {

				result.message = 'you win';

				util.clearTimeouts();

				// get winner player
				result.winner = util.findBy(this.players, 'id', util.objToArray(controller.buildings)[0].value.playerId).item;

				result.nextMissionNumber = controller.map.missionNumber + 1;

				this.showEndGame(result);

				return true;

			}

			// check human's warriors
			// get human's warriors
			// check count of warriors
			if ( controller.getUnitByPlayer(human).length < 1 ) {

				util.clearTimeouts();
				result.winner = controller.players[1];
				result.message = '<span class="color-red">X ' + window.langs[window.info.lang].missions.c01_regroup['Keep all troops alive'] + '</span>';
				this.showEndGame(result);

				return true;
			}

			return false;

		},
		notification: function () {

			if (APP.maps.c01_regroup.wasNotification) {
				return;
			}

			APP.maps.c01_regroup.wasNotification = true;

			var words = window.langs[window.info.lang].missions.c02_friendsAndEnemies;

			APP.notificationView.show({
				type: 'alert', text: words.A1, tmpl: 'n-banner', header: words.A1Header,
				onHide: function () {

					APP.notificationView.show({
						text: words.G1, tmpl: 'n-banner', image: { url: 'img/face/galamar-1.png' },
						onHide: function () {

							APP.notificationView.show({
								type: 'alert',
								text: words.T1,
								textCssClass: 'text-indent-with-margin-3',
								header: window.langs[window.info.lang].objective,
								headerCssClass: 'text-align-left',
								tmpl: 'n-banner',
								bannerCssClass: 'target-alert'
							});

						}

					});

				}
			});

		}

	};


}());
(function () {

	"use strict";
	/*global window, document */
	/*global APP */

	APP.maps = APP.maps || {};

	APP.maps.islandCross = {
		"type": "skirmish",
		"size": {
			"width": 15,
			"height": 15
		},
		"name": "Island Cross",
		"name-ru": "Остров Крест",
		"maxPlayers": 2,

		"units": [
			{"type": "soldier", "x": 1, "y": 13, ownerId: 0},
			{"type": "archer", "x": 2, "y": 13, ownerId: 1},
			{"type": "elemental", "x": 3, "y": 13, ownerId: 0},
			{"type": "sorceress", "x": 4, "y": 13, ownerId: 0},
			{"type": "wisp", "x": 5, "y": 13, ownerId: 1},
			{"type": "dire-wolf", "x": 6, "y": 13, ownerId: 0},
			{"type": "golem", "x": 7, "y": 13, ownerId: 0},
			{"type": "catapult", "x": 8, "y": 13, ownerId: 1},
			{"type": "wisp", "x": 9, "y": 13, ownerId: 0},
			{"type": "skeleton", "x": 10, "y": 13, ownerId: 0},
			{"type": "galamar", "x": 1, "y": 12, ownerId: 0},
			{"type": "valadorn", "x": 2, "y": 12, ownerId: 0},
			{"type": "demon-lord", "x": 3, "y": 12, ownerId: 0},
			{"type": "saeth", "x": 4, "y": 12, ownerId: 0},
			{"type": "soldier", "x": 13, "y": 1, ownerId: 1}
		],
		"buildings": [
			{"type": "farm", "x": 8, "y": 0, state: 'destroyed'},
			{"type": "farm", "x": 0, "y": 1, state: 'destroyed'},
			{"type": "farm", "x": 11, "y": 1, state: 'normal'},
			{"type": "castle", "x": 13, "y": 1, state: 'normal', ownerId: 0},
			{"type": "farm", "x": 0, "y": 4, state: 'normal', ownerId: 0},
			{"type": "farm", "x": 9, "y": 12, state: 'normal'},
			{"type": "farm", "x": 7, "y": 6, state: 'destroyed'},
			{"type": "castle", "x": 11, "y": 6, state: 'normal'},
			{"type": "castle", "x": 3, "y": 8, state: 'normal', ownerId: 1},
			{"type": "farm", "x": 7, "y": 8, state: 'normal', ownerId: 1},
			{"type": "farm", "x": 14, "y": 10, state: 'normal'},
			{"type": "castle", "x": 1, "y": 13, state: 'normal', ownerId: 0},
			{"type": "farm", "x": 3, "y": 13, state: 'destroyed'},
			{"type": "well", "x": 14, "y": 13, state: 'normal'},
			{"type": "temple", "x": 6, "y": 12, state: 'normal'}
		],
		"terrain": {
			"x0y0": "stone-1",
			"x1y0": "terra-1",
			"x2y0": "forest-1",
			"x3y0": "terra-1",
			"x4y0": "water-1",
			"x5y0": "terra-1",
			"x6y0": "forest-1",
			"x7y0": "hill-1",
			"x8y0": "terra-1",
			"x9y0": "forest-1",
			"x10y0": "road-1",
			"x11y0": "road-1",
			"x12y0": "road-1",
			"x13y0": "road-1",
			"x14y0": "hill-1",
			"x0y1": "terra-1",
			"x1y1": "forest-1",
			"x2y1": "road-1",
			"x3y1": "road-1",
			"x4y1": "bridge-1",
			"x5y1": "road-1",
			"x6y1": "road-1",
			"x7y1": "road-1",
			"x8y1": "road-1",
			"x9y1": "road-1",
			"x10y1": "road-1",
			"x11y1": "terra-1",
			"x12y1": "forest-1",
			"x13y1": "terra-1",
			"x14y1": "forest-1",
			"x0y2": "terra-1",
			"x1y2": "terra-1",
			"x2y2": "road-1",
			"x3y2": "terra-1",
			"x4y2": "water-1",
			"x5y2": "terra-1",
			"x6y2": "terra-1",
			"x7y2": "terra-1",
			"x8y2": "terra-1",
			"x9y2": "terra-1",
			"x10y2": "terra-1",
			"x11y2": "terra-1",
			"x12y2": "terra-1",
			"x13y2": "terra-1",
			"x14y2": "terra-1",
			"x0y3": "terra-1",
			"x1y3": "terra-1",
			"x2y3": "road-1",
			"x3y3": "terra-1",
			"x4y3": "water-1",
			"x5y3": "water-1",
			"x6y3": "water-1",
			"x7y3": "water-1",
			"x8y3": "water-1",
			"x9y3": "water-1",
			"x10y3": "water-1",
			"x11y3": "water-1",
			"x12y3": "water-1",
			"x13y3": "water-1",
			"x14y3": "water-1",
			"x0y4": "terra-1",
			"x1y4": "forest-1",
			"x2y4": "road-1",
			"x3y4": "terra-1",
			"x4y4": "water-1",
			"x5y4": "water-1",
			"x6y4": "water-1",
			"x7y4": "water-1",
			"x8y4": "water-1",
			"x9y4": "water-1",
			"x10y4": "water-1",
			"x11y4": "water-1",
			"x12y4": "water-1",
			"x13y4": "water-1",
			"x14y4": "water-1",
			"x0y5": "terra-1",
			"x1y5": "terra-1",
			"x2y5": "road-1",
			"x3y5": "road-1",
			"x4y5": "terra-1",
			"x5y5": "water-1",
			"x6y5": "water-1",
			"x7y5": "terra-1",
			"x8y5": "terra-1",
			"x9y5": "water-1",
			"x10y5": "terra-1",
			"x11y5": "terra-1",
			"x12y5": "terra-1",
			"x13y5": "terra-1",
			"x14y5": "terra-1",
			"x0y6": "forest-1",
			"x1y6": "terra-1",
			"x2y6": "stone-1",
			"x3y6": "road-1",
			"x4y6": "terra-1",
			"x5y6": "water-1",
			"x6y6": "terra-1",
			"x7y6": "terra-1",
			"x8y6": "terra-1",
			"x9y6": "water-1",
			"x10y6": "terra-1",
			"x11y6": "terra-1",
			"x12y6": "stone-1",
			"x13y6": "stone-1",
			"x14y6": "stone-1",
			"x0y7": "forest-1",
			"x1y7": "forest-1",
			"x2y7": "terra-1",
			"x3y7": "road-1",
			"x4y7": "road-1",
			"x5y7": "bridge-1",
			"x6y7": "forest-1",
			"x7y7": "forest-1",
			"x8y7": "forest-1",
			"x9y7": "bridge-1",
			"x10y7": "road-1",
			"x11y7": "road-1",
			"x12y7": "terra-1",
			"x13y7": "forest-1",
			"x14y7": "forest-1",
			"x0y8": "stone-1",
			"x1y8": "stone-1",
			"x2y8": "stone-1",
			"x3y8": "terra-1",
			"x4y8": "terra-1",
			"x5y8": "water-1",
			"x6y8": "terra-1",
			"x7y8": "terra-1",
			"x8y8": "terra-1",
			"x9y8": "water-1",
			"x10y8": "terra-1",
			"x11y8": "road-1",
			"x12y8": "stone-1",
			"x13y8": "terra-1",
			"x14y8": "forest-1",
			"x0y9": "terra-1",
			"x1y9": "terra-1",
			"x2y9": "terra-1",
			"x3y9": "terra-1",
			"x4y9": "terra-1",
			"x5y9": "water-1",
			"x6y9": "terra-1",
			"x7y9": "terra-1",
			"x8y9": "water-1",
			"x9y9": "water-1",
			"x10y9": "terra-1",
			"x11y9": "road-1",
			"x12y9": "road-1",
			"x13y9": "terra-1",
			"x14y9": "terra-1",
			"x0y10": "water-1",
			"x1y10": "water-1",
			"x2y10": "water-1",
			"x3y10": "water-1",
			"x4y10": "water-1",
			"x5y10": "water-1",
			"x6y10": "water-1",
			"x7y10": "water-1",
			"x8y10": "water-1",
			"x9y10": "water-1",
			"x10y10": "water-1",
			"x11y10": "terra-1",
			"x12y10": "road-1",
			"x13y10": "forest-1",
			"x14y10": "terra-1",
			"x0y11": "water-1",
			"x1y11": "water-1",
			"x2y11": "water-1",
			"x3y11": "water-1",
			"x4y11": "water-1",
			"x5y11": "water-1",
			"x6y11": "water-1",
			"x7y11": "water-1",
			"x8y11": "water-1",
			"x9y11": "water-1",
			"x10y11": "water-1",
			"x11y11": "terra-1",
			"x12y11": "road-1",
			"x13y11": "terra-1",
			"x14y11": "terra-1",
			"x0y12": "terra-1",
			"x1y12": "terra-1",
			"x2y12": "terra-1",
			"x3y12": "terra-1",
			"x4y12": "terra-1",
			"x5y12": "terra-1",
			"x6y12": "terra-1",
			"x7y12": "terra-1",
			"x8y12": "terra-1",
			"x9y12": "terra-1",
			"x10y12": "water-1",
			"x11y12": "terra-1",
			"x12y12": "road-1",
			"x13y12": "terra-1",
			"x14y12": "terra-1",
			"x0y13": "forest-1",
			"x1y13": "terra-1",
			"x2y13": "forest-1",
			"x3y13": "terra-1",
			"x4y13": "road-1",
			"x5y13": "road-1",
			"x6y13": "road-1",
			"x7y13": "road-1",
			"x8y13": "road-1",
			"x9y13": "road-1",
			"x10y13": "bridge-1",
			"x11y13": "road-1",
			"x12y13": "road-1",
			"x13y13": "forest-1",
			"x14y13": "terra-1",
			"x0y14": "hill-1",
			"x1y14": "road-1",
			"x2y14": "road-1",
			"x3y14": "road-1",
			"x4y14": "road-1",
			"x5y14": "forest-1",
			"x6y14": "terra-1",
			"x7y14": "hill-1",
			"x8y14": "forest-1",
			"x9y14": "terra-1",
			"x10y14": "water-1",
			"x11y14": "terra-1",
			"x12y14": "forest-1",
			"x13y14": "terra-1",
			"x14y14": "stone-1"
		}
	};

}());
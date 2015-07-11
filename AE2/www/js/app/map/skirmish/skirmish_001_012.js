/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_012 = {
		version: 6,
		type: 'skirmish',
		size: {width: 13, height: 13},
		maxPlayers: 4,
		name: 'Winter storm',
		'name-es': 'Tormenta de invierno',
		'name-ru': 'Зимний шторм',
		units: [
			{x: 6, y: 1, type: 'commander', ownerId: 0},
			{x: 1, y: 6, type: 'commander', ownerId: 1},
			{x: 11, y: 6, type: 'commander', ownerId: 2},
			{x: 6, y: 11, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 0, y: 4, type: 'farm', state: 'destroyed'},
			{x: 0, y: 8, type: 'farm', state: 'destroyed'},
			{x: 4, y: 0, type: 'farm', state: 'destroyed'},
			{x: 8, y: 0, type: 'farm', state: 'destroyed'},
			{x: 12, y: 4, type: 'farm', state: 'destroyed'},
			{x: 12, y: 8, type: 'farm', state: 'destroyed'},
			{x: 8, y: 12, type: 'farm', state: 'destroyed'},
			{x: 4, y: 12, type: 'farm', state: 'destroyed'},
			{x: 5, y: 5, type: 'farm', state: 'normal'},
			{x: 5, y: 7, type: 'farm', state: 'normal'},
			{x: 7, y: 7, type: 'farm', state: 'normal'},
			{x: 7, y: 5, type: 'farm', state: 'normal'},
			{x: 6, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 1, y: 6, type: 'castle', state: 'normal', ownerId: 1},
			{x: 11, y: 6, type: 'castle', state: 'normal', ownerId: 2},
			{x: 6, y: 11, type: 'castle', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'stone-1',
			x0y2: 'stone-1',
			x0y3: 'hill-1',
			x0y4: 'terra-1',
			x0y5: 'forest-2',
			x1y0: 'stone-1',
			x1y1: 'hill-1',
			x1y2: 'forest-2',
			x1y3: 'forest-2',
			x1y4: 'hill-1',
			x1y5: 'terra-1',
			x2y0: 'stone-1',
			x2y1: 'forest-1',
			x2y2: 'water-1',
			x2y3: 'water-1',
			x2y4: 'water-1',
			x2y5: 'terra-1',
			x3y0: 'hill-1',
			x3y1: 'forest-2',
			x3y2: 'water-1',
			x3y3: 'water-2',
			x3y4: 'water-1',
			x3y5: 'forest-2',
			x4y0: 'terra-1',
			x4y1: 'hill-1',
			x4y2: 'water-1',
			x4y3: 'water-1',
			x4y4: 'water-1',
			x4y5: 'stone-1',
			x5y0: 'forest-2',
			x5y1: 'terra-1',
			x5y2: 'stone-1',
			x5y3: 'forest-2',
			x5y4: 'hill-1',
			x5y5: 'terra-1',
			x6y0: 'terra-1',
			x6y1: 'terra-1',
			x6y2: 'road-1',
			x6y3: 'road-1',
			x6y4: 'road-1',
			x6y5: 'road-1',
			x7y0: 'forest-1',
			x7y1: 'terra-1',
			x7y2: 'terra-1',
			x7y3: 'forest-1',
			x7y4: 'stone-1',
			x7y5: 'terra-1',
			x8y0: 'terra-1',
			x8y1: 'hill-1',
			x8y2: 'water-1',
			x8y3: 'water-1',
			x8y4: 'water-1',
			x8y5: 'hill-1',
			x9y0: 'hill-1',
			x9y1: 'forest-1',
			x9y2: 'water-1',
			x9y3: 'water-1',
			x9y4: 'water-1',
			x9y5: 'forest-1',
			x10y0: 'stone-1',
			x10y1: 'forest-2',
			x10y2: 'water-1',
			x10y3: 'water-1',
			x10y4: 'water-1',
			x10y5: 'stone-1',
			x11y0: 'stone-1',
			x11y1: 'hill-1',
			x11y2: 'forest-2',
			x11y3: 'forest-1',
			x11y4: 'hill-1',
			x11y5: 'terra-1',
			x12y0: 'stone-1',
			x12y1: 'stone-1',
			x12y2: 'stone-1',
			x12y3: 'hill-1',
			x12y4: 'terra-1',
			x12y5: 'forest-2',
			x0y6: 'hill-1',
			x1y6: 'terra-1',
			x2y6: 'road-1',
			x3y6: 'road-1',
			x4y6: 'road-1',
			x5y6: 'road-1',
			x6y6: 'road-1',
			x7y6: 'road-1',
			x8y6: 'road-1',
			x9y6: 'road-1',
			x10y6: 'road-1',
			x11y6: 'terra-1',
			x12y6: 'hill-1',
			x0y7: 'forest-1',
			x1y7: 'terra-1',
			x2y7: 'stone-1',
			x3y7: 'forest-1',
			x4y7: 'hill-1',
			x5y7: 'terra-1',
			x6y7: 'road-1',
			x7y7: 'terra-1',
			x8y7: 'stone-1',
			x9y7: 'forest-1',
			x10y7: 'terra-1',
			x11y7: 'terra-1',
			x12y7: 'forest-1',
			x0y8: 'terra-1',
			x1y8: 'hill-1',
			x2y8: 'water-1',
			x3y8: 'water-1',
			x4y8: 'water-1',
			x5y8: 'stone-1',
			x6y8: 'road-1',
			x7y8: 'hill-1',
			x8y8: 'water-1',
			x9y8: 'water-1',
			x10y8: 'water-1',
			x11y8: 'hill-1',
			x12y8: 'terra-1',
			x0y9: 'hill-1',
			x1y9: 'forest-2',
			x2y9: 'water-1',
			x3y9: 'water-1',
			x4y9: 'water-1',
			x5y9: 'forest-2',
			x6y9: 'road-1',
			x7y9: 'forest-1',
			x8y9: 'water-1',
			x9y9: 'water-3',
			x10y9: 'water-1',
			x11y9: 'forest-1',
			x12y9: 'hill-1',
			x0y10: 'stone-1',
			x1y10: 'forest-1',
			x2y10: 'water-1',
			x3y10: 'water-1',
			x4y10: 'water-1',
			x5y10: 'terra-1',
			x6y10: 'road-1',
			x7y10: 'stone-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x11y10: 'forest-1',
			x12y10: 'stone-1',
			x0y11: 'stone-1',
			x1y11: 'hill-1',
			x2y11: 'forest-1',
			x3y11: 'forest-2',
			x4y11: 'hill-1',
			x5y11: 'terra-1',
			x6y11: 'terra-1',
			x7y11: 'terra-1',
			x8y11: 'hill-1',
			x9y11: 'forest-2',
			x10y11: 'forest-1',
			x11y11: 'hill-1',
			x12y11: 'stone-1',
			x0y12: 'stone-1',
			x1y12: 'stone-1',
			x2y12: 'stone-1',
			x3y12: 'hill-1',
			x4y12: 'terra-1',
			x5y12: 'forest-1',
			x6y12: 'hill-1',
			x7y12: 'forest-2',
			x8y12: 'terra-1',
			x9y12: 'hill-1',
			x10y12: 'stone-1',
			x11y12: 'stone-1',
			x12y12: 'stone-1'
		}
	};

}(window));
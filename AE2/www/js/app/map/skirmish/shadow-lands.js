/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_015 = {
		version: 5,
		type: 'skirmish',
		size: {width: 19, height: 19},
		maxPlayers: 4,
		//isOpen: false,

		// en
		name: 'Shadow Lands',

		// es
		'name-es': 'Tierras Sombrías',

		// ru
		'name-ru': 'Теневые земли',

		units: [
			{x: 9, y: 1, type: 'commander', ownerId: 0},
			{x: 2, y: 7, type: 'commander', ownerId: 1},
			{x: 16, y: 7, type: 'commander', ownerId: 2},
			{x: 9, y: 15, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 1, y: 6, type: 'farm', state: 'normal'},
			{x: 2, y: 4, type: 'farm', state: 'normal'},
			{x: 6, y: 0, type: 'farm', state: 'normal'},
			{x: 3, y: 9, type: 'farm', state: 'normal'},
			{x: 5, y: 11, type: 'castle', state: 'normal'},
			{x: 12, y: 0, type: 'farm', state: 'normal'},
			{x: 15, y: 9, type: 'farm', state: 'normal'},
			{x: 16, y: 4, type: 'farm', state: 'normal'},
			{x: 17, y: 6, type: 'farm', state: 'normal'},
			{x: 9, y: 3, type: 'farm', state: 'normal'},
			{x: 5, y: 3, type: 'castle', state: 'normal'},
			{x: 13, y: 3, type: 'castle', state: 'normal'},
			{x: 7, y: 7, type: 'castle', state: 'normal'},
			{x: 11, y: 7, type: 'castle', state: 'normal'},
			{x: 9, y: 8, type: 'farm', state: 'destroyed'},
			{x: 9, y: 6, type: 'farm', state: 'destroyed'},
			{x: 13, y: 11, type: 'castle', state: 'normal'},
			{x: 6, y: 17, type: 'farm', state: 'normal'},
			{x: 9, y: 17, type: 'farm', state: 'normal'},
			{x: 12, y: 17, type: 'farm', state: 'normal'},
			{x: 9, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 2, y: 7, type: 'castle', state: 'normal', ownerId: 1},
			{x: 16, y: 7, type: 'castle', state: 'normal', ownerId: 2},
			{x: 9, y: 15, type: 'castle', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'water-2',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'water-1',
			x0y4: 'water-1',
			x0y5: 'water-1',
			x1y0: 'water-1',
			x1y1: 'water-1',
			x1y2: 'water-1',
			x1y3: 'stone-1',
			x1y4: 'terra-1',
			x1y5: 'hill-1',
			x2y0: 'water-1',
			x2y1: 'forest-1',
			x2y2: 'forest-2',
			x2y3: 'terra-1',
			x2y4: 'terra-1',
			x2y5: 'road-1',
			x3y0: 'water-1',
			x3y1: 'forest-2',
			x3y2: 'forest-2',
			x3y3: 'stone-1',
			x3y4: 'terra-1',
			x3y5: 'road-1',
			x4y0: 'forest-2',
			x4y1: 'terra-1',
			x4y2: 'hill-1',
			x4y3: 'terra-1',
			x4y4: 'hill-1',
			x4y5: 'road-1',
			x5y0: 'hill-1',
			x5y1: 'road-1',
			x5y2: 'road-1',
			x5y3: 'terra-1',
			x5y4: 'road-1',
			x5y5: 'road-1',
			x6y0: 'terra-1',
			x6y1: 'road-1',
			x6y2: 'stone-1',
			x6y3: 'hill-1',
			x6y4: 'terra-1',
			x6y5: 'stone-1',
			x7y0: 'stone-1',
			x7y1: 'road-1',
			x7y2: 'hill-1',
			x7y3: 'stone-1',
			x7y4: 'forest-1',
			x7y5: 'terra-1',
			x8y0: 'terra-1',
			x8y1: 'road-1',
			x8y2: 'terra-1',
			x8y3: 'terra-1',
			x8y4: 'stone-1',
			x8y5: 'stone-1',
			x9y0: 'terra-1',
			x9y1: 'terra-1',
			x9y2: 'terra-1',
			x9y3: 'terra-1',
			x9y4: 'stone-1',
			x9y5: 'stone-1',
			x10y0: 'hill-1',
			x10y1: 'road-1',
			x10y2: 'forest-2',
			x10y3: 'terra-1',
			x10y4: 'stone-1',
			x10y5: 'stone-1',
			x11y0: 'terra-1',
			x11y1: 'road-1',
			x11y2: 'hill-1',
			x11y3: 'stone-1',
			x11y4: 'forest-1',
			x11y5: 'terra-1',
			x12y0: 'terra-1',
			x12y1: 'road-1',
			x12y2: 'stone-1',
			x12y3: 'forest-2',
			x12y4: 'terra-1',
			x12y5: 'stone-1',
			x13y0: 'hill-1',
			x13y1: 'road-1',
			x13y2: 'road-1',
			x13y3: 'terra-1',
			x13y4: 'road-1',
			x13y5: 'road-1',
			x14y0: 'forest-1',
			x14y1: 'stone-1',
			x14y2: 'terra-1',
			x14y3: 'terra-1',
			x14y4: 'stone-1',
			x14y5: 'road-1',
			x15y0: 'water-1',
			x15y1: 'forest-2',
			x15y2: 'stone-1',
			x15y3: 'forest-1',
			x15y4: 'hill-1',
			x15y5: 'road-1',
			x16y0: 'water-1',
			x16y1: 'forest-1',
			x16y2: 'forest-2',
			x16y3: 'terra-1',
			x16y4: 'terra-1',
			x16y5: 'road-1',
			x17y0: 'water-1',
			x17y1: 'water-1',
			x17y2: 'water-1',
			x17y3: 'forest-2',
			x17y4: 'terra-1',
			x17y5: 'terra-1',
			x18y0: 'water-3',
			x18y1: 'water-1',
			x18y2: 'water-1',
			x18y3: 'water-1',
			x18y4: 'water-1',
			x18y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'terra-1',
			x2y6: 'road-1',
			x3y6: 'water-1',
			x4y6: 'water-1',
			x5y6: 'forest-2',
			x6y6: 'terra-1',
			x7y6: 'hill-1',
			x8y6: 'terra-1',
			x9y6: 'terra-1',
			x10y6: 'hill-1',
			x11y6: 'terra-1',
			x12y6: 'hill-1',
			x13y6: 'forest-1',
			x14y6: 'water-1',
			x15y6: 'water-1',
			x16y6: 'road-1',
			x17y6: 'terra-1',
			x18y6: 'water-1',
			x0y7: 'water-1',
			x1y7: 'terra-1',
			x2y7: 'terra-1',
			x3y7: 'water-1',
			x4y7: 'water-1',
			x5y7: 'water-1',
			x6y7: 'forest-1',
			x7y7: 'terra-1',
			x8y7: 'forest-1',
			x9y7: 'terra-1',
			x10y7: 'forest-2',
			x11y7: 'terra-1',
			x12y7: 'forest-1',
			x13y7: 'water-1',
			x14y7: 'water-1',
			x15y7: 'water-1',
			x16y7: 'terra-1',
			x17y7: 'hill-1',
			x18y7: 'water-1',
			x0y8: 'water-1',
			x1y8: 'hill-1',
			x2y8: 'road-1',
			x3y8: 'water-1',
			x4y8: 'water-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'terra-1',
			x8y8: 'hill-1',
			x9y8: 'terra-1',
			x10y8: 'terra-1',
			x11y8: 'hill-1',
			x12y8: 'water-1',
			x13y8: 'water-1',
			x14y8: 'water-1',
			x15y8: 'water-1',
			x16y8: 'road-1',
			x17y8: 'terra-1',
			x18y8: 'water-1',
			x0y9: 'water-1',
			x1y9: 'forest-2',
			x2y9: 'road-1',
			x3y9: 'terra-1',
			x4y9: 'water-1',
			x5y9: 'water-1',
			x6y9: 'water-1',
			x7y9: 'road-1',
			x8y9: 'road-1',
			x9y9: 'road-1',
			x10y9: 'road-1',
			x11y9: 'road-1',
			x12y9: 'water-1',
			x13y9: 'water-1',
			x14y9: 'water-1',
			x15y9: 'terra-1',
			x16y9: 'road-1',
			x17y9: 'forest-1',
			x18y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'forest-1',
			x2y10: 'road-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'road-1',
			x7y10: 'road-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x11y10: 'road-1',
			x12y10: 'road-1',
			x13y10: 'road-1',
			x14y10: 'road-1',
			x15y10: 'road-1',
			x16y10: 'road-1',
			x17y10: 'forest-2',
			x18y10: 'water-1',
			x0y11: 'water-1',
			x1y11: 'water-1',
			x2y11: 'terra-1',
			x3y11: 'stone-1',
			x4y11: 'hill-1',
			x5y11: 'terra-1',
			x6y11: 'road-1',
			x7y11: 'stone-1',
			x8y11: 'water-1',
			x9y11: 'water-1',
			x10y11: 'water-1',
			x11y11: 'stone-1',
			x12y11: 'road-1',
			x13y11: 'terra-1',
			x14y11: 'terra-1',
			x15y11: 'hill-1',
			x16y11: 'forest-1',
			x17y11: 'water-1',
			x18y11: 'water-1',
			x0y12: 'water-1',
			x1y12: 'water-1',
			x2y12: 'forest-2',
			x3y12: 'hill-1',
			x4y12: 'forest-2',
			x5y12: 'terra-1',
			x6y12: 'road-1',
			x7y12: 'water-1',
			x8y12: 'water-1',
			x9y12: 'water-2',
			x10y12: 'water-1',
			x11y12: 'water-1',
			x12y12: 'road-1',
			x13y12: 'stone-1',
			x14y12: 'terra-1',
			x15y12: 'forest-1',
			x16y12: 'terra-1',
			x17y12: 'water-1',
			x18y12: 'water-3',
			x0y13: 'water-1',
			x1y13: 'water-1',
			x2y13: 'water-1',
			x3y13: 'forest-1',
			x4y13: 'terra-1',
			x5y13: 'stone-1',
			x6y13: 'road-1',
			x7y13: 'water-1',
			x8y13: 'water-1',
			x9y13: 'water-1',
			x10y13: 'water-1',
			x11y13: 'water-1',
			x12y13: 'road-1',
			x13y13: 'hill-1',
			x14y13: 'forest-2',
			x15y13: 'forest-2',
			x16y13: 'water-1',
			x17y13: 'water-1',
			x18y13: 'water-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'water-1',
			x3y14: 'water-1',
			x4y14: 'water-1',
			x5y14: 'water-1',
			x6y14: 'road-1',
			x7y14: 'hill-1',
			x8y14: 'stone-1',
			x9y14: 'forest-2',
			x10y14: 'forest-1',
			x11y14: 'stone-1',
			x12y14: 'road-1',
			x13y14: 'water-1',
			x14y14: 'water-1',
			x15y14: 'water-1',
			x16y14: 'water-1',
			x17y14: 'water-1',
			x18y14: 'water-1',
			x0y15: 'water-1',
			x1y15: 'water-3',
			x2y15: 'water-1',
			x3y15: 'water-1',
			x4y15: 'water-3',
			x5y15: 'water-1',
			x6y15: 'road-1',
			x7y15: 'road-1',
			x8y15: 'road-1',
			x9y15: 'terra-1',
			x10y15: 'road-1',
			x11y15: 'road-1',
			x12y15: 'road-1',
			x13y15: 'water-1',
			x14y15: 'water-1',
			x15y15: 'water-1',
			x16y15: 'water-2',
			x17y15: 'water-1',
			x18y15: 'water-1',
			x0y16: 'water-1',
			x1y16: 'water-1',
			x2y16: 'water-1',
			x3y16: 'water-1',
			x4y16: 'water-1',
			x5y16: 'water-1',
			x6y16: 'terra-1',
			x7y16: 'hill-1',
			x8y16: 'forest-1',
			x9y16: 'terra-1',
			x10y16: 'hill-1',
			x11y16: 'forest-2',
			x12y16: 'terra-1',
			x13y16: 'water-1',
			x14y16: 'water-1',
			x15y16: 'water-1',
			x16y16: 'water-1',
			x17y16: 'water-3',
			x18y16: 'water-1',
			x0y17: 'water-1',
			x1y17: 'water-1',
			x2y17: 'water-2',
			x3y17: 'water-1',
			x4y17: 'water-1',
			x5y17: 'water-1',
			x6y17: 'terra-1',
			x7y17: 'water-1',
			x8y17: 'water-1',
			x9y17: 'terra-1',
			x10y17: 'water-1',
			x11y17: 'water-1',
			x12y17: 'terra-1',
			x13y17: 'water-1',
			x14y17: 'water-3',
			x15y17: 'water-1',
			x16y17: 'water-1',
			x17y17: 'water-1',
			x18y17: 'water-1',
			x0y18: 'water-1',
			x1y18: 'water-1',
			x2y18: 'water-1',
			x3y18: 'water-1',
			x4y18: 'water-1',
			x5y18: 'water-1',
			x6y18: 'water-1',
			x7y18: 'water-1',
			x8y18: 'water-1',
			x9y18: 'water-1',
			x10y18: 'water-1',
			x11y18: 'water-1',
			x12y18: 'water-1',
			x13y18: 'water-1',
			x14y18: 'water-1',
			x15y18: 'water-1',
			x16y18: 'water-1',
			x17y18: 'water-1',
			x18y18: 'water-1'
		}
	};

}(window));
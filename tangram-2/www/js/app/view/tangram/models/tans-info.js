'use strict';
/*global window */

var tansInfo = {
	'triangleBig-1': {
		count: 1,
		coordinates: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.5}],
		parts: 2,
		type: 'triangle-big'
	},
	'triangleBig-2': {
		count: 1,
		coordinates: [{x: 0.5, y: 0.5}, {x: 1, y: 0}, {x: 1, y: 1}],
		parts: 2,
		type: 'triangle-big'
	},
	'triangleMedium': {
		count: 1,
		coordinates: [{x: 0.5, y: 0}, {x: 0.5 + 0.5 / Math.SQRT2, y: 0.5 / Math.SQRT2}, {
			x: 0.5 - 0.5 / Math.SQRT2,
			y: 0.5 / Math.SQRT2
		}],
		parts: 2,
		type: 'triangle-medium',
		patternId: 'triangle-medium-pattern'
	},
	'triangleSmall-1': {
		count: 1,
		coordinates: [{x: 0.25, y: 0.25}, {x: 0.5, y: 0.5}, {x: 0.25, y: 0.75}],
		parts: 2,
		type: 'triangle-small'
	},
	'triangleSmall-2': {
		count: 1,
		coordinates: [{x: 0.75, y: 0.75}, {x: 1, y: 1}, {x: 0.5, y: 1}],
		parts: 2,
		type: 'triangle-small'
	},
	'square': {
		count: 1,
		coordinates: [{x: 0.5, y: 0.5}, {x: 0.75, y: 0.75}, {x: 0.5, y: 1}, {x: 0.25, y: 0.75}],
		parts: 2,
		type: 'square'
	},
	'parallelogram': {
		count: 1,
		coordinates: [{x: 0, y: 0}, {x: 0.25, y: 0.25}, {x: 0.25, y: 0.75}, {x: 0, y: 0.5}],
		parts: 2,
		type: 'parallelogram'
	}
};

export default tansInfo;
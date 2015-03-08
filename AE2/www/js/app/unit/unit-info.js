(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.units = win.APP.units || {};

	win.APP.units.info = {

	};

	win.APP.units.list = {

		soldier: {
			atk: {
				min: 50,
				max: 55
			},
			def: 5,
			mov: 5
		},
		archer: {
			atk: {
				min: 50,
				max: 55
			},
			def: 5,
			mov: 5
		},
		elemental: {
			atk: {
				min: 50,
				max: 55
			},
			def: 10,
			mov: 5,
			defByWater: 20,
			movByWater: 3
		},
		sorceress: {
			atk: {
				min: 40,
				max: 45
			},
			def: 5,
			mov: 5
		},
		wisp: {
			atk: {
				min: 35,
				max: 40
			},
			def: 10,
			mov: 5
		},
		'dire wolf': {
			atk: {
				min: 60,
				max: 65
			},
			def: 15,
			mov: 6,
			canPoison: true
		},
		golem: {
			atk: {
				min: 60,
				max: 70
			},
			def: 30,
			mov: 5
		},
		catapult: {
			atk: {
				min: 50,
				max: 70
			},
			def: 10,
			mov: 4
		},
		dragon: {
			atk: {
				min: 70,
				max: 80
			},
			def: 25,
			mov: 7
		},
		skeleton: {
			atk: {
				min: 40,
				max: 50
			},
			def: 2,
			mov: 5
		},
		galamar: {
			atk: {
				min: 55,
				max: 65
			},
			def: 20,
			mov: 7
		},
		valadorn: {
			atk: {
				min: 55,
				max: 65
			},
			def: 20,
			mov: 7
		},
		'demon lord': {
			atk: {
				min: 55,
				max: 65
			},
			def: 20,
			mov: 7
		},
		saeth: {
			atk: {
				min: 55,
				max: 65
			},
			def: 20,
			mov: 7
		}

	};

}(window));
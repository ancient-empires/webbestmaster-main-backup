(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.unitMaster = {
		counter: 1,
		createUnits: function (data) {

			data.id = this.counter;
			this.counter += 1;

			return new win.APP.BB.Unit[this.list[data.type].modelName](data);

		},
		list: {
			soldier: {
				atk: {
					min: 50,
					max: 55
				},
				def: 5,
				mov: 5,
				modelName: 'SoldierModel'
			},
			archer: {
				atk: {
					min: 50,
					max: 55
				},
				def: 5,
				mov: 5,
				modelName: 'ArcherModel'
			},
			elemental: {
				atk: {
					min: 50,
					max: 55
				},
				def: 10,
				mov: 5,
				modelName: 'ElementalModel',
				defByWater: 20,
				movByWater: 3
			},
			sorceress: {
				atk: {
					min: 40,
					max: 45
				},
				def: 5,
				mov: 5,
				modelName: 'SorceressModel'
			},
			wisp: {
				atk: {
					min: 35,
					max: 40
				},
				def: 10,
				mov: 5,
				modelName: 'WispModel'
			},
			'dire wolf': {
				atk: {
					min: 60,
					max: 65
				},
				def: 15,
				mov: 6,
				modelName: 'DireWolfModel',
				canPoison: true
			},
			golem: {
				atk: {
					min: 60,
					max: 70
				},
				def: 30,
				mov: 5,
				modelName: 'GolemModel'
			},
			catapult: {
				atk: {
					min: 50,
					max: 70
				},
				def: 10,
				mov: 4,
				modelName: 'CatapultModel'
			},
			dragon: {
				atk: {
					min: 70,
					max: 80
				},
				def: 25,
				mov: 7,
				modelName: 'DragonModel'
			},
			skeleton: {
				atk: {
					min: 40,
					max: 50
				},
				def: 2,
				mov: 5,
				modelName: 'SkeletonModel'
			},
			galamar: {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'GalamarModel'
			},
			valadorn: {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'ValadornModel'
			},
			'demon lord': {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'DemonLordModel'
			},
			saeth: {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'SaethModel'
			}

		}
	};

}(window));
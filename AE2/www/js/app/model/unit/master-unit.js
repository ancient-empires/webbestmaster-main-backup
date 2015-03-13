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
				modelName: 'SoldierModel',
				langKey: 'soldier'
			},
			archer: {
				atk: {
					min: 50,
					max: 55
				},
				def: 5,
				mov: 5,
				modelName: 'ArcherModel',
				langKey: 'archer'
			},
			elemental: {
				atk: {
					min: 50,
					max: 55
				},
				def: 10,
				mov: 5,
				modelName: 'ElementalModel',
				langKey: 'elemental',
				bonusDefByWater: 20,
				moveType: 'flow'
			},
			sorceress: {
				atk: {
					min: 40,
					max: 45
				},
				def: 5,
				mov: 5,
				modelName: 'SorceressModel',
				langKey: 'sorceress'
			},
			wisp: {
				atk: {
					min: 35,
					max: 40
				},
				def: 10,
				mov: 5,
				modelName: 'WispModel',
				langKey: 'wisp'
			},
			'dire-wolf': {
				atk: {
					min: 60,
					max: 65
				},
				def: 15,
				mov: 6,
				modelName: 'DireWolfModel',
				langKey: 'dire-wolf',
				canPoison: true
			},
			golem: {
				atk: {
					min: 60,
					max: 70
				},
				def: 30,
				mov: 5,
				modelName: 'GolemModel',
				langKey: 'golem'
			},
			catapult: {
				atk: {
					min: 50,
					max: 70
				},
				def: 10,
				mov: 4,
				modelName: 'CatapultModel',
				langKey: 'catapult'
			},
			dragon: {
				atk: {
					min: 70,
					max: 80
				},
				def: 25,
				mov: 7,
				modelName: 'DragonModel',
				langKey: 'dragon',
				moveType: 'fly'
			},
			skeleton: {
				atk: {
					min: 40,
					max: 50
				},
				def: 2,
				mov: 5,
				modelName: 'SkeletonModel',
				langKey: 'skeleton'
			},
			galamar: {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'GalamarModel',
				langKey: 'galamar'
			},
			valadorn: {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'ValadornModel',
				langKey: 'valadorn'
			},
			'demon-lord': {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'DemonLordModel',
				langKey: 'demon-lord'
			},
			saeth: {
				atk: {
					min: 55,
					max: 65
				},
				def: 20,
				mov: 7,
				modelName: 'SaethModel',
				langKey: 'saeth'
			}

		}
	};

}(window));
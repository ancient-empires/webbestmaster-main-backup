(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	function Grave(data) {
		this.id = data.id;
		this.x = data.x;
		this.y = data.y;
		this.currentTime = 1;
	}

	Grave.prototype = {
		maxTtl: 3,
		increaseTime: function () {
			this.currentTime += 1;
		},
		needRemove: function () {
			return this.currentTime > this.maxTtl;
		}
	};

	win.APP.unitMaster = {
		unitCounter: 1, // set unit id
		graveCounter: 1, // set grave id
		createGrave: function (data) {

			data.id = this.graveCounter;
			this.graveCounter += 1;

			return new Grave(data);
		},
		createUnit: function (data) {

			data.id = this.unitCounter;
			this.unitCounter += 1;

			return new win.APP.BB.Unit[this.list[data.type].modelName](data);

		},
		list: {
			soldier: {
				atk: {
					min: 50,
					max: 55
				},
				atkRange: 2,
				def: 5,
				mov: 5,
				modelName: 'SoldierModel',
				langKey: 'soldier',
				canFixBuilding: true,
				listOccupyBuilding: ['farm']
			},
			archer: {
				atk: {
					min: 50,
					max: 55
				},
				atkRange: 3,
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
				atkRange: 2,
				def: 10,
				mov: 5,
				modelName: 'ElementalModel',
				langKey: 'elemental',
				bonusDefByWater: 15,
				moveType: 'flow'
			},
			sorceress: {
				atk: {
					min: 40,
					max: 45
				},
				atkRange: 2,
				raiseRange: 2,
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
				atkRange: 2,
				auraRange: 3,
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
				atkRange: 2,
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
				atkRange: 2,
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
				atkRange: 7,
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
				atkRange: 2,
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
				atkRange: 2,
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
				atkRange: 2,
				def: 20,
				mov: 5,
				modelName: 'GalamarModel',
				langKey: 'galamar',
				canFixBuilding: true,
				listOccupyBuilding: ['farm', 'castle']
			},
			valadorn: {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 2,
				def: 20,
				mov: 5,
				modelName: 'ValadornModel',
				langKey: 'valadorn',
				canFixBuilding: true,
				listOccupyBuilding: ['farm', 'castle']
			},
			'demon-lord': {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 2,
				def: 20,
				mov: 5,
				modelName: 'DemonLordModel',
				langKey: 'demon-lord',
				canFixBuilding: true,
				listOccupyBuilding: ['farm', 'castle']
			},
			saeth: {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 2,
				def: 20,
				mov: 5,
				modelName: 'SaethModel',
				langKey: 'saeth',
				canFixBuilding: true,
				listOccupyBuilding: ['farm', 'castle']
			}

		}
	};

}(window));
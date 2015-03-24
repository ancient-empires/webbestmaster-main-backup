/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */

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
		defByLevel: 2,
		atkByLevel: 2,
		bonusAtkByWispAura: 10,
		reduceAktPoison: 10,
		reduceDefPoison: 10,
		bonusAtkByWater: 10,
		bonusDefByWater: 15,
		_levelList: [0, 84, 88, 93, 97, 102, 107, 113, 118, 124], // +5% for every level
		levelList: [0, 50, 60, 70, 80, 90, 100, 110, 120, 130],
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
				listOccupyBuilding: ['farm'],
				cost: 150
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
				langKey: 'archer',
				bonusAtkAgainstFly: 30,
				cost: 250
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
				moveType: 'flow',
				cost: 300
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
				langKey: 'sorceress',
				cost: 400
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
				langKey: 'wisp',
				bonusAtkAgainstSkeleton: 30,
				cost: 500
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
				poisonPeriod: 2,
				cost: 600
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
				langKey: 'golem',
				cost: 600
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
				langKey: 'catapult',
				cost: 700
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
				moveType: 'fly',
				cost: 1000
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
				langKey: 'skeleton',
				withoutGrave: true,
				canNotBeBuy: true,
				cost: 400
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
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
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
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
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
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
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
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
			}

		}
	};

}(window));
/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, setTimeout */
	/*global _, log, $ */

	function Cpu(json) { // model, player:'activePlayer'

		var cpu = this;
		cpu.attr = {};
		cpu.extend(json);

	}

	Cpu.prototype = {

		get: function (key) {
			return this.attr[key];
		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		extend: function (json) {
			_.extend(this.attr, json);
			return this;
		},

		run: function () {

			var cpu = this;

			cpu.setRates();

			cpu.buyUnits();
			cpu.turnUnit();

		},

		setRates: function () {

			var cpu = this,
				difficult = win.APP.info.get('difficult');

			cpu.rates = cpu['rates_' + difficult];

		},

		runScenario: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				view = model.get('view'),
				unit = scenario.get('unit'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				};

			// see view.onClick
			view.markActiveSquare({
				x: unitX,
				y: unitY
			}); // {x: number, y: number}
			view.autoSetSquareInfo();
			view.centerToXY(xy);

			// show available actions
			view
				.showAvailableActions(unit.getAvailableActions())
				// move if needed
				.then(function () {

					var deferred = $.Deferred();

					if ( unitX !== x || unitY !== y ) {

						view.markActiveSquare(xy); // {x: number, y: number}
						view.autoSetSquareInfo();

						unit.moveTo({
								x: x,
								y: y,
								type: 'move',
								unit: unit,
								confirmed: true
							})
							.then(function () {
								deferred.resolve();
							});
					} else {
						deferred.resolve();
					}

					return deferred.promise();

				})
				// after move
				.then(function () {

					setTimeout(function () {
						cpu.runScenarioAction(scenario);
					}, win.APP.info.actionTime());

				});

		},

		runScenarioAction: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				action = scenario.get('action'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				unit = scenario.get('unit'),
				actionName = scenario.get('action').name,
				q = 1;

			switch (actionName) {

				case 'move':

					// do nothing, move was in past step

					unit.set('isActive', false);

					break;

				case 'attack':

					unit.attackToXy({
						attackX: action.enemy.x,
						attackY: action.enemy.y
					});

					q = 3.5;

					break;

				case 'fixBuilding':

					unit.fixBuilding({
						buildingToFix: model.getBuildingByXY(xy)
					});

					break;

				case 'getBuilding':

					unit.occupyBuilding({
						buildingToOccupy: model.getBuildingByXY(xy)
					});

					break;

				case 'raiseSkeleton':

					unit.raise({
						x: action.grave.x,
						y: action.grave.y
					});

					break;

			}

			setTimeout(function () {
				cpu.turnUnit();
			}, win.APP.info.actionTime() * q);

		},

		buyUnits: function () {

			// 1 - detect castle closest to enemy castle
			var cpu = this,
				model = cpu.get('model'),
				player = cpu.get('player'),
				store = cpu.getStore();

			if ( !store ) { // no store, no units ))
				return;
			}

			// buy commander if needed and can
			// buy commander, or no any buy
			cpu.buyUnit({
				store: store,
				type: player.commander.name
			});

			if ( !model.playerHasCommander(player) ) {
				return;
			}

			// buy next needed unit, called him self
			cpu.buyNextUnit({
				store: store
			});

		},

		buyNextUnit: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				player = cpu.get('player'),
				units = model.getUnitsByOwnerId(player.id),
				unitLimit = model.get('unitLimit'),
				unitTypeToBuy,
				unitMaster = win.APP.unitMaster,
				unitPercents = [
					{ type: 'soldier', 		percent: 20, currentPercent: 0 },
					{ type: 'archer',		percent: 30, currentPercent: 0 },
					{ type: 'sorceress', 	percent: 15, currentPercent: 0 },
					{ type: 'golem',	 	percent: 10, currentPercent: 0 },
					{ type: 'dire-wolf',	percent: 10, currentPercent: 0 }
				];

			// do not buy if limit exceed
			if ( unitLimit <= units.length) {
				return;
			}

			_.each(unitPercents, function (data) {

				var unitType = data.type;

				_.each(units, function (unit) {
					if ( unitTypeToBuy ) {
						return;
					}
					if ( unit.get('type') === unitType ) {
						data.currentPercent += Math.round((unit.get('health') / unit.get('defaultHealth')) / unitLimit * 100);
					}
				});

				if ( data.currentPercent < data.percent && !unitTypeToBuy	) {
					unitTypeToBuy = unitType;
				}

			});

			if ( unitTypeToBuy && unitMaster.list[unitTypeToBuy].cost <= player.money ) {
				cpu.buyUnit({
					store: data.store,
					type: unitTypeToBuy
				});
				cpu.buyNextUnit({
					store: data.store
				});
				return;
			}

			log('buy other units');

			// buy other units




		},

		getStore: function () {

			var cpu = this,
				util = win.APP.util,
				model = cpu.get('model'),
				units = model.get('units'),
				player = cpu.get('player'),
				teamNumber = player.teamNumber,
				ownerId = player.id,
				buildings = model.get('buildings'),
				unitData = win.APP.unitMaster,
				commandersList = unitData.commanderList,
				pairs,
				enemyCommanders = _.filter(units, function (unit) {
					return unit.get('teamNumber') !== teamNumber && _.contains(commandersList, unit.get('type'));
				}),
				enemyStores = _.filter(buildings, function (building) {
					return building.canBeStore && building.teamNumber !== teamNumber && building.teamNumber !== null;
				}),
				stores = _.where(buildings, { ownerId: ownerId, canBeStore: true });

			if ( !stores.length ) {
				return false;
			}

			if ( enemyCommanders.length ) {
				pairs = [];
				_.each(enemyCommanders, function (unit) {
					_.each(stores, function (store) {
						pairs.push({
							unit: unit,
							store: store,
							pathSize: util.getPathSize(store, {
								x: unit.get('x'),
								y: unit.get('y')
							})
						});
					});
				});

				pairs = pairs.sort(function (a, b) {
					return a.pathSize - b.pathSize;
				});

				log('-- before stores ');
				log(pairs);

				return pairs[0].store;

			}

			if ( enemyStores.length ) {
				pairs = [];

				_.each(enemyStores, function (enemyStore) {
					_.each(stores, function (store) {
						pairs.push({
							store: store,
							pathSize: util.getPathSize(store, enemyStore)
						});
					});
				});

				pairs = pairs.sort(function (a, b) {
					return a.pathSize - b.pathSize;
				});

				log('-- no commanders');
				log(pairs);
				return pairs[0].store;

			}

			// it non reach code, if enemyCommanders.length === 0 and enemyStores.length === 0 -> end game
			return stores[0];

		},

		buyUnit: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				unitType = data.type,
				store = data.store,
				unitStore = win.APP.BB.UnitStoreView.prototype;

			unitStore.buyUnit({
				state: 'cpu',
				view: model.get('view'),
				model: model,
				player: cpu.get('player'),
				unitType: unitType,
				x: store.x,
				y: store.y
			});

		},

		turnUnit: function () {

			var cpu = this,
				model = cpu.get('model');

			if ( model.get('isEndGame') ) {
				log('end game from CPU');
				return;
			}

			var player = cpu.get('player'),
				//playerTeamNumber = player.teamNumber,
				units = model.get('units'),
				//buildings = model.get('building'),
				//enemyUnit = _.filter(units, function (unit) {
				//	return unit.get('teamNumber') !== playerTeamNumber;
				//}),
				privateUnits = model.getUnitsByOwnerId(player.id),
				//wholes = [], // x, y, and who can ignore this whole
				scenarios = [],
				bestScenario;

			// get ALL scenarios, except nonActive units
			_.each(privateUnits, function (unit) {

				if ( !unit.get('isActive') ) {
					return;
				}

				var scenario = cpu.getUnitScenarios(unit);
				scenarios = scenarios.concat(scenario);

			});

			_.each(scenarios, function (scenario) {
				cpu.setAutoRate(scenario, scenarios);
			});

			cpu.setAutoRateBuildingWork(scenarios);

			scenarios = _.filter(scenarios, function (scenario) {
				return scenario.get('isAvailable');
			});

			if ( !scenarios.length ) {
				model.newTurn();
				return;
			}

			scenarios = scenarios.sort(function (sc1, sc2) {
				return sc2.get('rate') - sc1.get('rate');
			});

			// detect no move and no attack scenario
			bestScenario = scenarios[0];
			if ( !/move|attack/.test(bestScenario.get('action').name) ) {
				cpu.runScenario(bestScenario);
				return;
			}

			// find best attack scenario
			bestScenario = false;
			_.each(scenarios, function (scenario) {
				if ( scenario.get('action').name !== 'attack' ) {
					return;
				}

				if ( !bestScenario ) {
					bestScenario = scenario;
				}

				if ( scenario.get('rate') > bestScenario.get('rate') ) {
					bestScenario = scenario;
				}

			});

			if ( bestScenario && bestScenario.get('rate') > 0 ) {
				cpu.runScenario(bestScenario);
				return;
			}


			// find best move scenario
			bestScenario = false;
			_.each(scenarios, function (scenario) {

				if ( scenario.get('action').name !== 'move' ) {
					return;
				}

				if ( !bestScenario ) {
					bestScenario = scenario;
				}

				if ( scenario.get('rate') > bestScenario.get('rate') ) {
					bestScenario = scenario;
				}

			});

			cpu.runScenario(bestScenario);

			//log('scenarios');
			//log(scenarios);

		},

		// getting action of unit
		getUnitScenarios: function (unit) {

			var cpu = this,
				availableXYs = cpu.getAvailableUnitXYs(unit),
				scenarios = [];

			_.each(availableXYs, function (xy) {

				var xyScenarios = cpu.getUnitScenariosByXY({
					x: xy.x,
					y: xy.y,
					unit: unit
				});

				scenarios = scenarios.concat(xyScenarios);

			});

			return scenarios;

		},

		getAvailableUnitXYs: function (unit) {

			var cpu = this,
				model = cpu.get('model'),
				fullPath = unit.getAvailablePathWithTeamUnit(),
				restPath,
				units = model.get('units');

			restPath = _.filter(fullPath, function (xy) {

				var unit = model.getUnitByXY(xy);

				if ( !unit ) {
					return true;
				}

				return unit.get('isActive');

			});

			restPath.push({
				x: unit.get('x'),
				y: unit.get('y')
			});

			return restPath;

		},

		getUnitScenariosByXY: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				x = data.x,
				y = data.y,
				unit = data.unit,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				gravesToRaise,
				scenarios = [],
				actionList = ['move', 'attack', 'fixBuilding', 'getBuilding', 'raiseSkeleton'],
				Scenario = win.APP.Scenario;

			unit.silentOn('x', 'y');
			unit.set('x', x);
			unit.set('y', y);

			_.each(actionList, function (action) {

				var scenario,
					unitsUnderAttack,
					buildingToGet,
					buildingToFix;

				switch (action) {

					case 'move':

						scenario = new Scenario({
							x: x,
							y: y,
							unit: unit,
							action: {
								name: action
							}
						});

						scenarios.push(scenario);
						break;

					case 'attack':

						// todo: add IF for cristal, cristal can not attack

						if ( !(unit.get('canNotActionAfterMove') && ( unitX !== x || unitY !== y )) ) { // detect moved catapult

							unitsUnderAttack = unit.getUnitsUnderAttack();

							_.each(unitsUnderAttack, function (enemyUnitXY) {

								var scenario = new Scenario({
									x: x,
									y: y,
									unit: unit,
									action: {
										name: action,
										enemy: {
											x: enemyUnitXY.x,
											y: enemyUnitXY.y
										}
									}
								});

								scenarios.push(scenario);

							});

						}


						break;

					case 'fixBuilding':

						buildingToFix = unit.getBuildingToFix();

						if (buildingToFix) {

							scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action
								}
							});

							scenarios.push(scenario);

						}

						break;

					case 'getBuilding':

						// detect can unit get this building
						buildingToGet = unit.getBuildingToOccupy();

						if ( buildingToGet && buildingToGet.teamNumber !== unit.get('teamNumber') ) {

							scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action,
									building: {
										type: buildingToGet.type
									}
								}
							});

							scenarios.push(scenario);

						}

						break;

					case 'raiseSkeleton':

						gravesToRaise = unit.getGravesToRaise();

						_.each(gravesToRaise, function (grave) {

							var scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action,
									grave: {
										x: grave.x,
										y: grave.y
									}
								}
							});

							scenarios.push(scenario);

						});

						break;

				}

			});

			unit.set('x', unitX);
			unit.set('y', unitY);
			unit.silentOff('x', 'y');

			return scenarios;

		},

		rates: {
			getBuilding: 1000,
			fixBuilding: 750,
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			raiseSkeleton: 500,
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,

			q: {
				nearestNonOwnedBuilding: -5,
				placeArmor: 0.5,
				availableReceiveDamage: 0.5,
				upHealth: 3
			},

			maxAvailableReceiveDamage: 80,
			onCanEnemyGetBuilding: 100, // high priority
			onHealthUpBuilding: 5
		},

		rates_hard: { // default rates
			getBuilding: 1000,
			fixBuilding: 750,
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			raiseSkeleton: 500,
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,

			q: {
				nearestNonOwnedBuilding: -5,
				placeArmor: 0.5,
				availableReceiveDamage: 0.5,
				upHealth: 3
			},

			maxAvailableReceiveDamage: 80,
			onCanEnemyGetBuilding: 100, // high priority
			onHealthUpBuilding: 5
		},

		rates_normal: {
			getBuilding: 1000,
			fixBuilding: 750,
			severalBuildings: 0, // if unit can work with several buildings, reduce rate
			raiseSkeleton: 500,
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 10,
			destroyEnemyBuilding: 0,

			q: {
				nearestNonOwnedBuilding: -5,
				placeArmor: 0.5,
				availableReceiveDamage: 0,
				upHealth: 1
			},

			maxAvailableReceiveDamage: 80,
			onCanEnemyGetBuilding: 100, // high priority
			onHealthUpBuilding: 1
		},

		rates_easy: {
			getBuilding: 1000,
			fixBuilding: 20,
			severalBuildings: 0, // if unit can work with several buildings, reduce rate
			raiseSkeleton: 0,
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 100,
			destroyEnemyBuilding: 0,

			q: {
				nearestNonOwnedBuilding: -5,
				placeArmor: 0,
				availableReceiveDamage: -5,
				upHealth: 3
			},

			maxAvailableReceiveDamage: 800,
			onCanEnemyGetBuilding: 0, // high priority
			onHealthUpBuilding: 0
		},

		setAutoIsAvailableScenario: function (scenario, allScenarios) {

			var cpu = this,
				model = cpu.get('model'),
				action = scenario.get('action'),
				unit = scenario.get('unit'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				actionName = action.name,
				unitOnXY = model.getUnitByXY(xy),
				isUnitOnXY = unitOnXY && unitOnXY !== unit,
				graveXY,
				unitOnGraveXY,
				isUnitOnGraveXY;

			// raise
			if ( actionName === 'raiseSkeleton' ) {

				graveXY = action.grave;
				unitOnGraveXY = model.getUnitByXY(graveXY);
				isUnitOnGraveXY = unitOnGraveXY && unitOnGraveXY !== unit;

				scenario.set('isAvailable', !(isUnitOnXY || isUnitOnGraveXY));
				return;
			}

			if ( actionName === 'fixBuilding' ) { // do not fix if unit can attack
				scenario.set('isAvailable', !isUnitOnXY);
				_.each(allScenarios, function (sc) {
					if (sc.get('x') === x && sc.get('y') === y && sc.get('action').name === 'attack') {
						scenario.set('isAvailable', false);
					}
				});
				return;
			}

			scenario.set('isAvailable', !isUnitOnXY);

		},

		setAutoRate: function (scenario, allScenarios) {

			var cpu = this,
				action = scenario.get('action'),
				actionName = action.name,
				xy = {
					x: scenario.get('x'),
					y: scenario.get('y')
				},
				util = win.APP.util,
				unit = scenario.get('unit'),
				rates = cpu.rates,
				rate = 0;

			cpu.setAutoIsAvailableScenario(scenario, allScenarios);

			if ( !scenario.get('isAvailable') ) {
				return;
			}

			cpu.insertDataByPosition(scenario);

			switch (actionName) {

				case 'move':

					rate = cpu.rateMove({ // usually move rate is <0
						scenario: scenario,
						allScenarios: allScenarios
					});

					break;

				case 'attack':

					rate = cpu.rateAttack({
						scenario: scenario
					});

					break;

				case 'fixBuilding':

					rate = rates.fixBuilding - util.getPathSize(xy, {x: unit.get('x'), y: unit.get('y')});

					break;

				case 'getBuilding':

					rate = rates.getBuilding - util.getPathSize(xy, {x: unit.get('x'), y: unit.get('y')});

					break;

				case 'raiseSkeleton':

					rate = cpu.rateRaise({
						scenario: scenario
					});

					break;

			}

			scenario.set('rate', rate);

		},

		setAutoRateBuildingWork: function (scenarios) {

			var cpu = this,
				unitWithScenarios = [];

			// detect unit can fix or build 2 and more buildings
			_.each(scenarios, function (scenario) {
				var unit = scenario.get('unit'),
					unitWithScenario = _.find(unitWithScenarios, { unit: unit });

				if ( unitWithScenario ) {
					unitWithScenario.scenarios.push(scenario);
				} else {
					unitWithScenarios.push({
						unit: unit,
						scenarios: [scenario],
						getBuildingCount: 0,
						fixBuildingCount: 0
					});
				}
			});

			_.each(unitWithScenarios, function (unitWithScenario) {
				var scenarios = unitWithScenario.scenarios;
				_.each(scenarios, function (scenario) {
					var actionName = scenario.get('action').name;
					switch ( actionName ){
						case 'fixBuilding':
							unitWithScenario.fixBuildingCount += 1;
							break;
						case 'getBuilding':
							unitWithScenario.getBuildingCount += 1;
							break;
					}
				});
			});

			_.each(unitWithScenarios, function (unitWithScenario) {
				var scenarios = unitWithScenario.scenarios,
					severalBuildings = cpu.rates.severalBuildings,
					fixBuildingCount = unitWithScenario.fixBuildingCount,
					getBuildingCount = unitWithScenario.getBuildingCount;
				_.each(scenarios, function (scenario) {
					var actionName = scenario.get('action').name,
						rate = scenario.get('rate');

					switch ( actionName ){
						case 'fixBuilding':
							scenario.set('rate', rate + severalBuildings * fixBuildingCount);
							break;
						case 'getBuilding':
							scenario.set('rate', rate + severalBuildings * getBuildingCount);
							break;
						case 'move':
							scenario.set('rate', rate + severalBuildings * (getBuildingCount + fixBuildingCount));
							break;
					}
				});
			});

		},

		insertDataByPosition: function (scenario) {

			var cpu = this,
				rates = cpu.rates,
				model = cpu.get('model'),
				allUnits = model.get('units'),
				unit = scenario.get('unit'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				unitTeamNumber = unit.get('teamNumber'),
				enemyUnits,
				availableReceiveDamage = 0, // +
				placeArmor, // +
				upHealth = 0, // ---
				building,
				buildingData = win.APP.building,
				buildingUpHealthList = buildingData.upHealthList,
				buildingList = buildingData.list,
				onHealthUpBuilding = 0;

			unit.silentOn('x', 'y');
			unit.set('x', x);
			unit.set('y', y);

			enemyUnits = _.filter(allUnits, function (unit) {
				return unit.get('teamNumber') !== unitTeamNumber;
			});

			_.each(enemyUnits, function (enemy) {

				var availableAttackMap = enemy.getAvailableAttackMap();

				if ( !_.find(availableAttackMap, {x: x, y: y}) ) {
					return;
				}

				availableReceiveDamage += enemy.getAttackToUnit(unit, {average: true});

			});

			placeArmor = model.getArmorByXY({
				x: x,
				y: y
			});

			building = model.getBuildingByXY({ x: x, y: y });
			if ( building && (building.ownerId === unit.get('ownerId') || _.contains(buildingUpHealthList, building.type) ) ) {
				upHealth = buildingList[building.type].healthUp;
				upHealth = Math.min(upHealth, unit.get('defaultHealth') - unit.get('health'));
				onHealthUpBuilding = rates.onHealthUpBuilding;
			}

			unit.set('x', unitX);
			unit.set('y', unitY);
			unit.silentOff('x', 'y');

			scenario.set('dataByPosition', {
				placeArmor: placeArmor,
				availableReceiveDamage: availableReceiveDamage,
				upHealth: upHealth,
				onHealthUpBuilding: onHealthUpBuilding
			});

		},

		rateMove: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				player = model.get('activePlayer'),
				hasCastle = model.playerHasCastle(player),
				hasCommander = model.playerHasCommander(player),
				allBuildings = model.get('buildings'),
				wantedBuildings,
				util = win.APP.util,
				scenario = data.scenario,
				unit = scenario.get('unit'),
				unitTeamNumber = unit.get('teamNumber'),
				allUnits = model.get('units'),
				enemyUnits = _.filter(allUnits, function (unit) {
					return unit.get('teamNumber') !== unitTeamNumber;
				}),
				allScenarios = data.allScenarios,
				rates = cpu.rates,
				buildingData = win.APP.building,
				dataByPosition = scenario.get('dataByPosition'),
				wantedBuildingList = unit.get('listOccupyBuilding') || buildingData.wantedBuildingList,
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				building = model.getBuildingByXY(xy),
				pathToBuildingLength = Infinity,
				pathToEnemyLength = Infinity,
				rate = 0;

			// 1 detect: enemy unit get or stay on building
			if ( building ) {

				// can enemy get building
				_.each(enemyUnits, function (enemy) {

					var path = enemy.getAvailablePathFull(),
						buildingTypeList = enemy.get('listOccupyBuilding');

					if ( !_.find(path, xy) || !buildingTypeList ) {
						return;
					}

					if ( _.contains(buildingTypeList, building.type) ) {
						rate = rates.onCanEnemyGetBuilding;
					}

				});

			}

			// 2 nearest non player and available to get building
			wantedBuildings = _.filter(allBuildings, function (building) {
				return building.teamNumber !== unitTeamNumber && _.contains(wantedBuildingList, building.type);
			});


			if ( !wantedBuildings.length || ( !hasCastle && !hasCommander ) ) { // if mission or no needed buildings

				_.each(enemyUnits, function (enemy) {
					pathToBuildingLength = Math.min(pathToBuildingLength, util.getPathSize({ x: enemy.get('x'), y: enemy.get('y') }, xy));
				});

			} else {

				_.each(wantedBuildings, function (building) {

					var unit = model.getUnitByXY(building);

					if ( unit && unit.get('teamNumber') === unitTeamNumber && _.contains(unit.get('listOccupyBuilding'), building.type) ) {
						return;
					}

					pathToBuildingLength = Math.min(pathToBuildingLength, util.getPathSize(building, xy));

				});

			}

			// set current rate
			rate = rate || pathToBuildingLength * rates.q.nearestNonOwnedBuilding;

			if (dataByPosition.availableReceiveDamage) {
				rate += dataByPosition.upHealth * rates.q.upHealth + dataByPosition.placeArmor * rates.q.placeArmor - dataByPosition.availableReceiveDamage * rates.q.availableReceiveDamage;
			} else {
				rate += dataByPosition.upHealth * rates.q.upHealth;
			}


			if ( dataByPosition.availableReceiveDamage >= rates.maxAvailableReceiveDamage ) {
				log(' -- move - maxAvailableReceiveDamage!!!');
				rate = rates.lowPriority;
			}

			// detect scenario where unit get building or raise skeleton
			_.each(allScenarios, function (sc) {

				var action = sc.get('action'),
					actionName = action.name,
					grave;

				switch (actionName) {

					case 'fixBuilding':
					case 'getBuilding':

						if ( sc.get('x') === x && sc.get('y') === y ) {
							rate = rates.lowPriority;
						}

						break;

					case 'raiseSkeleton':

						grave = action.grave;

						if ( grave.x === x && grave.y === y ) {
							rate = rates.lowPriority;
						}

						break;

				}

			});


			return rate;

		},

		rateAttack: function (data) {

			var cpu = this,
				rates = cpu.rates,
				model = cpu.get('model'),
				allUnits = model.get('units'),
				enemyUnits,
				scenario = data.scenario,
				action = scenario.get('action'),
				scenarioX = scenario.get('x'),
				scenarioY = scenario.get('y'),
				xy = {
					x: scenarioX,
					y: scenarioY
				},
				unit = scenario.get('unit'),
				unitTeamNumber = unit.get('teamNumber'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				isStartXY = unitX === scenarioX && unitY === scenarioY,
				enemyXY = action.enemy,
				enemy = model.getUnitByXY(enemyXY),
				enemyHealth = enemy ? enemy.get('health') : 0,
				enemyBuilding = model.getBuildingByXY(enemyXY),
				availableGivenDamage,
				availableResponseDamage = 0,
				dataByPosition = scenario.get('dataByPosition'),
				building,
				rate;

			if ( !enemy && enemyBuilding && unit.get('canDestroyBuilding') ) {
				return rates.destroyEnemyBuilding;
			}

			unit.silentOn('x', 'y');
			unit.set('x', scenarioX);
			unit.set('y', scenarioY);

			// count
			availableGivenDamage = unit.getAttackToUnit(enemy, {average: true});

			// detect can enemy do strike back
			if ( availableGivenDamage < enemyHealth && enemy.canStrikeBack(unit) ) {
				enemy.silentOn('health');
				enemy.set('health', enemyHealth - availableGivenDamage);
				availableResponseDamage = enemy.getAttackToUnit(unit, {average: true});
				enemy.set('health', enemyHealth);
				enemy.silentOff('health');
			}

			if ( availableGivenDamage >= enemyHealth ) {
				rate = rates.killUnit;
			} else {
				rate = availableGivenDamage - availableResponseDamage;
			}

			rate += dataByPosition.onHealthUpBuilding;


			enemyUnits = _.filter(allUnits, function (unit) {
				return unit.get('teamNumber') !== unitTeamNumber;
			});

			// can enemy get building
			building = model.getBuildingByXY({ x: unitX, y: unitY });

			if ( building ) {

				_.each(enemyUnits, function (enemy) {

					var path = enemy.getAvailablePathFull(),
						enemyBuildingTypeList = enemy.get('listOccupyBuilding');

					if ( !_.find(path, { x: unitX, y: unitY }) || !enemyBuildingTypeList ) {
						return;
					}

					if ( _.contains(enemyBuildingTypeList, building.type) ) {
						if ( isStartXY ) { // detect attack from building
							rate += rates.onCanEnemyGetBuilding;
						} else {
							rate = rates.lowPriority;
						}
					}

				});

			}


			if ( dataByPosition.availableReceiveDamage >= rates.maxAvailableReceiveDamage ) {
				log(' -- attack - maxAvailableReceiveDamage!!!');
				rate = rates.lowPriority;
			}

			if ( dataByPosition.availableReceiveDamage >= unit.get('health') * 2 ) {
				log(' -- move - can be die !!!');
				rate = rates.lowPriority;
			}

			unit.set('x', unitX);
			unit.set('y', unitY);
			unit.silentOff('x', 'y');

			return rate;

		},

		rateRaise: function (data) {

			var cpu = this,
				rates = cpu.rates,
				scenario = data.scenario,
				dataByPosition = scenario.get('dataByPosition');

			return rates.raiseSkeleton + dataByPosition.onHealthUpBuilding + dataByPosition.placeArmor;

		}


	};

	win.APP.Cpu = Cpu;

}(window));
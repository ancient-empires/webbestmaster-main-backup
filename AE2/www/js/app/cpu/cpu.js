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

		rates: {
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,
			building: {
				castle: 100,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: 0.5,
				upHealth: 1,
				availableReceiveDamage: -0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 10
		},

		rates_hard: { // default rates
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,
			building: {
				castle: 100,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: 0.5,
				upHealth: 1,
				availableReceiveDamage: -0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 10
		},

		rates_normal: {
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,
			building: {
				castle: 100,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: 0, // dif
				upHealth: 1,
				availableReceiveDamage: -0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 0
		},

		rates_easy: {
			severalBuildings: 0, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 1000,
			destroyEnemyBuilding: 0,
			building: {
				castle: 0,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: -0.5,
				upHealth: 0,
				availableReceiveDamage: 0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 0
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
				util = win.APP.util,
				assortArray = util.assortArray,
				model = cpu.get('model'),
				player = cpu.get('player'),
				units = model.getUnitsByOwnerId(player.id),
				unitLimit = model.get('unitLimit'),
				unitTypeToBuy,
				unitMaster = win.APP.unitMaster,
				unitCounts = [
					{ type: 'soldier', 		count: 2, currentCount: 0 },
					{ type: 'archer',		count: 2, currentCount: 0 }
					//{ type: 'sorceress', 	count: 1, currentCount: 0 }
					//{ type: 'golem',	 	count: 1, currentCount: 0 },
					//{ type: 'dire-wolf',	count: 1, currentCount: 0 }
				],
				otherUnits = ['soldier', 'archer', 'sorceress', 'sorceress', 'golem', 'dire-wolf', 'dragon', 'catapult', 'sorceress', 'golem', 'dire-wolf', 'dragon'];

			unitCounts = assortArray(unitCounts);

			if ( model.isUnitsTooMuch() ) {
				log('too much units CPU');
				return;
			}

			// do not buy if limit exceed
			if ( unitLimit <= units.length) {
				return;
			}

			_.each(unitCounts, function (data) {

				_.each(units, function (unit) {
					if ( unit.get('type') === data.type ) {
						data.currentCount += 1;
					}
				});

			});

			_.each(unitCounts, function (data) {
				if ( data.currentCount < data.count && !unitTypeToBuy ) {
					unitTypeToBuy = data.type;
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

			unitTypeToBuy = win.APP.util.assortArray(otherUnits)[0];

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

			if ( this.get('model').get('isEndGame') ) {
				log('end game from CPU');
				return;
			}

			var cpu = this,
				rates = cpu.rates,
				model = cpu.get('model'),
				player = cpu.get('player'),
				privateUnits = model.getUnitsByOwnerId(player.id),
				scenarios = [],
				lowPriorityScenarios = [],
				highPriorityScenarios = [],
				scenarioIsDone = false;

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

			_.each(scenarios, function (scenario) {

				var actionName = scenario.get('action').name;

				if ( actionName === 'move' ) {
					lowPriorityScenarios.push(scenario);
				} else {
					highPriorityScenarios.push(scenario);
				}

			});

			// reRate move
			_.each(lowPriorityScenarios, function (lowPriorityScenario) {

				_.each(highPriorityScenarios, function (sc) {
					var action = sc.get('action'),
						grave,
						x = lowPriorityScenario.get('x'),
						y = lowPriorityScenario.get('y'),
						scX = sc.get('x'),
						scY = sc.get('y'),
						isTheSamePlace = (scX === x && scY === y);

					// if this move disturbs other scenarios
					switch (action.name) {
						case 'fixBuilding':
						case 'getBuilding':
							if ( isTheSamePlace ) {
								lowPriorityScenario.set('rate', rates.lowPriority);
							}
							break;
						case 'raiseSkeleton':
							grave = action.grave;
							if ( isTheSamePlace || (grave.x === x && grave.y === y) ) {
								lowPriorityScenario.set('rate', rates.lowPriority);
							}
							break;
						case 'attack':
							if ( sc.get('rate') === rates.lowPriority && isTheSamePlace ) {
								lowPriorityScenario.set('rate', rates.lowPriority);
							}
							break;
					}

				});

			});

			 _.each(scenarios, function (scenario) {
				 cpu.setAutoAvailableByPosition(scenario); // detect available position
				 //cpu.setAutoAvailableByCanEnemyGetBuilding(scenario); // detect available position - TODO: need implement
				 cpu.setAutoAvailableByRaiseSkeleton(scenario); // detect raise skeleton
			 });

			scenarios = _.filter(scenarios, function (scenario) {
				return scenario.get('isAvailable') && scenario.get('rate') !== rates.lowPriority;
			});

			cpu.setAutoRateBuildingWork(scenarios);

			if ( !scenarios.length ) {
				model.newTurn();
				return;
			}

			// find get building - 1
			// find raise skeleton - 2
			// find attack - 3
			// find fix building - 4
			// find move - 5

			_.each(['getBuilding', 'raiseSkeleton', 'attack', 'fixBuilding', 'move'], function (scenarioType) {

				if ( scenarioIsDone ) {
					return;
				}

				var filteredScenarios = _.filter(scenarios, function (scenario) {
						return scenario.get('action').name === scenarioType;
					}),
					noStrikeBack,
					poisonAttack;

				if ( !filteredScenarios.length ) {
					return;
				}

				switch (scenarioType) {

					case 'getBuilding':

						_.each(filteredScenarios, function (scenarion) {

							var building = scenarion.get('action').building,
								addedRate = rates.building[building.type];

							scenarion.changeBy('rate', addedRate);

						});

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
							return sc2.get('rate') - sc1.get('rate');
						});

						break;

					case 'raiseSkeleton':

						_.each(filteredScenarios, function (scenario) {

							var dataByPosition = scenario.get('dataByPosition'),
								placeArmor = dataByPosition.placeArmor,
								availableReceiveDamage = dataByPosition.availableReceiveDamage,
								onHealthUpBuilding = dataByPosition.onHealthUpBuilding;

							if (availableReceiveDamage) {
								scenario.changeBy('rate', placeArmor + onHealthUpBuilding + availableReceiveDamage * rates.q.availableReceiveDamage);
							}

						});

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
							return sc2.get('rate') - sc1.get('rate');
						});

						break;

					case 'attack':

						// detect attack with / without strike back
						noStrikeBack = [];
						poisonAttack = [];

						_.each(filteredScenarios, function (scenario) {
							return scenario.get('availableResponseDamage') || noStrikeBack.push(scenario);
						});

						if (noStrikeBack.length) {
							filteredScenarios = noStrikeBack;
						}

						// try to find poison attack
						_.each(filteredScenarios, function (scenario) {
							return scenario.get('isPoisonAttack') && poisonAttack.push(scenario);
						});

						if (poisonAttack.length) {
							filteredScenarios = poisonAttack;
						}

						_.each(filteredScenarios, function (scenario) {

							var dataByPosition = scenario.get('dataByPosition'),
								placeArmor = dataByPosition.placeArmor,
								availableReceiveDamage = dataByPosition.availableReceiveDamage,
								onHealthUpBuilding = dataByPosition.onHealthUpBuilding;

							if (availableReceiveDamage) {
								scenario.changeBy('rate', placeArmor + onHealthUpBuilding + availableReceiveDamage * rates.q.availableReceiveDamage - scenario.get('availableResponseDamage'));
							}

						});

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
							return sc2.get('rate') - sc1.get('rate');
						});

						break;

					case 'fixBuilding':

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
							return sc2.get('rate') - sc1.get('rate');
						});

						break;

					case 'move':

						_.each(filteredScenarios, function (scenario) {

							var dataByPosition = scenario.get('dataByPosition'),
								placeArmor = dataByPosition.placeArmor,
								availableReceiveDamage = dataByPosition.availableReceiveDamage,
								onHealthUpBuilding = dataByPosition.onHealthUpBuilding;

							if (availableReceiveDamage) {
								scenario.changeBy('rate', placeArmor + onHealthUpBuilding + availableReceiveDamage * rates.q.availableReceiveDamage);
							}

						});

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {

							var unit1 = sc1.get('unit'),
								unit2 = sc2.get('unit'),
								length1 = (unit1.get('listOccupyBuilding') || []).length * rates.q.listOccupyBuilding,
								length2 = (unit2.get('listOccupyBuilding') || []).length * rates.q.listOccupyBuilding;

							return (sc2.get('rate') + length1) - (sc1.get('rate') + length2);

						});

						break;

				}

				scenarioIsDone = true;
				cpu.runScenario( filteredScenarios[0] );

			});

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

						// todo: add IF for cristal, cristal can not attack - needless for CPU

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

		setAutoAvailableByRaiseSkeleton: function (scenario) {

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
				if ( isUnitOnXY || isUnitOnGraveXY ) {
					scenario.set('isAvailable', false);
				}
			}


		},

		setAutoAvailableByPosition: function (scenario) {
			var cpu = this,
				model = cpu.get('model'),
				unit = scenario.get('unit'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				unitOnXY = model.getUnitByXY(xy),
				isUnitOnXY = unitOnXY && unitOnXY !== unit;

			scenario.set('isAvailable', !isUnitOnXY);

		},

		// detect enemy can get your building
		setAutoAvailableByCanEnemyGetBuilding: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				allUnits = model.get('units'),
				unit = scenario.get('unit'),
				unitTeamNumber = unit.get('teamNumber'),
				nearestUnitBuilding = [],
				nearestEnemyBuilding = [],
				enemyUnits = [],
				teamUnits = [],
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				availablePathWithTeamUnit,
				availablePathViewWithoutTeamUnit
				;

			// get team and enemy units
			_.each(allUnits, function (unit) {
				if ( unit.get('teamNumber') === unitTeamNumber ) {
					teamUnits.push(unit);
				} else {
					enemyUnits.push(unit);
				}
			});

			enemyUnits = _.filter(enemyUnits, function (enemyUnit) {
				return enemyUnit.get('listOccupyBuilding');
			});

			availablePathWithTeamUnit = unit.getAvailablePathWithTeamUnit();

			// get available path view withOUT team unit
			availablePathViewWithoutTeamUnit = _.filter(availablePathWithTeamUnit, function (xy) {
				var founded = false;
				_.each(teamUnits, function (unit) {
					if ( unit.get('x') === xy.x && unit.get('y') === xy.y ) {
						founded = true;
					}
				});
				return !founded;
			});

			availablePathViewWithoutTeamUnit.push({
				x: unit.get('x'),
				y: unit.get('y')
			});

			_.each(enemyUnits, function (enemyUnit) {

				var availablePath = enemyUnit.getAvailablePathWithTeamUnit();

				_.each(availablePath, function (xy) {

					var building = model.getBuildingByXY(xy);

					if (!building) {
						return;
					}

					if (enemyUnit.get('listOccupyBuilding').indexOf(building.type) === -1) {
						return;
					}

					nearestEnemyBuilding.push(building);

				});

			});

			_.each(availablePathViewWithoutTeamUnit, function (xy) {

				var building = model.getBuildingByXY(xy);

				if ( !building ) {
					return;
				}

				if ( nearestEnemyBuilding.indexOf(building) === -1 ) {
					return;
				}

				nearestUnitBuilding.push(building);

			});

			//if ( _.find(nearestUnitBuilding, xy) ) {
				log('DETECT WHEN ENEMY CAN GET BUILDING');
				log(nearestUnitBuilding);
			//}


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
				case 'getBuilding':
				case 'raiseSkeleton':

					rate = rates.highPriority - util.getPathSize(xy, {x: unit.get('x'), y: unit.get('y')});

					break;

			}

			scenario.set('rate', rate);

		},

		setAutoRateBuildingWork: function (scenarios) {

			var cpu = this,
				unitWithScenarios = [];

			// detect unit can fix or build 2 and more buildings
			// create array with unit has all own scenarios
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

					switch ( actionName ) {
						case 'fixBuilding':
							scenario.set('rate', rate + severalBuildings * fixBuildingCount);
							break;
						case 'getBuilding':
							scenario.set('rate', rate + severalBuildings * getBuildingCount);
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

				// try to get available attack map from cache
				var cachedAttackField = ['attack', enemy.get('type'), 'x', enemy.get('x'), 'y', enemy.get('y')].join('-'),
					cachedAvailableAttackMap = cpu.get(cachedAttackField),
					availableAttackMap;

				if (cachedAvailableAttackMap) {
					availableAttackMap = cachedAvailableAttackMap;
				} else {
					availableAttackMap = enemy.getAvailableAttackMap();
					cpu.set(cachedAttackField, availableAttackMap);
				}

				if (!_.find(availableAttackMap, {x: x, y: y})) {
					return;
				}

				availableReceiveDamage += enemy.getAttackToUnit(unit, {average: true});

			});

			placeArmor = model.getArmorByXY({
				x: x,
				y: y
			});

			building = model.getBuildingByXY({ x: x, y: y });
			if ( building &&
				(building.ownerId === unit.get('ownerId') ||
				_.contains(buildingUpHealthList, building.type) ||
				building.teamNumber === unit.get('teamNumber')) ) {
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
				//allScenarios = data.allScenarios,
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
				//building = model.getBuildingByXY(xy),
				pathToBuildingLength = Infinity,
				//pathToEnemyLength = Infinity,
				rate;

			// 1 detect: enemy unit which can get or stay on building
			//if ( building ) {
			//
			//	// can enemy get building
			//	_.each(enemyUnits, function (enemy) {
			//
			//		var path = enemy.getAvailablePathFull(),
			//			buildingTypeList = enemy.get('listOccupyBuilding');
			//
			//		if ( !_.find(path, xy) || !buildingTypeList ) {
			//			return;
			//		}
			//
			//	});
			//
			//}

			// 2 - nearest non player and available to get building
			wantedBuildings = _.filter(allBuildings, function (building) {
				return building.teamNumber !== unitTeamNumber && _.contains(wantedBuildingList, building.type);
			});

			if ( !wantedBuildings.length || ( !hasCastle && !hasCommander ) ) { // if mission or no needed buildings

				_.each(enemyUnits, function (enemy) {
					pathToBuildingLength = Math.min(pathToBuildingLength, util.getPathSize({ x: enemy.get('x'), y: enemy.get('y') }, xy));
				});

			} else {

				_.each(wantedBuildings, function (building) {

					var teamUnit = model.getUnitByXY(building);

					if ( teamUnit && teamUnit.get('teamNumber') === unitTeamNumber && _.contains(teamUnit.get('listOccupyBuilding'), building.type) ) {
						return;
					}

					pathToBuildingLength = Math.min(pathToBuildingLength, util.getPathSize(building, xy));

				});

			}

			// set rate by nearest non owned building
			rate = pathToBuildingLength * rates.q.nearestNonOwnedBuilding;

			// add rate by upHealth
			rate += dataByPosition.upHealth * rates.q.upHealth;

			return rate;

		},

		rateAttack: function (data) {

			var cpu = this,
				rates = cpu.rates,
				model = cpu.get('model'),
				scenario = data.scenario,
				action = scenario.get('action'),
				scenarioX = scenario.get('x'),
				scenarioY = scenario.get('y'),
				unit = scenario.get('unit'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				enemyXY = action.enemy,
				enemy = model.getUnitByXY(enemyXY),
				enemyHealth = enemy ? enemy.get('health') : 0,
				enemyBuilding = model.getBuildingByXY(enemyXY),
				availableGivenDamage,
				availableResponseDamage = 0,
				//dataByPosition = scenario.get('dataByPosition'),
				rate;

			scenario.set('isPoisonAttack', unit.get('poisonPeriod') ); // turn poison attack at first

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
				//scenario.set('killUnit', true); // use for detect priority to kill unit
			} else {
				if ( availableResponseDamage < unit.get('health') - 10 ) { // detect: unit will be alive after attack
					rate = availableGivenDamage; // unit alive
				} else {
					rate = rates.lowPriority;  // unit die
				}
			}

			scenario.set('availableResponseDamage', availableResponseDamage);

			unit.set('x', unitX);
			unit.set('y', unitY);
			unit.silentOff('x', 'y');

			return rate;

		}


	};

	win.APP.Cpu = Cpu;

}(window));
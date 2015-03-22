/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _ */

	win.APP.BB.Unit = {};

	win.APP.BB.Unit.BaseUnitModel = Backbone.Model.extend({

		//////////
		// init
		//////////

		initialize: function() {

			var unit = this;

			// default state
			unit.setDefaultState();

			unit.set('health', 100);
			unit.set('defaultHealth', 100);
			unit.set('xp', 0);

			unit.bindEventListener();

		},

		setBy: function (key, delta) {

			return this.set(key, this.get(key) + delta);

		},

		bindEventListener: function () {
			this.on('change:isActive', this.onChangeIsActive);
		},

		unbindEventListener: function () {
			this.off();
		},

		//////////
		// on changes
		//////////

		onChangeIsActive: function (e, isActive) {

			var unit = this,
				view = unit.get('view');

			return isActive ? view.setActiveUnit(unit) : view.setNotActiveUnit(unit);

		},

		setDefaultState: function () {

			this.set('isActive', true);
			this.set('didMove', false);
			this.set('didAttack', false);
			//this.set('didRaise', false);
			this.set('isPoison', false);
			//this.set('didPoison', false);
			this.set('underWispAura', false);
			this.set('gotBuilding', false);
			this.set('fixedBuilding', false);

		},

		autoSetLevel: function () {
			// get/set level
			// if level was changed -> show levelUp
			console.log('--- autoSetLevel');
		},

		//////////
		// getting data
		//////////

		getAvailableActions: function () {

			var unit = this,
				unitTeamNumber = unit.get('teamNumber'),
				units = unit.get('model').get('units'),
				teamUnits = [], // done
				enemyUnits = [], // done
				availablePathViewWithTeamUnit, // done
				availablePathViewWithoutTeamUnit, // done
				unitsUnderAttack,
				gravesToRaise,
				buildingToFix,
				buildingToOccupy,
				openStore;

			// get team and enemy units
			_.each(units, function (unit) {
				if ( unit.get('teamNumber') === unitTeamNumber ) {
					teamUnits.push(unit);
				} else {
					enemyUnits.push(unit);
				}
			});

			// get available path view with team unit
			availablePathViewWithTeamUnit = unit.getAvailablePathWithTeamUnit();

			// get available path view withOUT team unit
			availablePathViewWithoutTeamUnit = _.filter(availablePathViewWithTeamUnit, function (xy) {
				var founded = false;
				_.each(teamUnits, function (unit) {
					if ( unit.get('x') === xy.x && unit.get('y') === xy.y ) {
						founded = true;
					}
				});
				return !founded;
			});

			// get unitsUnderAttack
			unitsUnderAttack = unit.getUnitsUnderAttack();

			// get graves to raise
			gravesToRaise = unit.getGravesToRaise();

			// detect building (farm) to fix
			buildingToFix = unit.getBuildingToFix();

			// get building to occupy (farm and castle)
			buildingToOccupy = unit.getBuildingToOccupy();

			return {
				unit: unit,
				buildingToOccupy: buildingToOccupy,
				buildingToFix: buildingToFix,
				gravesToRaise: gravesToRaise,
				unitsUnderAttack: unitsUnderAttack,
				availablePathViewWithTeamUnit: availablePathViewWithTeamUnit,
				availablePathViewWithoutTeamUnit: availablePathViewWithoutTeamUnit
			};

		},

		getAvailablePathWithTeamUnit: function () {

			if ( this.get('didMove') ) {
				return [];
			}

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				units = model.get('units'),
				unitTeamNumber = unit.get('teamNumber'),
				map = view.get('map'),
				terrain = map.terrain,
				pathFinder,
				blackWholes = [];

			_.each(units, function (unit) {

				if ( unit.get('teamNumber') === unitTeamNumber ) { // unit can move around alias units
					return;
				}

				blackWholes.push('x' + unit.get('x') + 'y' + unit.get('y'));

			});

			pathFinder = new PathFinder({
				blackWholes: blackWholes,
				terrain: terrain,
				mov: unit.get('mov') - 1,
				x: unit.get('x'),
				y: unit.get('y'),
				moveType: unit.get('moveType'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: true
			});

			return pathFinder.getAvailablePath();

		},

		getUnitsUnderAttack: function () {

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				units = model.get('units'),
				map = view.get('map'),
				terrain = map.terrain,
				teamUnits = [],
				enemyUnits = [],
				availableAttackXYs,
				underAttackXYs = [],
				pathFinder,
				unitTeamNumber = unit.get('teamNumber');


			if ( unit.get('didAttack') ) {
				return underAttackXYs; // []
			}

			_.each(units, function (unit) {
				if ( unit.get('teamNumber') === unitTeamNumber ) {
					teamUnits.push(unit);
				} else {
					enemyUnits.push(unit);
				}
			});

			pathFinder = new PathFinder({
				blackWholes: [],
				terrain: terrain,
				mov: unit.get('atkRange') - 1,
				x: unit.get('x'),
				y: unit.get('y'),
				moveType: unit.get('moveType'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: false
			});

			availableAttackXYs = pathFinder.getAvailablePath();

			_.each(enemyUnits, function (enemyUnit) {

				var xy = {
					x: enemyUnit.get('x'),
					y: enemyUnit.get('y')
				};

				if ( _.find(availableAttackXYs, xy) ) {
					underAttackXYs.push(xy);
				}

			});

			return underAttackXYs;

		},

		getGravesToRaise: function () {

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				map = view.get('map'),
				terrain = map.terrain,
				graves = model.get('graves'),
				availableGraves = [],
				raiseRange = unit.get('raiseRange'),
				availableXYToRaise,
				pathFinder;

			if ( !raiseRange ) {
				return availableGraves;
			}

			pathFinder = new PathFinder({
				blackWholes: [],
				terrain: terrain,
				mov: raiseRange - 1,
				x: unit.get('x'),
				y: unit.get('y'),
				moveType: unit.get('moveType'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: false
			});

			availableXYToRaise = pathFinder.getAvailablePath();

			_.each(availableXYToRaise, function (xy) {
				var graveToAdd = _.find(graves, xy);
				return graveToAdd && availableGraves.push(graveToAdd);
			});

			return availableGraves;

		},

		getConfirmMoveActions: function (xy) {

			var unit = this,
				view = unit.get('view'),
				sizes = view.get('map').size,
				undoMoveActions = [],
				curX = xy.x,
				curY = xy.y,
				beforeX = xy.beforeX,
				beforeY = xy.beforeY,
				x, y,
				xLen, yLen;

			for (x = 0, xLen = sizes.width; x < xLen; x += 1) {
				for (y = 0, yLen = sizes.height; y < yLen; y += 1) {
					undoMoveActions.push({
						x: x,
						y: y,
						beforeX: beforeX,
						beforeY: beforeY
					});
				}
			}

			return {
				unit: unit,
				confirmMoveAction: {
					x: curX,
					y: curY
				},
				undoMoveActions: undoMoveActions
			};

		},

		getConfirmAttackActions: function (xy) {

			var unit = this,
				view = unit.get('view'),
				sizes = view.get('map').size,
				undoAttackActions = [],
				curX = xy.x,
				curY = xy.y,
				x, y,
				xLen, yLen;

			for (x = 0, xLen = sizes.width; x < xLen; x += 1) {
				for (y = 0, yLen = sizes.height; y < yLen; y += 1) {
					undoAttackActions.push({
						x: x,
						y: y
					});
				}
			}

			return {
				unit: unit,
				confirmAttackAction: {
					x: curX,
					y: curY
				},
				undoAttackActions: undoAttackActions
			};

		},

		getUnitByXY: function (xy) {

			var unit = this,
				units = unit.get('model').get('units'),
				x = xy.x,
				y = xy.y,
				enemyUnit = false;

			_.each(units, function (unit) {

				var unitX = unit.get('x'),
					unitY = unit.get('y');

				if (x === unitX && y === unitY) {
					enemyUnit = unit;
				}

			});

			return enemyUnit;

		},

		canStrikeBack: function (enemy) {

			var unit = this,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				enemyX = enemy.get('x'),
				enemyY = enemy.get('y'),
				dX = Math.abs(unitX - enemyX),
				dY = Math.abs(unitY - enemyY);

			return dX + dY <= 1;

		},

		getAttackToUnit: function (enemy) {

			// todo: count more parameters,
			// like level,
			// bonus damage by level,
			// bonus armor by level,
			// poisoned, wisp aura,
			// special armor for elemental
			// special damage archer vs dragon
			// special damage wisp vs skeleton

			var unit = this,
				unitHealth = unit.get('health'),
				enemyHealth = enemy.get('health'),
				unitDefaultHealth = unit.get('defaultHealth'),
				model = unit.get('model'),
				unitAkt = unit.get('atk'),
				maxAtk = unitAkt.max,
				minAtk = unitAkt.min,
				atk = unit.util.getRandomBetween(minAtk, maxAtk),
				enemyArmor = enemy.get('def'),
				groundArmor = model.getArmorByXY({
					x: enemy.get('x'),
					y: enemy.get('y')
				});

			atk = atk - ( enemyArmor + groundArmor );

			return Math.round(atk);

		},

		getBuildingToFix: function () {

			var unit = this,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				model = unit.get('model'),
				buildings = model.get('buildings'),
				building = null;

			if ( unit.get('canFixBuilding') ) {
				building = _.find(buildings, {x: unitX, y: unitY, state: 'destroyed'});
			}

			return building;

		},

		getBuildingToOccupy: function () {

			var unit = this,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				model = unit.get('model'),
				unitOwnerId = unit.get('ownerId'),
				listOccupyBuilding = unit.get('listOccupyBuilding'),
				buildings = model.get('buildings'),
				building = _.find(buildings, {x: unitX, y: unitY});

			if ( !listOccupyBuilding || !building ) {
				return false;
			}

			if ( building.state !== 'normal' ) {
				return false;
			}

			if ( building.ownerId === unitOwnerId ) {
				return false;
			}

			if ( !_.contains(listOccupyBuilding, building.type) ) {
				return false;
			}

			return building;

		},

		//////////
		// unit's action
		//////////

		moveTo: function (data) {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),

				x = data.x,
				y = data.y,

				beforeX = unit.get('x'),
				beforeY = unit.get('y');

			view
				.moveUnitTo(data)
				.done(function () {

					unit.set('x', x);
					unit.set('y', y);

					unit.set('didMove', true);

					// detect - confirm move

					var availableActions;

					if ( view.info.get('confirmMove') === 'on' ) {
						availableActions = unit.getConfirmMoveActions({
							x: x,
							y: y,
							beforeX: beforeX,
							beforeY: beforeY
						});
					} else {
						availableActions = unit.getAvailableActions();
					}

					view.showAvailableActions(availableActions);
					model.set('availableActions', availableActions);

				});

		},

		confirmMove: function () {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),
				availableActions = unit.getAvailableActions();

			view.clearAvailableActions();
			model.clearAvailableActions();

			view.showAvailableActions(availableActions);
			model.set('availableActions', availableActions);

		},

		attackToXy: function (action) {

			var unit = this,
				x = action.attackX,
				y = action.attackY,
				enemyUnit,
				model = unit.get('model'),
				view = unit.get('view'),
				availableActions;

			if ( view.info.get('confirmAttack') === 'on' && !action.confirmed ) {

				availableActions = unit.getConfirmAttackActions({
					x: x,
					y: y
				});

				model.set('availableActions', availableActions);
				view.showAvailableActions(availableActions);

			} else {

				enemyUnit = this.getUnitByXY({
					x: x,
					y: y
				});

				model.clearAvailableActions();
				view.clearAvailableActions();

				unit.attackToUnit(enemyUnit);

			}

		},

		attackToUnit: function (enemyUnit) {

			var unit = this,
				view = unit.get('view');


			view.showAttack({
				from: {
					x: unit.get('x'),
					y: unit.get('y')
				},
				to: {
					x: enemyUnit.get('x'),
					y: enemyUnit.get('y')
				}
			}).then(function () {

				unit.set('isActive', false);

				var atk = unit.getAttackToUnit(enemyUnit),
					enemyUnitHealth = enemyUnit.get('health');

				atk = Math.min(atk, enemyUnitHealth);
				enemyUnitHealth -= atk;
				enemyUnit.set('health', enemyUnitHealth);

				unit.setBy('xp', atk);

				return view.showDifferentUnitHealth({
					unit: enemyUnit,
					differentHealth: -atk
				});

			}).then(function () {

				var enemyUnitHealth = enemyUnit.get('health'),
					model = enemyUnit.get('model');

				if (enemyUnitHealth > 0) {

					if ( enemyUnit.canStrikeBack(unit) ) {

						view.showAttack({
							from: {
								x: enemyUnit.get('x'),
								y: enemyUnit.get('y')
							},
							to: {
								x: unit.get('x'),
								y: unit.get('y')
							}
						}).then(function () {

							var atk = enemyUnit.getAttackToUnit(unit),
								unitHealth = unit.get('health');

							atk = Math.min(atk, unitHealth);
							unitHealth -= atk;
							unit.set('health', unitHealth);

							enemyUnit.setBy('xp', atk);

							return view.showDifferentUnitHealth({
								unit: unit,
								differentHealth: -atk
							});

						}).then(function () {

							var unitHealth = unit.get('health'),
								model = unit.get('model');

							if ( unitHealth <= 0 ) {

								model.addGraveInsteadUnit(unit);
								//uni
								enemyUnit.autoSetLevel();
								// todo: count level for enemy
							} else {
								enemyUnit.autoSetLevel();
								unit.autoSetLevel();
								// todo: count level for both unit
							}

						});

					} else {
						console.log('-- can NOT strike BACK');
						unit.autoSetLevel();

					}

				} else {
					model.addGraveInsteadUnit(enemyUnit);
					console.log(' -- create grove for enemy unit');
					unit.autoSetLevel();
				}

			});

		},

		undoMoveAction: function (data) {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),

				x = data.beforeX,
				y = data.beforeY;

			view
				.moveUnitTo({
					x: x,
					y: y,
					unit: data.unit
				})
				.done(function () {

					unit.set('x', x);
					unit.set('y', y);

					unit.set('didMove', false);

					var availableActions = unit.getAvailableActions();
					view.markActiveSquare({
						x: x,
						y: y
					});
					view.showAvailableActions(availableActions);
					model.set('availableActions', availableActions);

				});

		},

		confirmAttack: function (action) {

			this.attackToXy({
				attackX: action.x,
				attackY: action.y,
				confirmed: true
			});

		},

		undoAttack: function () {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),
				availableActions = unit.getAvailableActions();

			view.clearAvailableActions();
			model.clearAvailableActions();

			view.showAvailableActions(availableActions);
			model.set('availableActions', availableActions);

			view.markActiveSquare({
				x: unit.get('x'),
				y: unit.get('y')
			});

		},

		raise: function (action) {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),
				x = action.x,
				y = action.y,
				graves = model.get('graves'),
				grave = _.find(graves, { x: x, y: y }),
				newUnitData,
				newUnit;

			model.removeGrave(grave);
			view.removeGrave(grave);

			model.clearAvailableActions();
			view.clearAvailableActions();

			unit.set('isActive', false);

			newUnitData = {
				ownerId: unit.get('ownerId'),
				type: 'skeleton',
				x: x,
				y: y,
				teamNumber: unit.get('teamNumber'),
				color: unit.get('color')
			};

			newUnit = model.appendUnit(newUnitData);

			newUnit.set('isActive', false);

		},

		fixBuilding: function (action) {

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				building = action.buildingToFix;

			unit.set('isActive', false);

			view.clearAvailableActions();
			model.clearAvailableActions();

			building.state = 'normal';
			view.redrawBuilding(building);

		},

		occupyBuilding: function (action) {

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				building = action.buildingToOccupy;

			unit.set('isActive', false);

			view.clearAvailableActions();
			model.clearAvailableActions();

			building.color = unit.get('color');
			building.ownerId = unit.get('ownerId');
			building.teamNumber = unit.get('teamNumber');

			view.redrawBuilding(building);

		},

		healthUpByBuilding: function (building) {

			if ( !building ) {
				return;
			}

			var unit = this,
				unitTeamNumber = unit.get('teamNumber'),
				unitHealth = unit.get('health'),
				defaultHealth = unit.get('defaultHealth'),
				view = unit.get('view'),
				buildingType = building.type,
				buildingTeamNumber = building.teamNumber,

				deltaHealth = defaultHealth - unitHealth,
				buildingUpHealth = win.APP.building.list[buildingType].healthUp;

			deltaHealth = Math.min(deltaHealth, buildingUpHealth);

			if ( !deltaHealth ) {
				return;
			}

			switch (buildingType) {

				case 'well':
				case 'temple':
					unit.setBy('health', deltaHealth);
					view.showDifferentUnitHealth({
						unit: unit,
						differentHealth: deltaHealth
					});
					break;

				case 'castle':
				case 'farm':
					if ( unitTeamNumber === buildingTeamNumber ) {
						unit.setBy('health', deltaHealth);
						view.showDifferentUnitHealth({
							unit: unit,
							differentHealth: deltaHealth
						});
					}
					break;

			}

		},

		prepareToNextTurn: function () {

			var unit = this;

			// todo: see unit.setDefaultState();
			unit.set('isActive', true);
			unit.set('didMove', false);
			unit.set('didAttack', false);
			//unit.set('didRaise', false);
			unit.set('isPoison', false); // todo: see poison counter
			//unit.set('didPoison', false);
			unit.set('underWispAura', false);
			unit.set('gotBuilding', false);
			unit.set('fixedBuilding', false);

		},

		util: {
			getRandomBetween: function (start, end) {
				return Math.floor(Math.random() * (end - start + 1) + start);
			}
		}

	});




	function PathFinder(data) {

		this.attr = {};

		this.setAttributes(data);

		this.set('availablePath', []);
		this.set('donePathPoints', []);

		this.setTerrainType();

	}

	PathFinder.prototype = {

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},

		get: function (key) {
			return this.attr[key];
		},

		setAttributes: function (data) {
			var key;
			for (key in data) {
				if (data.hasOwnProperty(key)) {
					this.set(key, data[key]);
				}
			}
		},

		setTerrainType: function () {

			var terrain = this.get('terrain'),
				key;

			for (key in terrain) {
				if (terrain.hasOwnProperty(key)) {
					terrain[key] = win.APP.map.getTypeByTileName(terrain[key]);
				}
			}

		},

		getSquareByXY: function (x, y) {
			return this.get('terrain')['x' + x + 'y' + y];
		},

		getAvailablePath: function () {

			var availablePath,
				point = new PathFinderPoint({
					pathFinder: this,
					mov: this.get('mov'),
					x: this.get('x'),
					y: this.get('y')
				});

			availablePath = this.get('availablePath');

			// remove first xy with unit's xy
			availablePath.shift();

			this.set('availablePath', availablePath);

			return this.get('availablePath');

		},

		addCoordinatesToAvailablePath: function (data) {

			var isInPoints = false,
				x = data.x,
				y = data.y;

			this.get('availablePath').every(function (point) {

				if (point.x === x && point.y === y) {
					isInPoints = true;
					return false;
				}

				return true;

			});

			if (isInPoints) {
				return;
			}

			this.get('availablePath').push(data);

		},

		isInDonePoints: function (x, y, mov) {

			var isInDonePoints = false;

			this.get('donePathPoints').forEach(function (point) {
				if ( point.x === x && point.y === y && mov <= point.mov ) {
					isInDonePoints = true;
				}
			});

			return isInDonePoints;

		},

		addToDonePoints: function (x, y, mov) {

			if (this.isInDonePoints(x, y, mov)) {
				return;
			}

			this.get('donePathPoints').push({ x: x, y: y, mov: mov });
		}

	};


	function PathFinderPoint(data) {
		this.attr = data;
		this.run();
	}

	PathFinderPoint.prototype = {

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},

		get: function (key) {
			return this.attr[key];
		},

		run: function () {

			var x = this.get('x'),
				y = this.get('y'),
				xy2 = {x: x, y: y - 1},
				xy4 = {x: x - 1, y: y},
				xy6 = {x: x + 1, y: y},
				xy8 = {x: x, y: y + 1},
				mov = this.get('mov'),
				pathFinder = this.get('pathFinder');

			// this is in donePoints
			if ( pathFinder.isInDonePoints(x, y, mov) ) {
				return;
			}

			pathFinder.addToDonePoints(x, y, mov);

			// add current coordinates to parent
			pathFinder.addCoordinatesToAvailablePath({x: x, y: y});

			this.tryGoToSquare(xy4);
			this.tryGoToSquare(xy6);
			this.tryGoToSquare(xy2);
			this.tryGoToSquare(xy8);

		},

		tryGoToSquare: function (coordinates) {

			var x = coordinates.x,
				y = coordinates.y,
				mov = this.get('mov'),
				pathFinder = this.get('pathFinder'),
				minX = pathFinder.get('minX'),
				minY = pathFinder.get('minY'),
				maxX = pathFinder.get('maxX'),
				maxY = pathFinder.get('maxY'),
				blackWholes = pathFinder.get('blackWholes'),
				isRelativeTypeSpace = pathFinder.get('relativeTypeSpace'),
				squareType,
				unitMoveType,
				pathResistance = 1;

			// detect max and min xy
			if ( x > maxX || x < minX || y > maxY || y < minY ) {
				return;
			}

			// detect blackWholes
			if ( blackWholes.indexOf('x' + x + 'y' + y) !== -1 ) {
				return;
			}

			if (isRelativeTypeSpace) {

				squareType = pathFinder.getSquareByXY(x, y);
				unitMoveType = pathFinder.get('moveType');

				switch (unitMoveType) {
					case 'fly':
						pathResistance = 1;
						break;
					case 'flow':
						if (squareType === 'water') {
							pathResistance = win.APP.map.water.flowPathResistance;
						} else {
							pathResistance = win.APP.map[squareType].pathResistance;
						}
						break;
					default :
						pathResistance = win.APP.map[squareType].pathResistance;

				}

			}

			if ( mov >= pathResistance ) {
				new PathFinderPoint({
					pathFinder: pathFinder,
					mov: mov - pathResistance,
					x: x,
					y: y
				});
			}

		}

	};


}(window));
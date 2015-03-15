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

			// default state
			this.setDefaultState();

			this.set('health', 100);

		},

		setDefaultState: function () {

			this.set('isActive', true);
			this.set('didMove', false);
			this.set('didAttack', false);
			this.set('didRaise', false);
			this.set('isPoison', false);
			this.set('didPoison', false);
			this.set('underWispAura', false);
			this.set('gotBuilding', false);
			this.set('fixedBuilding', false);

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
				availableAttacks,
				unitsUnderAttack,
				riseSkeletons,
				availableFixBuilding,
				availableGetBuilding,
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
			availablePathViewWithTeamUnit = unit.getAvailablePathViewWithTeamUnit();

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

			return {
				unit: unit,
				availablePathViewWithTeamUnit: availablePathViewWithTeamUnit,
				availablePathViewWithoutTeamUnit: availablePathViewWithoutTeamUnit
			};

		},

		getAvailablePathViewWithTeamUnit: function () {

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

		getConfirmMoveActions: function (xy) {

			var unit = this,
				view = this.get('view'),
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
						beforeX: xy.beforeX,
						beforeY: xy.beforeY
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

		prepareToNextTurn: function () {

			var unit = this;

			unit.set('isActive', true);
			unit.set('didMove', false);
			unit.set('didAttack', false);
			unit.set('didRaise', false);
			unit.set('isPoison', false); // todo: see poison counter
			unit.set('didPoison', false);
			unit.set('underWispAura', false);
			unit.set('gotBuilding', false);
			unit.set('fixedBuilding', false);

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
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
				availablePathViewWithTeamUnit,
				availablePathViewWithoutTeamUnit,
				availableAttacks,
				riseSkeletons,
				availableFixBuilding,
				availableGetBuilding,
				openStore;

			availablePathViewWithTeamUnit = this.getAvailablePathViewWithTeamUnit();
			console.log(availablePathViewWithTeamUnit);

			// get available path with team unit
			// get available path withOUT team unit
			// get available attack
			// get available rise skeleton


		},

		getAvailablePathViewWithTeamUnit: function () {

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
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: true
			});

			return pathFinder.getAvailablePath();

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

		getAvailablePath: function () {

			var point = new PathFinderPoint({
				pathFinder: this,
				mov: this.get('mov'),
				x: this.get('x'),
				y: this.get('y')
			});

			var availablePath = this.get('availablePath');

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
				pathResistance = 1; // todo: set pathResistance relative
									// unit relativeTypeSpace, unit type, terrain type

			// detect max and min xy
			if ( x > maxX || x < minX || y > maxY || y < minY ) {
				return;
			}

			// detect blackWholes
			if ( blackWholes.indexOf('x' + x + 'y' + y) !== -1 ) {
				return;
			}

			if ( mov >= pathResistance ) {
				new PathFinderPoint({
					pathFinder: this.get('pathFinder'),
					mov: mov - pathResistance,
					x: x,
					y: y
				});
			}

		}
		//tryGoToSquare: function (coordinates) {
		//
		//	var x = coordinates.x,
		//		y = coordinates.y,
		//		square,
		//		pathResistance = 1,
		//		point,
		//		unitType = this.unit.runType;
		//
		//	if (this.parent.relativeTypeSpace) {
		//		// get square bu coordinates
		//		square = APP.map.getSquareByXY(this.parent.map, x, y);
		//		if (square) {
		//
		//			switch (unitType) {
		//				case 'fly':
		//					pathResistance = 1;
		//					break;
		//
		//				case 'flow':
		//
		//					if (square === 'water') {
		//						pathResistance = APP.map.water.specialPathResistance;
		//					}
		//
		//					break;
		//				default :
		//					pathResistance = APP.map[square].pathResistance;
		//
		//			}
		//
		//
		//
		//		}
		//	}
		//
		//	if (this.mov >= pathResistance) {
		//		point = new PathFinderPoint({
		//			parent: this.parent,
		//			mov: this.mov - pathResistance,
		//			x: x,
		//			y: y,
		//			unit: this.unit
		//		});
		//
		//	}
		//
		//
		//}

	};


}(window));
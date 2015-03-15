(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _ */

	win.APP.BB.BattleModel = Backbone.Model.extend({

		initialize: function() {

			var args = this.get('args');

			this.set('jsMapKey', args.jsMapKey);
			this.set('unitLimit', args.unitLimit);
			this.set('players', JSON.parse(JSON.stringify(args.players)));
			this.set('buildings', []); // will be filled building append units
			this.set('units', []); // will be filled after append units

			// add money to player
			_.each(this.get('players'), function (player) {
				player.money = args.money;
			});

			this.clearAvailableActions();
			
		},

		appendBuildings: function () {

			var mapBuildings = this.get('map').buildings,
				view = this.get('view'),
				players = this.get('players'),
				buildingArr = this.get('buildings');

			_.each(mapBuildings, function (building) {

				// detect color of building
				var player = _.where(players, { id: building.ownerId })[0];
				building.color = player ? player.color : 'gray';

				buildingArr.push(building);

				view.appendBuilding(building);

			});

		},

		appendUnits: function () {

			var model = this,
				mapUnits = model.get('map').units,
				view = model.get('view'),
				players = model.get('players'),
				unitArr = model.get('units');

			_.each(mapUnits, function (unit) {

				// detect color of building
				var player = _.where(players, { id: unit.ownerId })[0];

				unit.color = player.color;
				unit.teamNumber = player.teamNumber;

				unit = win.APP.unitMaster.createUnits(unit);
				unit.set('model', model);
				unit.set('view', view);

				unitArr.push(unit);

				view.appendUnit(unit);

			});

		},

		startGame: function () {
			this.set('activePlayer', this.get('players')[0]);

			this.startTurn();

		},

		newTurn: function () {
			this.setActivePlayer();

			this.startTurn();

		},

		setActivePlayer: function () {

			var players = this.get('players'),
				activePlayer = this.get('activePlayer'),
				playersLength = players.length,
				activePlayerIndex = players.indexOf(activePlayer),
				nextActivePlayerIndex = activePlayerIndex + 1;

			if (nextActivePlayerIndex >= playersLength) {
				nextActivePlayerIndex = 0;
			}

			activePlayer = players[nextActivePlayerIndex];
			this.set('activePlayer', activePlayer);

		},

		startTurn: function () {

			this.clearAvailableActions();

			this.setUnitsState();

			console.log('active player is (see below)');
			console.log(this.get('activePlayer'));


		},

		click: function (xy) {

			// 0 - show unit available attack (using available path) - hold or dblclick
			// 1 - show unit info in popup - hold or dblclick
			// 5 - show available path - only for player unit - click

			var model = this,
				view = this.get('view'),
				activePlayer = model.get('activePlayer'),
				action = model.getActionByXY(xy),
				unit = model.getUnitByXY(xy),
				building = model.getBuildingByXY(xy),
				terrain = model.getTerrainByXY(xy),
				availableActions;

			// find active actions
			if (action) {
				// do action
				console.log('action');
				// todo: also find end move action, see settings
				this.doAction(action);
				return;
			}

			// find unit
			if (unit) {

				// if unit is active - 1
					// if unit owned by active player
						// create and show available action
					// if unit is NOT owned by active player
						// show available path and available attack (attack only)
				// if unit is inactive - 2
					// show terrain info

				if ( unit.get('isActive') ) {

					if ( unit.get('ownerId') === activePlayer.id ) {
						// create and show available action
						availableActions = unit.getAvailableActions();
						view.showAvailableActions(availableActions);
						model.set('availableActions', availableActions);
						console.log('create and show available action');
					} else {
						// show available path and available attack (attack only)
						console.log('show available path and available attack (attack only)');
						model.clearAvailableActions();
						view.clearAvailableActions();
					}

				} else {
					// show terrain info
					console.log(terrain);
					model.clearAvailableActions();
					view.clearAvailableActions();
				}

				return;
			}

			// find building
			if (building) {
				// show buildingterrain info
				console.log(building);
				model.clearAvailableActions();
				view.clearAvailableActions();
				return;
			}

			// find terrain
			if (terrain) {
				// show terrain info
				console.log(terrain);
				model.clearAvailableActions();
				view.clearAvailableActions();
				return;
			}

		},

		//////////////////
		// find by xy
		//////////////////

		getActionByXY: function (xy) {

			var model = this,
				actions = model.get('availableActions'),
				unit = actions.unit,
				availablePathViewWithoutTeamUnit = actions.availablePathViewWithoutTeamUnit,
				confirmMoveAction = actions.confirmMoveAction,
				unitsUnderAttack = actions.unitsUnderAttack,
				move,
				undoMoveActions = actions.undoMoveActions;

			console.log(' -- actions');
			console.log(actions);

			move = _.find(availablePathViewWithoutTeamUnit, xy);

			if ( move ) {
				return {
					type: 'move',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}

			if ( confirmMoveAction && confirmMoveAction.x === xy.x && confirmMoveAction.y === xy.y ) {
				return {
					type: 'confirmMove',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}

			if ( undoMoveActions && _.find(undoMoveActions, xy) ) {
				return {
					type: 'undoMoveAction',
					unit: unit,
					beforeX: undoMoveActions[0].beforeX,
					beforeY: undoMoveActions[0].beforeY
				};
			}

			if ( unitsUnderAttack && _.find(unitsUnderAttack, xy) ) {
				return {
					type: 'attack',
					unit: unit,
					attackX: xy.x,
					attackY: xy.y
				};
			}


			return false;

		},

		getUnitByXY: function (xy) {

			var x = xy.x,
				y = xy.y,
				result = false;

			_.each(this.get('units'), function (unit) {
				var unitData = unit.toJSON();
				if ( unitData.x === x && unitData.y === y ) {
					result = unit;
				}
			});

			return result;

		},

		getBuildingByXY: function (xy) {

			var x = xy.x,
				y = xy.y,
				result = false;

			_.each(this.get('buildings'), function (building) {
				if ( building.x === x && building.y === y ) {
					result = building;
				}
			});

			return result;

		},

		getTerrainByXY: function (xy) {

			var map = this.get('map'),
				terrain = map.terrain,
				terrainName = terrain['x' + xy.x + 'y' + xy.y] || '',
				terrainType = win.APP.map.getTypeByTileName(terrainName);

			if ( !terrainName ) { // if terrain with xy is not exist -> return false
				return false;
			}

			return {
				xy: xy,
				x: xy.x,
				y: xy.y,
				terrainName: terrainName,
				terrainType: terrainType
			};

		},

		//////////////////
		// unit actions
		//////////////////

		clearAvailableActions: function () {
			this.set('availableActions', []);
		},

		doAction: function (action) {

			// todo: also find end move action, see settings

			var unit = action.unit,
				actionType = action.type;

			switch (actionType) {

				case 'move':

					unit.moveTo(action);

					break;

				case 'confirmMove':

					unit.confirmMove();

					break;

				case 'undoMoveAction':

					unit.undoMoveAction(action);

					break;

				case 'attack':

					unit.attackToXy(action);

					break;

				default:



					debugger
					console.log('--- undefind unit action');

			}

			console.log('do action');
			console.log(action);

		},

		setUnitsState: function () {

			var model = this,
				units = model.get('units');

			_.each(units, function (unit) {
				unit.prepareToNextTurn();
			});

		}

	});

}(window));
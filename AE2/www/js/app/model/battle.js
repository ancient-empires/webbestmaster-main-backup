/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _, log */

	win.APP.bb = win.APP.bb || {};

	win.APP.bb.battleData = {};

	win.APP.BB.BattleModel = Backbone.Model.extend({

		initialize: function() {

			var model = this,
				args = model.get('args'),
				players,
				map = model.get('map'),
				playersMoney = map.money;

			win.APP.bb.battleData = {
				isEndGame: 'no',
				gameTo: 'quit'
			};

			players = JSON.parse(JSON.stringify(args.players));

			players = _.filter(players, function (player) {
				return player.type !== 'none';
			});

			model.set('jsMapKey', args.jsMapKey);
			model.set('unitLimit', args.unitLimit);
			model.set('players', players);
			model.set('buildings', []); // will be filled building append units
			model.set('units', []); // will be filled after append units
			model.set('graves', []); // will be filled in battle

			if (playersMoney) {
				_.each(model.get('players'), function (player, index) {
					player.money = playersMoney[index];
				});
			} else {
				// add money to player
				_.each(model.get('players'), function (player) {
					player.money = args.money;
				});
			}

			this.clearAvailableActions();

			this.autoSetCommandersName();

		},

		appendBuildings: function () {

			var mapBuildings = this.get('map').buildings,
				view = this.get('view'),
				players = this.get('players'),
				buildingArr = this.get('buildings'),
				buildingDefaultColor = win.APP.building.defaults.color,
				buildingMap = win.APP.building.list,
				buildingDefaultTeamNumber = win.APP.building.defaults.teamNumber;

			_.each(mapBuildings, function (building) {

				// detect color of building
				var player = _.where(players, { id: building.ownerId })[0];

				building.color = player ? player.color : buildingDefaultColor;
				building.teamNumber = player ? player.teamNumber : buildingDefaultTeamNumber;
				building.canBeStore = Boolean(buildingMap[building.type].canBeStore);

				buildingArr.push(building);

				view.appendBuilding(building);

			});

		},

		appendUnits: function () {

			var model = this,
				mapUnits = model.get('map').units,
				players = model.get('players');

			_.each(mapUnits, function (unit) {

				// detect color of building
				var player = _.where(players, { id: unit.ownerId })[0];

				if ( !player ) { // detect player.type === 'none' was deleted from players
					return;
				}

				unit.color = player.color;
				unit.teamNumber = player.teamNumber;

				model.appendUnit(unit);

			});

		},

		appendUnit: function (unitData) {

			var unit,
				model = this,
				player,
				view = model.get('view'),
				unitArr = model.get('units'),
				unitType = unitData.type,
				isCommander = unitType === 'commander' || _.contains(win.APP.unitMaster.commanderList, unitType);

			if ( isCommander ) {
				player = _.find( model.get('players'), {id: unitData.ownerId});
				unitData.type = player.commander.name;
				unitData.xp = player.commander.xp;
				player.commander.isLive = true;
			}

			unit = win.APP.unitMaster.createUnit(unitData);
			unit.set('model', model);
			unit.set('view', view);

			unitArr.push(unit);
			view.appendUnit(unit);

			model.autoSetWispAura();

			return unit;

		},

		appendUnitNearFrom: function (unitData) {
			
			var model = this,
				view = model.get('view'),
				mapSize = model.get('map').size,
				unitLimit = model.get('unitLimit'),
				mapWidth = mapSize.width,
				mapHeight = mapSize.height,
				getPathSize = win.APP.util.getPathSize,
				currentXY = {
					x: unitData.x,
					y: unitData.y
				},
				players = model.get('players'),
				player = _.find(players, {id: unitData.ownerId}),
				freeXYs = [],
				y, x, xy;

			for (x = 0; x < mapWidth; x += 1) {
				for (y = 0; y < mapHeight; y += 1) {
					xy = {x: x, y: y};
					if ( !model.getUnitByXY(xy) ) {
						freeXYs.push(xy);
					}
				}
			}

			freeXYs = freeXYs.sort(function (xy1, xy2) {
				return getPathSize(currentXY, xy1) - getPathSize(currentXY, xy2);
			});

			model.appendUnit({
				type: unitData.type,
				ownerId: unitData.ownerId,
				teamNumber: player.teamNumber,
				color: player.color,
				x: freeXYs[0].x,
				y: freeXYs[0].y
			});

			view.updateStatusBar();

		},
		
		autoSetCommandersName: function () {

			var model = this,
				players = model.get('players'),
				mapUnits = model.get('map').units,
				copyJSON = win.APP.BB.BaseView.prototype.util.copyJSON,
				util = win.APP.util,
				commanderList = util.assortArray(copyJSON(win.APP.unitMaster.commanderList));

			// set commanders from map
			_.each(players, function (player) {

				player.commander = {
					isLive: false,
					name: null,
					xp: 0
				};

				var ownerId = player.id,
					units = _.where(mapUnits, { ownerId: ownerId });

				_.each(units, function (unit) {
					var unitType = unit.type;
					if ( _.contains(commanderList, unitType) ) {
						player.commander.name = unitType;
						util.arrayRemoveByValue(commanderList, unitType);
					}
				});

			});

			// set other commanders
			_.each(players, function (player) {
				if ( player.commander.name ) {
					return;
				}
				player.commander.name = commanderList.pop();
			});

		},

		addGraveInsteadUnit: function (unit) {

			unit.unbindEventListener();

			var withoutGrave = unit.get('withoutGrave'),
				model = this,
				view = model.get('view'),
				grave = win.APP.unitMaster.createGrave({
					x: unit.get('x'),
					y: unit.get('y')
				});

			model.removeUnit(unit);
			view.removeUnit(unit);

			if (withoutGrave) {
				return;
			}

			model.addGrave(grave);
			view.addGrave(grave);

			model.checkPlayerDefeat();
			model.checkEndMission();

		},

		removeUnit: function (unit) {

			var model = this,
				units = model.get('units'),
				unitIndex = units.indexOf(unit);

			units.splice(unitIndex, 1);

			model.checkEndMission();

		},

		addGrave: function (grave) {

			var model = this,
				graves = model.get('graves');

			graves.push(grave);

		},

		removeGrave: function (grave) {

			var model = this,
				graves = model.get('graves'),
				graveIndex = graves.indexOf(grave);

			graves.splice(graveIndex, 1);

		},

		autoSetWispAura: function () {

			var model = this,
				activePlayer = model.get('activePlayer'),
				allTeamUnits,
				wisps,
				wispAuraMap,
				otherUnits;

			if ( !activePlayer ) {
				return;
			}

			allTeamUnits = model.getUnitsByTeamNumber(activePlayer.teamNumber);
			wisps = [];
			wispAuraMap = [];
			otherUnits = [];

			_.each(allTeamUnits, function (unit) {
				return unit.get('type') === 'wisp' ? wisps.push(unit) : otherUnits.push(unit);
			});

			// create wisp aura map
			_.each(wisps, function (wisp) {
				var auraMap = wisp.getWispAuraMap();
				wispAuraMap = wispAuraMap.concat(auraMap);
			});

			_.each(otherUnits, function (unit) {

				var unitX = unit.get('x'),
					unitY = unit.get('y');

				unit.set('underWispAura', Boolean( _.find(wispAuraMap, { x: unitX, y: unitY }) ));

			});

		},

		startGame: function () {

			var model = this,
				map = model.get('map'),
				mapType = map.type,
				view = model.get('view');

			model.set('activePlayer', model.get('players')[0]);

			model.startTurn();

			model.autoSetWispAura();

			if (mapType === 'skirmish') {
				view.showObjective();
			}

			if (mapType === 'mission') {
				view.showBriefing({
					briefingName: 'startBriefing'
				});
			}

		},

		newTurn: function () {

			var model = this,
				view = model.get('view'),
				earn, color,
				activePlayer;

			model.setActivePlayer();

			activePlayer = model.get('activePlayer');

			earn = model.grabBuildingEarn(); // auto increase player money
			color = activePlayer.color;

			model.startTurn();

			view.showPopup({
				popupName: 'between-turn-notification',
				popupData: {
					color: color,
					earn: earn
				}
			});

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

			var model = this,
				view = model.get('view'),
				activePlayer = model.get('activePlayer');

			model.clearAvailableActions();

			model.setUnitsState();

			model.setGraveState();

			model.healthByBuildings();

			model.autoSetPoisonCount();

			model.get('view').updateStatusBar();

			if (activePlayer.type === 'cpu') {
				view.hidePopups({ timePadding: win.APP.info.actionTime() * 3 }).then(function () {
						model.runCpu();
				});
				view.cpuMode(true);
			} else {
				view.cpuMode(false);
			}


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
				buildingData = win.APP.building.list,
				terrain = model.getTerrainByXY(xy),
				availableActions,
				unitOwnerId;

			// find active actions
			if (action) {
				// do action
				model.doAction(action);
				return;
			}

			// find unit
			if (unit) {

				unitOwnerId = unit.get('ownerId');

				// if unit is active - 1
					// if unit owned by active player
						// create and show available action
					// if unit is NOT owned by active player
						// show available path and available attack (attack only)
				// if unit is inactive - 2
					// show terrain info

				if ( unit.get('isActive') ) {

					if ( unitOwnerId === activePlayer.id ) {
						// create and show available action
						availableActions = unit.getAvailableActions();
						view.showAvailableActions(availableActions);
						model.set('availableActions', availableActions);
						log('create and show available action');
					} else {
						// show available path and available attack (attack only)
						log('show available path and available attack (attack only)');
						model.clearAvailableActions();
						view.clearAvailableActions();

						if ( building && buildingData[building.type].canBeStore ) { // try to open store
							model.tryToOpenStoreByBuilding(building);
						}

					}

				} else {

					if ( unitOwnerId === activePlayer.id && building && buildingData[building.type].canBeStore ) { // try to open store
						model.openStore(xy);
					}

					// show terrain info
					log(terrain);
					model.clearAvailableActions();
					view.clearAvailableActions();

				}

				return;
			}

			// find building
			if (building) {
				// show building / terrain info // see view.autoSetSquareInfo
				model.tryToOpenStoreByBuilding(building);
				log(building);
				model.clearAvailableActions();
				view.clearAvailableActions();
				return;
			}

			// find terrain
			if (terrain) {
				// show terrain info // see view.autoSetSquareInfo
				log(terrain);
				model.clearAvailableActions();
				view.clearAvailableActions();
				return;
			}

		},

		getUnitsByOwnerId: function (ownerId) {
			return _.filter(this.get('units'), function (unit) {
				return unit.get('ownerId') === ownerId;
			});
		},

		getUnitsByTeamNumber: function (teamNumber) {
			return _.filter(this.get('units'), function (unit) {
				return unit.get('teamNumber') === teamNumber;
			});
		},

		getBuildingsByOwnerId: function (ownerId) {
			return _.where(this.get('buildings'), {ownerId: ownerId});
		},

		//getBuildingsByTeamNumber: function (teamNumber) {
		//
		//},

		//////////////////
		// find by xy
		//////////////////

		getActionByXY: function (xy) {

			var model = this,
				actions = model.get('availableActions'),
				unit = actions.unit,
				availablePathViewWithoutTeamUnit = actions.availablePathViewWithoutTeamUnit,
				confirmMoveAction = actions.confirmMoveAction,
				confirmAttackAction = actions.confirmAttackAction,
				unitsUnderAttack = actions.unitsUnderAttack,
				gravesToRaise = actions.gravesToRaise,
				move,
				undoMoveActions = actions.undoMoveActions,
				undoAttackActions = actions.undoAttackActions,
				buildingToFix = actions.buildingToFix,
				buildingToOccupy = actions.buildingToOccupy,
				openStore = actions.openStore;

			log(' -- actions');
			log(actions);

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

			if ( confirmAttackAction && confirmAttackAction.x === xy.x && confirmAttackAction.y === xy.y ) {
				return {
					type: 'confirmAttackAction',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}

			if ( undoAttackActions && _.find(undoAttackActions, xy) ) {
				return {
					type: 'undoAttackAction',
					unit: unit,
					x: xy.x,
					y: xy.y
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

			if ( gravesToRaise && _.find(gravesToRaise, xy) ) {
				return {
					type: 'raise',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}


			if ( buildingToFix && buildingToFix.x === xy.x && buildingToFix.y === xy.y ) {
				return {
					type: 'fix-building',
					unit: unit,
					buildingToFix: buildingToFix,
					x: xy.x,
					y: xy.y
				};
			}

			if ( buildingToOccupy && buildingToOccupy.x === xy.x && buildingToOccupy.y === xy.y  ) {
				return {
					type: 'occupy-building',
					unit: unit,
					buildingToOccupy: buildingToOccupy,
					x: xy.x,
					y: xy.y
				};
			}

			if ( openStore && openStore.x === xy.x && openStore.y === xy.y ) {
				return {
					type: 'open-store',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}


			return false;

		},

		getUnitByXY: function (xy) {

			var x = xy.x,
				y = xy.y,
				result = false;

			_.each(this.get('units'), function (unit) {
				if ( unit.get('x') === x && unit.get('y') === y ) {
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

		getArmorByXY: function (xy) {

			// try to get building
			var model = this,
				buildings = model.get('buildings'),
				build = _.find(buildings, xy),
				armor = build && win.APP.building.list[build.type].defence,
				terrainType;

			if (armor) {
				return armor;
			}

			terrainType = model.getTerrainByXY(xy).terrainType;
			return win.APP.map[terrainType].defence;

		},

		//////////////////
		// unit actions
		//////////////////

		clearAvailableActions: function () {
			this.set('availableActions', []);
		},

		doAction: function (action) {

			var model = this,
				unit = action.unit,
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


				case 'confirmAttackAction':

					unit.confirmAttack(action);

					break;

				case 'undoAttackAction':

					unit.undoAttack(action);

					break;

				case 'raise':

					unit.raise(action);

					break;

				case 'fix-building':

					unit.fixBuilding(action);

					break;

				case 'occupy-building':

					unit.occupyBuilding(action);

					break;

				case 'open-store':

					model.openStore(action);

					break;

				default:
					debugger
					log('--- undefind unit action');

			}

			log('do action');
			log(action);

		},

		setUnitsState: function () {

			var model = this,
				units = model.get('units');

			_.each(units, function (unit) {
				unit.prepareToNextTurn();
			});

		},

		setGraveState: function () {

			var model = this,
				view = model.get('view'),
				graves = model.get('graves'),
				stayGraves = [],
				removedGraves = [];

			_.each(graves, function (grave) {
				grave.increaseTime();
				return grave.needRemove() ? removedGraves.push(grave) : stayGraves.push(grave);
			});

			_.each(removedGraves, function (grave) {
				model.removeGrave(grave);
				view.removeGrave(grave);
			});

			model.set('graves', stayGraves);

		},

		healthByBuildings: function () {

			var model = this,
				buildings = model.get('buildings'),
				units = model.get('units'),
				activePlayerId = model.get('activePlayer').id;

			_.each(units, function (unit) {

				if ( unit.get('ownerId') !== activePlayerId ) {
					return;
				}

				var x = unit.get('x'),
					y = unit.get('y'),
					building = _.find(buildings, {x: x, y: y});

				unit.healthUpByBuilding(building);

			});

		},

		autoSetPoisonCount: function () {

			var model = this,
				units = model.get('units');

			_.each(units, function (unit) {

				var poisonCount = unit.get('poisonCount');

				if ( !poisonCount ) {
					return;
				}

				unit.setBy('poisonCount', -1);

			});

		},

		openStore: function (xy) {

			var model = this,
				view = model.get('view'),
				activePlayer = model.get('activePlayer');

			model.clearAvailableActions();
			view.clearAvailableActions();
			view.removeActiveSquare();

			new APP.BB.UnitStoreView({
				model: model,
				view: view,
				x: xy.x,
				y: xy.y,
				player: activePlayer
			});

		},

		tryToOpenStoreByBuilding: function (building) {

			var model = this,
				activePlayer = model.get('activePlayer');

			if ( building.ownerId !== activePlayer.id ) {
				return;
			}

			if ( !win.APP.building.list[building.type].canBeStore ) {
				return;
			}

			model.openStore({
				x: building.x,
				y: building.y
			});

		},

		grabBuildingEarn: function () {

			var model = this,
				earn = 0,
				player = model.get('activePlayer'),
				buildingData = win.APP.building.list,
				buildings = model.getBuildingsByOwnerId(player.id);

			_.each(buildings, function (building) {
				earn += buildingData[building.type].earn;
			});

			player.money += earn;

			return earn;

		},

		//////////////////
		// unit actions
		//////////////////

		checkEndMission: function () {

			if ( this.get('map').type !== 'mission' ) {
				return;
			}

			if ( this.checkCases() ) {
				return false;
			}

			var model = this,
				view = model.get('view'),
				map = model.get('map'),
				wins = map.win,
				isWin = true,
				defeats = map.defeat,
				isDefeat = false,
				players = model.get('players');


			// find win state
			_.each(wins, function (win) {
				isWin = isWin && model.checkState({
					detect: win
				});
			});

			if (isWin) {
				//win.APP.bb.battleData.isEndGame = 'yes'; // will be set after las notification in endBriefing
				view.showBriefing({
					briefingName: 'endBriefing'
				});
				return true;
			}

			// find defeat state
			_.each(defeats, function (defeat) {
				isDefeat = isDefeat || model.checkState({
					detect: defeat
				});
			});

			if (isDefeat) {
				//win.APP.bb.battleData.isEndGame = 'yes';
				win.APP.bb.battleData.isEndGame = 'yes';
				view.showPopup({
					popupName: 'win-or-defeat',
					parentView: view,
					popupData: {
						header: win.APP.lang.get('defeat')
					}
				});
				return true
			}

			// check here win and defeat

			return false;

		},

		checkPlayerDefeat: function () {

			if ( this.get('map').type !== 'skirmish' ) {
				return;
			}

			var model = this,
				view = model.get('view'),
				players = model.get('players'),
				looser = false,
				teamsNumbers = [],
				util = win.APP.util,
			//winTeam,
			//looserTeam,
				looserBuilding,
				teamOfLooser;

			_.each(players, function (player) {

				teamsNumbers.push(player.teamNumber);

				if ( model.playerIsDefeat(player) ) {
					looser = player;
				}

			});

			teamsNumbers = _.uniq(teamsNumbers);

			if ( !looser ) {
				return false;
			}

			// remove looser from players
			players = util.arrayRemoveByValue(players, looser);

			teamOfLooser = model.getTeamByPlayer(looser);

			if ( teamOfLooser.length ) { // team is empty

				// divide money and farm between team
				// divide money
				_.each(teamOfLooser, function (player) {
					player.money += Math.floor( looser.money / teamOfLooser.length ); // really do not want create one more variable with teamOfLooser.length
				});

				_.each( model.getBuildingsByOwnerId(looser.id), function (building) {

					var teamPlayer = teamOfLooser[0];

					building.color = teamPlayer.color;
					building.ownerId = teamPlayer.id;

					view.redrawBuilding(building);

				});

				view.showPopup({
					popupName: 'simple-popup',
					parentView: view,
					popupData: {
						header: win.APP.lang.get(looser.color + 'Defeat')
					}
				});

				return false;

			}

			// update team numbers
			teamsNumbers = [];
			_.each(players, function (player) {
				teamsNumbers.push(player.teamNumber);
			});
			teamsNumbers = _.uniq(teamsNumbers);

			if ( teamsNumbers.length === 1 ) { // detect winner

				//looserTeam = looser.teamNumber;
				//winTeam = teamsNumbers[0];

				win.APP.bb.battleData.isEndGame = 'yes';

				view.showPopup({
					popupName: 'win-or-defeat',
					parentView: view,
					popupData: {
						header: win.APP.lang.get('victory')
					}
				});

				return true; // end game

			}

			// adjust building
			looserBuilding = model.getBuildingsByOwnerId(looser.id);
			_.each(looserBuilding, function (building) {

				delete building.ownerId;
				building.teamNumber = null;
				delete building.color;

				view.redrawBuilding(building);

			});

			return false;

		},

		doCase: function (doIt, theCase) {

			var model = this,
				view = model.get('view');

			switch (doIt) {

				case 'appendUnits':
					_.each(theCase.units, function (unit) {
						model.appendUnitNearFrom(unit);
					});
					break;

				case 'showBriefing':

					view.showBriefing({
						briefingName: theCase.briefingName
					});

					break;

			}

			theCase.isDone = true;

		},

		checkCases: function () {

			var model = this,
				view = model.get('view'),
				map = model.get('map'),
				unorderedCases = _.where(map.unorderedCases, { isDone: false }),
				theCase = _.find(map.cases, { isDone: false });

			_.each(unorderedCases, function (caseItem) {

				if ( !model.checkState(caseItem) ) {
					return false;
				}

				_.each(caseItem.do, function (doIt) {
					model.doCase(doIt, caseItem);
				});

			});

			if ( !theCase ) {
				return false;
			}

			if ( !model.checkState(theCase) ) {
				return false;
			}

			_.each(theCase.do, function (doIt) {
				model.doCase(doIt, theCase);
			});

			return true;

		},

		playerHasCastle: function (player) {

			var model = this,
				buildings = model.getBuildingsByOwnerId(player.id);

			return Boolean( _.find(buildings, { type: 'castle' }) );

		},

		playerHasCommander: function (player) {
			return player.commander.isLive;
		},

		playerIsDefeat: function (player) {

			var model = this;

			return !(model.playerHasCastle(player) || model.playerHasCommander(player));

		},

		getTeamByPlayer: function (player) {

			var model = this,
				players = model.get('players'),
				team = [],
				teamNumber = player.teamNumber;

			_.each(players, function (teamPlayer) {

				if ( teamNumber !== teamPlayer.teamNumber || teamPlayer === player ) {
					return;
				}

				team.push(teamPlayer);

			});

			return team;

		},

		runCpu: function () {

			var model = this,
				cpu;

			cpu = new win.APP.Cpu({
				model: model,
				player: model.get('activePlayer')
			});

			cpu.run();

		},

		checkState: function (theCase) {

			var model = this,
				buildings = model.get('buildings'),
				view = model.get('view'),
				map = model.get('map'),
				unorderedCases = _.where(map.unorderedCases, { isDone: false }),
				castles = _.where(buildings, { type: 'castle' }),
				units = model.get('units'),
				enemyUnits = _.filter(units, function (unit) {
					return unit.get('ownerId') === 1;
				}),
				playerUnits = _.filter(units, function (unit) {
					return unit.get('ownerId') === 0;
				}),
				players = model.get('players'),
				isPassed,
				player = _.find(players, {id: 0});

			switch (theCase.detect) {

				case 'allCastles':

					return castles.length === _.where(castles, {ownerId: 0}).length;

					break;

				case 'noEnemyUnit':

					return !enemyUnits.length;

					break;

				case 'commanderIsDead':

					if (player.commander.isLive) {
						return false;
					}

					return {
						type: 'commanderIsDead'
					};

					break;

				case 'crystalIsDead':

					isPassed = true;

					_.each(playerUnits, function (unit) {

						if ( !isPassed ) {
							return;
						}

						if (unit.get('type') === 'crystal') {
							isPassed = false;
						}

					});

					return isPassed && { type: 'crystalIsDead' };

					break;

				case 'unitOnPlace':

					isPassed = false;

					_.each(playerUnits, function (unit) {
						_.each(theCase.place, function (place) {

							var unitX, unitY;

							if (isPassed) {
								return;
							}

							unitX = unit.get('x');
							unitY = unit.get('y');

							isPassed = unitX >= place.x1 && unitX <= place.x2 && unitY >= place.y1 && unitY <= place.y2;

						});
					});

					return isPassed;

					break;

				case 'allUnorderedCasesIsDone':

					return !unorderedCases.length;

					break;

			}

		}


	});

}(window));
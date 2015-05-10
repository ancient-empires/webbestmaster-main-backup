/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global _ */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.MapEditorView = APP.BB.BattleView.extend({

		events: {
			'click .js-open-map-popup': 'openMapPopup',
			//'change .js-tool-size': 'changeSize',

			'click .js-set-brush-type': 'setBrushType',
			'click .js-set-brush-color': 'setBrushColor',
			'click .js-set-brush-form': 'setBrushForm',

			'click .js-save-map': 'saveMap',
			'click .js-size-button': 'setMapSize'

		},

		selectors: {

			// self
			toolsWrapper: '.js-map-editor-tools-wrapper',

			// nested
			mapImageWrapper: '.js-map-image-wrapper',
			mapImage: '.js-map-image',
			moveAreaWrapper: '.js-move-area-wrapper',
			moveAreaContainer: '.js-move-area-container',
			mainEventHandler: '.js-main-event-handler',
			eventHandlerWrapper: '.js-event-handler-wrapper',
			eventSquares: '.js-event-square',
			//activeEventSquare: '.active-event-square',
			//activeSquareMark: '.active-square-mark',
			buildingWrapper: '.js-building-wrapper',
			unitsWrapper: '.js-units-wrapper',
			unitWrapper: '.js-unit-wrapper',
			building: '.js-building',
			//smokeWrapper: '.js-smoke-wrapper',
			//viewDisable: '.js-view-disable',
			//viewCpuDisable: '.js-view-cpu-disable',
			square: '.js-square',
			statusBar: '.js-battle-view-status-bar',
			styleSquareSize: '.js-style-square-size',
			mapNameInput: '.js-map-name'
			//unitInfoWrapper: '.js-unit-info-wrapper',
		},

		defaultMap: {
			type: 'userMap',
			size: {
				width: 11,
				height: 11
			},
			name: 'user map',
			isOpen: true,
			maxPlayers: 0, // set automatically
			units: [],
			buildings: [],
			terrain: {}

		},

		defaults: {
			map: {
				size: {
					min: 4,
					max: 24
				}
			},
			brush: {
				color: 'blue',
				type: 'terrain', // terrain, unit, building
				form: ''
			}
		},

		squareSize: win.APP.map.squareSize,

		initialize: function (data) {

			$('.js-map-editor-wrapper').trigger('hide'); // remove previous map editor

			data = data || {};

			var view = this,
				util = view.util;

			view.set('brush', view.defaults.brush);

			view.set('clickXY', {});

			view.battleProto = APP.BB.BattleView.prototype;

			view.detectClickEvent();

			view.$el = $(view.tmpl['map-editor']({
				mapName: view.defaultMap.name
			}));

			view.set('map', util.copyJSON(data.map || view.defaultMap));

			// set sizes
			view.setSize();

			view.drawMap();

			// draw buildings
			view.drawBuildings();

			// draw units
			view.drawUnits();

			// bind move area
			view.bindMoveArea();

			view.bindEventListeners();

			view.render();

			view.proto.initialize.apply(view, arguments);

			view.updateTools();

		},

		onClick: function (xy) {

			var view = this,
				xyStr = 'x' + xy.x + 'y' + xy.y,
				map = view.get('map'),
				brush = view.get('brush'),
				util = win.APP.util,
				buildingMaster = win.APP.building,
				mapMaster = win.APP.map,
				unitMaster = win.APP.unitMaster,
				playerColors = mapMaster.playerColors,
				buildingData,
				unitType = brush.form,
				unitForRemove;

			if (brush.type === 'terrain' && brush.form) {
				if (brush.form === 'eraser') {
					map.terrain[xyStr] = 'terra-1';
				} else {
					map.terrain[xyStr] = brush.form;
				}
				view.drawMap();
				return;
			}

			if (brush.type === 'unit' && unitType) {
				util.arrayRemoveByValue(map.units, _.find(map.units, xy));
				if (brush.form !== 'eraser') {

					if ( _.contains(unitMaster.commanderList, unitType) ) {
						unitForRemove = _.find(map.units, {type: unitType});
						if (unitForRemove) {
							win.APP.util.arrayRemoveByValue(map.units, unitForRemove);
						}
					}

					map.units.push({
						x: xy.x,
						y: xy.y,
						type: brush.form,
						ownerId: playerColors.indexOf(brush.color)
					});
				}
				view.reDrawUnits();
				return;
			}

			if (brush.type === 'building' && brush.form) {
				util.arrayRemoveByValue(map.buildings, _.find(map.buildings, xy));

				if (brush.form !== 'eraser') {
					buildingData = {
						x: xy.x,
						y: xy.y,
						type: brush.form,
						state: 'normal'
					};

					if ( _.contains(buildingMaster.noMansBuildingsList, brush.form) ) {
						buildingData.color = 'gray';
					}

					if ( brush.form === 'farm-destroyed' ) {
						buildingData.type = 'farm';
						buildingData.state = 'destroyed';
						buildingData.color = 'gray';
					}

					if ( buildingData.color !== 'gray' ) {
						buildingData.ownerId = playerColors.indexOf(brush.color);
					}

					map.buildings.push(buildingData);
				}

				view.reDrawBuildings();
				view.drawMap();
				return;
			}


		},

		// just overwrite
		detectDblClick: function () {
			console.log('dbl click is', this.get('clickXY'));
		},

		openMapPopup: function () {

			var view = this;

			win.APP.map.db.getMapsInfo({
				type: 'userMap'
			}).then(function (mapsInfo) {
				view.showPopup({
					popupName: 'map-list-popup',
					parentView: view,
					popupData: {
						mapsInfo: mapsInfo
					}
				});

			});

		},

		drawMap: function () {

			// prepare empty map's squares
			var view = this,
				map = view.get('map'),
				x, y,
				lenX, lenY,
				tileXY;

			for (x = 0, lenX = map.size.width; x < lenX; x += 1) {
				for (y = 0, lenY = map.size.height; y < lenY; y += 1) {
					tileXY = 'x' + x + 'y' + y;
					if ( !map.terrain[tileXY] ) {
						map.terrain[tileXY] = 'terra-1';
					}
				}
			}

			return view.battleProto.drawMap.apply(view, arguments);

		},

		drawBuildings: function () {

			var view = this,
				map = view.get('map'),
				maxX = map.size.width - 1,
				maxY = map.size.height - 1,
				buildings = map.buildings,
				mapMaster = win.APP.map,
				playerColors = mapMaster.playerColors;

			_.each(buildings, function (building) {

				var x, y;

				x = building.x;
				y = building.y;

				if (x > maxX || y > maxY || x < 0 || y < 0) {
					return;
				}

				building.color = playerColors[building.ownerId] || 'gray';
				if (building.color === 'gray') {
					delete building.ownerId;
				}
				view.appendBuilding(building);
			});

		},

		drawUnits: function () {

			var view = this,
				map = view.get('map'),
				maxX = map.size.width - 1,
				maxY = map.size.height - 1,
				units = map.units,
				mapMaster = win.APP.map,
				playerColors = mapMaster.playerColors,
				unitMaster = win.APP.unitMaster,
				commanderList = unitMaster.commanderList;

			_.each(units, function (unitData) {

				var unit,
					x = unitData.x,
					y = unitData.y,
					unitType,
					isCommander;

				if (x > maxX || y > maxY || x < 0 || y < 0) {
					return;
				}

				unitType = unitData.type;
				isCommander = unitType === 'commander' || _.contains(commanderList, unitType);

				unitData.color = playerColors[unitData.ownerId];

				if ( isCommander ) {
					unitData.type = commanderList[unitData.ownerId];
				}

				unit = unitMaster.createUnit(unitData);
				view.appendUnit(unit);

			});


		},

		updateTools: function () {

			var view = this,
				map = view.get('map'),
				$wrapper = view.$el.find(view.selectors.toolsWrapper),
				$node,
				parseData = {};

			parseData.brush = view.get('brush');

			parseData.mapName = map.name;

			parseData.hasCommander = false;

			$node = $(view.tmpl['map-editor-tools'](parseData));

			$wrapper.empty();

			$wrapper.append($node);

			view.delegateEvents();

		},

		reDrawUnits: function () {
			this.$el.find(this.selectors.unitsWrapper).empty();
			this.drawUnits();
		},

		reDrawBuildings: function () {

			this.$el.find(this.selectors.buildingWrapper).empty();
			this.drawBuildings();

		},

		setBrushType: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.type = $this.attr('data-brush-type');
			brush.form = '';

			view.updateTools();

		},

		setBrushColor: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.color = $this.attr('data-brush-color');

			brush.form = undefined;

			view.updateTools();

		},

		setBrushForm: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.form = $this.attr('data-brush-form');

			view.updateTools();

		},

		saveMap: function () {

			var view = this,
				map = view.get('map'),
				endMap = view.util.copyJSON(map),
				maxX = map.size.width - 1,
				maxY = map.size.height - 1,
				buildings = map.buildings || [],
				units = map.units || [],
				getXYFromStringXY = view.util.getXYFromStringXY,
				terrain = map.terrain,
				mapName = view.$el.find(view.selectors.mapNameInput).val().trim(),
				unitMaster = win.APP.unitMaster,
				commanderList = unitMaster.commanderList,
				dbMaster = win.APP.map.db,
				jsMapKey = 'userMap_' + mapName,
				ids = {
					'0': false,
					'1': false,
					'2': false,
					'3': false
				},
				i, j,
				detectGap = function () {
					_.each(ids, function (value, key) {
						key = Number(key);
						ids[key] = Boolean(_.find(units, {ownerId: key}) || _.find(buildings, {ownerId: key}));
					});
				};

			endMap.units = [];
			endMap.buildings = [];
			endMap.terrain = {};
			endMap.name = mapName;

			_.each(terrain, function (type, xyStr) {

				var xy = getXYFromStringXY(xyStr),
					x = xy.x,
					y = xy.y;

				if ( x > maxX || y > maxY || x < 0 || y < 0 ) {
					return;
				}

				endMap.terrain[xyStr] = type;

			});

			_.each(buildings, function (building) {

				var x = building.x,
					y = building.y;

				if ( x > maxX || y > maxY || x < 0 || y < 0 ) {
					return;
				}

				building = view.util.copyJSON(building);

				delete building.color;

				endMap.buildings.push(building);

			});

			_.each(units, function (unit) {

				var x = unit.x,
					y = unit.y;

				if ( x > maxX || y > maxY || x < 0 || y < 0 ) {
					return;
				}

				unit = view.util.copyJSON(unit);

				delete unit.color;
				delete unit.id;

				if ( _.contains(commanderList, unit.type) ) {
					unit.type = 'commander';
				}

				endMap.units.push(unit);

			});

			detectGap();
			for (i = 0; i < 4; i += 1) {
				if ( !ids[String(i)] ) {
					for (j = i; j < 4; j += 1) {
						_.each(endMap.units, function (unit) {
							if (unit.ownerId > j) {
								unit.ownerId -= 1;
							}
						});
						_.each(endMap.buildings, function (building) {
							if (building.ownerId > j) {
								building.ownerId -= 1;
							}
						});
					}
				}
				detectGap();
			}

			detectGap();

			_.each(ids, function (value) {
				endMap.maxPlayers += value ? 1 : 0;
			});

			// put map to db
			dbMaster.removeMap({
				jsMapKey: jsMapKey,
				type: endMap.type
			}).then(function () {
				dbMaster.insertMap(endMap, jsMapKey);
			});

			view.showTicket({
				popupData: {
					text: 'EN map \'' + endMap.name + '\' has been saved.'
				}
			});

		},

		//changeSize: function (e) {
		//
		//	var view = this,
		//		map = view.get('map'),
		//		$this = $(e.currentTarget),
		//		value = $this.attr('data-value');
		//
		//	map.size[$this.attr('data-group-name')] = parseInt(value, 10);
		//	view.drawMap();
		//	view.setSize();
		//
		//	view.get('mover').setDefaultContainerState();
		//
		//	view.reDrawUnits();
		//	view.reDrawBuildings();
		//
		//},

		setMapSize: function (e) {

			var view = this,
				defaults = view.defaults,
				max = defaults.map.size.max,
				min = defaults.map.size.min,
				//util = view.util,
				appUtil = win.APP.util,
				getBetween = appUtil.getBetween,
				map = view.get('map'),
				terrain = map.terrain,
				units = map.units || [],
				buildings = map.buildings || [],
				newTerrain = {},
				$button = $(e.currentTarget),
				delta = $button.attr('data-delta'),
				deltaNumber = parseInt(delta, 10),
				position = $button.attr('data-position');

			if (position === 'up' || position === 'down') {

				if (map.size.height + deltaNumber !== getBetween(min, map.size.height + deltaNumber, max)) {
					console.log('wrong height');
					return;
				}

				map.size.height += deltaNumber;

				if (position === 'up') {

					_.each(terrain, function (value, key) {
						var xy = key.match(/\-?\d+/g),
							x = xy[0],
							y = parseInt(xy[1], 10) + deltaNumber;
						newTerrain['x' + x + 'y' + y] = value;
					});

					_.each(units, function (unit) {
						unit.y += deltaNumber;
					});

					_.each(buildings, function (building) {
						building.y += deltaNumber;
					});

					map.terrain = newTerrain;

				}

			}

			if (position === 'left' || position === 'right') {

				if (map.size.width + deltaNumber !== getBetween(min, map.size.width + deltaNumber, max)) {
					console.log('wrong width');
					return;
				}

				map.size.width += deltaNumber;

				if (position === 'left') {

					_.each(terrain, function (value, key) {
						var xy = key.match(/\-?\d+/g),
							x = parseInt(xy[0], 10) + deltaNumber,
							y = xy[1];
						newTerrain['x' + x + 'y' + y] = value;
					});

					_.each(units, function (unit) {
						unit.x += deltaNumber;
					});

					_.each(buildings, function (building) {
						building.x += deltaNumber;
					});

					map.terrain = newTerrain;

				}

			}


			view.drawMap();
			view.setSize();

			view.get('mover').setDefaultContainerState();

			view.reDrawUnits();
			view.reDrawBuildings();

		},

		test: function () {

		}


	})


}(window));
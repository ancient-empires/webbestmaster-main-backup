/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.MapEditorView = APP.BB.BattleView.extend({

		events: {
			'click .js-open-map-popup': 'openMapPopup',
			'change .js-tool-width': 'changeWidth',
			'change .js-tool-height': 'changeHeight',

			'click .js-set-brush-type': 'setBrushType',
			'click .js-set-brush-color': 'setBrushColor',
			'click .js-set-brush-form': 'setBrushForm'

		},

		selectors: {

			// self
			toolsWrapper: '.js-map-editor-tools-wrapper',

			// nested
			mapImageWrapper: '.js-map-image-wrapper',
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
			styleSquareSize: '.js-style-square-size'
			//unitInfoWrapper: '.js-unit-info-wrapper',
		},

		defaultMap: {
			type: 'skirmish',
			size: {
				width: 10,
				height: 6
			},
			name: 'no name',

			maxPlayers: null, // set automatically
			units: {},
			buildings: {},
			terrain: {}

		},

		defaults: {
			brush: {
				color: 'black',
				type: 'building', // terrain, unit, building
				form: 'terra-1'
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

			view.$el = $(view.tmpl['map-editor']());

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
			console.log(xy);
		},

		// just overwrite
		detectDblClick: function () {
			console.log('dbl click is', this.get('clickXY'));
		},

		openMapPopup: function () {

			var view = this;

			win.APP.map.db.getMapsInfo().then(function (mapsInfo) {

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
				buildings = map.buildings,
				mapMaster = win.APP.map,
				playerColors = mapMaster.playerColors;

			_.each(buildings, function (building) {
				building.color = playerColors[building.ownerId] || 'gray';
				view.appendBuilding(building);
			});

		},

		drawUnits: function () {

			var view = this,
				map = view.get('map'),
				units = map.units,
				mapMaster = win.APP.map,
				playerColors = mapMaster.playerColors,
				unitMaster = win.APP.unitMaster,
				commanderList = unitMaster.commanderList;

			_.each(units, function (unitData) {

				var unitType = unitData.type,
					unit,
					isCommander = unitType === 'commander' || _.contains(win.APP.unitMaster.commanderList, unitType);

				unitData.color = playerColors[unitData.ownerId] || 'gray';

				if ( isCommander ) {
					unitData.type = commanderList[unitData.ownerId];
				}

				unit = win.APP.unitMaster.createUnit(unitData);
				view.appendUnit(unit);

			});


		},

		updateTools: function () {

			function objToDataURL(obj) {
				return encodeURI(JSON.stringify(obj).replace(/\s/g, ''));
			}

			var view = this,
				map = view.get('map'),
				mapWidth = map.size.width,
				mapHeight = map.size.height,
				$wrapper = view.$el.find(view.selectors.toolsWrapper),
				$node,
				parseData = {},
				mapMaster = win.APP.map,
				mapSizes = [];

			_.each(mapMaster.mapSizes, function (value, key) {
				mapSizes.push({
					key: key,
					value: value
				});
			});

			parseData.mapSizes = objToDataURL(mapSizes);
			parseData.mapHeight = _.find(mapSizes, { value: mapHeight });
			parseData.mapWidth = _.find(mapSizes, { value: mapWidth });

			parseData.brush = view.get('brush');







			$node = $(view.tmpl['map-editor-tools'](parseData));

			$wrapper.empty();

			$wrapper.append($node);

			view.delegateEvents();


		},

		changeWidth: function (e) {

			var view = this,
				map = view.get('map'),
				$this = $(e.currentTarget),
				value = $this.attr('data-value');

			map.size.width = parseInt(value, 10);
			view.drawMap();
			view.setSize();

			view.get('mover').setDefaultContainerState();

		},

		changeHeight: function (e) {
			console.log(e.currentTarget);
		},

		setBrushType: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.type = $this.attr('data-brush-type');

			view.updateTools();

		},

		setBrushColor: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.color = $this.attr('data-brush-color');

			view.updateTools();

		},

		setBrushForm: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.form = $this.attr('data-brush-form');

			view.updateTools();

		},








		test: function () {

		}


	})


}(window));
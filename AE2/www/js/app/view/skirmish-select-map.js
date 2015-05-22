/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSelectMapView = APP.BB.BaseView.extend({

		events: {
			'click .js-map-preview': 'showMapPreview'
		},

		squareSize: {
			max: 24
		},

		initialize: function (data) {

			data = data || {};

			var view = this;

			win.APP.map.db.getMapsInfo(data).then(function (mapsData) {

				var mapsInfo = [];

				_.each(mapsData, function (item, key) {
					item.jsKey = key;
					mapsInfo.push(item);
				});

				if (data.type === 'userMap') {

					mapsInfo = mapsInfo.sort(function (a, b) {
						return ((a.maxPlayers + a.name) > (b.maxPlayers + b.name)) ? 1 : -1;
					});

					view.$el = $(view.tmpl.skirmishSelectMap({
						mapsInfo: mapsInfo,
						urlPrefix: 'user-map-setup-map'
					}));

				} else { // skirmish

					view.$el = $(view.tmpl.skirmishSelectMap({
						mapsInfo: mapsInfo,
						urlPrefix: 'skirmish-setup-map'
					}));

				}

				view.proto.initialize.apply(view, arguments);

				view.render();

			});


		},

		showMapPreview: function (e) {

			var view = this,
				dbMaster = win.APP.map.db,
				$this = $(e.currentTarget),
				jsMapKey = $this.attr('data-js-map-key'),
				mapType = $this.attr('data-map-type'),
				mapName = $this.attr('data-map-preview-header'),
				mapUrl = $this.attr('data-map-route');

			dbMaster.getMap({
				type: mapType,
				jsMapKey: jsMapKey
			}).then(function (data) {

				var imgSrc = view.getPreviewFromData(data),
					text = '(' + data.maxPlayers + ') ' + data.size.width + '&times;' + data.size.height;

				view.showPopup({
					popupName: 'popup-map-preview',
					cssClass: 'full-screen',
					popupData: {
						imgSrc: imgSrc,
						mapName: mapName,
						text: text,
						jsMapKey: jsMapKey,
						mapUrl: mapUrl
					}
				});

			});

		},

		getPreviewFromData: function (data) {

			var view = this,
				canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d'),
				squareSize = view.squareSize.max,
				squareSizeX2 = squareSize * 2,
				terrains = data.terrain,
				mapWidth = data.size.width,
				mapHeight = data.size.height,
				mapTilesPreview = win.APP.mapTilesPreview,
				getXYFromStringXY = view.util.getXYFromStringXY,
				buildings = data.buildings,
				allColors = win.APP.map.allColors,
				noMansBuildingsList = win.APP.building.noMansBuildingsList,
				maxCanvasSize = win.APP.map.maxCanvasSize;

			while ( mapWidth * mapHeight * squareSize * squareSize * 4 >= maxCanvasSize ) {
				squareSize -= 4;
			}

			canvas.width = mapWidth * squareSizeX2;
			canvas.height = mapHeight * squareSizeX2;

			// reduce blur for ios devices
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false; // future

			// draw main tiles
			_.each(terrains, function (value, xy) {
				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTilesPreview[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
			});

			_.each(buildings, function (building) {

				var type = building.type,
					xy = {
						x: building.x,
						y: building.y
					},
					color = building.hasOwnProperty('ownerId') ? allColors[building.ownerId] : 'gray',
					state = building.state;

				if (state === 'destroyed') { // destroyed farm
					ctx.drawImage(mapTilesPreview[type + '-' + state].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
					return;
				}

				if ( _.contains(noMansBuildingsList, type) ) { // well or temple
					ctx.drawImage(mapTilesPreview[type].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
					return;
				}

				if (type === 'castle') {
					ctx.drawImage(mapTilesPreview[type + '-' + color].img, xy.x * squareSizeX2, (xy.y - 1) * squareSizeX2, squareSizeX2, squareSizeX2 * 2);
				} else {
					ctx.drawImage(mapTilesPreview[type + '-' + color].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
				}

			});

			return canvas.toDataURL();


		}

	});

}(window));
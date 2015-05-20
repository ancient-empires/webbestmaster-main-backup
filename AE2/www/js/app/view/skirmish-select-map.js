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
			view.set('mapUrl', 'skirmish-setup-map/');

			win.APP.map.db.getMapsInfo(data).then(function (mapsInfo) {

				view.$el = $(view.tmpl.skirmishSelectMap({
					mapsInfo: mapsInfo
				}));

				if (data.type === 'userMap') {
					view.set('mapUrl', 'user-map-setup-map/');
					view.$el.find('[data-route]').each(function (index, node) {
						var $this = $(node);
						$this.attr('data-route', $this.attr('data-route').replace(/^skirmish-setup-map\//gi, 'user-map-setup-map/'));
					});
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
				mapName = $this.attr('data-map-preview-header');

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
						mapUrl: view.get('mapUrl')
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
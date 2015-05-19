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
			max: 12
		},

		initialize: function (data) {

			data = data || {};

			var view = this;
			win.APP.map.db.getMapsInfo(data).then(function (mapsInfo) {

				view.$el = $(view.tmpl.skirmishSelectMap({
					mapsInfo: mapsInfo
				}));

				if (data.type === 'userMap') {
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

				var imgSrc = view.getPreviewFromData(data);

				view.showPopup({
					popupName: 'popup-map-preview',
					cssClass: 'full-screen',
					popupData: {
						imgSrc: imgSrc,
						mapName: mapName
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
				mapTiles = win.APP.mapTiles,
				getXYFromStringXY = view.util.getXYFromStringXY;

			canvas.width = mapWidth * squareSizeX2;
			canvas.height = mapHeight * squareSizeX2;

			// reduce blur for ios devices
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false; // future

			// draw main tiles
			_.each(terrains, function (value, xy) {
				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTiles[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
			});

			// todo: draw buildings

			return canvas.toDataURL();


		}

	});

}(window));
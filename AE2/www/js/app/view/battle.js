(function (win) {

	"use strict";
	/*global window, setTimeout, history, Image */
	/*global Backbone, $, templateMaster, APP, log */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BattleView = APP.BB.BaseView.extend({

		events: {

		},

		selectors: {
			mapImageWrapper: '.js-map-image-wrapper',
			moveAreaContainer: '.js-move-area-container'
		},

		initialize: function (data) {

			this.$el = $(this.tmpl.battle(data));

			this.proto.initialize.apply(this, arguments);

			// get map
			this.set('args', this.util.copyJSON(data));
			this.set('map', this.util.copyJSON(APP.maps[data.jsMapKey]));

			// set sizes
			this.setSize();

			this.drawMap();

			log(data);

			this.render();

		},

		drawMap: function () {

			var $mapImageWrapper = this.$el.find(this.selectors.mapImageWrapper),
				canvas = $mapImageWrapper.get(0),
				ctx = canvas.getContext('2d'),
				getXYFromStringXY = this.util.getXYFromStringXY,
				xyStr = this.util.getStringFromXY,
				map = this.get('map'),
				squareSize = this.info.get('squareSize'),
				squareSizeX2 = squareSize * 2,
				mapTiles = win.APP.mapTiles,
				terrains = map.terrain,
				angleTypes = ['road', 'water'],
				reBridge = /^bridge\-\d+$/;

			// reduce blur
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false; /// future

			// draw main tiles
			_.each(terrains, function (value, xy) {
				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTiles[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
			});

			// draw angles road
			angleTypes.forEach(function (type) {

				var re = new RegExp('^(' + type +'|bridge)\\-' + '\\d+$');

				_.each(terrains, function (value, xy) {

					if ( !re.test(value) || reBridge.test(value) ) {
						return;
					}

					xy = getXYFromStringXY(xy);

					var x = xy.x,
						y = xy.y,
						xl = x - 1,
						xr = x + 1,
						yu = y - 1,
						yd = y + 1,
						xSquareSizeX2 = x * squareSizeX2,
						ySquareSizeX2 = y * squareSizeX2,
						xSquareSizeX2Half = xSquareSizeX2 + squareSize,
						ySquareSizeX2Half = ySquareSizeX2 + squareSize,
						t1 = re.test(terrains[xyStr(xl, yu)] || value),
						t2 = re.test(terrains[xyStr(x, yu)] || value),
						t3 = re.test(terrains[xyStr(xr, yu)] || value),
						t4 = re.test(terrains[xyStr(xl, y)] || value),
						t6 = re.test(terrains[xyStr(xr, y)] || value),
						t7 = re.test(terrains[xyStr(xl, yd)] || value),
						t8 = re.test(terrains[xyStr(x, yd)] || value),
						t9 = re.test(terrains[xyStr(xr, yd)] || value);

					// draw 2, 4, 6, 8
					if ( !t2 ) { // up is different type
						ctx.drawImage(mapTiles['a-' + type + '-2'].img, xSquareSizeX2, ySquareSizeX2, squareSizeX2, squareSize);
					}

					if ( !t4 ) { // up is different type
						ctx.drawImage(mapTiles['a-' + type + '-4'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( !t6 ) { // up is different type
						ctx.drawImage(mapTiles['a-' + type + '-6'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( !t8 ) { // up is different type
						ctx.drawImage(mapTiles['a-' + type + '-8'].img, xSquareSizeX2, ySquareSizeX2Half, squareSizeX2, squareSize);
					}

					// draw 1, 3, 7, 9 - normal
					if ( !t1 && !t2 && !t4 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t3 && !t2 && !t6 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t7 && !t4 && !t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( !t9 && !t6 && !t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

					// draw 1, 3, 7, 9 - small
					if ( t2 && t4 && !t1 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1-s'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t2 && t6 && !t3 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3-s'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t4 && t8 && !t7 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7-s'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( t6 && t8 && !t9 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9-s'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

				});

			});

		},

		setSize: function () {

			var squareSize = this.info.get('squareSize') || (win.APP.util.defaultUnit * 3),
				$moveAreaContainer = this.$el.find(this.selectors.moveAreaContainer),
				$mapImageWrapper = this.$el.find(this.selectors.mapImageWrapper),
				canvas = $mapImageWrapper.get(0),
				map = this.get('map'),
				width = map.size.width * squareSize,
				height = map.size.height * squareSize;

			this.info.set('squareSize', squareSize);

			$moveAreaContainer.css({
					width: width + 'px',
					height: height + 'px'
				});

			$mapImageWrapper.css({
					width: width + 'px',
					height: height + 'px'
				});

			canvas.width = width * 2;
			canvas.height = height * 2;


		}


	});

}(window));

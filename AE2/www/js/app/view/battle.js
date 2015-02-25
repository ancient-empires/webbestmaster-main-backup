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
				map = this.get('map'),
				squareSize = this.info.get('squareSize'),
				squareSizeX2 = squareSize * 2,
				mapTiles = win.APP.mapTiles;

			_.each(map.terrain, function (value, xy) {

				if ( !/\d/.test(value) ) {
					value = value + '-1';
				}

				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTiles[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);

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

(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

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
				map = this.get('map'),
				squareSize = this.info.get('squareSize');



		},

		setSize: function () {

			var squareSize = this.info.get('squareSize') || (win.APP.util.defaultUnit * 3),
				$moveAreaContainer = this.$el.find(this.selectors.moveAreaContainer),
				$mapImageWrapper = this.$el.find(this.selectors.mapImageWrapper),
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

		}


	});

}(window));

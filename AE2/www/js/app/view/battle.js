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
			this.set('args', win.APP.util.cloneJSON(data));
			this.set('map', win.APP.util.cloneJSON(APP.maps[data.jsMapKey]));

			// set sizes
			this.setSize();

			this.drawMap();

			log(data);

			this.render();

		},

		drawMap: function () {

			var $mapImageWrapper = this.$el.find(this.selectors.mapImageWrapper),
				map = this.get('map'),
				squaresArr = [],
				tmpl = '<div class="map-bg-{{type}} map-bg-square map-square"></div>',
				squareSize = this.info.get('squareSize'),
				style = '<style class="js-square-size-style"> .map-square { width: ' + squareSize + 'px; height: ' + squareSize + 'px; }</style>';

			squaresArr.push(style);

			_.each(map.terrain, function (type) {
				squaresArr.push( tmpl.replace('{{type}}', type) );
			});

			$mapImageWrapper.html(squaresArr.join(''));

		},

		setSize: function () {

			var squareSize = this.info.get('squareSize') || (win.APP.util.defaultUnit * 3),
				$moveAreaContainer = this.$el.find(this.selectors.moveAreaContainer),
				map = this.get('map'),
				width = map.size.width * squareSize,
				height = map.size.height * squareSize;

			this.info.set('squareSize', squareSize);

			$moveAreaContainer.css({
					width: width + 'px',
					height: height + 'px'
				});

		}


	});

}(window));

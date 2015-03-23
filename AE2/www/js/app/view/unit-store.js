/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.UnitStoreView = APP.BB.BaseView.extend({

		selectors: {
			storeWrapper: '.js-store-wrapper'
		},

		settings: {
			url: 'unit-store'
		},

		events: {
			'hide-unit-store': 'hide',
			'click .js-buy-unit': 'buyUnit'
			//'click .js-change-on-off-setting': 'changeOnOffSetting',
			//'click .js-change-select-setting': 'changeSelectSetting'
		},

		initialize: function (data) {

			var view = this;

			if (Backbone.history.fragment !== view.settings.url) {
				this.navigate(view.settings.url);
			}

			view.extendFromObj(data);

			view.$el = $(view.tmpl['unit-store']());

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				storeWrapper = view.$wrapper.find(view.selectors.storeWrapper);

			storeWrapper.append(view.$el);

		},

		buyUnit: function (e) {

			var view = this,
				model = view.get('model'),
				mapSize = model.get('map').size,
				mapWidth = mapSize.width,
				mapHeight = mapSize.height,
				x, y,
				xy,
				currentXY = {
					x: view.get('x'),
					y: view.get('y')
				},
				getPathSize = win.APP.util.getPathSize,
				player = view.get('player'),
				$this = $(e.currentTarget),
				unitType = $this.attr('data-unit-name'),
				unitData = win.APP.unitMaster.list[unitType],
				freeXYs = [];

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
				type: unitType,
				ownerId: player.id,
				teamNumber: player.teamNumber,
				color: player.color,
				x: freeXYs[0].x,
				y: freeXYs[0].y
			});

		}

	});

}(window));

/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP, Backbone */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.UnitStoreView = APP.BB.BaseView.extend({

		selectors: {
			storeWrapper: '.js-store-wrapper',
			card: '.js-unit-card'
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

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				model = view.get('model'),
				player = model.get('activePlayer'),
				storeWrapper = view.$wrapper.find(view.selectors.storeWrapper);

			view.$el = $(view.tmpl['unit-store']({
				commander: player.commander
			}));

			view.autoSetCardState();
			storeWrapper.append(view.$el);

		},

		buyUnit: function (e) {

			var view = this,
				model = view.get('model'),
				mapSize = model.get('map').size,
				unitLimit = model.get('unitLimit'),
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
				playerUnits = model.getUnitsByOwnerId(player.id),
				playerMoney = player.money,
				$this = $(e.currentTarget),
				unitType = $this.attr('data-unit-name'),
				unitData = win.APP.unitMaster.list[unitType],
				unitCost = unitData.cost,
				freeXYs = [];

			if ( playerUnits.length >= unitLimit ) {
				return;
			}

			if ( unitCost > playerMoney ) {
				return;
			}

			// if commander is live - return
			// do not buy 2+ commander
			if ( player.commander.isLive && _.contains(win.APP.unitMaster.commanderList, unitType) ) {
				return;
			}

			player.money -= unitCost;

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

			view.autoSetCardState();
			view.get('view').updateStatusBar();

		},

		autoSetCardState: function () {

			var view = this,
				model = view.get('model'),
				player = view.get('player'),
				playerUnits = model.getUnitsByOwnerId(player.id),
				unitLimit = model.get('unitLimit'),
				playerMoney = player.money,
				unitData = win.APP.unitMaster.list,
				$cards = view.$el.find(view.selectors.card),
				$commanderCard = view.$el.find(view.selectors.card + '[data-is-commander="true"]');

			// set commander state
			if ( player.commander.isLive ) {
				$commanderCard.addClass('hidden');
			} else {
				$commanderCard.removeClass('hidden');
			}

			// detect unit limit exceed
			if ( playerUnits.length >= unitLimit ) {
				$cards.addClass('disable');
				return;
			}

			_.each($cards, function (card) {

				var $card = $(card),
					unitType = $card.attr('data-unit-card-name'),
					unitCost = unitData[unitType].cost;

				return unitCost > playerMoney ? $card.addClass('disable') : $card.removeClass('disable');

			});


		}

	});

}(window));

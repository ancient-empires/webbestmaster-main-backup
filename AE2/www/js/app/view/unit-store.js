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
			card: '.js-unit-card',
			buyUnitCount: '.js-buy-unit-count',
			descriptionUnitInfo: '.js-description-unit-info'
		},

		settings: {
			url: 'unit-store'
		},

		events: {
			'show-battle-view': 'showBattleView',
			'hide-unit-store': 'hide',
			'click .js-buy-unit': 'buyUnit',
			'click .js-show-unit-description': 'showUnitDescription'
			//'click .js-change-on-off-setting': 'changeOnOffSetting',
			//'click .js-change-select-setting': 'changeSelectSetting'
		},

		initialize: function (data) {

			var view = this;

			if (Backbone.history.fragment !== view.settings.url) {
				view.navigate(view.settings.url);
			}

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		showBattleView: function () {

			var view = this,
				model = view.get('model'),
				battleView = model.get('view');

			battleView.$el.find(battleView.selectors.moveAreaContainer).removeClass('hidden');

		},

		render: function () {

			var view = this,
				model = view.get('model'),
				battleView = model.get('view'),
				player = model.get('activePlayer'),
				storeWrapper = view.$wrapper.find(view.selectors.storeWrapper);

			battleView.$el.find(battleView.selectors.moveAreaContainer).addClass('hidden');

			view.$el = $(view.tmpl['unit-store']({
				commander: player.commander,
				playerColor: player.color
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
				unitType = $this.attr('data-unit-key'),
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

			view.setUnitCounter(unitType);

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
				$cards.addClass('disabled-card');
				return;
			}

			_.each($cards, function (card) {

				var $card = $(card),
					unitType = $card.attr('data-unit-card-name'),
					unitCost = unitData[unitType].cost;

				return unitCost > playerMoney ? $card.addClass('disabled-card') : $card.removeClass('disabled-card');

			});

		},

		setUnitCounter: function (type) {

			var view = this,
				selectors = view.selectors,
				$count = view.$el.find(selectors.buyUnitCount + '[data-unit-key="' + type + '"]'),
				count = parseInt($count.attr('data-unit-count'), 10) + 1;

			$count
				.removeClass('hidden')
				.attr('data-unit-count', count)
				.html('[' + count + ']');

		},

		showUnitDescription: function (e) {

			var view = this,
				$button = $(e.currentTarget),
				unitKey = $button.attr('data-unit-key'),
				state = $button.attr('data-description-is-show'),
				$description = view.$el.find(view.selectors.descriptionUnitInfo + '[data-unit-key="' + unitKey + '"]');

			if ( state === 'no' ) {
				$description.removeClass('hidden');
				$button.attr('data-description-is-show', 'yes');
			} else {
				$description.addClass('hidden');
				$button.attr('data-description-is-show', 'no');
			}

		}

	});

}(window));

/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global _ */

	win.APP = win.APP || {};

	win.APP.BB.FightAnimationView = APP.BB.BaseView.extend({

		events: {},

		selectors: {
			statusBarWrapper: '.js-fight-animation-status-bar'
		},

		fighters: {
			soldier: {
				count: 5
			},
			archer: {
				count: 5
			},
			golem: {
				count: 3
			},
			valadorn: {
				count: 3
			}
		},

		initialize: function (data) { // parentView, parentDeferred, attacker, defender

			var view = this;

			view.extendFromObj(data);

			view.setTerrain(data);

			view.setUnits(data);

			view.$el = $(view.tmpl['fight-animation'](data));

			view.render();

		},

		setTerrain: function (data) {

			var view = this,
				parentView = view.get('parentView'),
				model = parentView.get('model'),
				attacker = data.attacker.unit,
				defender = data.defender.unit,
				attackerTerrain = model.getTerrainByXY({
					x: attacker.get('x'),
					y: attacker.get('y')
				}),
				defenderTerrain = model.getTerrainByXY({
					x: defender.get('x'),
					y: defender.get('y')
				});

			// todo: detect building add 'building' type

			data.attacker.terrain = attackerTerrain.terrainType;
			data.defender.terrain = defenderTerrain.terrainType;

		},

		setUnits: function (data) {

			var view = this;

			_.each(['attacker', 'defender'], function (warriorType) {

				var unitData = data[warriorType],
					unit = unitData.unit,
					type = unit.get('type'),
					health = unit.get('health'),
					defaultHealth = unit.get('defaultHealth'),
					fullCount = view.fighters[type].count,
					count = Math.ceil(health / defaultHealth * fullCount),
					fighters = [],
					i, len;

				for (i = 0, len = fullCount; i < len; i += 1) {
					fighters[i] = i < count;
				}

				unitData.fullCount = fullCount;
				unitData.fighters = fighters;

			});

		},

		render: function () {

			var view = this,
				parentView = view.get('parentView');

			parentView.$el.append(view.$el);

			setTimeout(function () {
				view.get('parentDeferred').resolve();
			}, 2e3);


		},

		refreshStatusBar: function () {

			var view = this,
				selectors = view.selectors,
				$el = view.$el,
				$statusBar = $el.find(selectors.statusBarWrapper),
				newStatusBarHtml = $(view.tmpl['fight-animation-status-bar']({
					attacker: view.get('attacker'),
					defender: view.get('defender')
				}));

			$statusBar.html(newStatusBarHtml.html());

		}


	});

}(window));
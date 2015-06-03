/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};

	win.APP.BB.FightAnimationView = APP.BB.BaseView.extend({

		events: {},

		selectors: {
			statusBarWrapper: '.js-fight-animation-status-bar'
		},

		initialize: function (data) { // parentView, parentDeferred, attacker, defender

			var view = this;

			view.extendFromObj(data);

			view.setTerrain(data);

			view.$el = $(view.tmpl['fight-animation'](data));

			view.render();

		},

		setTerrain: function (data) {

			var view = this,
				parentView = view.get('parentView'),
				model = parentView.get('model'),
				attacker = data.attacker,
				defender = data.defender,
				attackerTerrain = model.getTerrainByXY({
					x: attacker.get('x'),
					y: attacker.get('y')
				}),
				defenderTerrain = model.getTerrainByXY({
					x: defender.get('x'),
					y: defender.get('y')
				});

			// todo: detect building add 'building' type

			data.attackerTerrain = attackerTerrain.terrainType;
			data.defenderTerrain = defenderTerrain.terrainType;

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
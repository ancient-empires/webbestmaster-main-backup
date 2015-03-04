(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _ */

	win.APP.BB.BattleModel = Backbone.Model.extend({

		initialize: function(data) {

			data = data || {};

			_.each(data, function (value, key) { // view, args, map
				this.set(key, value);
			}, this);

			this.set('players', this.get('args').players);
			this.set('buildings', this.get('map').buildings);

		},

		appendBuildings: function () {

			var buildings = this.get('map').buildings,
				view = this.get('view'),
				players = this.get('players');

			_.each(buildings, function (building) {

				// detect color of building
				var player = _.where(players, { id: building.ownerId })[0];
				building.color = player ? player.color : 'gray';

				view.appendBuilding(building);

			});


		}

	});

}(window));
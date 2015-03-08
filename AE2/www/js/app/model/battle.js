(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _ */

	win.APP.BB.BattleModel = Backbone.Model.extend({

		initialize: function() {

			this.set('players', this.get('args').players);
			this.set('buildings', this.get('map').buildings);
			this.set('units', []); // will be filled after append units

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

		},
		appendUnits: function () {

			var units = this.get('map').units,
				view = this.get('view'),
				players = this.get('players');

			_.each(units, function (unit) {

				// detect color of building
				var player = _.where(players, { id: unit.ownerId })[0];

				unit.color = player.color;

				unit = win.APP.unitMaster.createUnits(unit);

				view.appendUnit(unit);

			});


		}

	});

}(window));
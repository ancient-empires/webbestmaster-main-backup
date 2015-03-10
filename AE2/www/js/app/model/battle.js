(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _ */

	win.APP.BB.BattleModel = Backbone.Model.extend({

		initialize: function() {

			this.set('players', this.get('args').players);
			this.set('buildings', []); // will be filled building append units
			this.set('units', []); // will be filled after append units

		},

		appendBuildings: function () {

			var mapBuildings = this.get('map').buildings,
				view = this.get('view'),
				players = this.get('players'),
				buildingArr = this.get('buildings');

			_.each(mapBuildings, function (building) {

				// detect color of building
				var player = _.where(players, { id: building.ownerId })[0];
				building.color = player ? player.color : 'gray';

				buildingArr.push(building);

				view.appendBuilding(building);

			});

		},
		appendUnits: function () {

			var model = this,
				mapUnits = model.get('map').units,
				view = model.get('view'),
				players = model.get('players'),
				unitArr = model.get('units');

			_.each(mapUnits, function (unit) {

				// detect color of building
				var player = _.where(players, { id: unit.ownerId })[0];

				unit.color = player.color;

				unit = win.APP.unitMaster.createUnits(unit);
				unit.set('model', model);
				unit.set('view', view);

				unitArr.push(unit);

				view.appendUnit(unit);

			});



		}

	});

}(window));
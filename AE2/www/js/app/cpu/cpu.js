/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global _ */

	function Cpu(json) { // model, player:'activePlayer'

		var cpu = this;
		cpu.attr = {};

		cpu.extend(json);

	}

	Cpu.prototype = {

		get: function (key) {
			return this.attr[key];
		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		extend: function (json) {
			_.extend(this.attr, json);
			return this;
		},

		run: function () {

			var cpu = this;

			cpu.buyUnits().then(function () {

				cpu.turnUnit()

			});

		},

		buyUnits: function () {

			// 1 - detect castle closest to enemy castle
			var cpu = this,
				model = cpu.get('model'),
				player = cpu.get('player'),
				stores = cpu.getStores(),
				store,
				deferred = $.Deferred();

			if ( !stores.length ) {
				return;
			}

			// todo: get store closest to enemy store
			store = stores[0];

			// buy commander if needed and can
			cpu.buyUnit({
				store: store,
				type: player.commander.name
			});

			if ( !model.playerHasCommander(player) ) {
				return;
			}

			// todo: buy normal units
			cpu.buyUnit({
				store: store,
				type: 'soldier'
			});

			cpu.buyUnit({
				store: store,
				type: 'archer'
			});

			deferred.resolve();

			return deferred.promise();

		},

		getStores: function () {

			var cpu = this,
				model = cpu.get('model'),
				ownerId = cpu.get('player').id,
				buildings = model.get('buildings');

			return _.where(buildings, { ownerId: ownerId, canBeStore: true });

		},

		buyUnit: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				unitType = data.type,
				store = data.store,
				unitStore = win.APP.BB.UnitStoreView.prototype;

			unitStore.buyUnit({
				state: 'cpu',
				view: model.get('view'),
				model: model,
				player: cpu.get('player'),
				unitType: unitType,
				x: store.x,
				y: store.y
			});

		},

		turnUnit: function () {

			var cpu = this,
				player = cpu.get('player'),
				playerTeamNumber = player.teamNumber,
				model = cpu.get('model'),
				units = model.get('units'),
				buildings = model.get('building'),
				enemyUnit = _.filter(units, function (unit) {
					return unit.get('teamNumber') !== playerTeamNumber;
				}),
				privateUnit = model.getUnitsByOwnerId(player.id),
				wholes = []; // x, y, why is whiles - unit isNotActive, available to get castle or farm, up health ...






		}

	};

	win.APP.Cpu = Cpu;

}(window));
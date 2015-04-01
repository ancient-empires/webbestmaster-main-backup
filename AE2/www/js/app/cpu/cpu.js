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

			cpu.buyUnits();

		},

		buyUnits: function () {

			// 1 - detect castle closest to enemy castle
			var cpu = this,
				model = cpu.get('model'),
				player = cpu.get('player'),
				stores = cpu.getStores(),
				store;

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







		}

	};

	win.APP.Cpu = Cpu;

}(window));
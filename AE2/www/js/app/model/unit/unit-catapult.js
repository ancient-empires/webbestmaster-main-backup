/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global _ */

	win.APP.BB.Unit.CatapultModel = win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.catapult,

		/* overwrite
		 * base-unit.js canStrikeBack
		 * */
		canStrikeBack: function () {
			return false;
		},

		/* overwrite
		 * base-unit.js getUnitsUnderAttack
		 * */
		getUnitsUnderAttack: function () {

			var unit = this,
				proto = win.APP.BB.Unit.BaseUnitModel.prototype,
				getUnitsUnderAttack = proto.getUnitsUnderAttack,
				underAttackXYs,
				x = unit.get('x'),
				y = unit.get('y'),
				removedXYs = [
					{x: x, y: y - 1}, // 2
					{x: x - 1, y: y}, // 4
					{x: x + 1, y: y}, // 6
					{x: x, y: y + 1}  // 8
				];

			underAttackXYs = getUnitsUnderAttack.call(this);

			return _.filter(underAttackXYs, function (xy) {
				return !_.find(removedXYs, xy);
			});

		},

		/* overwrite
		 * base-unit.js bindEventListener
		 * */
		bindEventListener: function () {

			var unit = this,
				proto = win.APP.BB.Unit.BaseUnitModel.prototype,
				bindEventListener = proto.bindEventListener;

			bindEventListener.call(unit);

			unit.on('change:didMove', function (e, didMove) {
				this.set('isActive', !didMove);
			});


		}

	});

}(window));
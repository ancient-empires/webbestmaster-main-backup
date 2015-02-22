(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSetupMapView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (jsMapKey) {

			var viewData = this.createViewData(jsMapKey);

			this.$el = $(this.tmpl.skirmishSetupMap(viewData));

			this.proto.initialize.apply(this, arguments);

			this.render();

		},

		createViewData: function (jsMapKey) {

			var viewData = {},
				util = APP.util,
				map = util.cloneJSON(APP.maps[jsMapKey]),
				staticMapInfo = util.cloneJSON(APP.map),
				i, len,
				playerData,
				playersData = [],
				colors = staticMapInfo.playerColors;

			for (i = 0, len = map.maxPlayers; i < len; i += 1) {
				playerData = {};
				playerData.teamNumber = i + 1;
				colors = util.assortArray(colors);
				playerData.color = colors.pop();
				playersData.push(playerData);
			}
			viewData.playersData = playersData;

			return viewData;

		}


	});

}(window));
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSelectMapView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			var view = this;
			win.APP.map.db.getMapsInfo().then(function (mapsInfo) {

				view.$el = $(view.tmpl.skirmishSelectMap({
					mapsInfo: mapsInfo
				}));

				view.proto.initialize.apply(view, arguments);

				view.render();

			});


		}

	});

}(window));
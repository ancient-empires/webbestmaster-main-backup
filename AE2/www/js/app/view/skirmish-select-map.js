/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSelectMapView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (data) {

			data = data || {};

			var view = this;
			win.APP.map.db.getMapsInfo(data).then(function (mapsInfo) {

				view.$el = $(view.tmpl.skirmishSelectMap({
					mapsInfo: mapsInfo
				}));

				if (data.type === 'userMap') {
					view.$el.find('[data-route]').each(function (index, node) {
						var $this = $(node);
						$this.attr('data-route', $this.attr('data-route').replace(/^skirmish-setup-map\//gi, 'user-map-setup-map/'));
					});
				}

				view.proto.initialize.apply(view, arguments);

				view.render();

			});


		}

	});

}(window));
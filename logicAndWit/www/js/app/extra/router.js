(function (win) {

	"use strict";
	/*global window */
	/*global Backbone, APP, $ */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title',
			'section/:id': 'section'
		},

		title: function () {
			APP.bb.title = new APP.BB.TitleView();
		},

		section: function (id) {
			APP.bb.section = new APP.BB.SectionView({ id: id });
		},

		constructor: function () {

			var originalFunctions = {},
				proto = APP.BB.Router.prototype,
				router = this;

			function isPopupView() {

				var e = window.event || {},
					urls = (e.newURL || '') + (e.oldURL || ''),
					popupPart = APP.BB.BaseView.prototype.popupUrl;

				return urls.indexOf(popupPart) !== -1;

			}

			$.each(this.routes, function (key, value) {
				originalFunctions[value] = proto[value];
				proto[value] = function () {

					if ( isPopupView() ) {
						return false;
					}

					return originalFunctions[value].apply(router, arguments);

				};

			});

			return Backbone.Router.prototype.constructor.apply(this, arguments);

		}


	});

}(window));
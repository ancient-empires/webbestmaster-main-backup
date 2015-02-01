(function (win) {

	"use strict";
	/*global window, Backbone */
	/*global APP */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title'
		},

		title: function () {

			APP.bb.title = new APP.BB.TitleView();

			console.log('title');

		}

	});

}(window));
/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.HomeView = APP.BB.BaseView.extend({

		events: {
			//'click div': 'test',
			'click .js-show-popup': 'testShowPopup'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.home());

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		test: function (e) {

			alert('click to div');

		},

		testShowPopup: function () {

			var view = this;

			view.showPopup({
				name: 'popup-text',
				//timeout: 2.5e3,
				sound: {
					sound: 'good-answer.mp3',
					isLoop: false,
					road: 3
				},
				data: {
					text: 'TEXT!!!!!!!!!'
				}
				//,onHide: { // see popup view source code
				//	fn: 'newQuestion',
				//	context: view
				//}
			});


		}


	});

}(window));
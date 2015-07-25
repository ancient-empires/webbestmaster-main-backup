/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.HomeView = APP.BB.BaseView.extend({

		events: {
			//'click div': 'test',
			//'click .js-show-popup': 'testShowPopup'
			'click .js-image-container': 'setNichosiImage'


		},

		selectors: {
			imageContainer: '.js-image-container'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.home());

			view.proto.initialize.apply(view, arguments);

			view.render();

			view.setNichosiImage();

		},

		getRandomNichosi: function () {

			var min = 1,
				max = 17,
				number = Math.round(Math.random() * (max - min) + min);

			return (number > 9 ? '' : '0') + number;

		},

		setNichosiImage: function () {

			var view = this,
				$container = view.$el.find(view.selectors.imageContainer),
				nichosiImage = view.getRandomNichosi();

			$container.css('background-image', 'url(nichosi-img/' + nichosiImage + '.jpg)');

		}




/*

		test: function (e) {

			alert('click to div');

		},

		testShowPopup: function () {

			var view = this;

			view.showPopup({
				name: 'popup-text',
				//timeout: 2.5e3,
				sound: {
					sound: 'click.mp3',
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
*/


	});

}(window));
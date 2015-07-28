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
			'click .js-image-container': 'setNichosiImage',
			'input .js-user-nick': 'setUserNick',
			'click .js-share-record': 'shareRecord'
		},

		selectors: {
			imageContainer: '.js-image-container'
		},

		initialize: function () {

			var view = this,
				info = view.info;

			view.$el = $(view.tmpl.home({
				user: info.get('user')
			}));

			view.proto.initialize.apply(view, arguments);

			view.render();

			view.setNichosiImage({ doNotCount: true });

		},

		getRandomNichosi: function () {

			var min = 1,
				max = 17,
				number = Math.round(Math.random() * (max - min) + min);

			return (number > 9 ? '' : '0') + number;

		},

		setNichosiImage: function (dataArgs) {

			var view = this,
				data = dataArgs || {},
				$container = view.$el.find(view.selectors.imageContainer),
				nichosiImage = view.getRandomNichosi();

			$container.css('background-image', 'url(nichosi-img/' + nichosiImage + '.jpg)');

			if ( !data.doNotCount ) {
				win.APP.bb.user.increaseNichosiCount();
			}

		},

		setUserNick: function (e) {

			var view = this,
				info = view.info,
				$this = $(e.currentTarget),
				user = info.get('user'),
				nick = $this.val().trim();

			// detect empty nick
			if ( !nick ) {
				user.nick = nick;
				info.set('user', user);
				// todo: validate user nick by firebase
				return;
			}

			// detect nick with extra symbols
			if ( !/^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]+$/.test(nick) ) {
				$this.val(info.get('user').nick);
				// todo: validate user nick by firebase
				return;
			}

			user.nick = nick;

			info.set('user', user);

		},

		shareRecord: function () {



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
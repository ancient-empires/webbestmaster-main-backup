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
			'blur .js-user-nick': 'setUserNick',
			'updateLeaderBoard': 'updateLeaderBoard'
		},

		selectors: {
			imageContainer: '.js-image-container',
			userNichosiCount: '.js-user-nichosi-count',
			leaderBoardWrapper: '.js-leader-board-wrapper'
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
				view.updateUserNichosiCount();
			}

		},

		updateUserNichosiCount: function () {

			var view = this,
				$count = view.$el.find(view.selectors.userNichosiCount);

			$count.val( view.info.get('user').nichosiCount );

		},

		setUserNick: function (e) {

			var view = this,
				info = view.info,
				$this = $(e.currentTarget),
				user = info.get('user'),
				nick = $this.val().trim(),
				userModel = win.APP.bb.user;

			// if nick is exist detect extra symbols
			if ( nick && !/^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]+$/.test(nick) || nick.length > 6) {
				$this.val(info.get('user').nick);
				return;
			}

			userModel.set('nick', nick);

		},

		updateLeaderBoard: function (evt, snap) {

			var arr = [],
				view = this;

			snap.forEach(function (user) {
				arr.unshift(user.val());
			});

			view.$el.find(view.selectors.leaderBoardWrapper).html(view.tmpl['leader-board']({list: arr}));

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
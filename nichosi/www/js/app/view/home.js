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
			userNick: '.js-user-nick',
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

			view.updateUserNichosiCount();

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
				$el = view.$el,
				selectors = view.selectors,
				$count = $el.find(selectors.userNichosiCount),
				$nick = $el.find(selectors.userNick),
				nichosiCount = view.info.get('user').nichosiCount,
				countLength = String(nichosiCount).length,
				countWidth = (countLength + 2) * view.info.get('remSize', true),
				fullWidth = win.APP.bb.device.get('width');

			if (countLength !== view.get('countLength')) {
				$count.css('width', countWidth + 'px');
				$nick.css('width', (fullWidth - countWidth) + 'px');
				view.set('countLength', countLength);
			}

			$count.html( nichosiCount );

		},

		setUserNick: function (e) {

			var view = this,
				info = view.info,
				$this = $(e.currentTarget),
				user = info.get('user'),
				nick = $this.val().trim(),
				userModel = win.APP.bb.user,
				nickLength = nick.length,
				minNickLength = 3,
				maxNickLength = 20;

			if ( nickLength < minNickLength ) {
				//$this.val(info.get('user').nick);
				console.log('nick have to more than ', minNickLength);
				return;
			}

			if ( nickLength > maxNickLength ) {
				//$this.val(info.get('user').nick);
				console.log('nick have to less than ', maxNickLength);
				return;
			}

			// if nick is exist detect extra symbols
			if ( /[\{\}\(\)\!\<\>]/.test(nick) ) {
				//$this.val(info.get('user').nick);
				console.log('contains extra symbols \{\}\(\)\!\<\>');
				return;
			}

			userModel.set('nick', nick);

		},

		updateLeaderBoard: function (evt, snap) {

			var newList = [],
				view = this,
				$el = view.$el,
				$board = $el.find(view.selectors.leaderBoardWrapper),
				oldList = view.get('boardList');

			snap.forEach(function (user) {
				newList.unshift(user.val());
			});

			if ( JSON.stringify(newList) !== JSON.stringify(oldList) ) {
				view.set('boardList', newList);
				$board.html( view.tmpl['leader-board']({list: newList}) );
			}

		}

	});

}(window));
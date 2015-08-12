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
			leaderBoardWrapper: '.js-leader-board-wrapper',
			nickErrorText: '.js-nick-error-text'
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

			setTimeout(function () {
				$container.css('background-image', 'url(nichosi-img/' + nichosiImage + '.jpg)');
			}, 50);

			if ( !data.doNotCount ) {
				win.APP.bb.user.increaseNichosiCount();
				view.updateUserNichosiCount();
			}

		},

		updateUserNichosiCount: function () {

			var view = this;

			view.$el.find(view.selectors.userNichosiCount).html(view.info.get('user').nichosiCount);

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
				maxNickLength = 20,
				lang = win.APP.lang;

			view.hideNickError();

			if ( nickLength && nickLength < minNickLength ) {
				//$this.val(info.get('user').nick);
				view.showNickError(lang.get('minNickLength') + ' ' + minNickLength);
				userModel.set('nick', '');
				return;
			}

			if ( nickLength > maxNickLength ) {
				//$this.val(info.get('user').nick);
				view.showNickError(lang.get('maxNickLength') + ' ' + maxNickLength);
				userModel.set('nick', '');
				return;
			}

			// if nick is exist detect extra symbols
			if ( /[\{\}\(\)\!\<\>\[\]]/.test(nick) ) {
				//$this.val(info.get('user').nick);
				view.showNickError( lang.get('containsExtraSymbols') + ':<br /> \{ \} \( \) \! \< \> \[ \]');
				userModel.set('nick', '');
				return;
			}

			userModel.set('nick', nick);

		},

		showNickError: function (text) {
			var view = this;
			view.$el.find(view.selectors.nickErrorText).html(text).removeClass('hidden');
		},

		hideNickError: function () {
			var view = this;
			view.$el.find(view.selectors.nickErrorText).html('').addClass('hidden');
		},

		updateLeaderBoard: function (evt, snap) {

			var newList = [],
				view = this,
				$el = view.$el,
				$board = $el.find(view.selectors.leaderBoardWrapper),
				oldList = view.get('boardList'),
				scrollTop,
				userDbKey = win.APP.db.get('userDbKey'),
				data = snap.val();

			if ( data[userDbKey] ) {
				data[userDbKey].inList = true;
			}

			_.each(data, function (user) {
				newList.push(user);
			});

			newList = newList.sort(function (a, b) {
				return b.nichosiCount - a.nichosiCount;
			});

			if ( JSON.stringify(newList) !== JSON.stringify(oldList) ) {
				scrollTop = view.$el.find('.js-scroll-area-container').scrollTop();
				view.set('boardList', newList);
				$board.html( view.tmpl['leader-board']({list: newList}) );
				view.$el.find('.js-scroll-area-container').scrollTop(scrollTop);
			}

		}

	});

}(window));
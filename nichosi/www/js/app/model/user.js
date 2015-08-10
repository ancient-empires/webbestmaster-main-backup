/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	win.APP.BB.UserModel = Backbone.Model.extend({

		defaults: {
			user: {
				nick: '',
				id: Date.now(),
				nichosiCount: 0
			}
		},

		initialize: function () {

			var user = this;

			user.autoSetData();

			//user.on('change:nick', user.onChangeNick);

		},

		autoSetData: function () {

			var user = this,
				info = win.APP.info,
				savedUser = info.get('user');

			if ( !savedUser) {
				savedUser = user.get('user');
				info.set('user', savedUser);
			}

		},

		increaseNichosiCount: function () {

			var user = this,
				info = win.APP.info,
				userData = info.get('user');

			userData.nichosiCount += 1;

			info.set('user', userData);

			win.APP.db.saveUserData(userData, {nichosiCount: userData.nichosiCount});

		}

		//,onChangeNick: function (model, newValue) {
		//
		//	var user = this,
		//		info = win.APP.info,
		//		userData = info.get('user'),
		//		db = win.APP.db,
		//		$view = $('.js-nichosi-screen');
		//
		//	userData.nick = newValue;
		//	info.set('user', userData);
		//	db.saveUserData(userData, {nick: newValue}).done(function () {
		//		db.getUsersByNick(newValue).then(function (snap) {
		//			if ( info.get('user').nick === newValue ) {
		//				//log('we have more ' + (snap.numChildren() - 1) + ' with name ' + newValue + ' except you');
		//				$view.trigger('showNickInfo', {
		//					name: newValue,
		//					userCount: snap.numChildren() - 1
		//				});
		//			} else {
		//				log('diff nick yet');
		//			}
		//		}, function () {
		//			log('can not get users by nick');
		//		})
		//
		//	});
		//
		//}

	});


}(window));
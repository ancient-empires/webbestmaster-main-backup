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

			win.APP.db.saveUserData(userData);

		}






	});


}(window));
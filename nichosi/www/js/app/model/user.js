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
				nick: ''
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

			if (savedUser) {
				return;
			}

			savedUser = user.get('user');

			info.set('user', savedUser);

		}






	});


}(window));
define(['backbone', 'mediator', 'log'], function (bb, mediator, log) {

	var User = bb.Model.extend({

		defaults: {
			isLogged: false,
			login: null,
			password: null
		},

		initialize: function () {

			var user = this;

			mediator.installTo(user);

			user.bindEventListeners();

		},

		bindEventListeners: function () {

			var user = this;

			user.subscribe('login-successful', user.login);

		},

		login: function () {

			log('user is logged');

		}

	});

	log('user init');

	return new User();

});
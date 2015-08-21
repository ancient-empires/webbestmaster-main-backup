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

		login: function (data) {

			log('user is logged');

			var user = this;

			user.set(data);

			user.set('isLogged', true);

			user.publish('route-to', {
				url: 'main'
			});

		}

	});

	log('user init');

	return new User();

});
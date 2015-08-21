define(['backbone', 'mediator', 'log', 'info'], function (bb, mediator, log, info) {

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

		login: function (dataArg) {

			log('user is logged');

			var user = this,
				data = dataArg;

			user.set(data);

			info.set('hash', data.hash);

			user.set('isLogged', true);

			user.publish('route-to', {
				url: 'main'
			});

		}

	});

	log('user init');

	return new User();

});
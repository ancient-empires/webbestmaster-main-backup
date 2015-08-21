define(['jquery', 'backbone', 'BaseView', 'PopupView', 'underscore', 'log'], function ($, bb, BaseView, PopupView, _, log) {

	return BaseView.extend({

		events: {
			'click .js-show-popup': 'showPopupView',
			'click .js-register': 'register',
			'click .js-login': 'login'
		},

		selectors: {},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.home());

			//view.constructor.prototype.initialize.apply(view, arguments);
			view.delegateEvents();
			view.render();

			console.log('home view initialize');

		},

		showPopupView: function () {

			var popup = new PopupView({
				name: 'popup-test-content',
				timeout: 3e3
			});

			popup.data.onShowPromise.then(function () {
				console.log('show popup');
			});

		},

		register: function () {

			var view = this,
				data = view.collectRegisterData();

			view.subscribe('register-successful', function () {
				log('user register successful');
				this.unsubscribe('register-successful');
			});

			view.subscribe('register-failed', function () {
				log('user register failed');
				this.unsubscribe('register-failed');
			});

			view.publish('register-user', data);

		},

		collectRegisterData: function () {

			var $el = this.$el,
				data = {},
				map = {
					login: '.js-register-login',
					email: '.js-register-email',
					password: '.js-register-password'
				};

			_.each(map, function (selector, key) {
				data[key] = $el.find(selector).val();
			});

			return data;

		},

		login: function () {

			var view = this,
				data = view.collectLoginData();

			view.subscribe('login-successful', function () {
				log('user login successful');
				this.unsubscribe('login-successful');
				this.unsubscribe('login-failed');
			});

			view.subscribe('login-failed', function () {
				log('user login failed');
				this.unsubscribe('login-successful');
				this.unsubscribe('login-failed');
			});

			view.publish('login-user', data);

		},

		collectLoginData: function () {

			var $el = this.$el,
				data = {},
				map = {
					login: '.js-login-login',
					password: '.js-login-password'
				};

			_.each(map, function (selector, key) {
				data[key] = $el.find(selector).val();
			});

			return data;

		}


	});

});

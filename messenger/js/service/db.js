/*jslint white: true, nomen: true */
define(['Firebase', 'mediator', 'log', 'sha1', 'user'], function (Firebase, mediator, log, sha1, user) {

	'use strict';

	var db = {

		url: {
			//script: 'https://cdn.firebase.com/js/client/2.2.1/firebase.js',
			dataBase: 'https://radiant-torch-4344.firebaseio.com/messenger/'
		},

		attr: {},

		init: function () {

			var base = this,
				fireBase = new Firebase(base.url.dataBase);

			base.set('db', fireBase);

			log('Firebase init');

			base.bindLeaderBordListener();

		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		get: function (key) {
			return this.attr[key];
		},

		bindLeaderBordListener: function () {

			var base = this;

			mediator.installTo(base);

			base.subscribe('register-user', base.registerUser);
			base.subscribe('login-user', base.loginUser);
			base.subscribe('auto-login-user', base.autoLoggingUser);

		},

		registerUser: function (dataArg) {

			var base = this,
				db = base.get('db'),
				data = dataArg || {},
				login = data.login,
				hash = sha1.hash(login + data.password),
				id = sha1.hash(hash);

			data.hash = hash;

			data.id = id;

			// save to main data
			db.child('/users').push(data);

			// save for safe and fast access
			db.child('/usersData').push({
				id: id,
				login: login
			});

			base.publish('auto-login-user', { hash: hash });

			log('try to reg user', data);

		},

		loginUser: function (dataArg) {

			var base = this,
				db = base.get('db'),
				data = dataArg || {},
				hash = sha1.hash(data.login + data.password);

			log('try to login ', data);

			db.child('/users').orderByChild('hash').equalTo(hash).once('value', function (snap) {

				var userData = snap.val(),
					dbHash;

				if (userData) {
					dbHash = _.keys(userData)[0];
					base.publish('login-successful', userData[dbHash]);
					base.set('db-hash', dbHash);
				} else {
					base.publish('login-failed');
				}

			});

		},

		autoLoggingUser: function (dataArg) {

			var base = this,
				db = base.get('db'),
				data = dataArg || {},
				hash = data.hash || '';

			log('try to auto login', hash);

			db.child('/users').orderByChild('hash').equalTo(hash).once('value', function (snap) {

				var userData = snap.val(),
					dbHash;

				if (userData) {
					dbHash = _.keys(userData)[0];
					base.publish('login-successful', userData[dbHash]);
					base.set('db-hash', dbHash);
				} else {
					base.publish('auto-login-failed');
				}

			});

		},

		searchUser: function (value) {

			var base = this,
				db = base.get('db'),
				deferred = $.Deferred();

			db.child('/usersData').orderByChild('login').startAt(value).endAt(value + '~').once('value', function (snap) {

				var result = [];

				snap.forEach(function (item) {
					result.push(item.val());
				});

				deferred.resolve({
					result: result,
					value: value
				});

			});

			return deferred.promise();

		}

	};

	db.init();

	return db;

});

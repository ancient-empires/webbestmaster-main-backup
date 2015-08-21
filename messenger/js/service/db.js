/*jslint white: true, nomen: true */
define(['Firebase', 'mediator', 'log', 'sha1'], function (Firebase, mediator, log, sha1) {

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

		},

		registerUser: function (dataArg) {

			var base = this,
				db = base.get('db'),
				data = dataArg || {};

			data.id = sha1.hash(data.login + data.password);

			db.child('/users').push(data);

			log('try to reg user', data);

		},

		loginUser: function (dataArg) {

			var base = this,
				db = base.get('db'),
				data = dataArg || {},
				id = sha1.hash(data.login + data.password);

			log('try to login ', data);

			db.child('/users').orderByChild('id').equalTo(id).once('value', function (snap) {

				var userData = snap.val(),
					dbHash;

				if (userData) {
					base.publish('login-successful');
					dbHash = _.keys(userData)[0];
					//base.set('db-hash', dbHash);
					//base.set('id', id);
					log('user dbHash', dbHash);
					log('user id', id);
					log('user data', userData[dbHash]);
				} else {
					base.publish('login-failed');
				}

			});



		}

	};

	db.init();

	return db;

});

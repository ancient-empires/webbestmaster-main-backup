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
			base.subscribe('send-request-to-user', base.sendRequestToUser);
			base.subscribe('send-message', base.sendMessage);
			base.subscribe('login-successful', base.bindUserListeners);
			base.subscribe('db-get-contacts', base.getContactList);

		},

		bindUserListeners: function () {

			var base = this,
				db = base.get('db'),
				userDataDbHash = base.get('user-data-db-hash');

			// find userData db-hash
			db.child('/usersData/' + userDataDbHash + '/inputs').on('child_added', function (snap) {

				var data = snap.val();

				log('new request from', data.from);
				log('auto accept request');

				base.acceptRequest(data);

			});

		},

		acceptRequest: function (dataArg) {

			var base = this,
				data = dataArg || {},
				db = base.get('db'),
				meId = base.get('user-id'),
				meDataDbHash = base.get('user-data-db-hash'),
				requesterId = dataArg.from,
				requesterDataDbHash;

			db.child('/usersData').orderByChild('id').equalTo(requesterId).once('value', function (snap) {

				var data = snap.val();
				requesterDataDbHash = _.keys(data)[0];

				// add to contacts to both users
				db.child('/usersData/' + meDataDbHash + '/contacts').push({
					id: requesterId
				});

				db.child('/usersData/' + requesterDataDbHash + '/contacts').push({
					id: meId
				});

				db.child('/usersData/' + meDataDbHash + '/inputs').orderByChild('from').equalTo(requesterId).once('value', function (snap) {

					var data = snap.val(),
						key = _.keys(data)[0];

					db.child('/usersData/' + meDataDbHash + '/inputs/' + key).remove();

				});

			});

			// base.set('user-data-db-hash', userDataDbHash);

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
				//db = base.get('db'),
				data = dataArg || {},
				hash = sha1.hash(data.login + data.password);

			log('try to login ', data);

			base.loginUserProceed(hash);

		},

		loginUserProceed: function (hash) {

			var base = this,
				db = base.get('db');

			db.child('/users').orderByChild('hash').equalTo(hash).once('value', function (snap) {

				var userData = snap.val(),
					dbHash,
					userId;

				if (userData) {
					dbHash = _.keys(userData)[0];
					userData = userData[dbHash];
					base.set('db-hash', dbHash);
					userId = userData.id;
					base.set('user-id', userId);

					db.child('/usersData').orderByChild('id').equalTo(userId).once('value', function (snap) {

						var data = snap.val(),
							userDataDbHash = _.keys(data)[0];

						base.set('user-data-db-hash', userDataDbHash);
						base.publish('login-successful', userData);

					});


				} else {
					base.publish('login-failed');
				}

			});

		},

		autoLoggingUser: function (dataArg) {

			var base = this,
				//db = base.get('db'),
				data = dataArg || {},
				hash = data.hash || '';

			log('try to auto login', hash);

			base.loginUserProceed(hash);

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

		},

		sendRequestToUser: function (dataArg) {

			var base = this,
				data = dataArg || {},
				db = base.get('db');

			db.child('/usersData').orderByChild('id').equalTo(data.userId).once('value', function (snap) {

				var data = snap.val(),
					key = _.keys(data)[0];

				db.child('/usersData/' + key + '/inputs').push({
					type: 'request-to-user',
					from: base.get('user-id')
				});

				//debugger

			});

			//db.child('/users/' + dbHash + '/contacts').push(data.userId, function () {

				//base.getContactList();
			//});

		},

		getContactList: function () {

			var base = this,
				db = base.get('db'),
				//dbHash = base.get('db-hash'),
				userDataDbHash = base.get('user-data-db-hash');

			db.child('/usersData/' + userDataDbHash + '/contacts').once('value', function (snap) {
				base.publish('update-contact-list', { list: snap.val() });
			});

		},

		sendMessage: function (dataArg) {

			var base = this,
				db = base.get('db'),
				data = dataArg || {},
				senderId = user.get('id'),
				acceptorId = data.to,
				text = data.text,
				conversationId = [senderId, acceptorId].sort().join('');

			db.child('/conversation/' + conversationId).push({
				text: text,
				from: senderId
			});

		}

	};

	db.init();

	return db;

});

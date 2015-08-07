/*jslint white: true, nomen: true */
(function (win, doc) {

	"use strict";
	/*global window */
	/*global Firebase */

	win.APP = win.APP || {};

	win.APP.db = {

		url: {
			//script: 'https://cdn.firebase.com/js/client/2.2.1/firebase.js',
			dataBase: 'https://radiant-torch-4344.firebaseio.com/nichosi/'
		},

		attr: {
			userDbKey: false
		},

		init: function () {

			var db = this,
				fireBase = new Firebase(db.url.dataBase);

			db.set('db', fireBase);

			db.bindLeaderBordListener();

		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		get: function (key) {
			return this.attr[key];
		},

		// extra
		initUser: function () {

			var db = this,
				firebase = db.get('db'),
				userData = win.APP.info.get('user'),
				deferred = $.Deferred();

			firebase.child('/').orderByChild('id').equalTo(userData.id).once('value', function (snapshot) {

				var val = snapshot.val(),
					key,
					newUser;

				if ( val ) { // user is exist
					key = _.keys(val)[0];
					db.set('userDbKey', key);
					db.saveUserData(userData).done(function () {
						deferred.resolve();
					});
				} else { // create new user
					newUser = firebase.push(userData, function () {
						db.set('userDbKey', newUser.key());
						deferred.resolve();
					});
				}

			}, function (err) {
				deferred.reject(err);
			});

			return deferred.promise();

		},

		// extend
		saveUserData: function (user, newValue) {

			var db = this,
				firebase = db.get('db'),
				userDbKey = db.get('userDbKey'),
				deferred = $.Deferred();

			// db.set('isInit', true);
			if ( !userDbKey ) { // detect db is init
				db.initUser();
				deferred.reject();
				log('user is not inited');
				return deferred.promise();
			}

			if (newValue) {
				firebase.child('/' + userDbKey).update(newValue, function (err) {
					return err ? deferred.reject() : deferred.resolve();
				});
			} else {
				firebase.child('/' + userDbKey).set(user, function (err) {
					return err ? deferred.reject() : deferred.resolve();
				});
			}

			return deferred.promise();

		},

		getUsersByNick: function (nick) {

			var db = this,
				firebase = db.get('db'),
				deferred = $.Deferred();

			if ( !db.get('userDbKey') ) {
				deferred.reject();
				return deferred.promise();
			}

			firebase.orderByChild('nick').equalTo(nick).once('value', function (snap) {
				//console.log(snap.numChildren());
				deferred.resolve(snap);
			});

			return deferred.promise();

		},

		bindLeaderBordListener: function () {

			var db = this,
				firebase = db.get('db');

			firebase.orderByChild("nichosiCount").limitToLast(3).on('value', function (snap) {
				$('.js-nichosi-screen').trigger('updateLeaderBoard', snap);
			});

		}

	}

}(window, window.document));
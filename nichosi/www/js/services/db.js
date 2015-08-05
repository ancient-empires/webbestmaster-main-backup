/*jslint white: true, nomen: true */
(function (win, doc) {

	"use strict";
	/*global window */
	/*global Firebase */

	win.APP = win.APP || {};

	win.APP.db = {

		url: {
			script: 'https://cdn.firebase.com/js/client/2.2.1/firebase.js',
			dataBase: 'https://radiant-torch-4344.firebaseio.com/nichosi/'
		},

		className: {
			dataBaseScript: 'js-firebase-script'
		},

		attr: {
			isInit: false,
			scriptIsLoaded: false,
			userDbKey: false
		},

		init: function () {

			var db = this,
				deferred = $.Deferred();

			if ( db.get('userDbKey') ) {
				deferred.resolve();
				return deferred.promise();
			}

			db
				.loadScript()
				// load script
				.then(
					// script loaded
					function () {
						var fireBase = new Firebase(db.url.dataBase);
						db.set('db', fireBase);
						db.set('isInit', true);
						return db.initUser();
					},
					// script is not loaded
					function () {
						log('script is not loaded');
						deferred.reject();
						return false;
					}
				)
				// try to init user
				.then(function () {
					log('unit is init');
					deferred.resolve();
				}, function () {
					log('failed to init user');
				});

			return deferred.promise();

		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		get: function (key) {
			return this.attr[key];
		},

		loadScript: function () {

			var db = this,
				deferred = $.Deferred(),
				url = db.url.script,
				scriptClassName = db.className.dataBaseScript,
				script = doc.createElement('script'),
				headNode = doc.head,
				oldScript = headNode.querySelector('.' + scriptClassName);

			// detect - script was loaded successfully
			if ( db.get('scriptIsLoaded') ) {
				deferred.resolve();
				return deferred.promise();
			}

			// detect old script
			if (oldScript) {
				headNode.removeChild(oldScript);
			}

			script.className = scriptClassName;

			function onLoad() {
				script.removeEventListener('load', onLoad, false);
				script.removeEventListener('error', onError, false);
				db.set('scriptIsLoaded', true);
				deferred.resolve();
			}

			function onError() {
				script.removeEventListener('load', onLoad, false);
				script.removeEventListener('error', onError, false);
				deferred.reject();
			}

			script.addEventListener('load', onLoad, false);

			script.addEventListener('error', onError, false);

			script.src = url;

			headNode.appendChild(script);

			return deferred.promise();

		},

		initUser: function () {

			var db = this,
				firebase = db.get('db'),
				user = win.APP.info.get('user'),
				deferred = $.Deferred();

			firebase.child('/').orderByChild('id').equalTo(user.id).once('value', function (snapshot) {

				var val = snapshot.val(),
					key;

				if ( val ) { // user is exist
					key = _.keys(val)[0];
					db.set('userDbKey', key);
					db.saveUserData(user).done(function () {
						deferred.resolve();
					});
				} else { // create new user
					firebase.push(user, function () {
						db.initUser().done(function () {
							deferred.resolve();
						});
					});
				}

			});

			//firebase.orderByPriority(true).on('value', function (snap) {
			//
			//	console.log(snap.val());
			//
			//});


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
				deferred.reject();
				log('user is not inited');
				return deferred.promise();
			}

			if (newValue) {

				if (newValue.nichosiCount) {
					firebase.child('/' + userDbKey).setWithPriority(user, newValue.nichosiCount, function () {

						console.log(newValue.nichosiCount);

						deferred.resolve();
					});
				} else {
					firebase.child('/' + userDbKey).update(newValue, function () {
						deferred.resolve();
					});

				}



			} else {
				firebase.child('/' + userDbKey).set(user, function () {
					deferred.resolve();
				});
			}

			return deferred.promise();

		},

		getUsersByNick: function (nick) {

			var db = this,
				firebase = db.get('db'),
				deferred = $.Deferred();

			firebase.orderByChild('nick').equalTo(nick).once('value', function (snap) {
				//console.log(snap.numChildren());
				deferred.resolve(snap);
			});

			return deferred.promise();

		}

	}

}(window, window.document));
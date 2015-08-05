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
			scriptIsLoaded: false
		},

		init: function () {

			var db = this,
				deferred = $.Deferred();

			if ( db.get('isInit') ) {
				deferred.resolve();
				return deferred.promise();
			}

			db.loadScript().then(
				function () {
					var fireBase = new Firebase(db.url.dataBase);
					db.set('db', fireBase);
					db.set('isInit', true);
					log('db is inited');


					fireBase.onAuth(function(authData) {
						deferred.resolve();
						db.set('isInit', true);
						if (authData) {
							console.log("Authenticated with uid:", authData.uid);
						} else {
							console.log("Client unauthenticated.")
						}
					});
					//deferred.resolve();
				},
				function () {
					log('script is not loaded');
					deferred.reject();
				}
			);

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

		// extend
		saveUserData: function (user) {

			var db = this,
				firebase = db.get('db'),
				key;

			// db.set('isInit', true);
			if ( !db.get('isInit') ) { // detect db is init
				return;
			}

			// detect user db key, if exists - all is OK
			key = db.get('userDbKey');
			if ( key ) {
				console.log('key!!!!!!!');
				firebase.child('/' + key).set(user);
			} else {
				console.log('no!!!!!!!!');
				firebase.child('/').orderByChild('id').equalTo(user.id).once('value', function (snapshot) {

					var val = snapshot.val(),
						key;

					if ( val ) { // user is exist
						key = _.keys(val)[0];
						db.set('userDbKey', key);
						firebase.child('/' + key).set(user);
					} else { // create new user
						firebase.push(user);
					}

				});

			}




		}


	}

}(window, window.document));
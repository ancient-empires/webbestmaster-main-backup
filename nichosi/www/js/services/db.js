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
					deferred.resolve();
				},
				function () {
					log('db is NOT inited');
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

		}

	}

}(window, window.document));
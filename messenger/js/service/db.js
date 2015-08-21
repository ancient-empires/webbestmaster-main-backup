/*jslint white: true, nomen: true */
define(['Firebase', 'mediator', 'log'], function (Firebase, mediator, log) {

	'use strict';

	var db = {

		url: {
			//script: 'https://cdn.firebase.com/js/client/2.2.1/firebase.js',
			dataBase: 'https://radiant-torch-4344.firebaseio.com/messenger/'
		},

		attr: {},

		init: function () {

			var db = this,
				fireBase = new Firebase(db.url.dataBase);

			db.set('db', fireBase);

			log('firebase init');

			//db.bindLeaderBordListener();

		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		get: function (key) {
			return this.attr[key];
		}

	};

	mediator.installTo(db);

	db.init();

	return db;

});

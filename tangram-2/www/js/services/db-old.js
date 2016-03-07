'use strict';
/*global window */
/*global */

import $ from './../lib/jbone';

var db = {

	db: null,
	name: 'tangram_1',
	preview: 'preview_1',
	version: '1.0',
	description: 'tangram data base',
	size: 1024 * 1024 * 13, // 2 mb

	init: function () {

		var dbMaster = this,
			deferred = $.Deferred(),
			db = openDatabase(dbMaster.name, dbMaster.version, dbMaster.description, dbMaster.size);

		dbMaster.db = db;

		db.transaction(function (tx) {

			tx.executeSql('CREATE TABLE IF NOT EXISTS ' + dbMaster.preview + ' (hash TEXT, svgText TEXT)',
				[],
				function () {
					deferred.resolve();
				},
				function () {
					deferred.reject();
				}
			);

		});

		return deferred.promise();

	},

	pushPreview: function (hash, svgText) {

		var dbMaster = this,
			db = dbMaster.db,
			tableName = dbMaster.preview,
			deferred = $.Deferred();

		db.transaction(function (tx) {
			tx.executeSql('INSERT INTO ' + tableName + ' (hash, svgText) values(?, ?)', [hash, svgText], function () {
				deferred.resolve();
			}, null);
		});

/*
		dbMaster.getPreviewByHash(hash).done(function (data) {
			if (data) {
				db.transaction(function (tx) {
					tx.executeSql('UPDATE ' + tableName + ' SET (hash, svgText) values(?, ?) WHERE hash=?', [hash, svgText], function () {
						deferred.resolve();
					}, null);
				});
			} else {
				db.transaction(function (tx) {
					tx.executeSql('INSERT INTO ' + tableName + ' (hash, svgText) values(?, ?)', [hash, svgText], function () {
						deferred.resolve();
					}, null);
				});
			}
		});
*/

		return deferred.promise();

	},

	getPreviewByHash: function (hash) {

		var dbMaster = this,
			db = dbMaster.db,
			tableName = dbMaster.preview,
			deferred = $.Deferred();

		db.transaction(function (tx) {
			tx.executeSql('SELECT * FROM ' + tableName + ' WHERE hash=?', [hash], function (tx, results) {
				var rows = results.rows;
				deferred.resolve(rows.length ? rows.item(0) : null);
			});
		});

		return deferred.promise();

	},

	refreshPreviewTable: function () {

		var dbMaster = this,
			db = dbMaster.db,
			tableName = dbMaster.preview,
			deferred = $.Deferred();

		db.transaction(function (tx) {
			tx.executeSql('DROP TABLE IF EXISTS ' + tableName, [], function () {
				dbMaster.init().done(function () {
					deferred.resolve();
				});
			}, null);
		});

		return deferred.promise();

	}

};

export default db;








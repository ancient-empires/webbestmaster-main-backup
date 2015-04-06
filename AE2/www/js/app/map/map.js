/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.map = {
		squareSize: {
			min: 24,
			max: 96, // 192
			default: 48 // 24 * 2
		},
		maxCanvasSize: 4194304, // 2048 * 2048
		scaleImage: function (img, scale) {

			var imgWidth = img.width,
				imgHeight = img.height,
				srcCanvas,
				srcCtx,
				srcData,
				dstCanvas,
				dstCtx,
				offset,
				x, y, r, g, b, a;

			srcCanvas = document.createElement('canvas');
			srcCanvas.width = imgWidth;
			srcCanvas.height = imgHeight;

			srcCtx = srcCanvas.getContext('2d');
			srcCtx.drawImage(img, 0, 0);
			srcData = srcCtx.getImageData(0, 0, img.width, img.height).data;

			dstCanvas = document.createElement('canvas');
			dstCanvas.width = imgWidth * scale;
			dstCanvas.height = imgHeight * scale;
			dstCtx = dstCanvas.getContext('2d');

			offset = 0;
			for (y = 0; y < imgHeight; y += 1) {
				for (x = 0; x < imgWidth; x += 1) {
					r = srcData[offset];
					offset += 1;
					g = srcData[offset];
					offset += 1;
					b = srcData[offset];
					offset += 1;
					a = srcData[offset] / 100;
					offset += 1;
					dstCtx.fillStyle = 'rgba(' + [r, g, b, a].join(',') + ')';
					dstCtx.fillRect(x * scale, y * scale, scale, scale);
				}
			}

			return dstCanvas.toDataURL();

		},
		playerColors: ['blue', 'red', 'green', 'black'],
		playerTypes: ['player', 'cpu', 'none'],
		money: [500, 1000, 2000, 5000, 10000],
		unitsLimits: [10, 15, 20, 25],
		getTypeByTileName: function (tileName) {
			return tileName.replace(/\-\d+$/,'');
		},

		terra: {
			pathResistance: 1,
			defence: 5
		},
		road: {
			pathResistance: 1,
			defence: 0
		},
		bridge: {
			pathResistance: 1,
			defence: 0
		},
		hill: {
			pathResistance: 2,
			defence: 10
		},
		forest: {
			pathResistance: 2,
			defence: 10
		},
		stone: {
			pathResistance: 3,
			defence: 15
		},
		water: {
			pathResistance: 4,
			flowPathResistance: 1,
			defence: 0
		},

		// db
		db: {

			name: 'AE2DB',
			version: '1',
			description: 'AE2 DB',
			size: 1024 * 1024 * 20, // 1024 x 1024 x 20 = 1MB x 20 = 20MB
			db: false, // field for db
			skirmishMaps: 'skirmish',
			//missionMaps: 'mission',

			init: function () {

				var dbMaster = this,
					db = openDatabase(dbMaster.name, dbMaster.version, dbMaster.description, dbMaster.size);

				dbMaster.db = db;

				// create tablet if needed
				db.transaction(function(tx) {
					//tx.executeSql('CREATE TABLE IF NOT EXISTS ' + dbMaster.missionMaps + ' (id REAL UNIQUE, js_name TEXT, info TEXT, map TEXT)'); //id REAL UNIQUE, label TEXT, timestamp REAL
					tx.executeSql('CREATE TABLE IF NOT EXISTS ' + dbMaster.skirmishMaps + ' (jsName TEXT, info TEXT, map TEXT)', [], function () {
						dbMaster.prepareDefaultMap();
					}, function (e) {
						log(e);
					});
				});

			},

			prepareDefaultMap: function () {

				var maps = win.APP.maps,
					dbMaster = this,
					db = dbMaster.db;

				_.each(maps, function (map, jsName) {
					db.transaction(function (tx) {
						tx.executeSql('SELECT * FROM ' + map.type + ' WHERE jsName=?', [jsName], function (tx, results) {
							if (results.rows.length) {
								delete win.APP.maps[jsName];
								return;
							}
							dbMaster.insertMap(map, jsName);
						});
					});
				});

			},

			insertMap: function (map, jsName) { // map

				var maps = win.APP.maps,
					dbMaster = this,
					db = dbMaster.db,
					info;

				info = JSON.parse(JSON.stringify(map));

				delete info.units;
				delete info.buildings;
				delete info.terrain;

				db.transaction(function(tx) {
					tx.executeSql('INSERT INTO ' + map.type + ' (jsName, info, map) values(?, ?, ?)', [jsName, JSON.stringify(info), JSON.stringify(map)], null, null);
				});

				delete maps[jsName];

			},

			getMapsInfo: function (data) {

				data = data || {};

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db,
					mapsInfo = {};

				data.type = data.type || dbMaster.skirmishMaps;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type, [], function (tx, results) {
						var i, len, row;
						for (i = 0, len = results.rows.length; i < len; i += 1) {
							row = results.rows.item(i);
							mapsInfo[row.jsName] = JSON.parse(row.info);
						}
						deferred.resolve(mapsInfo);
					});
				});

				return deferred.promise();

			},

			getMapInfo: function (data) {

				data = data || {};

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db;

				data.type = data.type || dbMaster.skirmishMaps;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type + ' WHERE jsName=?', [data.jsName], function (tx, results) {

						var row = results.rows.item(0),
							mapInfo = JSON.parse(row.info);

						deferred.resolve(mapInfo);

					});
				});

				return deferred.promise();

			},

			getMap: function (data) {

				data = data || {};

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db;

				data.type = data.type || dbMaster.skirmishMaps;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type + ' WHERE jsName=?', [data.jsName], function (tx, results) {

						var row = results.rows.item(0),
							map = JSON.parse(row.map);

						deferred.resolve(map);

					});
				});

				return deferred.promise();

			}


		}



	};

}(window));
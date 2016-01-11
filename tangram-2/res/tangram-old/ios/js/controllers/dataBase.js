(function (win) {

	var dataBase;

	dataBase = {
		dbName: 'tangramCollection_2003',
		tableName: 'tangramTable_2003',
		init: function(){
			var that = this;
			// create or connect to db
			this.db = openDatabase(this.dbName, '0.1', "A list of tangrams.", 4 * 1024 * 1024);
			if (!this.db) {
				console.warn("---- Failed to connect to database. ----");
				return;
			}
			// create table if table is not exist
			this.db.transaction(function (tx) {
				tx.executeSql("SELECT COUNT(*) FROM " + that.tableName, [],
					function (result) {
						//console.log(result);
					},
					function (tx, error) {
						tx.executeSql("CREATE TABLE " + that.tableName + " (id REAL UNIQUE, figureId REAL, categoryName TEXT, figureNumber REAL, figureSVG TEXT, spendTime REAL, timestamp REAL)", [], null, null);
					}
				)
			});

		},

		saveProgress: function(data) {

			var that = this;
			this.db.transaction(function (tx) {
				// remove data from db
				tx.executeSql("DELETE FROM " + that.tableName + " WHERE figureId = ?", [data.figureId], null, null);
				// save data to db
				tx.executeSql("INSERT INTO " + that.tableName + " (figureId, categoryName, figureNumber, figureSVG, spendTime, timestamp) values(?, ?, ?, ?, ?, ?)", [data.figureId, data.categoryName, data.figureNumber, data.figureSVG, data.spendTime, data.timestamp], null, null);
			});

		},
		getSvgByFigureId: function(id, func) {

			var that = this;
			this.db.transaction(function (tx) {
				tx.executeSql("SELECT * FROM " + that.tableName + " WHERE figureId = ?", [id],
					function (tx, result) {
						if (result.rows.length) {
							func(result.rows.item(0).figureSVG);
						}
					}, null)
			});

		},
		getAllDataArray: function(func) {

			var tableName = this.tableName;

			this.db.transaction(function (tx) {
				tx.executeSql("SELECT * FROM " + tableName, [],
					function (tx, result) {
						var data = [];
						for (var i = 0, len = result.rows.length; i < len; i += 1) {
							var item = result.rows.item(i);

							data.push({
								figureId: item.figureId,
								categoryName: item.categoryName,
								figureNumber: item.figureNumber,
								figureSVG: item.figureSVG,
								timestamp: item.timestamp,
								spendTime: item.spendTime
							});

						}
						func(data);
					}, null)
			});

		},
		removeDataBySVGId: function(svgId) {

			var tableName = this.tableName;
			// delete row from table
			this.db.transaction(function (tx) {
				tx.executeSql("DELETE FROM " + tableName + " WHERE figureId = ?", [svgId], null, null);
			});

		}


	};

	dataBase.init();

	win.dataBase = dataBase;

}(window));

(function () {

	"use strict";
	/*global */

	var util = require('viaden-modules/util'),
		mainCfg = require('viaden-modules/config/main.js'),
		path = require('path'),
		Reporter = require('viaden-modules/reporter/reporter.js'),
		reporter = new Reporter(),
		args = util.get('args'),
		exception = require('viaden-modules/exception'),
		testList = args.list;

	//exception.startListener();

	util.getTest(testList).forEach(function(testFileName, index, arr){

		var driver, test, Test, reportItem, url;

		driver = util.createWebDriverClient();

		Test = require(path.resolve(util.getStartPath(), mainCfg.folder.test, testFileName));

		test = new Test();

		reportItem = reporter.newItem({ test: test, driver: driver });

		url = (args.url || mainCfg.url.gb.default) + args.urlPostfix;

		test.extend('args', {
			url: url,
			driver: driver,
			reportItem: reportItem,
			reporter: reporter
		});

		test.run();

		if (index === arr.length - 1) { // check last item
			driver.quit().then(function(){
				reporter.compile();
			});
		} else {
			driver.quit();
		}

	});


}());



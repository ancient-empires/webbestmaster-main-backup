(function () {

	"use strict";
	/*global console, alert, require */

	global.mainConfig = require('./cfg/main.js'); // see main config -> main.js

	var util = require('user/util/util.js'),
		Reporter = require('user/reporter/reporter.js'),
		reporter = new Reporter(),
		args = util.getArguments(),
		path = require('path'),
		tests;

	if (args.testList) {
		tests = {
			tests: args.testList.split(',')
		};
	} else {
		tests = {
			tests: require(path.resolve('cfg', args.cfg || 'all.js')).tests
		};
	}

	tests.tests.forEach(function(testFileName, index, arr){

		var driver, test;

		// detect last item
		driver = util.createWebDriverClient(args);

//		driver.manage().timeouts().implicitlyWait(1000);

		test = require(path.resolve('test', testFileName)).test;

		test({
			driver: driver,
			args: args,
			reportItem: reporter.newItem({testFileName: testFileName, driver: driver})
		});

		driver.quit().then(function(){

			if (index === arr.length - 1) { // check last item
				reporter.compile();
			}

		});

	});


}());
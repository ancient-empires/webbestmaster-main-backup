(function () {

	"use strict";
	/*global */

	var test = function () {

		var util = {
			scrollTo: function(selector, dY) {

				// scroll to element
				driver.executeScript("document.querySelector('" + selector + "').scrollIntoView(true);");

				// scroll by vertical offset
				dY = dY || 0;
				driver.executeScript("window.scrollBy(0, " + dY + ")");

//			driver.sleep(1000); // let scroll loaded

			}
		};

		var webdriver = require('selenium-webdriver');
		var fs = require('fs');
		var assert = require("assert");
		var SELENIUM_HOST = 'http://localhost:8080/wd/hub';


		console.log(assert);
		var driver = new webdriver.Builder().
		usingServer(SELENIUM_HOST).
			withCapabilities({ browserName: 'chrome' }).
			build();

		driver.get('http://m.galabingo.com');

		driver.sleep(10 * 1000); // let galabingo loaded

		driver.manage().timeouts().implicitlyWait(1000); // wait between every click

		driver.findElement({css: '.dth.join-now-btn'}).click();

		driver.findElement({css: '#postcode'}).sendKeys('m21da');
		driver.findElement({css: '#postcodeButton'}).click();

		driver.findElement({css: '#postcodeSuggestionSelect option[value="1"]'}).click();

		util.scrollTo('label[for="tac"]', -150);
		driver.findElement({css: '#tac'}).click();
		//assert.fail('hue9st'.indexOf('huest') > -1, true);
		//driver.findElement({css: 'label[for="tac"]'}).click();

		driver.takeScreenshot().then(
			function(image, err) {
				fs.writeFile('out.png', image, 'base64', function(err) {
					console.log(err);
				});
			}
		);

	driver.quit();


	};

	exports.test = test;

}());
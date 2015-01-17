(function () {

	"use strict";
	/*global */

	process.argv.forEach(function (val, index, array) {
		console.log(index + ': ' + val);
	});

	console.log('//');
	console.log(arguments);

	var webdriver = require('selenium-webdriver');

	var SELENIUM_HOST = 'http://localhost:8080/wd/hub';

	var driver = new webdriver.Builder().
		usingServer(SELENIUM_HOST).
		withCapabilities(webdriver.Capabilities.chrome()).
//		withCapabilities({ browserName: 'firefox' }).
		build();

	driver.get("http://statlex.com/game/air/");

//	driver.sleep(1000);

	driver.findElement(webdriver.By.css('[data-route="privacy-policy"]')).click()
		.then(function(){

			var tt = driver.findElement(webdriver.By.css('.ui-corner-all'))
				.getInnerHtml().then(function(html){
					console.log(html);
				});

			console.log(tt);
		});


	//driver.quit();

}());
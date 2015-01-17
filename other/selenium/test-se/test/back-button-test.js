(function () {

	"use strict";
	/*global console, alert */

	exports.info = {
		name: 'back button test',
		description: 'steps for back button'
	};

	exports.test = function(args) {

		var driver = args.driver,
			reportItem = args.reportItem;

		driver.get("http://statlex.com/game/air/").then(function(){
			reportItem.markStartTime();
			reportItem.addText('test started');
		});


//		reportItem.takeScreenShot({ label: 'test started' });


		var airFreshBtn = '[data-route="air-fresh"]',
			backBtn = '.js-back';

		driver.wait(function() {

			// wait for button to air fresh screen
			return driver.findElement({css: airFreshBtn});

		}, 10000).then(
			function(){

				driver.findElement({css: airFreshBtn}).click();

				driver.sleep(1000);

				driver.findElement({css: backBtn}).click().then(function(){
					reportItem.takeScreenShot({ label: 'end test' });
					reportItem.setResult(reportItem.results.passed);
				});

			},
			function(){
				reportItem.setResult(reportItem.results.failed);
			}
		);

	};


}());
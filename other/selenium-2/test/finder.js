(function () {

	"use strict";
	/*global */

	var TestParent = require('viaden-modules/test-parent');

	function Test () {

		this.cfg = {
		};

		this.info = {
			name: 'finder test',
			description: 'test game finder',
			steps: [
				'load page',
				'open login form',
				'login'
			],
			expectedResult: 'All point in check list must be passed'
		};

		this.args = {};

		this.body = function () {

			var dep = this.dep,
				selector = dep.selector,
				args = this.args,
				cfg = this.cfg,
				driver = args.driver,
				reportItem = args.reportItem,
				isFailed = false;

			driver
				.wait(function () { // click to "search" button until this is displayed
					return driver.findElement({ css: selector.gameFinder.gameFind }).click().then(dep.trueFn, dep.falseFn);
				}, 25000);

			driver.findElement({ css: selector.gameFinder.searchField }).sendKeys('a').then(function () {

				driver.sleep(1000);

				driver.findElement({ css: selector.gameFinder.resultList }).isDisplayed().then(function (isDisplayed) {
					if ( !isDisplayed ) {
						isFailed = true;
						reportItem.takeScreenShot('No search results');
					} else {
						reportItem.takeScreenShot('Search results');
					}
				});

				driver.findElement({ css: selector.gameFinder.gamesCounter }).isDisplayed().then(function (isDisplayed) {

					if ( !isDisplayed ) {
						isFailed = true;
						reportItem.takeScreenShot('No game counter');
					}

				});

			});

			driver.findElement({ css: selector.gameFinder.clearSearch }).click().then(function () {

				driver.findElement({ css: selector.gameFinder.searchField }).getAttribute('value').then(function (value) {

					if ( value.length ) {
						isFailed = true;
						reportItem.takeScreenShot('Field is not clear');
					}

				})

			});

			driver.findElement({ css: selector.gameFinder.backFade }).click().then(function () {

				driver.findElement({ css: selector.gameFinder.backFade }).isDisplayed().then(function (isDisplayed) {

					if ( isDisplayed ) {
						isFailed = true;
						reportItem.takeScreenShot('Fade is not hidden');
					}

				});

				driver.findElement({ css: selector.gameFinder.searchField }).isDisplayed().then(function (isDisplayed) {

					if ( isDisplayed ) {
						isFailed = true;
						reportItem.takeScreenShot('Search field is not hidden');
					}

				});

			});

			driver.sleep(1000).then(function () {
				reportItem.takeScreenShot('End test');
				return isFailed || reportItem.setResult(reportItem.results.passed);
			});



		}

	}

	module.exports = Test;

	Test.prototype = new TestParent();

}());
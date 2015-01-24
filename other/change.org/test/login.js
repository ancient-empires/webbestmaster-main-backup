(function () {

	"use strict";
	/*global */

	var TestParent = require('viaden-modules/test-parent');

	function Test () {

		this.cfg = {
			userName: 'govnokod', // text
			password: 'qwerty' // text
		};

		this.info = {
			name: 'login test',
			description: 'login test for exist user',
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
				reportItem = args.reportItem;

			driver
				.wait(function () { // click to "login" button until this is displayed
					return driver.findElement({ css: selector.login.openLogin }).click().then(dep.trueFn, dep.falseFn);
				}, 10000);

			driver.findElement({ css: selector.login.userName }).sendKeys(cfg.userName);
			driver.findElement({ css: selector.login.password }).sendKeys(cfg.password);

			driver.findElement({ css: selector.login.loginSubmit }).click();

			driver
				.wait(function () {
					return driver.findElement({ css: selector.login.loginSuccessPopup }).isDisplayed().then(dep.trueFn, dep.falseFn);
				}, 10000)
				.then(function () {
					reportItem.takeScreenShot({label: 'Login success popup'});
				});

			driver.findElement({ css: selector.modalClose }).click();

			driver.sleep(1000).then(function () {
				reportItem.setResult(reportItem.results.passed);
				reportItem.takeScreenShot({label: 'Login successful'});
			});

		}

	}

	module.exports = Test;

	Test.prototype = new TestParent();

}());
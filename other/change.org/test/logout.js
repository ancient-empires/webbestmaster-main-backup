(function () {

	"use strict";
	/*global */

	var TestParent = require('viaden-modules/test-parent');

	function Test() {

		this.info = {
			name: 'logout test',
			description: 'test logout user',
			steps: [
				'load page',
				'login',
				'logout'
			],
			expectedResult: 'All point in check list must be passed'
		};

		this.args = {};

		this.body = function () {

			var dep = this.dep,
				selector = dep.selector,
				args = this.args,
				driver = args.driver,
				reportItem = args.reportItem;

			// login
			var loginStep = require(dep.path.resolve(dep.util.getStartPath(), dep.mainCfg.folder.test, 'login.js'));
			loginStep = new loginStep();
			loginStep.extend('args', this.args);
			loginStep.mode = 'step';
			loginStep.run();

			// open footer
			driver
				.wait(function () {
					return driver.findElement({css: selector.openFooter}).click().then(dep.trueFn, dep.falseFn);
				}, 1000);

			// click to logout link
			driver
				.wait(function () {
					return driver.findElement({css: selector.logout.openLogout}).click().then(dep.trueFn, dep.falseFn);
				}, 1000);

			// click to submit logout button
			driver
				.wait(function () {
					return driver.findElement({css: selector.modal + ' ' + selector.logout.logoutSubmit}).click().then(dep.trueFn, dep.falseFn);
				}, 1000);

			// click check current modal is close
			driver
				.wait(function () {
					return driver.findElement({css: selector.modal + ' ' + selector.logout.logoutSubmit}).isDisplayed().then(dep.trueFn, dep.falseFn);
				}, 2000)
				.then(
				function () {

				},
				function () {
					// confirm modal is not visible
					reportItem.takeScreenShot('Logout successful - popup');
					driver.findElement({css: selector.modalClose}).click();
				}
			);

			driver.sleep(1000).then(function () {
				reportItem.setResult(reportItem.results.passed);
				reportItem.takeScreenShot({label: 'Logout successful - logout state'});
			});

		}

	}

	module.exports = Test;

	Test.prototype = new TestParent();

}());



(function () {

	"use strict";
	/*global */

	var TestParent = require('viaden-modules/test-parent');

	function Test() {

		this.info = {
			name: 'reg visa card',
			description: 'reg visa card',
			steps: [
				'load page',
				'login',
				'open deposit',
				'open visa card',
				'reg visa card',
				'close successful popup',
				'close footer'
			],
			expectedResult: 'All point in check list must be passed'
		};

		this.cfg = {
			cardNumber: this.dep.util.getCardNumber(16)
		};

		this.args = {};

		this.body = function () {

			var dep = this.dep,
				util = dep.util,
				selector = dep.selector,
				args = this.args,
				cfg = this.cfg,
				driver = args.driver,
				reportItem = args.reportItem,
				timeout = 15000;

			// reg new user

			var regUser = require(dep.path.resolve(dep.util.getStartPath(), dep.mainCfg.folder.test, 'register.js'));
			regUser = new regUser();
			regUser.extend('args', this.args);

			regUser.extend('cfg', {
				eMail: dep.mainCfg.mail.regCardUser
			});

			regUser.mode = 'step';
			regUser.run();

			//
			//// login
			//var loginStep = require(dep.path.resolve(dep.util.getStartPath(), dep.mainCfg.folder.test, 'login.js'));
			//loginStep = new loginStep();
			//loginStep.extend('args', this.args);
			//loginStep.extend('cfg', {
			//	userName: 'govnokod', // text
			//	password: 'qwerty' // text
			//});
			//loginStep.mode = 'step';
			//loginStep.run().then(function () {
			//	console.log('login step - end');
			//});

			// open footer
			driver
				.wait(function () {
					return driver.findElement({ css: selector.openFooter }).click().then(dep.trueFn, dep.falseFn);
				}, timeout);

			// open deposit
			driver
				.wait(function () {
					return driver.findElement({ css: selector.regVisa.toDeposit }).click().then(dep.trueFn, dep.falseFn);
				}, timeout);

			// click to visa card
			driver
				.wait(function () {
					return driver.findElement({ css: selector.regVisa.visaCard }).click().then(dep.trueFn, dep.falseFn);
				}, timeout);

			driver
				.wait(function () {
					return driver.findElement({ css: selector.regVisa.visaCardIFrame }).isDisplayed().then(dep.trueFn, dep.falseFn);
				}, timeout);

			driver.switchTo().frame( selector.regVisa.visaCardIFrame.replace('#', '') );



			driver
				.wait(function () {
					return driver.findElement({ css: selector.regVisa.cardNumber }).isDisplayed().then(dep.trueFn, dep.falseFn);
				}, timeout);

			driver.findElement({ css: selector.regVisa.cardMonth }).click();
			driver.findElement({ css: selector.regVisa.cardYear }).click();

			(function enterCardNumber() {
				driver.findElement({ css: selector.regVisa.cardNumber }).clear();
				driver.findElement({ css: selector.regVisa.cardNumber }).sendKeys(util.getCardNumber(16));
				driver.findElement({ css: selector.regVisa.submitCard }).click();
				driver.sleep(1000);

				driver.findElement({ css: selector.regVisa.submitCard }).click().then(function () {
					enterCardNumber();
					return true;
				}, dep.falseFn);

			}());

			//driver.findElement({ css: selector.regVisa.submitCard }).click();

			driver.switchTo().defaultContent();
			driver
				.wait(function () {
					return driver.findElement({css: selector.modalClose}).isDisplayed().then(dep.trueFn, dep.falseFn);
				}, timeout)
				.then(function () {
					driver.sleep(1000)
						.then(function () {
							reportItem.takeScreenShot('register card successful');
						});
					driver.findElement({css: selector.modalClose}).click();
				});

			driver.sleep(1000);
			driver.findElement({ css: '#contextAmount' }).click();

			driver.sleep(1000)
				.then(function () {
					reportItem.takeScreenShot('close footer');
					reportItem.setResult(reportItem.results.passed);
				});






		}

	}

	module.exports = Test;

	Test.prototype = new TestParent();

}());



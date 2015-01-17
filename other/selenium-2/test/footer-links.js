(function () {

	"use strict";
	/*global */

	var TestParent = require('viaden-modules/test-parent');


	function Test() {

		this.cfg = {
			selector: {
				innerFooterLinks: ['/', '/gaming/all', '/promotions', /*'/info/rewards',*/ '/clubs', '/payment/deposit', '/transaction', /*'/info/bonusandpoints', '/info/rewards' ,*/ '/payment/withdraw', '/account/responsible', '/account/settings'],
				dataWrapper: '.app.active'
			},
			relativeSelector: {
				'.main-nav a[href="/"]': '#lobby',
				'.main-nav a[href="/gaming/all"]': '#allgames',
				'.main-nav a[href="/promotions"]': '#promoListView'
			}
		};


		this.info = {
			name: 'footer links test and all game test',
			description: 'test registration for user register',
			steps: [
				'load page',
				'go to registration',
				'fill out all fields',
				'submit form',
				'accept terms and condition'
			],
			expectedResult: 'All point in check list must be passed'
		};

		this.args = {};

		this.body = function () {

			var dep = this.dep,
				selector = dep.selector,
				args = this.args,
				util = dep.util,
				cfg = this.cfg,
				driver = args.driver,
				reportItem = args.reportItem,
				trueFn = dep.trueFn,
				falseFn = dep.falseFn,
				isFailed = false;

			// wait for splash screen hide
			driver.wait(function () {
				return driver.findElement({ css: '#splash' }).isDisplayed().then(function (isDisplayed) {
					return !isDisplayed;
				})
			}, 10000)
			.then(function () {

					// login
					var loginStep = require(dep.path.resolve(dep.util.getStartPath(), dep.mainCfg.folder.test, 'login.js'));
					loginStep = new loginStep();
					loginStep.extend('args', args);
					loginStep.mode = 'step';
					loginStep.run();

					selector.footerLinks.forEach(function (linkSelector) {

					driver.findElement({ css: linkSelector }).click().then(function () {

						driver.sleep(1000).then(function () {
							driver.getCurrentUrl().then(function (url) {

								driver.findElement({ css: cfg.relativeSelector[linkSelector] }).then(dep.trueFn, function () {
									reportItem.setResult(reportItem.results.failed);
									isFailed = true;
								})
								.then(function () {
									reportItem.takeScreenShot('url: ' + url + ', by links: ' + linkSelector);
								});

							});


						})

					})

				})

			})
			.then(function () {
				driver
					.findElement({ css: '.main-nav a[href="/gaming/all"]' }).click().then(function () {
						driver
							.sleep(1000)
							.then(function () {

								driver.findElements({ css: '.games-type-list:not(.m-fixed) .games-type-item-in' })
									.then(function (elems) {

										elems.forEach(function (elem, index) {

											elem.click().then(function () {
												driver.sleep(1000).then(function () {
													reportItem.takeScreenShot(String(index));
												})
											});

										});

										elems[0].click().then(function () {
											driver.sleep(1000).then(function () {
												reportItem.takeScreenShot(String(0));
											})
										});

									})

							})

					})

			})

			.then(function () {
				driver.sleep(1000);
				driver.findElement({ css: selector.openFooter }).click();
				driver.sleep(1000).then(function () {

					cfg.selector.innerFooterLinks.forEach(function (href) {

						driver.findElement({css: cfg.selector.dataWrapper + ' a[href="' + href + '"]' }).click();

						driver.sleep(2000).then(function () {

							driver.findElement({css: cfg.selector.dataWrapper + ' a[href="' + href + '"]' }).isDisplayed().then(function (isDisplayed) {

								if ( isDisplayed ) {
									isFailed = true;
									reportItem.takeScreenShot('ERROR selector1: ' + cfg.selector.dataWrapper + ' a[href="' + href + '"]');
								}

							},
							function () {
								driver.wait(function () {
									return driver.findElement({ css: cfg.selector.dataWrapper + '> * > *:not(style)' }).then(trueFn, falseFn);
								}, 10000);

								driver.findElement({ css: cfg.selector.dataWrapper + '> * > *:not(style)' }).then(function (isDisplayed) {

									if ( !isDisplayed ) {
										isFailed = true;
										reportItem.takeScreenShot('ERROR selector2: ' + cfg.selector.dataWrapper + ' a[href="' + href + '"]');
									} else {
										reportItem.takeScreenShot('PASSED selector: ' + cfg.selector.dataWrapper + ' a[href="' + href + '"]');
									}

								});
								driver.findElement({ css: selector.topBarBackButton }).click().then(trueFn, function () {
									driver.findElement({ css: selector.openFooter }).click();
								})
								.then(function () {
									driver.sleep(2000);
								});

							})

						});

					});

					driver.findElement({ css: selector.closeFooter }).click().then(function () {
						driver.sleep(1000);
					});


				})
				.then(function () {
					return reportItem.setResult(isFailed ? reportItem.results.failed : reportItem.results.passed);
				})

			})

		};

	}

	module.exports = Test;

	Test.prototype = new TestParent();

}());
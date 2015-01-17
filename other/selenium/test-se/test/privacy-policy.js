(function () {

	"use strict";
	/*global console, alert, exports */

	exports.info = {
		name: 'privacy policy test',
		description: 'test privacy policy for content',
		steps: [
			'load page',
			'go to policy',
			'check content',
			'click back button',
			'check title page'
		],
		expectedResult: 'All point in check list must be passed'
	};

	exports.test = function(args) {

		var driver = args.driver,
			reportItem = args.reportItem;

		driver.get("http://statlex.com/game/air/").then(function(){
			reportItem.markStartTime();
			reportItem.addText('start privacy policy test');
		});

		var policyBtn = '[data-route="privacy-policy"]',
			policyScr = '.js-privacy-policy',
			titleSrc = '.js-title',
			backBtn = '.js-back',
			textWrapper = '.text-wrapper',
			header = '.header-title';

		var checkList = {
			header: null,
			content: null,
			backBtn: null
		};

		driver.wait(function() {
			// wait for button to privacy policy
			return driver.findElement({css: policyBtn});
		}, 10000).then(
			function(){
				driver.findElement({css: policyBtn}).click();
			},
			function(){
				reportItem.addText('can not find policy button');
				reportItem.setResult(reportItem.results.failed);
			}
		);


		driver.wait(function() {
			return driver.findElement({css: header});
		}, 1000).then(
			function(){
				driver.findElement({css: header}).getInnerHtml().then(
					function(html) {
						if  (html.trim() === 'Privacy policy') {
							delete checkList.header;
							reportItem.addText('header is equal');
							reportItem.takeScreenShot({label: 'privacy policy on a page'});
						} else {
							reportItem.addText('header is not equal');
							reportItem.setResult(reportItem.results.failed);
						}
					}
				);
			},
			function(){
				reportItem.addText('can not find header');
				reportItem.setResult(reportItem.results.failed);
			}
		);

		driver.wait(function() {
			return driver.findElement({css: textWrapper});
		}, 1000).then(
			function(){
				driver.findElement({css: textWrapper}).getInnerHtml().then(
					function(html) {
						if  (html.trim()) {
							delete checkList.content;
							reportItem.addText('content is exist');
							reportItem.takeScreenShot({label: 'content is exist'});
						} else {
							reportItem.addText('content is not exist');
							reportItem.setResult(reportItem.results.failed);
						}
					}
				);
			},
			function(){
				reportItem.addText('can not find text');
				reportItem.setResult(reportItem.results.failed);
			}
		);


		driver.findElement({css: backBtn}).click().then(
			function() {
				driver.wait(function() {
					return driver.findElement({css: titleSrc});
				}, 1000).then(
					function() {
						delete checkList.backBtn;
						reportItem.addText('title page on a page');
						reportItem.addText('end privacy policy test');
					},
					function() {
						reportItem.takeScreenShot({label: 'no title screen'});
						reportItem.setResult(reportItem.results.failed);
					}
				);
			},
			function() {
				reportItem.setResult(reportItem.results.failed);
			}
		);

		driver.wait(function(){
			return Object.keys(checkList).length === 0;
		}, 1000).then(
			function() {
				reportItem.setResult(reportItem.results.passed);
			},
			function() {
				reportItem.setResult(reportItem.results.failed);
			}
		);

		driver.sleep(3000);

	};


}());
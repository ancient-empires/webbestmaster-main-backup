(function () {

	"use strict";
	/*global console, alert, require */

	global.mainConfig = require('./cfg/main.js'); // see main config -> main.js

	var gmailUrl = 'https://accounts.google.com/SignUp?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F';

	var mainConfig = require('./cfg/main.js'),
		util = require('user/util/util.js'),
		args = util.getArguments(),
		path = require('path'),
		tests;


	[1].forEach(function (value) {

		var driver = util.createWebDriverClient(args);

		driver.get(gmailUrl);

		driver.findElement({ css: '#FirstName' }).sendKeys('dima');
		driver.findElement({ css: '#LastName' }).sendKeys('dimchev');

		var i = 1;
		
		function getGmailName() {

			driver.findElement({ css: '#GmailAddress' }).clear();
			driver.findElement({ css: '#GmailAddress' }).sendKeys('restFullAppIsHereYoYes' + i);
			driver.findElement({ css: 'body' }).click();


			driver.sleep('1000');

			driver.findElement({css: '#username-errormsg-and-suggestions'}).click().then(function () {
				//getGmailName();
			}, function(){
			});

			i++;

		}

		getGmailName();

		driver.findElement({ css: '#password-label' }).click();
		driver.findElement({ css: '#Passwd' }).sendKeys('ZAQ!2wsxC');
		driver.findElement({ css: 'body' }).click();
		driver.sleep('1000');

		driver.findElement({ css: '#confirm-password-label' }).click();
		driver.findElement({ css: '#PasswdAgain' }).sendKeys('ZAQ!2wsxC');
		driver.findElement({ css: 'body' }).click();
		driver.sleep('1000');


		driver.findElement({ css: '#BirthDay' }).sendKeys(i);
		driver.findElement({ css: '#BirthYear' }).sendKeys(1980 + i);

		driver.sleep('1000');

		// set month
		driver.findElement({ css: '#month-label' }).click();
		driver.sleep('1000');

		driver.findElement({ css: '#month-label .goog-menuitem:nth-child(4)' }).click();
		driver.sleep('1000');

		// set gender
		driver.findElement({ css: '#gender-form-element' }).click();
		driver.findElement({ css: '#gender-form-element .goog-menuitem:nth-child(1)' }).click();


		driver.sleep('1000');

		driver.findElement({ css: '#RecoveryPhoneNumber' }).sendKeys('7597576');

		driver.sleep('1000');

		driver.findElement({ css: '#TermsOfService' }).click();


		driver.sleep(5000);

//		driver.quit();


	});









}());
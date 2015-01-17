(function () {

	"use strict";
	/*global console, alert, require */

	global.mainConfig = require('./cfg/main.js'); // see main config -> main.js

	var mailUrl = 'https://passport.yandex.ru/registration/mail?mode=simplereg';

	var mainConfig = require('./cfg/main.js'),
		util = require('user/util/util.js'),
		bUtil = require('./util/index.js'),
		args = util.getArguments(),
		fs = require('fs'),
		path = require('path'),
		botDataPath = process.cwd() + '/bot-data/';

	var fileList = fs.readdirSync(path.normalize(botDataPath)).map(function (pathToFile) {
		return path.normalize(pathToFile);
	});


	bUtil.getAllUserFIO().forEach(function (user) {

		var fullUserName = user.join(''),
			fileName = fullUserName + '.txt',
			pathToFile = path.normalize(botDataPath + fileName),
			data = {
				name: user,
				dob: Date.now(),
				yandexMail: {}
			};

			if ( fileList.indexOf(fileName) === -1 ) {
				fs.writeFileSync(pathToFile, JSON.stringify(data), 'utf-8', function (err) {
					return err && console.log(err);
				});

			}

	});

	global.i = 0;

	fs.readdir(path.normalize(botDataPath), function (err, fileList) {

		fileList.forEach(function (fileName) {



			var data = JSON.parse(fs.readFileSync(path.normalize(botDataPath) + fileName, 'utf-8'));

			if (data.isRegistered) {
				global.i += 1;
				console.log(data.name.join(' ') + ' is registered' );
				console.log(global.i);
				return;
			}

			var driver = util.createWebDriverClient(args),
				i = 0;

			data.yandexMail = data.yandexMail || {};

			driver.get(mailUrl);

			data.yandexMail.firstname = data.name[1];
			driver.findElement({ css: '#firstname' }).sendKeys(data.name[1]);
			data.yandexMail.lastname = data.name[0];
			driver.findElement({ css: '#lastname' }).sendKeys(data.name[0]);

			function createLogin() {

				data.yandexMail.login = data.name[1]  + '.' + data.name[0] + (i || '');

				driver.findElement({ css: '#login' }).clear();
				driver.findElement({ css: '#login' }).sendKeys(data.yandexMail.login);
				driver.findElement({ css: 'body' }).click();

				driver.sleep('1000');

				driver.findElement({css: '.control__error__login_notavailable'}).click().then(function () {
					createLogin();
				}, function(){});

				i += 1;

			}

			createLogin();

			data.yandexMail.pass = bUtil.generatePass();

			driver.findElement({ css: '#password' }).sendKeys(data.yandexMail.pass);
			driver.sleep(1000);

			driver.findElement({ css: '#password_confirm' }).sendKeys(data.yandexMail.pass);
			driver.sleep(1000);

			driver.findElement({ css: '#hint_question_id' }).click();
			driver.sleep(1000);

			data.yandexMail.hintQuestion =  Math.round(Math.random() * 7) + 2;

			driver.findElement({ css: 'ul li:nth-child(' + data.yandexMail.hintQuestion + ')' }).click();
			driver.sleep(1000);

			data.yandexMail.hintAnswer = data.name[1] + ' ' + data.name[0];

			driver.findElement({ css: '#hint_answer' }).sendKeys(data.yandexMail.hintAnswer);
			driver.sleep(1000);

			driver.findElement({ css: '#answer' }).click();

			driver.wait(function () {
				return driver.getCurrentUrl().then(function (url) {

					if (url.indexOf('https://passport.yandex.ru/passport') !== -1) {
						driver.get('https://mail.yandex.by/');
					}

					return url.indexOf('https://mail.yandex.by/') !== -1;

				});
			}, 10000 * 1000);

			driver.wait(function () {

				return driver.findElement({ css: '.b-popup__close.daria-action' }).isDisplayed().then(function () {
					return true;
				}, function(){
					return false;
				});

			}, 100 * 1000);

			driver.findElement({ css: '.b-popup__close.daria-action' }).click().then(function () {

				data.isRegistered = true;

				fs.writeFile(path.normalize(botDataPath + '/' + fileName), JSON.stringify(data), 'utf-8', function (err) {
					return err && console.log(err);
				});

				driver.sleep(1000);
				driver.quit();

			},
			function (err) {
				console.log(err);
			});

		});
	});

}());
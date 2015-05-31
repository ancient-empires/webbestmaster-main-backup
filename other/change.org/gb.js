/*jslint white: true, nomen: true */
(function () {

	"use strict";
	/*global */

	var fs = require('fs'),
		util = require('viaden-modules/util'),
		mainCfg = require('viaden-modules/config/main.js'),
		path = require('path'),
		Reporter = require('viaden-modules/reporter/reporter.js'),
		reporter = new Reporter(),
		args = util.get('args'),
		exception = require('viaden-modules/exception'),
		testList = args.list,
		nameList = fs.readFileSync('bot-names-all.txt', 'utf8');

	var webDriver = require('selenium-webdriver');


	nameList = nameList.split('\n').map(function (fio) {

		var data = {};
		fio = fio.replace(/\s+/g, ' ').replace(/\r/g, '').trim().split(' ');

		if (Math.random() > 0.5) {
			data.name = util.rusToLat(fio[1]);
			data.family = util.rusToLat(fio[0]);
		} else {
			data.name = fio[1];
			data.family = fio[0];
		}

		var mailList = ['gmail.com', 'yandex.ru', 'mail.ru'];
		mailList = mailList.sort(function () {
			return Math.random() - 0.5;
		});

		var townList = ['Брест', 'Витебс', 'Гомель', 'Гродно', 'Могилев', 'Минск', 'Brest', 'Vitebsk', ' Gomel', 'Grodno', 'Mogilev', 'Minsk' ,'Минск', 'Minsk' ,'Минск', 'Minsk' ,'Минск', 'Minsk' ,'Минск', 'Minsk' ,'Минск', 'Minsk' ,'Минск', 'Minsk' ,'Минск', 'Minsk'];
		townList = townList.sort(function () {
			return Math.random() - 0.5;
		});

		data.eMail = util.rusToLat(data.name).toLowerCase() + '.' + util.rusToLat(data.family).toLowerCase() + '@' + mailList[0];
		data.town = townList[0];
		return data;

	});

	var driver = new webDriver
		.Builder()
		//.usingServer(args.host)
		.withCapabilities({ browserName: 'chrome' })
		.build();

	//driver.get('https://www.change.org/p/%D1%81%D0%B0%D1%88%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D1%8F%D0%B4%D1%8C-%D0%BD%D0%B0-%D0%B4%D0%B6%D0%B8%D0%BB%D0%B8%D0%BA-%D1%81-%D0%BA%D0%B0%D1%88%D0%BA%D0%B0%D1%8F');
	driver.get('https://www.change.org/p/%D0%BF%D0%B0%D0%BB%D0%B0%D1%82%D0%B0-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C-%D0%B2%D0%BD%D0%B5%D1%81%D0%B8%D1%82%D0%B5-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D1%83%D0%BF%D0%BA-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C-%D0%B7%D0%B0%D0%BA%D1%80%D0%B5%D0%BF%D0%B8%D0%B2-%D0%BF%D1%80%D0%B0%D0%B2%D0%BE-%D0%BD%D0%B0-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B5%D0%B4%D0%B2%D0%B0%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC-%D1%81%D0%BB%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B8%D0%B8-%D0%B8-%D0%B2-%D1%81%D1%83%D0%B4%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D0%BE%D0%B2-%D0%B8%D0%BB%D0%B8-%D0%B1%D0%BB%D0%B8%D0%B7%D0%BA%D0%B8%D1%85-%D1%80%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-%D0%BD%D0%B5-%D0%BF%D1%83%D1%82%D0%B0%D1%82%D1%8C-%D1%81-%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8?recruiter=307026329&utm_source=share_petition&utm_medium=facebook&utm_campaign=share_facebook_responsive&utm_term=des-lg-no_src-no_msg&fb_ref=Default');

	nameList = nameList.sort(function () {
		return Math.random() - 0.5;
	});

	nameList.forEach(function (fio) {

		driver.sleep(1000);

		var key = webDriver.Key;

		driver.findElement({ css: '[name="first_name"]'}).sendKeys(fio.name);
		driver.findElement({ css: '[name="last_name"]'}).sendKeys(fio.family);
		driver.findElement({ css: '[name="email"]'}).sendKeys(fio.eMail);
		driver.findElement({ css: '[name="city"]'}).sendKeys(key.chord(key.CONTROL, "a"), fio.town);

		driver.wait(function () {
			return driver.findElement({css: '.symbol.symbol-facebook-f'}).then(function () {
				return true;
			}, function () {
				return false;
			});
		}, 10e3);

		driver.sleep(1000);

		driver.findElement({ css: '[name="sign_button"]'}).click();

		driver.sleep(1000);

		driver.manage().deleteAllCookies();
		driver.executeScript('window.localStorage.clear();');
		driver.executeScript('window.sessionStorage.clear();');

		driver.sleep(5000);

		driver.get('https://google.com');
		//driver.get('https://www.change.org/p/%D1%81%D0%B0%D1%88%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D1%8F%D0%B4%D1%8C-%D0%BD%D0%B0-%D0%B4%D0%B6%D0%B8%D0%BB%D0%B8%D0%BA-%D1%81-%D0%BA%D0%B0%D1%88%D0%BA%D0%B0%D1%8F');
		driver.get('https://www.change.org/p/%D0%BF%D0%B0%D0%BB%D0%B0%D1%82%D0%B0-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C-%D0%B2%D0%BD%D0%B5%D1%81%D0%B8%D1%82%D0%B5-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D1%83%D0%BF%D0%BA-%D1%80%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C-%D0%B7%D0%B0%D0%BA%D1%80%D0%B5%D0%BF%D0%B8%D0%B2-%D0%BF%D1%80%D0%B0%D0%B2%D0%BE-%D0%BD%D0%B0-%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B5%D0%B4%D0%B2%D0%B0%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC-%D1%81%D0%BB%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%B8%D0%B8-%D0%B8-%D0%B2-%D1%81%D1%83%D0%B4%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D0%BE%D0%B2-%D0%B8%D0%BB%D0%B8-%D0%B1%D0%BB%D0%B8%D0%B7%D0%BA%D0%B8%D1%85-%D1%80%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-%D0%BD%D0%B5-%D0%BF%D1%83%D1%82%D0%B0%D1%82%D1%8C-%D1%81-%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8?recruiter=307026329&utm_source=share_petition&utm_medium=facebook&utm_campaign=share_facebook_responsive&utm_term=des-lg-no_src-no_msg&fb_ref=Default');

	});


	driver.quit();


}());



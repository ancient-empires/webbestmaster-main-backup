(function () {

	"use strict";
	/*global console, alert */


	var webDriver = require('selenium-webdriver'),
		driver = new webDriver
			.Builder()
			.withCapabilities({ browserName: "chrome" })
			.build(),
		chai = require('chai'),
		chaiWebdriver = require('chai-webdriver');

	chai.use(chaiWebdriver(driver));

	driver.manage().window().setSize(320, 540);

	webDriver.promise.controlFlow().on('uncaughtException', function(e) {
		console.log('--Uncaught Exception: ', e);
	});

	driver.manage().timeouts().implicitlyWait(150);

	driver.get('http://m.galacasino.com');

	driver.wait(function() {

		return chai.expect('#toggle-account').dom.to.be.visible().then(function(){
			return true;
		}, function(){
			return false;
		});

	}, 10000).then(function(){

		driver.wait(function(){

			return chai.expect('#splash').dom.to.be.visible().then(function(){
				return false;
			}, function(){
				return true;
			});

		}, 2000).then(function(){
			driver.findElement({css: '#toggle-account'}).click();
		});

	});

	driver.findElement({css: '#username'}).sendKeys('galagc153');
	driver.findElement({css: '#password'}).sendKeys('qwerty123');
	driver.findElement({name: 'submit'}).click();

	return;


//	driver.wait(function() {
//
//
//		chai.expect('#toggle-account').dom.to.be.visible().then(function(){
//
//			showLoginButton = true;
//
//			chai.expect('#splash').dom.to.not.visible().then(function(){
//				showSlashScreen = false;
//			}, function(){
//
//			});
//
//		}, function(){
//
//		});
//
//		return showLoginButton && !showSlashScreen;
//
//	}, 10000).then(function(){
//		driver.findElement({css: '#toggle-account'}).click();
//	});
//
//	return;
//
//



















	return driver.findElement({css: '#toggle-account'}).then(function(){
		return driver.findElement({css: '#toggle-account'}).click();
	});





	driver.findElement({css: '#username'}).sendKeys('galagc153');
	driver.findElement({css: '#password'}).sendKeys('qwerty123');
	driver.findElement({name: 'submit'}).click();
	driver.sleep(7000);

	driver.executeScript(function(){
		var submits = document.querySelectorAll('[type=submit]');

		Array.prototype.forEach.call(submits, function(node){
			node.setAttribute('type', 'button');
			node.className += ' my-little-pony';
		});

		var $ = jQuery;

		jQuery('.fuckin-button').eq(0).trigger('touchstart').trigger('touchend');

	});


	driver.findElement({css: '.my-little-pony'}).click();



//	driver.sleep(15000);


	//driver.quit();

}());
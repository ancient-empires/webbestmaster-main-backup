(function () {

	"use strict";
	/*global module, require*/

	var TestParent = require('viaden-modules/test-parent');
	var	util = require('viaden-modules/util');
	var path = require('path');
	var fs = require('fs');

	function Test () {

		function getWord() {
			var file = fs.readFileSync(path.resolve(util.getStartPath(), 'data', 'RWORDS.TXT'), 'utf-8');
			this.wordArr = file.replace(/\r/g, '').toUpperCase().split('\n');
		}

		getWord.call(this);

		this.getWord = function (length, enLetterArr) {

			var rusLetterArr = [],
				filteredByLength = [],
				filteredByLetter = [];

			enLetterArr.forEach(function (letter) {
				rusLetterArr.push(this.enToRus(letter));
			}, this);

			filteredByLength = this.wordArr.filter(function (word) {
				return word.length === length;
			});

			filteredByLetter = filteredByLength.filter(function (wordForTest) {

				var letters = rusLetterArr.join('').split('');
				wordForTest = wordForTest.split('');
				wordForTest.forEach(function (letter) {
					var index = letters.indexOf(letter.toUpperCase());
					if (index === -1) {
						return;
					}
					letters.splice(index, 1);

				});

				return letters.length + length === rusLetterArr.length;

			});


			filteredByLetter = filteredByLetter.map(function (word) {

				return word.split('').map(function (letter) {
					return this.rusToEn(letter);
				}, this);

			}, this);

			return filteredByLetter;

		};

		this.enToRus = function (en) {
			var map = this.letterMap,
				key;

			for (key in map) {
				if (map.hasOwnProperty(key)) {
					if (map[key] === en) {
						return key.toUpperCase();
					}
				}
			}

		};

		this.rusToEn = function (ru) {
			return this.letterMap[ru];
		};

		this.letterMap = {
			'А': 'lA',
			'Б': 'lB',
			'В': 'lV',
			'Г': 'lG',
			'Д': 'lD',
			'Е': 'lE',
			'Ё': 'lE',
			'Ж': 'lJ',
			'З': 'lZ',
			'И': 'lI',
			'Й': 'ljI',
			'К': 'lK',
			'Л': 'lL',
			'М': 'lM',
			'Н': 'lN',
			'О': 'lO',
			'П': 'lP',
			'Р': 'lR',
			'С': 'lS',
			'Т': 'lT',
			'У': 'lU',
			'Ф': 'lF',
			'Х': 'lH',
			'Ц': 'lC',
			'Ч': 'lCH',
			'Ш': 'lSH',
			'Щ': 'lSCH',
			'Ъ': 'lTZ',
			'Ы': 'lY',
			'Ь': 'lMZ',
			'Э': 'ljE',
			'Ю': 'ljU',
			'Я': 'ljA'
		};


		this.cfg = {
			userName: 'turovtsov@mail.ru', // text
			password: 'colos_inc.' // text
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
				reportItem = args.reportItem,
				getWord = this.getWord.bind(this);


			console.log('login');


			driver.findElement({ css: '#quick_email' }).sendKeys(cfg.userName);
			driver.findElement({ css: '#quick_pass' }).sendKeys(cfg.password);
			driver.findElement({ css: '#quick_login_button' }).click();

			driver.sleep(3000);
//http://vk.com/fox_mickey?mid=108351256
			driver.get('http://vk.com/fox_mickey?mid=108351256');


			driver.switchTo().frame(driver.findElement({ css: '[webkitallowfullscreen="true"]' }));


			(function run() {
				var wordLength = 0,
					lettersArr = [];

			driver.sleep(1000).then((function () {
				// get word length
				(function getMax() {
					driver.findElement({ css: '#field_' + wordLength }).then(function () {
						wordLength += 1;
						getMax();
					}, dep.falseFn);
				}());

			}));

			driver.sleep(1000).then(function () {
				for (var i = 0; i < 20; i += 1) {
					driver.findElement({ css: '#letter_' + i }).getAttribute('class').then(function (className) {
						return lettersArr.push(className);
					});
				}
			});

			driver.sleep(1000).then(function () {
				var wordArr = getWord(wordLength, lettersArr),
					isDone = false;
					console.log(wordArr);

					(function setWord() {

						var word = wordArr.pop();

						word.forEach(function (letter, index) {

							var selector = '.letters.alphabet .' + letter + ':not(.blanc)';
							if (index + 1 !== word.length) {
								driver.findElement({ css: selector }).click().then(function () {
									driver.sleep(10);
								});

							} else {
								driver.findElement({ css: selector }).click().then(function () {
									return driver.sleep(500).then(function () {

										driver.findElement({ css: '#nextBtn' }).click().then(function () {

											driver.sleep(5000).then(function () {
												run();
											});

										},
										function () {
											setWord();
										});

									});
								});
							}

						});

					}());



			});

			}());

			//driver.wait(function () {
			//	return driver.findElement({ css: 'a[href="/apps"]' }).click().then(dep.trueFn, dep.falseFn);
			//}, 10000);

			//driver.findElement({ css: 'a[href="/apps"]' }).click();



			driver.sleep(10000000);


		};

	}

	module.exports = Test;

	Test.prototype = new TestParent();

}());
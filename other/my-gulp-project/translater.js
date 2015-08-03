/*jslint white: true, nomen: true */
(function () {

	'use strict';
	/*global window */
	/*global */

	var deferred = require('deferred'),
		request = require('request'),
		fs = require('fs');

	function getTranslate(data) {

		var def = deferred(),
			text = data.text,
			from = 'ru',
			to = data.to;

		request.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20150803T083753Z.956ffec2fff4d1cc.7a47a363e5167512e580481c986f370816ac1012&lang=' + from + '-' + to + '&text=' + text, function () {
			def.resolve(JSON.parse(arguments[2]));
		});

		return def.promise;

	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	(function () {

		var def = deferred();

		fs.readFile('./new-map.js', 'utf-8', function (err, result) {
			def.resolve(result);
		});

		return def.promise;

	}())

		.then(function (fileContent) {

			var translateDef = deferred(),
				translatePromise = translateDef.promise,
				mainDef = deferred();

			var strings = fileContent.match(/win\.APP\.maps\.skirmish[\s\S]+?\n/g).map(function (map) {

				var name = map.match(/"name-ru"\:"[\s\S]+?"/g)[0].replace(/\"name\-ru\"\:|\"/g, '');

				return {
					source: map,
					ru: name,
					es: '',
					en: ''
				}

			});

			// en
			strings.forEach(function (data, index) {

				translatePromise = translatePromise.then(function () {
					return getTranslate({
						to: 'en',
						text: data.ru
					}).then(function (json) {
						data.en = capitalizeFirstLetter(json.text[0]);
					});

				});

			});

			strings.forEach(function (data, index) {

				translatePromise = translatePromise.then(function () {
					return getTranslate({
						to: 'es',
						text: data.ru
					}).then(function (json) {
						data.es = capitalizeFirstLetter(json.text[0]);
					});

				});

			});

			translatePromise.then(function () {
				mainDef.resolve({
					strings: strings,
					fileContent: fileContent
				})
			});

			translateDef.resolve();

			return mainDef.promise;

		})

		.then(function (data) {

			var strings = data.strings,
				fileContent = data.fileContent;

			strings.forEach(function (data, index) {
				var result = data.source.replace('"name"\:""', '"name"\:"' + data.en + '"').replace('"name-es"\:""', '"name-es"\:"' + data.es + '"');
				fileContent = fileContent.replace(data.source, result);
			});

			fs.writeFile('result.js', fileContent, function (err) {
				console.log('done');
			});

		});

}());
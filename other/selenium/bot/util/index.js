(function () {

	"use strict";
	/*global require, module */

	var fs = require('fs'),
		path = require('path'),
		util = require('user/util/util.js'),
		args = util.getArguments();


	module.exports = {

		getAllUserFIO: function () {

			var arr = fs
				.readFileSync(path.normalize(process.cwd() + '/source/bot-names-all.txt'), "utf8")
				.split(/\r?\n/gi);

			return arr.map(function (FIO) {
				return this.rusToLat(FIO).replace(/\s+/gi, ' ').split(' ').filter(function (value) {
					return value.trim();
				});
			}, this).filter(function (value, index) {
				return 0 <= index && index < 100;
			});


		},

		rusToLatMap: {
			'А': 'A', 'а': 'a',
			'Б': 'B', 'б': 'b',
			'В': 'V', 'в': 'v',
			'Г': 'G', 'г': 'g',
			'Д': 'D', 'д': 'd',
			'Е': 'E', 'е': 'e',
			'Ё': 'Yo', 'ё': 'yo',
			'Ж': 'Zh', 'ж': 'zh',
			'З': 'Z', 'з': 'z',
			'И': 'I', 'и': 'i',
			'Й': 'Y', 'й': 'y',
			'К': 'K', 'к': 'k',
			'Л': 'L', 'л': 'l',
			'М': 'M', 'м': 'm',
			'Н': 'N', 'н': 'n',
			'О': 'O', 'о': 'o',
			'П': 'P', 'п': 'p',
			'Р': 'R', 'р': 'r',
			'С': 'S', 'с': 's',
			'Т': 'T', 'т': 't',
			'У': 'U', 'у': 'u',
			'Ф': 'F', 'ф': 'f',
			'Х': 'Kh', 'х': 'kh',
			'Ц': 'Ts', 'ц': 'ts',
			'Ч': 'Ch', 'ч': 'ch',
			'Ш': 'Sh', 'ш': 'sh',
			'Щ': 'Sch', 'щ': 'sch',
			'Ъ': '', 'ъ': '',
			'Ы': 'Y', 'ы': 'y',
			'Ь': '', 'ь': '',
			'Э': 'E', 'э': 'e',
			'Ю': 'Yu', 'ю': 'yu',
			'Я': 'Ya', 'я': 'ya'
		},

		rusToLat: function (string) {

			return Array.prototype.map.call(string, function (ch) {
				return this.rusToLatMap.hasOwnProperty(ch) ? this.rusToLatMap[ch] : ch;
			}, this).join('');

		},
		generatePass: function () {
			var keylist = "abcdefghijklmnopqrstuvwxyz123456789",
				temp = '',
				i,
				pLength = Math.round(Math.random() * 10 + 10);

			for (i = 0; i < pLength; i += 1) {
				temp += keylist.charAt(Math.floor(Math.random() * keylist.length));
			}

			return temp;

		}

	};


}());
'use strict';
/*global window */

var win = window,
	//doc = win.document,
	//docElem = doc.documentElement,
	util = {

		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		},

		getPath: function (folder, index, type) {

			index += 1;

			if (index < 10) {
				index = '0' + index;
			}

			return folder + '/' + folder + '-' + index + '.' + type;

		},

		arrayRemoveByValue: function (arr, value) {
			var index = arr.indexOf(value);
			if (index !== -1) {
				arr.splice(index, 1);
			}
			return arr;
		},

		getBetween: function (min, current, max) {
			current = Math.min(current, max);
			current = Math.max(current, min);
			return current;
		},

		getRandomBetween: function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		},

		toTop: function () {
			win.scrollTo(0, 0);
		},

		copyJSON: function (obj) { // external
			return JSON.parse(JSON.stringify(obj));
		},
		formatTime: function (number) {
			return number >= 10 ? number : '0' + number;
		},
		formatMs: function (ms) {

			var util = this,
				date = new Date(ms);

			return {
				d: util.formatTime(date.getDate()),
				h: util.formatTime(date.getHours()),
				m: util.formatTime(date.getMinutes()),
				s: util.formatTime(date.getSeconds()),
				ms: util.formatTime(date.getMilliseconds())
			};

		}

	};

export default util;
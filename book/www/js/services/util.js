/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window, document */
	/*global */

	win.APP = win.APP || {};

	win.APP.util = {

		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
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

		runIfConnect: function (calback, context) {
			var img = new Image();
			img.addEventListener('load', calback.bind(context), false);
			img.src = 'http://statlex.com/i/statlex-icon.png?t=' + Date.now();
		},

		getAudioDuration: function () {

			var language =  win.APP.info.get('language'),
				booksData = win.APP.booksData,
				books = booksData[language],
				deferred = $.Deferred(),
				promise = deferred.promise(),
				srcList = [];

			_.each(books, function (book) {
				_.each(book.pages, function (page) {

					if ( page.sound ) {
						srcList.push( ['books', language, book.folder, page.sound].join('/') );
					}

				});
			});

			function loadAudio(src) {

				var audio = new Audio(),
					deferred = $.Deferred();

				audio.addEventListener('canplay', function () {
					console.log(this.src, this.duration);
					deferred.resolve();
				}, false);

				audio.src = src;

				return deferred.promise();

			}

			_.each(srcList, function (src) {
				promise = promise.then(function () {
					return loadAudio(src);
				});
			});

			deferred.resolve();

		}

	};

}(window));
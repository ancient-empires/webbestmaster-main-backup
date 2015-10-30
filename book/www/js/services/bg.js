
/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global $, Image*/

	var	bg = {
		attr: {},
		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},
		get: function (key) {
			return this.attr[key];
		},
		changeBg: function () {

			var bg = this,
				$wrapper = bg.get('$wrapper'),
				lastBgIndex = bg.get('lastBgIndex'),
				index;

			$wrapper.removeClass('bgi-' + lastBgIndex);

			do {
				index = Math.round(Math.random() * 5);
			} while (lastBgIndex === index);

			$wrapper.addClass('bgi-' + index);

			bg.set('lastBgIndex', index);

		},

		init: function () {

			var bg = this,
				$wrapper = $('.js-wrapper');

			bg.set('$wrapper', $wrapper);

			bg.loadAllBgs();

		},

		loadImg: function (path) {

			var deferred = $.Deferred(),
				img = new Image();

			img.addEventListener('load', deferred.resolve.bind(deferred), false);
			img.addEventListener('error', deferred.reject.bind(deferred), false);

			img.src = path;

			return deferred.promise();

		},

		loadAllBgs: function () {

			var bg = this,
				i,
				imgDeferred = $.Deferred(),
				imgPromise = imgDeferred.promise();

			for (i = 0; i <= 5; i += 1) {
				imgPromise = imgPromise.always(bg.loadImg.bind(bg, ('./i/background/' + i + '.png')));
			}

			imgDeferred.resolve();

		}

	};

	win.APP = win.APP || {};

	win.APP.bg = bg;

}(window));
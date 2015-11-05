
/*jslint white: true, nomen: true */
(function (win) {

	/* deploy only after tests  */

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

			var bgMaster = this,
				$wrapper = bgMaster.get('$wrapper'),
				lastBgIndex = bgMaster.get('lastBgIndex'),
				index;

			$wrapper.removeClass('bgi-' + lastBgIndex);

			do {
				index = Math.round(Math.random() * 5);
			} while (lastBgIndex === index);

			$wrapper.addClass('bgi-' + index);

			bgMaster.set('lastBgIndex', index);

		},

		init: function () {

			var bgMaster = this,
				$wrapper = $('.js-wrapper');

			bgMaster.set('$wrapper', $wrapper);

			bgMaster.loadAllBgs();

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

			var bgMaster = this,
				i,
				imgDeferred = $.Deferred(),
				imgPromise = imgDeferred.promise();

			for (i = 0; i <= 4; i += 1) {
				imgPromise = imgPromise.always(bgMaster.loadImg.bind(bgMaster, ('./i/background/' + i + '.png')));
			}

			imgDeferred.resolve();

		}

	};

	win.APP = win.APP || {};

	win.APP.bg = bg;

}(window));
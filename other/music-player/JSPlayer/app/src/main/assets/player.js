/*jslint white: true, nomen: true */
(function (win, doc) {

	"use strict";
	/*global window */
	/*global */

	// AndAud.playAudio(src);

	var playButton, stopButton, $;

	$ = function (selector) {
		return doc.querySelector(selector);
	};

	playButton = $('.js-play');
	stopButton = $('.js-stop');

	playButton.addEventListener('click', function () {

		var fileName = $('.js-file-name').value,
			roadNumber = parseInt($('.js-play-road-number').value, 10),
			isLoop = $('.js-is-loop').checked;

		// fileName - string
		// roadNumber - integer
		// isLoop - boolean

		AndAud.play(roadNumber, fileName, isLoop);

	}, false);

	stopButton.addEventListener('click', function () {

		var roadNumber = parseInt($('.js-stop-road-number').value, 10);

		// roadNumber - integer

		AndAud.stop(roadNumber);

	}, false);



}(window, window.document));
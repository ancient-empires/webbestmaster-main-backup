(function (win, doc, docElem) {

	"use strict";
	/*global console, alert */

	var darkLight = 10,
		lastAudio = Date.now(),
		minPeriod = 3 * 1000,
		audio1 = new Audio(),
		audio2 = new Audio(),
		clearTimeoutId;

	audio1.src = 'audio/knock_x3.ogg';
	audio2.src = 'audio/please_open.ogg';

	window.addEventListener("devicelight", function (event) {

		clearTimeout(clearTimeoutId);

		var node = doc.querySelector('.js-light-value');

		node.innerHTML = event.value;

		var now = Date.now();
		if (event.value > darkLight || (now - lastAudio) < minPeriod) {
			return;
		}

		lastAudio = now;

		clearTimeoutId = setTimeout(function(){
			return Math.random() > 0.5 ? audio1.play() : audio2.play();
		}, 2500);

	});

}(window, document, document.documentElement));



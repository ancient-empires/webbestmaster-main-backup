;(function (win) {

	"use strict";
	/*global window */

	function onErrorImage(img) {
		img.parentNode.classList.add('no-image');
	}

	win.onErrorImage = onErrorImage;

}(window));


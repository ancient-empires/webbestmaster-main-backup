(function (win, doc, docElem) {

	"use strict";
	/*global window, document */
	/*global */

	win.APP = win.APP || {};

	win.APP.util = {
		setHTMLStyle: function() {

			var screenSize = docElem.clientWidth * docElem.clientHeight,
				fontSize = Math.round( 16 * Math.pow(screenSize / 153600, 0.5) );

			docElem.style.fontSize = fontSize + 'px';

		}

	};

}(window, document, document.documentElement));
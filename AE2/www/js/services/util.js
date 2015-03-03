(function (win, doc, docElem) {

	"use strict";
	/*global window, document */
	/*global */

	win.APP = win.APP || {};

	win.APP.util = {
		setHTMLStyle: function() {

			var screenSize = docElem.clientWidth * docElem.clientHeight,
				fontSize = Math.round( 16 * Math.pow(screenSize / 153600, 0.5) );

			fontSize = Math.max(16, fontSize);

			this.defaultUnit = fontSize;

			docElem.style.fontSize = fontSize + 'px';

		},
		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		},
		getBetween: function (min, current, max) {
			current = Math.min(current, max);
			current = Math.max(current, min);
			return current;
		}

	};

}(window, document, document.documentElement));
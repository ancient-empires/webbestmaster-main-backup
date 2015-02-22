(function (win, doc, docElem) {

	"use strict";
	/*global window, document */
	/*global */

	win.APP = win.APP || {};

	win.APP.util = {
		setHTMLStyle: function() {

			var screenSize = docElem.clientWidth * docElem.clientHeight,
				fontSize = Math.round( 16 * Math.pow(screenSize / 153600, 0.5) );

			docElem.style.fontSize = Math.max(16, fontSize) + 'px';

		},
		cloneJSON: function (obj) {
			return JSON.parse(JSON.stringify(obj));
		},
		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		}

	};

}(window, document, document.documentElement));
(function (win, doc, docElem) {

	"use strict";
	/*global console, alert */

	var main = {
		handleEvent: function() {
			var inputFile = $('.js-files');
			resizer.init({
				inputFile: inputFile
			});
		}
	};

	win.addEventListener('load', main, false);

}(window, document, document.documentElement));
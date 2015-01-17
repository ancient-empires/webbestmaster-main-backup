(function (win, doc) {

	"use strict";
	/*global window, document, console, alert */

	win.$ = function(selector, context) {
		return (context || doc).querySelector(selector);
	};

	win.$$ = function(selector, context) {
		return Array.prototype.slice.call( (context || doc).querySelectorAll(selector) );
	};

}(window, document));

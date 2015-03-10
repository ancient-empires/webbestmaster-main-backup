(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	var symbols = 'az09áðéíóúýþæöñáâãàçéêíóôõú.,\"\'-\\/#& ',
		endedSymbolArr = [],
		each = Array.prototype.forEach;

	symbols.split('').forEach(function (symbol) {

		endedSymbolArr.push(symbol);
		endedSymbolArr.push(symbol.toUpperCase());

	});

	endedSymbolArr = endedSymbolArr.map(function (symbol) {
		return symbol.charCodeAt(0)
	}).filter(function (charCode, index, arr) {
		return arr.indexOf(charCode) === index;
	}).sort(function (a, b) {
		return a - b;
	});

	console.log(endedSymbolArr);







}(window, document, document.documentElement));
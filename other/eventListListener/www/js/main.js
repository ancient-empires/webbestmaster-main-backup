(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document, $, Listener */

	$(function(){

		var $body = $(doc.body),
			listener = new Listener(),
			list = ['swipe-up', 'swipe-up', 'swipe-down', 'swipe-down', 'swipe-left', 'swipe-right', 'swipe-left', 'swipe-right', 'dblclick'];

		listener.pushNode($body);
		listener.setEventList(list);
		listener.setFunction(function(){
			console.log('Konami Code was Executed!');
		});

	});

}(window, document, document.documentElement));
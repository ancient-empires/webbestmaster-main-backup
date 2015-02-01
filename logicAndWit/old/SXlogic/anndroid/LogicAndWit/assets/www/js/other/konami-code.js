(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document, $, Listener, Owl */

	$(function(){

		var $body = $(doc.body),
			listener = new Listener(),
			list = ['swipe-up', 'swipe-up', 'swipe-down', 'swipe-down', 'swipe-left', 'swipe-right', 'swipe-left', 'swipe-right'];

		listener.pushNode($body);
		listener.setEventList(list);
		listener.setFunction(function(){
			var owl = new Owl();
			owl.show();
		});

	});

}(window, document, document.documentElement));
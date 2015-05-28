/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */


	var button = win.button;

	button.addEventListener('click', function (e) {

		console.log(e.target);
		console.log(e.currentTarget);

		console.log(this.dataset.mapCare);
		console.log(this.dataset['map-care']);

		debugger

	}, false);



}(window));
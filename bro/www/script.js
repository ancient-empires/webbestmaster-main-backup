/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.addEventListener('load', function () {

		setTimeout(function () {
			var i,
				start = Date.now();


			for (i = 0; i < 10000; i += 1) {

				$('div').addClass('rerere');
				$('div').removeClass('rerere');

			}

			console.log(Date.now() - start);

		}, 5000);


	}, false);

}(window));
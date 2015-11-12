/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global window */
	/*global */

	function $(selector) {
		return doc.querySelector(selector);
	}

	$('[type="button"]').addEventListener('click', function () {

		var file = $('[type="file"]').files[0],
			fileReader = new FileReader();

		fileReader.onload = function(e) {

			var result1 = fileReader.result;
			var result2 = e.target.result; // the same result

			debugger

		};

		fileReader.readAsDataURL(file);


	}, false);

}(window, window.document));
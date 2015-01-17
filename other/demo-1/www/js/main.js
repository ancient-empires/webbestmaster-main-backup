(function (win, doc, docElem) {

	"use strict";
	/*global console, alert */

	$(win).on('load', function(){

		var wrapper = $('.js-wrapper'),
			str = 'I love you ♥ I love you ♥',
			i, len;

		for (i = 0, len = str.length * 2; i < len; i += 1) {

			setTimeout(function(len){

				var string = str.toString(),
					newstr = '';

				for (var j = 0; j < len; j += 1) {
					newstr += string.substr(0, len - j) + '<br>';

				}

				wrapper.html(newstr);

			}.bind(null, i), 200 * i);

		}

	});


}(window, document, document.documentElement));
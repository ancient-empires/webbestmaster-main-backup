/*jslint white: true, nomen: true */

(function () {

	'use strict';
	/*global */

	var max = 7,
		str = '';

	while (str.length < max) {

		str += '#';

		console.log(str);

	}

}());

(function () {

	var counter = 0,
		max = 100,
		str;

	while (counter < max) {

		counter += 1;

		str = '';

		if (counter % 3 === 0 ) {
			str += 'Fizz';
		}

		if (counter % 5 === 0) {
			str += 'Buzz';
		}

		console.log(str || counter);

	}

}());

(function () {

	var width = 8,
		height = 8,
		size = width * height,
		str = '';

	while (size) {
		size -= 1;
		str += size % 2 ^ Math.floor(size / width) % 2 ? ' ' : '#';
		str += size % 8 ? '' : '\n';
	}

	console.log(str);

}());

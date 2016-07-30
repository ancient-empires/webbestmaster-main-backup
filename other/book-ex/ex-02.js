'use strict';

function min() {
	return Math.min.apply(Math, arguments);
}

console.log(min(3, 6, 2));


function isEven(number) {
	return !(number % 2)
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

function countChar(string, char) {

	var counter = 0,
		i, len;

	for (i = 0, len = string.length; i < len; i += 1) {

		if (string.charAt(i) === char) {
			counter += 1;
		}

	}

	return counter;

}


console.log(countChar('qweqweq', 'q'));












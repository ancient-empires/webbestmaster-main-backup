
"use strict";

function range(start, end, step) {

	step = step || 1;

	var arr = [];

	if (step > 0) {

		if (start > end) {
			start = [end, end = start][0];
		}

		for (; start <= end; start += step) {
			arr.push(start);
		}

	} else {

		if (start < end) {
			start = [end, end = start][0];
		}

		for (; start >= end; start += step) {
			arr.push(start);
		}
	}

	return arr;

}

function sum(arr) {

	var i, len, sum = 0;

	for (i = 0, len = arr.length; i < len; i += 1) {
		sum += arr[i];
	}

	return sum;

}

console.assert(function () {
	console.log(range(3, 5, 1));
	return range(3, 5, 1).join(',') === '3,4,5';
}());

console.assert(function () {
	console.log(range(5, 2, -1));
	return range(5, 2, -1).join(',') === '5,4,3,2';
}());

console.assert(function () {
	console.log(range(2, 5, -1));
	return range(2, 5, -1).join(',') === '5,4,3,2';
}());

console.assert(function () {
	console.log(sum(range(2, 5, -1))); //'5 + 4 + 3 + 2' = 14
	return sum(range(2, 5, -1)) === 14;
}());



function reverseArray(arr) {

	var i = 0, len = arr.length, reversedArray = [];

	while (len) {
		len -= 1;
		reversedArray[i] = arr[len];
		i += 1;
	}

	return reversedArray;

}

console.assert(function () {
	var arr = [3,5,1,4,4];
	console.log(reverseArray(arr));
	return reverseArray(arr).join(',') === arr.reverse().join(',');
}());


function reverseArrayInPlace(arr) {

	var reversedArray = reverseArray(arr);

	for (var i = 0, len = reversedArray.length; i < len; i += 1) {
		arr[i] = reversedArray[i];
	}

	return arr;

}


console.assert(function () {
	var arr = [3,5,1,4,4];

	console.log(reverseArrayInPlace(arr));
	console.log(arr.join(',') === [3,5,1,4,4].reverse().join(','));
	console.log(arr === reverseArrayInPlace(arr));

	return (arr === reverseArrayInPlace(arr)) && (arr.join(',') === [3,5,1,4,4].reverse().join(','));

}());

function deepEqual(obj1, obj2) {
	return aEqualB(obj1, obj2) && aEqualB(obj2, obj1);
}

function aEqualB(obj1, obj2) {

	for (var key in obj1) {
		if (obj1.hasOwnProperty(key)) {
			if (typeof obj1[key] === 'object') {
				if (!deepEqual(obj1[key], obj2[key])) {
					return false
				}
			} else {
				if (obj1[key] !== obj2[key]) {
					return false;
				}
			}
		}
	}

	return true;

}

var obj = {here: {is: 'an'}, object:2};

console.assert(function () {

	return deepEqual(obj, obj);

}());

console.assert(function () {
	return !deepEqual(obj, {here: 1, object:2});
}());

console.assert(function () {
	return deepEqual(obj, {here: {is: 'an'}, object:2});
}());




















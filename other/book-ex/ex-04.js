"use strict";

function flood(arr) {

	var newArr = [];

	for (var i = 0, len = arr.length; i < len; i += 1) {

		newArr.push.apply( newArr, arr[i]);

	}

	return newArr;

}


console.log(flood([[1,2,3],[4,5], [6]]));


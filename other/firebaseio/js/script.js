/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */


	var myDataRef = new Firebase('https://radiant-torch-4344.firebaseio.com/');

	//myDataRef.set({
	//	users: [
	//		{name: 'vasia', age: 40},
	//		{name: 'pretya', age: 41}
	//	]
	//});

	//myDataRef.child('users', function () {
	//	console.log(arguments);
	//})

	myDataRef.child("users/1").once("value", function(snapshot) {
		console.log(snapshot.val());
	});

	myDataRef.child("users/4").set({
		date_of_birth: "June 23, 1912 from Nadya",
		full_name: "Alan Turing from Nadya"
	});

	myDataRef.child("users").push({
		date_of_birth: "11",
		full_name: "11"
	});

}(window));
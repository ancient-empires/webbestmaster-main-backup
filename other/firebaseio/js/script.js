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
	//
	//myDataRef.child("users/1").once("value", function(snapshot) {
	//	console.log(snapshot.val());
	//});
	//
	myDataRef.child("users/4").set({
		date_of_birth: "June 23, 1912 from Nadya",
		full_name: "Alan Turing from Nadya"
	});

	myDataRef.child("users/5").push({

		date_of_birth: "June 23, 1912 from Nadya",
		full_name: "Alan Turing from Nadya"
	});

	myDataRef.child("users/5/4/4").push({

		date_of_birth: "June 23, 1912 from Nadya",
		full_name: "Alan Turing from Nadya"
	});

	//myDataRef.child("users").push({
	//	date_of_birth: "11",
	//	full_name: "11"
	//});

	//myDataRef.child("users").orderByChild('date_of_birth').equalTo('11').on('value', function (snapshot) {
	//
	//	console.log('1111');
	//	console.log(snapshot.val());
	//
	//});

	//myDataRef.child("users").orderByChild('date_of_birth').equalTo('11').on('value', function (snapshot) {
	//
	//	console.log('1111');
	//	console.log(snapshot.val());
	//
	//});

	myDataRef.child("users/5/4/4").on('value', function (sn) {
		console.log('1');
		console.log(sn.val());
	});


	myDataRef.child("users").orderByChild('date_of_birth').equalTo('11').on('value', function (snapshot) {

		console.log('222');
		console.log(snapshot.val());

		var obj = snapshot.val();

		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {

				//myDataRef.child('users/' + key).remove();

			}
		}




	});




	//myDataRef.child('users').remove();

}(window));
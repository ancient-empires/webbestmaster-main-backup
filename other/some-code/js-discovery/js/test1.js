(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document */
	/*global */


	var testFunction = function() {

		var node = win.test;


		console.log('-1');
		win.location.hash = '11';
		win.location.hash = '';
		win.location.hash = Math.random();

		console.log(location.dispatchEvent);
//		node.dispatchEvent.call(location, new Event('hashchange'));

		new Array(10000).join('1+').split('+').forEach(function(item, index, arr){
			arr[index] = String(item) + index;
//			console.log('/');
			if (index === arr.length -1) {
				console.log(arr);
			}
		});


		node.dispatchEvent(new Event('click'));

		console.log('+1');




	};

	var main = function() {

		var node = win.test;

		win.addEventListener('hashchange', function(){
			console.log('hashchange');
		}, true);


		node.addEventListener('click', function(){
			console.log('click to test node');
		}, false);


		history.addEventListener('pushState', function(){
			console.log('pushState');
		}, false);

		history.pushState({foo: 'bar'}, 'Title', '/baz.html');



		testFunction();







	};

	win.addEventListener('load', main, false);





}(window, document, document.documentElement));
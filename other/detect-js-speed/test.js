/*jslint white: true, nomen: true */
(function () {

	"use strict";
	/*global */

// Функция с антипаттерном для исследования (выражение `with`)


	function outerFn(a) {

		return a + a;

	}

	function containsWith() {

		//var i = 0, len = arguments.length, args = [];
		//
		//for (i; i < len; i += 1) {
		//	args[i] = arguments[i];
		//}
		//
		//
		//
		//return args;

		var args = [];
		for(var i = 0; i < arguments.length; ++i) {
		//	i is always valid index in the arguments object
			args[i] = arguments[i];
			outerFn.apply(undefined, arguments);
		}



		//var i = 0,
		//	len = arguments.length;
		//
		//for (i; i < len; i += 1) {
		//	args[i] = arguments[i] + outerFn(arguments[i]);
		//}
		//
		//return args;



	}

	function printStatus(fn) {
		switch(%GetOptimizationStatus(fn)) {
			case 1: console.log("Функция оптимизирована"); break;
			case 2: console.log("Функция не оптимизирована"); break;
			case 3: console.log("Функция всегда оптимизируема"); break;
			case 4: console.log("Функция никогда не оптимизируема"); break;
			case 6: console.log("Функция возможно деоптимизирована"); break;
		}
	}

// вызовите функцию
		containsWith(1, 2);

	%OptimizeFunctionOnNextCall(containsWith);
// Следующий вызов
		containsWith();

// Проверка
		printStatus(containsWith);

}());
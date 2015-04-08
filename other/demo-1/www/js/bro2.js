/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	function myArr() {

		//if ( arguments.length ) {
		//	this.push.apply(this, arguments);
		//} else {
		//	this.length = arguments[0];
		//}

		this.splice.apply(this, [0, 0].concat( Array.apply(null, arguments) ));

	}

	myArr.prototype = Object.create(Array.prototype);

	myArr.prototype.max = function () {

		return Math.max.apply(null, this);

	};


	win.myArr = myArr;


}(window));
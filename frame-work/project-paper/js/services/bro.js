(function (win, doc) {

	/*global window, document, Array, RegExp */

	var bro, broA;

	bro = function (selector, context) {
		return (context || doc).querySelector(selector);
	};

	broA = function (selector, context) {
		return bro.toArray((context || doc).querySelectorAll(selector));
	};

	bro.hasClass = function (node, className) {
		return node.classList.contains(className);
	};

	bro.removeClass = function (node, className) {
		node.classList.remove(className);
	};

	bro.addClass = function (node, className) {
		node.classList.add(className);
	};

	bro.shuffle = function (arr) {
		return arr.sort(function() {
			return Math.random() - 0.5;
		});
	};

	bro.createSimpleArray = function(begin, end) {
		var arr = [], i;
		for (i = begin; i <= end; i++) {
			arr.push(i);
		}
		return arr;
	};

	bro.hexToRgb = function(hex) {

		//#FCA -> #FFCCAA
		if (hex.length <= 4) {
			hex = hex.replace(/(\w)(\w)(\w)/gi, '$1$1$2$2$3$3');
		}

		var rgb = hex.match(/\w{2}/gi);
		return parseInt(rgb[0], 16) + ',' + parseInt(rgb[1], 16) + ',' + parseInt(rgb[2], 16);
	};

	bro.toArray = function(list) {
		return Array.prototype.slice.call(list);
	};

	bro.html = function(node, html) {
		if (html !== undefined) {
			node.innerHTML = html;
			return true;
		}
		return node.innerHTML;
	};

	bro.remove = function(node) {
		node.parentNode.removeChild(node);
	};

	win.$ = bro;
	win.$$ = broA;

	//	support old browser
	(function () {

		"use strict";
		/*global window, document, console, alert */

		// detect support Node.classList API
		if (document.documentElement.hasOwnProperty('classList')) {
			return;
		}

		bro.hasClass = function (node, className) {
			return node.className.split(' ').indexOf(className) !== -1;
		};

		bro.removeClass = function (node, className) {

			var classArr, classIndex;
			classArr = node.className.split(' ');
			classIndex = classArr.indexOf(className);

			if (classIndex === -1) {
				return;
			}

			classArr.splice(classIndex, 1);
			node.className = classArr.join(' ');

		};

		bro.addClass = function (node, className) {

			if (bro.hasClass(node, className)) {
				return;
			}

			node.className += node.className ? ' ' + className : className;

		};

	}());

}(window, document));

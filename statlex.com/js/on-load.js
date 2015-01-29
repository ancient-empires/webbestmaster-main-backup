(function () {

	"use strict";
	/*global window, document*/

	// --------------------- support old devices --------------------- //
	(function () {
		if (!Function.prototype.bind) {
			Function.prototype.bind = function (oThis) {
				if (typeof this !== "function") {
					// closest thing possible to the ECMAScript 5 internal IsCallable function
					throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
				}
				var aArgs = Array.prototype.slice.call(arguments, 1),
					fToBind = this,
					FNOP = function () {},
					fBound = function () {
						return fToBind.apply(this instanceof FNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
					};
				FNOP.prototype = this.prototype;
				fBound.prototype = new FNOP();
				return fBound;
			};
		}
	}());
	// --------------------- support old devices --------------------- //

	var runner;
	runner = {
		// no double running functions
		wasRun: false,
		find: function(selector) {
			return document.body.querySelector(selector);
		},
		findAll: function(selector) {
			return document.body.querySelectorAll(selector);
		},
		classFinder: function(className) {
			// /^class$|^class\s+|\s+class\s+|\s+class$/gi
			return new RegExp('^' + className + '$|' + '^' + className + '\\s+|' + '\\s+' + className + '\\s+|' + '\\s+' + className + '$','gi');
		},
		removeClass: function(node, className) {
			node.className = node.className.replace( this.classFinder(className) , ' ').trim();
		},
		addClass: function(node, className) {
			if (!this.hasClass(node, className)) {
				node.className += ' ' + className;
			}
		},
		hasClass: function(node, className) {
			return this.classFinder(className).test(node.className) ;
		}
	};

	runner.run = function() {
		// no double running functions
		if (this.wasRun) {
			return;
		}
		this.wasRun = true;

		// onLoad functions
		runner.setMenuFade(); // show fade if menu is open
	};

	runner.setMenuFade = function() {
		var menuButton, fade, buttonsWrapper;

		function hideMenuNFade() {
			runner.addClass(fade, 'hidden');
			runner.removeClass(buttonsWrapper, 'visible');
		}

		function showMenuNFade() {
			runner.removeClass(fade, 'hidden');
			runner.addClass(buttonsWrapper, 'visible');
		}

		menuButton = this.find('header .menu-button');
		fade = this.find('.fade');
		buttonsWrapper = this.find('header nav');

		menuButton.addEventListener('click', function(){
			if (runner.hasClass(fade, 'hidden')) {
				showMenuNFade();
				return;
			}

			hideMenuNFade();

		}, false);

		fade.addEventListener('click', hideMenuNFade, false);
		fade.addEventListener('touchstart', hideMenuNFade, false);
		buttonsWrapper.addEventListener('click', hideMenuNFade, false);

	};

	// start runner
	window.addEventListener('DOMContentLoaded', runner.run.bind(runner), false);
	window.addEventListener('load', runner.run.bind(runner), false);

}());

// --------------------- support old devices --------------------- //
(function () {

	"use strict";
	/*global window, document, console, alert */

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

(function (win, doc, docElem) {

	"use strict";
	/*global window, document, console, alert */

	function footerToBottom() {

		function fixFooter() {
			var footer = doc.getElementsByClassName('footer')[0],
				bodyH = doc.body.clientHeight,
				wholeH = docElem.clientHeight,
				re = /(\s|^)fix-footer(\s|$)/gi,
				className = footer.className;

			if ( bodyH < wholeH ) {

				if ( !re.test(className) ) {
					className += ' fix-footer';
				}

			} else {
				className = className.replace(re, '');
			}

			footer.className = className;

		}

		fixFooter();
		win.addEventListener('resize', fixFooter, false);

	}

	function ui() {

		footerToBottom();

	}

	win.addEventListener('load', ui, false);



}(window, document, document.documentElement));

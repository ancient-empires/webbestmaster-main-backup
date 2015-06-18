/*jslint white: true, nomen: true */
(function (win, doc, doT) {

	"use strict";
	/*global window */
	/*global */

	win.addEventListener('load', function () {




		var tmpls = {};

		var ss = Array.prototype.slice.call(doc.querySelectorAll('[type="text/x-dot-template"]'));

		ss.forEach(function (s) {

			var name = s.className,
				fn = doT.template(s.innerText);

			tmpls[name] = fn;

		});

		win.tmpls = tmpls;

		console.log(tmpls.wrapper({"name":"Jake","age":31}));
		//console.log(tmpls.inner({"prop":"Jake"}));

		//var sourceHtml = .innerText,
		//	fn = doT.template(sourceHtml),
		//	result = fn({"name":"Jake","age":31});
		//
		//console.log(result);






	}, false);

}(window, window.document, window.doT));
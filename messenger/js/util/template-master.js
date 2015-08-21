/*jslint white: true, nomen: true */
define(['doT'], function (doT) {

	'use strict';
	/*global window*/

	var win = window,
		doc = win.document;

	return {
		templateSelector: 'script[type="text/x-template"]',
		tmplText: {},
		tmplFn: {},

		init: function () {

			var templates = doc.querySelectorAll(this.templateSelector);

			Array.prototype.forEach.call(templates, function(tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = tmplNode.textContent.replace(/%(\S+?)%/g, 'window.APP.lang.attr.' + '$1');

				this.tmplText[name] = text;
				this.tmplFn[name] = doT.template(text);

				tmplNode.parentNode.removeChild(tmplNode);

			}, this);

		}

	};

});
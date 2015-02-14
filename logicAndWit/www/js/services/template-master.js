(function (win, doc) {

	"use strict";
	/*global window, document */
	/*global APP */

	win.APP = win.APP || {};

	var templateMaster;

	templateMaster = {
		templateSelector: 'script[type="text/x-template"]',
		tmplText: {},
		tmplFn: {},
		optimizeHtml: function (html) {
			return html.trim().replace(/>\s+</g, '><').replace(/\s+/g, ' ');
		},
		createTemplateFunction: function (str) {
			return new Function("obj",
					"var p=[]; obj = obj || {}; with( obj ){p.push('" + str
					.replace(/[\r\t\n]/g, " ")
					.split("<%").join("\t")
					.replace(/((^|%>)[^\t]*)'/g, "$1\r")
					.replace(/\t=([\s\S]*?)%>/g, "',$1,'")
					.split("\t").join("');")
					.split("%>").join("p.push('")
					.split("\r").join("\\'") + "');} return p.join('');");
		},
		init: function () {

			var templates = doc.querySelectorAll(this.templateSelector);

			Array.prototype.forEach.call(templates, function(tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = this.optimizeHtml(tmplNode.textContent);

				this.tmplText[name] = text;
				this.tmplFn[name] = this.createTemplateFunction(text);

				tmplNode.parentNode.removeChild(tmplNode);

			}, this);

		}

	};

	win.APP.templateMaster = templateMaster;

}(window, document));


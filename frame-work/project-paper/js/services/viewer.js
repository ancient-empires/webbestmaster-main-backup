(function (win) {

	"use strict";
	/*global window, document, $ */

	var viewer = {
		wrapper: null, // field for page wrapper, type Node
		templateClass: '.js-template',
		contextPath: '', // for example http://statlex.com
		show: function (templateId, model) {

			win.ui.fn.setBodyScroll(false); // disable scroll

			var template = this.templates[templateId];
			this.wrapper.innerHTML = this.template(template.html)(model || {});

			// run action
			win.eval(template.onShow || '');

		},
		template: function (str) {
			return new Function("obj",
				"var p=[];" +
					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" + str
					.replace(/[\r\t\n]/g, " ")
					.split("{{").join("\t")
					.replace(/((^|}})[^\t]*)'/g, "$1\r")
					.replace(/\t=(.*?)}}/g, "',$1,'")
					.split("\t").join("');")
					.split("}}").join("p.push('")
					.split("\r").join("\\'") + "');} return p.join('');");

		},
		handleEvent: function () {

			var that = this;
			this.templates = {};
			$$(this.templateClass).forEach(function (node) {
				that.templates[node.getAttribute('template-id')] = {
					onShow: node.getAttribute('onshow'),
					html: $.html(node).replace(/\s+/gi, ' ').trim()
				};
				$.remove(node);
			});

			this.wrapper = $('#wrapper');

		}

	};

	win.viewer = viewer;

	win.addEventListener('load', viewer, false);


}(window));

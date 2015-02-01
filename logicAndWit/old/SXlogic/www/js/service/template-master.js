(function (win, doc) {

	"use strict";
	/*global window, document */

	var templateMaster;

	templateMaster = {
		templateSelector: 'script[type="text/x-template"]',
		tmplText: {},
		tmplFn: {},
		createTemplateFunction: function (str) {
			return new Function("obj",
					"var p=[]; with(obj){p.push('" + str
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

				var name = tmplNode.dataset.name,
					text = tmplNode.textContent.trim();

				this.tmplText[name] = text;
				this.tmplFn[name] = this.createTemplateFunction(text);

				tmplNode.parentNode.removeChild(tmplNode);

			}, this);

		},

		// create template for question
		createText: function(text, addedClass) {

			if (addedClass) {
				addedClass = ' ' + addedClass;
			} else {
				addedClass = '';
			}

			var arrStr = text.split(/\s*_!_\s*/gi);

			arrStr.forEach(function(str, index, arr){

				str = str.trim();
				var lastChar = str[str.length-1];

				if (str.indexOf('http:') !== -1) {
					str = 'image/' + str.split('/').pop(); // it is works
					arr[index] = '<img class="image" src="' + str + '" alt=""/>';
				} else {
					if ( ['.', '?', '!', ':'].indexOf(lastChar) === -1 ) {
						str += '.';
					}
					arr[index] = '<p class="question-paragraph">' + str + '</p>';
				}

			}, this);

			arrStr = '<div class="text-block-wrapper ' + addedClass + '">' + arrStr.join('') + '</div>';

			return  arrStr;

		}

	};

	win.templateMaster = templateMaster;

}(window, document));


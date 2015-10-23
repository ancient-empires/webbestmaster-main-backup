'use strict';
/*global window */

import dot from './../lib/dot';

var doc = window.document,
	templateMaster = {
		templateSelector: 'script[type="text/x-template"]',
		tmplText: {},
		tmplFn: {},

		init: function () {

			var templates = doc.querySelectorAll(this.templateSelector);

			Array.prototype.forEach.call(templates, function (tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = tmplNode.textContent;

				this.tmplText[name] = text;
				this.tmplFn[name] = dot.template(text);

				tmplNode.parentNode.removeChild(tmplNode);

			}, this);

		}

	};

templateMaster.init();

export default templateMaster;



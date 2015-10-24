'use strict';
/*global window */

import dot from './../lib/dot';

var doc = window.document,
	templateMaster = {
		templateSelector: '.js-template',
		tmplText: {},
		tmplFn: {},
		getSymbolByMap: function (match, p1) {
			return { 'amp' : '&', 'gt' : '>', 'lt' : '<' }[p1];
		},
		init: function () {

			var tm = this,
				templates = doc.querySelectorAll(tm.templateSelector);

			Array.prototype.forEach.call(templates, function (tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = tmplNode.innerHTML.replace(/\&(amp|gt|lt)\;/gi, tm.getSymbolByMap);

				tm.tmplText[name] = text;
				tm.tmplFn[name] = dot.template(text);

				tmplNode.parentNode.removeChild(tmplNode);

			});

		}

	};

templateMaster.init();

export default templateMaster;



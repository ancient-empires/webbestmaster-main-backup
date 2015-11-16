'use strict';
/*global window */

import doT from './../lib/dot';

var doc = window.document,
	templateMaster = {
		templateSelector: '.js-template',
		mainJsSelector: '.js-main-js',
		tmplText: {},
		tmplFn: {},
		getSymbolByMap: function (match, p1) {
			return { 'amp' : '&', 'gt' : '>', 'lt' : '<' }[p1];
		},
		init: function () {

			var tm = this,
				templates = doc.querySelectorAll(tm.templateSelector),
				mainJs = doc.querySelector(tm.mainJsSelector);

			Array.prototype.forEach.call(templates, function (tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = tmplNode.innerHTML.replace(/\&(amp|gt|lt)\;/gi, tm.getSymbolByMap);

				tm.tmplText[name] = text;
				tm.tmplFn[name] = doT.template(text);

				tmplNode.parentNode.removeChild(tmplNode);

			});

			mainJs.parentNode.removeChild(mainJs);

		}

	};

templateMaster.init();

export default templateMaster;



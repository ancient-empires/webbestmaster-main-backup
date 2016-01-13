'use strict';
/*global window */

import doT from './../lib/dot';

var doc = window.document,
	templateMaster = {
		templateSelector: '.js-template',
		mainJsSelector: '.js-main-js',
		tmplText: {},
		tmplFn: {},
		init: function () {

			var tm = this,
				templates = doc.querySelectorAll(tm.templateSelector),
				mainJs = doc.querySelector(tm.mainJsSelector);

			Array.prototype.forEach.call(templates, function (tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = tmplNode.textContent.replace(/\<\!\-\-[\s\S]+?\-\-\>/gi, '').trim();

				tm.tmplText[name] = text;
				tm.tmplFn[name] = doT.template(text);

				tmplNode.parentNode.removeChild(tmplNode);

			});

			return mainJs && mainJs.parentNode.removeChild(mainJs);

		},
		get: function (name) {
			return this.tmplFn[name];
		}

	};

templateMaster.init();

export default templateMaster;



(function (win, doc, docElem) {

	"use strict";
	/*global window, document, navigator, localStorage */
	/*global APP */

	win.APP = win.APP || {};

	function getPrefix() {

		var data = {
				js: '',
				css: ''
			},
			tempStyle = doc.createElement('div').style,
			vendors = ['t','webkitT','MozT','msT','OT'];

		// find vendors by css transform property
		vendors.forEach(function(vendor){
			var transform = vendor + 'ransform';
			if (!tempStyle.hasOwnProperty(transform)) {
				return;
			}

			vendor = vendor.replace(/t$/i, ''); // remove 't' from vendor

			data.js = vendor;

			vendor = vendor.toLocaleLowerCase();
			if (vendor) {
				data.css = '-' + vendor + '-';
			}

		});

		return data;

	}

	var info;

	info = {
		ls: win.localStorage,
		saveItem: 'zaggadki',
		attr: {},
		defaultLanguage: 'en',
		availableLanguages: ['ru', 'en'],

		init: function () {

			// get data from LS
			this.attr = JSON.parse(this.ls.getItem(this.saveItem) || '{}');

			// set vendor prefix
			this.set('pre', getPrefix());

			// is touch
			this.set('isTouch', 'ontouchstart' in document);

			// is phone
			this.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) < 700);

			// set language
			var lang = this.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
			lang = lang.split('-')[0].toLocaleLowerCase();
			lang = (this.availableLanguages.indexOf(lang) === -1) ? this.defaultLanguage : lang;
			lang = lang.toLowerCase();
			this.set('language', lang);

		},
		set: function (key, value) {

			this.attr[key] = value;

			this.ls.setItem(this.saveItem, JSON.stringify(this.attr));

			return true;

		},
		get: function (key) {
			return this.attr[key];
		}

	};

	info.init();

	win.APP.info = info;

}(window, document, document.documentElement));

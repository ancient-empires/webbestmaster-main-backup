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
		systemAttr: {},
		defaultLanguage: 'en',
		availableLanguages: ['ru', 'en'],

		init: function () {

			// get data from LS
			this.attr = JSON.parse(this.ls.getItem(this.saveItem) || '{}');

			// todo: remove it after 1-2 months after release added about - 05.02.2015
			// backward compatibility - begin
			var langOld = this.get('lang');
			if (langOld) {
				this.set('language', langOld);
				this.remove('lang');
			}
			// backward compatibility - end

			// set vendor prefix
			this.set('pre', getPrefix(), true);

			// is touch
			this.set('isTouch', 'ontouchstart' in document, true);

			// is phone
			this.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) < 760, true);

			// set language
			var lang = this.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
			lang = lang.split('-')[0].toLocaleLowerCase();
			lang = (this.availableLanguages.indexOf(lang) === -1) ? this.defaultLanguage : lang;
			lang = lang.toLowerCase();
			this.set('language', lang);

		},
		set: function (key, value, isSystem) {

			if (isSystem) {
				this.systemAttr[key] = value;
			} else {
				this.attr[key] = value;
				this.ls.setItem(this.saveItem, JSON.stringify(this.attr));
			}


			return true;

		},

		get: function (key, isSystem) {
			return isSystem ? this.systemAttr[key] : this.attr[key];
		},

		remove: function (key, isSystem) {
			if (isSystem) {
				delete this.systemAttr[key];
			} else {
				delete this.attr[key];
				this.ls.setItem(this.saveItem, JSON.stringify(this.attr));
			}

			return key;

		}

	};

	info.init();

	win.APP.info = info;

}(window, document, document.documentElement));

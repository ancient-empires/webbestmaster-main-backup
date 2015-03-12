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
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];

		// find vendors by css transform property
		vendors.forEach(function (vendor) {
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

		withAds: false,

		link: {
			ios: {
				normal: '',
				pro: ''
			},
			android: {
				normal: '',
				pro: ''
			}
		},

		ls: win.localStorage,
		saveItem: 'ae2-ls-item',
		attr: {},
		systemAttr: {},
		defaultLanguage: 'en',
		availableLanguages: ['ru', 'en'],

		init: function () {

			var lang;

			// get data from LS
			this.attr = JSON.parse(this.ls.getItem(this.saveItem) || '{}');

			// set vendor prefix
			this.set('pre', getPrefix(), true);

			// is touch
			this.set('isTouch', 'ontouchstart' in document, true);

			// is phone
			this.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) < 760, true);

			this.setOS();

			// set language
			lang = this.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
			lang = lang.split('-')[0].toLocaleLowerCase();
			lang = (this.availableLanguages.indexOf(lang) === -1) ? this.defaultLanguage : lang;
			lang = lang.toLowerCase();
			this.set('language', lang);

			//set settings
			this.setSettings();

		},
		setOS: function () {

			var ua = win.navigator.userAgent,
				isIE = /MSIE/.test(ua),
				isAndroid = (/android/i).test(ua),
				isIOS = /iPad|iPhone|iPod/.test(ua);

			this.set('isIE', isIE, true);
			this.set('isAndroid', isAndroid, true);
			this.set('isIOS', isIOS, true);

			if (isIE) {
				this.set('os', 'wp', true);
			}

			if (isAndroid) {
				this.set('os', 'android', true);
			}

			if (isIOS) {
				this.set('os', 'ios', true);
			}

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

		},

		setSettings: function () {

			var defaultSettings = {
					confirmTurn: 'off', // game turn
					confirmMove: 'off', // move unit
					confirmAttack: 'off', // attack unit
					music: 'on',
					vibrate: 'off',
					help: 'on',
					fightAnimation: 'off',
					gameSpeed: '3' // 1..5, use string type
				},
				key,
				value;

			for (key in defaultSettings) {
				if (defaultSettings.hasOwnProperty(key)) {
					value = this.get(key) || defaultSettings[key];
					this.set(key, value)
				}
			}

		}

	};

	info.init();

	win.APP.info = info;

}(window, document, document.documentElement));

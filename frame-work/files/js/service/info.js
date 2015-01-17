(function (win, doc) {

	"use strict";
	/*global window, document, navigator, localStorage */

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

			data = {
				js: vendor,
				css: '-' + vendor.toLocaleLowerCase() + '-'
			};

		});

		return data;

	}

	var docElem, ls, isTouch, info, pre;
	docElem = doc.documentElement;
	ls = win.localStorage;
	isTouch = 'ontouchstart' in docElem;
	pre = getPrefix();

	info = {
		lang: 'en', // current language
//		availableLangs: ['en', 'ru', 'de', 'zh', 'es', 'ar', 'it'],
		availableLangs: ['en'],
		saveItem: '-----APP-NAME-----',
		isPhone: false,
		isTouch: isTouch,
		preCSS: pre.css,
		preJS: pre.js,
		canScroll: false,

		isAdsFree: false,
		adsFreeLinks: { // NO - ADs in app
			googlePlay: 'https://play.google.com/store/apps/details?id=com.statlex.logicandwitpro',
			appStore: ''
		},

		adsNonFreeLinks: { // YES - ADs in app
			googlePlay: 'https://play.google.com/store/apps/details?id=com.statlex.logicandwit',
			appStore: 'https://itunes.apple.com/us/app/logika-i-smekalka/id908979726?ls=1&mt=8'
		},

		getData: function () {
			var data = ls.getItem(this.saveItem) || '{}';
			return JSON.parse(data);
		},
		get: function (key) {
			return this[key];
		},
		set: function (key, value, toLS) {
			this[key] = value;

			if (!toLS) {
				return;
			}

			// save data to ls
			var data = this.getData();
			data[key] = value;
			data = JSON.stringify(data);
			ls.setItem(this.saveItem, data);
		},
		change: function (key, delta, toLS) {
			this.set(key, (this.get(key) || 0) + delta, toLS);
		},

		init: function () {

			this.getIsPhone();

			// set all fields from ls to info
			this.setDataFromLS();

			// try to get current language
			this.setLang();

		},
		setLang: function() {

			var lang = this.get('lang');

			if (lang) {
				return;
			}

			lang = navigator.language || navigator.userLanguage;
			lang = lang.split('-')[0];

			this.lang = (this.availableLangs.indexOf(lang) === -1) ? this.defaultLang : lang;

		},
		setDataFromLS: function () {
			var data = this.getData(),
				key;
			for (key in data) {
				if (data.hasOwnProperty(key)) {
					this[key] = data[key];
				}
			}
		},
		getIsPhone: function () {
			this.isPhone = Math.max(docElem.clientHeight, docElem.clientWidth) < 700;
			return this.isPhone;
		}

	};

	info.init();

	win.info = info;

}(window, document));

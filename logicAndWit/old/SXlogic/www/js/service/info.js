(function (win, doc) {

	"use strict";
	/*global window, document, navigator, localStorage */

	var docElem, ls, isTouch, info, ua;
	docElem = doc.documentElement;
	ls = localStorage;
	isTouch = docElem.hasOwnProperty('ontouchstart');
	ua = navigator.userAgent;

	info = {
		lang: '',
		defaultLang: 'ru', // current language
//		availableLangs: ['en', 'ru', 'de', 'zh', 'es', 'ar', 'it'],
		availableLangs: ['ru', 'en'],
		saveItem: 'zaggadki',
		isPhone: false,
		isTouch: isTouch,
		preCSS: '-webkit-',
		preJS: 'webkit',
		isIE: /MSIE/.test(ua),
		isAndroid: (/android/i).test(ua),
		canScroll: true,

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

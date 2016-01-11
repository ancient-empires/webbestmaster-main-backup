(function (win, doc) {

	"use strict";
	/*global window, document */

	var docElem = doc.documentElement;
	var ls = localStorage;
	var isTouch = docElem.hasOwnProperty('ontouchstart');

	var info = {
		lang: 'en', // current language
//		availableLangs: ['en', 'ru', 'de', 'zh', 'es', 'ar'],
		availableLangs: ['en', 'ru'],
		saveItem: 'save-item-kid-game-tangram-2',
		isPhone: false,
		isTouch: isTouch,
		preCSS: '-webkit-',
		preJS: 'webkit',
		canScroll: false,
		isFreeVersion: true,
		evt: {
			down: isTouch ? 'touchstart' : 'mousedown',
			move: isTouch ? 'touchmove' : 'mousemove',
			up: isTouch ? 'touchend' : 'mouseup',
			out: isTouch ? 'touchcancel' : 'mouseout'
		},
		debugger:{
			isActive: false,
			position: 'right' // while not use
		},
		screen: {
			getWidth: function() {
				return docElem.clientWidth;
			},
			getHeight: function() {
				return docElem.clientHeight;
			},
			getAspectRatio: function() {
				return docElem.clientWidth / docElem.clientHeight;
			}
		},
		getData: function() {
			var data = ls.getItem(this.saveItem) || '{}';
			return JSON.parse(data);
		},
		get: function(key) {
			return this[key];
		},
		set: function(key, value, toLS) {
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
		change: function(key, delta, toLS) {
			this.set(key, (this.get(key) || 0) + delta, toLS);
		},

		init: function() {

			// set all fields from ls to info
			this.setDataFromLS();

			// try to get current language
			var lang = this.get('lang') || (navigator.language || navigator.userLanguage);
			lang = lang.split('-')[0];
			this.lang = (this.availableLangs.indexOf(lang) === -1) ? this.lang : lang;
		},
		setDataFromLS: function() {
			var data = this.getData();
			for (var key in data) {
				if (data.hasOwnProperty(key)) {
					this[key] = data[key];
				}
			}
		},
		getIsPhone: function() {
			var maxSize = (docElem.clientHeight > docElem.clientWidth) ? docElem.clientHeight : docElem.clientWidth;
			this.isPhone = maxSize < 700;
			return this.isPhone;
		},
		timerIsActive: true,
		soundIsActive: true,
		tangramPattern: 'colored',
		tangramPatternImgPath: 'img/preview/',
		tangramPatterns: ['colored', 'wood', 'metal', 'chinese-symbol'],
		imageColor: '#FFF',
		mainFigureColor: '#333',
		isIOS6: (/(iPhone|iPad|iPod)\sOS\s6/).test(win.navigator.userAgent)

	};

	win.addEventListener('load', info.getIsPhone.bind(info), false);

	win.addEventListener('resize', info.getIsPhone.bind(info), false);

	info.init();

	win.info = info;

	//
//	info.isIOS6 = true;

}(window, document));

'use strict';
/*global window */

var win = window,
	doc = win.document,
	navigator = win.navigator,
	docElem = doc.documentElement,
	info,
	isNormal = false;

info = {

	isNormal: isNormal,

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
	savedItem: 'tangram-2',
	attr: {},
	systemAttr: {},
	defaultLanguage: 'en',
	availableLanguages: ['en'],
	//availableLanguages: ['ru', 'en'],

	init: function () {

		var info = this;

		// get data from LS
		info.attr = JSON.parse(info.ls.getItem(info.savedItem) || '{}');

		// set language
		info.setLanguage();
		// is phone
		info.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) <= 736, true); // 736 msx of iPhone6plus
		// is touch
		info.set('isTouch', 'ontouchstart' in doc, true);
		info.setOS();
		info.detectCssJsPrefix();
		info.detectTransitionEndEventName();
		info.detectAnimationEndEventName();

		//set settings
		info.setSettings();

	},

	setLanguage: function () {

		var info = this,
			lang;

		lang = info.get('language') || navigator.language || navigator.userLanguage || info.defaultLanguage;
		lang = lang.split('-')[0].toLowerCase();
		lang = (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;
		//lang = lang.toLowerCase();
		info.set('language', lang);

	},

	setOS: function () {

		var info = this,
			ua = navigator.userAgent,
			isIE = /MSIE/.test(ua),
			isAndroid = (/android/i).test(ua),
			isIOS = /iPad|iPhone|iPod/.test(ua);

		info.set('isIE', isIE, true);
		info.set('isAndroid', isAndroid, true);
		info.set('isIOS', isIOS, true);

		if (isIE) {
			info.set('os', 'wp', true);
		}

		if (isAndroid) {
			info.set('os', 'android', true);
			info.set('android-version', info.getAndroidVersion(), true);
		}

		if (isIOS) {
			info.set('os', 'ios', true);
		}

		// set os if os is not defined
		if (!info.get('os', true)) {
			info.set('os', 'ios', true);
			info.set('isIOS', true, true);
		}

	},

	getAndroidVersion: function () {

		var match = navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/);

		return match && match[1];

	},

	detectCssJsPrefix: function () {

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

			vendor = vendor.toLowerCase();
			if (vendor) {
				data.css = '-' + vendor + '-';
			}

		});

		this.set('cssJsPrefix', data, true);

	},

	detectTransitionEndEventName: function () {

		var i,
			el = doc.createElement('div'),
			transitions = {
				'transition': 'transitionend',
				'OTransition': 'otransitionend',  // oTransitionEnd in very old Opera
				'MozTransition': 'transitionend',
				'WebkitTransition': 'webkitTransitionEnd'
			},
			transitionEnd = 'transitionend';

		for (i in transitions) {
			if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
				transitionEnd = transitions[i];
			}
		}

		this.set('transitionEnd', transitionEnd, true);

	},

	detectAnimationEndEventName: function () {
		var i,
			el = doc.createElement('div'),
			animations = {
				'animation': 'animationend',
				'OAnimation': 'oAnimationEnd',  // oAnimationEnd in very old Opera
				'MozAnimation': 'animationend',
				'WebkitAnimation': 'webkitAnimationEnd'
			},
			animationEnd = 'animationend';

		for (i in animations) {
			if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
				animationEnd = animations[i];
			}
		}

		this.set('animationEnd', animationEnd, true);

	},

	set: function (key, value, isSystem) {

		if (isSystem) {
			this.systemAttr[key] = value;
		} else {
			this.attr[key] = value;
			this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
		}

		return key;

	},

	get: function (key, isSystem) {
		return isSystem ? this.systemAttr[key] : this.attr[key];
	},

	remove: function (key, isSystem) {
		if (isSystem) {
			this.systemAttr[key] = null;
			delete this.systemAttr[key];
		} else {
			this.attr[key] = null;
			delete this.attr[key];
			this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
		}

		return key;

	},

	setSettings: function () {

		var info = this,
			defaultSettings = {
				//screenAnimation: info.get('isAndroid', true) ? 'off' : 'on',
				screenAnimation: 'on',
				installTime: Date.now(),

				// extra - tangram
				tangramTexture: 0,
				gameDifficult: 'regular',
				doneTangramsRegular: [],
				doneTangramsMaster: []
				//screenAnimation: 'off',
				//storyByStory: info.isNormal ? 'off' : 'on',
				//hint: {}
				//autoSave: 'on', // auto save game after every turn
				//confirmTurn: 'off', // game turn
				//confirmMove: 'off', // move unit
				//confirmAttack: 'off', // attack unit
				//music: 'on',
				//vibrate: 'off',
				//help: 'on',
				//fightAnimation: 'off',
				//buildingSmoke: 'off',
				//unitAnimation: 'off',
				//difficult: 'easy', // easy, normal, hard
				//gameSpeed: '3' // 1..5, use string type
			},
			key,
			value;

		for (key in defaultSettings) {
			if (defaultSettings.hasOwnProperty(key)) {
				value = info.get(key) || defaultSettings[key];
				info.set(key, value);
			}
		}

	},

	hintIsDone: function (hintName) {

		var info = this,
			hint = info.get('hint')[hintName];

		return Boolean(hint && hint.state === 'done');

	},

	getLinkToStore: function (type) { // pro or normal
		return this.link[this.get('os', true)][type || 'normal'];
		//return this.link[this.get('os', true)][type || (this.isNormal ? 'normal' : 'pro')];
	},

	// extra tangram

	getDoneTangrams: function () {

		var info = this,
			gameDifficult = info.get('gameDifficult');

		if (gameDifficult === 'regular') {
			return info.get('doneTangramsRegular');
		}

		// master case
		return info.get('doneTangramsMaster');

	},

/*
	getDoneTangramsHash: function () {

	},
*/

	pushToDoneTangrams: function (data) {

		var info = this,
			gameDifficult = info.get('gameDifficult'),
			doneTangramsName,
			doneTangrams;

		if (gameDifficult === 'regular') {
			doneTangramsName = 'doneTangramsRegular';
		} else { // master case
			doneTangramsName = 'doneTangramsMaster';
		}

		doneTangrams = info.get(doneTangramsName);

		doneTangrams.push(data);

		info.set(doneTangramsName, doneTangrams);

	}

};

info.init();

export default info;


/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
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
		saveItem: 'APP-NAME',
		attr: {},
		systemAttr: {},
		defaultLanguage: 'en',
		availableLanguages: ['en'],
		//availableLanguages: ['ru', 'en'],

		init: function () {

			var lang, info = this;

			// get data from LS
			info.attr = JSON.parse(info.ls.getItem(info.saveItem) || '{}');

			// set vendor prefix
			info.set('pre', getPrefix(), true);

			// is touch
			info.set('isTouch', 'ontouchstart' in document, true);

			// is phone
			info.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) <= 736, true); // 736 msx of iPhone6plus

			info.setOS();

			// set language
			lang = info.get('language') || navigator.language || navigator.userLanguage || info.defaultLanguage;
			lang = lang.split('-')[0].toLowerCase();
			lang = (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;
			info.set('language', lang);

			//set settings
			info.setSettings();

			info.detectTransitionEndEventName();
			info.detectAnimationEndEventName();

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

		detectTransitionEndEventName: function () {

			var i,
				el = doc.createElement('div'),
				transitions = {
					'transition':'transitionend',
					'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
					'MozTransition':'transitionend',
					'WebkitTransition':'webkitTransitionEnd'
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
					'animation':'animationend',
					'OAnimation':'oAnimationEnd',  // oAnimationEnd in very old Opera
					'MozAnimation':'animationend',
					'WebkitAnimation':'webkitAnimationEnd'
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

			var info = this,
				defaultSettings = {
					autoSave: 'on', // auto save game after every turn
					confirmTurn: 'off', // game turn
					confirmMove: 'off', // move unit
					confirmAttack: 'off', // attack unit
					music: 'on',
					vibrate: 'off',
					help: 'on',
					fightAnimation: 'off',
					buildingSmoke: 'off',
					unitAnimation: 'off',
					difficult: 'easy', // easy, normal, hard
					gameSpeed: '3' // 1..5, use string type
				},
				currentSettings = info.get('setting') || {},
				key;

			for (key in defaultSettings) {
				if ( defaultSettings.hasOwnProperty(key) && !currentSettings.hasOwnProperty(key) ) {
					currentSettings[key] = defaultSettings[key];
				}
			}

			info.set('setting', currentSettings);

		},

		actionTime: function () {

			var info = this,
				speed = parseInt(info.get('gameSpeed'), 10),
				q = 6 - speed; // 6 === maxSpeed'5' + 1

			return 300 + (q - 1) * 100;

		}

	};

	info.init();

	win.APP.info = info;

}(window, document, document.documentElement));

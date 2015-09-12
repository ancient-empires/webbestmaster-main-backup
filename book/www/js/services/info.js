/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc, docElem) {

	"use strict";
	/*global window, document, navigator, localStorage */
	/*global APP */

	var info,
		isNormal = true;

	win.APP = win.APP || {};

	info = {

		isNormal: isNormal,

		link: {
			ios: {
				normal: 'https://itunes.apple.com/us/app/logika-i-smekalka/id908979726?mt=8',
				pro: 'https://itunes.apple.com/us/app/logic-and-wit-pro/id929158288?mt=8'
			},
			android: {
				normal: 'https://play.google.com/store/apps/details?id=com.statlex.logicandwit',
				pro: 'https://play.google.com/store/apps/details?id=com.statlex.logicandwitpro'
			}
		},

		ls: win.localStorage,
		savedItem: 'cool-book-stories',
		attr: {},
		systemAttr: {},
		defaultLanguage: 'ru',
		availableLanguages: ['ru'],
		//availableLanguages: ['ru', 'en'],

		init: function () {

			var info = this;

			// get data from LS
			info.attr = JSON.parse(info.ls.getItem(info.savedItem) || '{}');

			//set settings
			info.setSettings();
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

		},

		setLanguage: function () {

			var info = this,
				lang;

			lang = info.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
			lang = lang.split('-')[0].toLowerCase();
			lang = (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;
			lang = lang.toLowerCase();
			info.set('language', lang);

		},

		setOS: function () {

			var info = this,
				ua = win.navigator.userAgent,
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
			}

			if (isIOS) {
				info.set('os', 'ios', true);
			}

			// set os if os is not defined
			if ( !info.get('os', true) ) {
				info.set('os', 'ios', true);
				info.set('isIOS', true, true);
			}

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
				this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
			}

			return key;

		},

		get: function (key, isSystem) {
			return isSystem ? this.systemAttr[key] : this.attr[key];
		},

		remove: function (key, isSystem) {
			if (isSystem) {
				delete this.systemAttr[key];
			} else {
				delete this.attr[key];
				this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
			}

			return key;

		},

		setSettings: function () {

			var info = this,
				defaultSettings = {
					screenAnimation: 'off',
					storyByStory: info.isNormal ? 'off' : 'on',
					hint: {}
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

			for ( key in defaultSettings ) {
				if (defaultSettings.hasOwnProperty(key)) {
					value = info.get(key) || defaultSettings[key];
					info.set(key, value);
				}
			}

		},

		getLinkToStore: function (type) { // pro or normal
			return this.link[this.get('os', true)][type];
		}

	};

	info.init();

	win.APP.info = info;

}(window, document, document.documentElement));

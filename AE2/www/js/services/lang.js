/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	var lang = {

		attr: {},

		set: function (lang) {
			this.attr = APP.languages[lang];
		},

		get: function (key) {
			return key ? this.attr[key] : this.attr;
		},

		parsePopupData: function (data) {

			if ( !(data && data.popupData) ) {
				return;
			}

			_.each(data.popupData, function(value, key) {
				return /%[\s\S]+%/.test(value) && (data.popupData[key] = this.getByChain(value));
			}, this);

		},

		getByChain: function (chain) {

			var que = chain.replace(/%([\s\S]+)%/, '$1').split('.'),
				value,
				dropCounter = 0,
				curLang = this.get(),
				defaultLang = win.APP.languages.en;

			_.each(que, function (path) {
				if ( value ) {
					value = value[path];
				} else {
					// always first time
					value = curLang[path];
					dropCounter += 1;
				}
			});

			if ( dropCounter === 1 && typeof value === 'string' ) {
				return value;
			}

			_.each(que, function (path) {
				return value = value ? value[path] : defaultLang[path];
			});

			return value;

		}

	};

	// default language
	lang.set( APP.info.get('language') );

	APP.lang = lang;

}(window));
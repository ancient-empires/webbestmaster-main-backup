'use strict';
/*global window */

import info from './info';
import en from './../i18n/en';
import ru from './../i18n/ru';

var lang = {

	attr: {},

	languages: { en: en, ru: ru },

	set: function (lang) {
		this.attr = this.languages[lang];
	},

	get: function (key) {

		return this.attr[key];

	},

	getPartial: function (string) {

		var arr = string.split(' '),
			i = 0,
			len = arr.length,
			key,
			attr =  this.attr;

		if (attr[string]) {
			return attr[string];
		}

		for (; i < len; i += 1) {

			key = arr[i];

			arr[i] = attr[key] || key;

		}

		return arr.join(' ');

	}

};

lang.set(info.get('language'));

export default lang;



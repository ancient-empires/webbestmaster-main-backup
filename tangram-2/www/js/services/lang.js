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
		return key ? this.attr[key] : this.attr;
	}

};

lang.set(info.get('language'));

export default lang;



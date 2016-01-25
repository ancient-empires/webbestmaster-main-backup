'use strict';
/*global window, setTimeout, Date */
/*global */

var win, doc, nav, info, lang, needConnectionForFirstTime;

win = window;
doc = win.document;
nav = win.navigator;

info = {

	app: {
		href: 'http://elitapp.com/'
	},

	defaultLanguage: 'en',

	availableLanguages: ['en'],

	localization: {
		en: {
			needConnectionForFirstTime: 'need internet connection<br/>on first application launch'
		}
	},

	detectLanguage: function () {

		var info = this,
			lang = (nav.language || nav.userLanguage || info.defaultLanguage).split('-')[0].toLowerCase();

		return (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;

	}

};

lang = info.detectLanguage();
needConnectionForFirstTime = info.localization[lang].needConnectionForFirstTime;
doc.querySelector('title').innerHTML = needConnectionForFirstTime;
doc.querySelector('.js-header').innerHTML = needConnectionForFirstTime;

function checkConnection(resolve, reject) {

	var img = new Image();

	img.addEventListener('load', resolve, false);
	img.addEventListener('error', reject, false);

	img.src = 'http://google.com/qfavicon.ico?' + Date.now();

}

function showNotification() {

	return doc.querySelector('.js-header').style.display = 'block';

}

function routeToApp() {

	win.location.href = info.app.href;

}

(function main() {

	if (win.localStorage.getItem('isInitialized') === 'yes') {
		routeToApp();
		return;
	}

	checkConnection(
		// is connected
		function () {
			win.localStorage.setItem('isInitialized', 'yes');
			routeToApp();
		},
		// is NOT connected
		function () {
			showNotification();
			setTimeout(main, 1000);
		}
	);

}());
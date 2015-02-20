(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.en = {
		language: 'language',
		languageName: 'English',
		shortLanguageName: 'Eng',
		appName: 'AE2',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: 'play',
		online: 'online',
		settings: 'settings',
		instructions: 'instructions',
		about: 'about',

		// settings
		on: 'on',
		off: 'off',
		music: 'music',
		vibrate: 'vibrate',
		help: 'help',
		fightAnimation: 'fight animation',
		gameSpeed: 'game speed',

		// play
		newGame: 'new game',
		loadGame: 'load game',
		selectLevel: 'select level',
		skirmish: 'skirmish',

		rateUs: {
			header: 'Rate us, please!',
			notNow: 'not now',
			fiveStars: 'Yes, 5 stars!'
		},

		aboutText: 'Programmer:<br>Dmitry Turovtsov<br><br>Thanks:<br>Pavel Prylutski<br>Igor Kupreev<br>Pavel Sychykau'

	};

}(window));
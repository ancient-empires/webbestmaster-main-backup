/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	'use strict';
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.en = {
		language: 'Language',
		languageName: 'English',
		shortLanguageName: 'Eng',
		appName: 'CB',

		notification: {
			storyByStoryOn: 'Mode "story by story" is enabled',
			storyByStoryOff: 'Mode "story by story" is disabled'
		},

		// rate us block
		rateUs: {
			header: 'If you like out app, please rate it. Thanks!',
			rateNow: 'Rate Now',
			remindMeLater: 'Remind Me Later',
			noThanks: 'No, Thanks'
		}

	};

}(window));
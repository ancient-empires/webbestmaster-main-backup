(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.langs = APP.langs || {};

	APP.langs.en = {
		shortName: 'en',
		fullName: 'English',
		language: 'language',

		thanksForBuyProVersion: 'Thank you for purchasing paid version',

		// <-- rate us
		rateUs: {
			rateUs: 'Rate Us',
			pleaseRateUs: 'Please, Rate Us :)',
			stars: ['none', 'Hate it', 'Dislike it', 'it\'s OK', 'Like it', 'Love it'],
			stillNotRated: 'Still not rated',
			writeFeedBackHere: 'Write feedback...',
			sendFeedback: 'Send feedback to developers',
			rateUsOnGooglePlay: 'Rate Us on Google Play',
			rateUsOnAppStore: 'Rate Us on App Store',
			notNow: 'Not now'
		},

		mailSendingIsSuccessful: 'Thank you for your review!',
		mailSendingIsFailed: 'The letter was not sent, check your \ninternet connection.',
		// /--> rate us

		appName: 'Air Fresher',
		freshAir: 'Fresh Air',
		howItWorks: 'How it Works',
		dataCollection: 'Data<br>Collection',
		clearing: 'Air cleaning...',
		airHasBeenClean: 'Air Has Been Cleaned.',
		clearAirAgain: 'Clear Air Again?'

	};

}(window));
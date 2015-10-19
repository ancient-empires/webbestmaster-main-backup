(function () {

	"use strict";
	/*global window, document, console, alert */

	window.lang = window.lang || {};

	window.lang.de = {
		language: 'die Sprache',
		languageName: 'Deutsch',
		score: 'Punkte',
		digits: 'die Ziffern',
		learn: 'das Training',
		test: 'der Test',
		addition: 'das Addieren',
		subtraction: 'das Subtrahieren',
		doPreviousLevel: 'Die Teilstrecke ist noch nicht geöffnet. Gehen Sie bitte den vorgehende Teil durch ;)',
		levelIsDone: 'Gratulation! Die Teilstrecke ist durchgegangen. Gehen Sie bitte zum nächsten Teil :)',
		sectionIsDone: 'Gratulation! Die Abteilung ist durchgegangen. Gehen Sie bitte zum nächsten Teil :)',
		settings: 'Einstellungen',
		level: '!!! do NOT USE or REPLACE this field !!!',
		beginner: 'Anfänger',
		expert: 'Experte',
		ball_many: 'Bälle',
		book_many: 'Bücher',
		chicken_many: 'Küken',
		cup_many: 'Tassen',
		dog_many: 'Hunde',
		leaf_many: 'Blätter',
		mouse_many: 'Mäuse',
		rabbit_many: 'Kaninchen',
		snail_many: 'Schnecken',
		squirrel_many: 'Eichhörnchen',
		testBasicsQuestion: 'Wie viele %thing% sind aufm Bildschirm?',
		youHaveDoneThisSection: 'Gratulation! Die Abteilung ist durchgegangen. Gehen Sie bitte zum nächsten Teil ;)',
		youDontHaveEnoughPoints: 'SIE HABEN UNGENÜGENDE PUNKTANZAHL, um diese Abteilung öffnen können. Gehen Sie bitte die Vorhergehende Teile :)',
		thanks: 'Danksagung',
		thanksForDe: 'Svetlana Dubinetskaya',
		thanksForEs: 'Viktoriya Kostyuk',
		shareUs: 'Aktie',
		designerName: 'Anna Rudnitskaya',
		designer: 'Designer'
	};

	for (var i = 0; i <= 9; i++) {
		lang.de['number-' + i] = '/android_asset/www/sound/numbers/de/' + i + '.mp3';
	}

}());

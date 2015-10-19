(function () {

	"use strict";
	/*global window, document, console, alert */

	window.lang = window.lang || {};

	window.lang.en = {
		language: 'Language',
		languageName: 'English',
		score: 'score',
		digits: 'digits',
		learn: 'learn',
		test: 'test',
		addition: 'addition',
		subtraction: 'subtraction',
		doPreviousLevel: 'This level is not open yet. Please, learn previous level ;)',
		levelIsDone: 'Congratulation! This level is done. Please, go to next level :)',
		sectionIsDone: 'Congratulation! This section is done. Please, go to next section :)',
		settings: 'Settings',
		level: '!!! do NOT USE or REPLACE this field !!!',
		beginner: 'beginner',
		expert: 'expert',
		ball_many: 'balls',
		book_many: 'books',
		chicken_many: 'chickens',
		cup_many: 'cups',
		dog_many: 'dogs',
		leaf_many: 'leafs',
		mouse_many: 'mouses',
		rabbit_many: 'rabbits',
		snail_many: 'snails',
		squirrel_many: 'squirrels',
		testBasicsQuestion: 'How many %thing% in a place?',
		youHaveDoneThisSection: 'Congratulation, you have done this section. Try to learn other sections ;)',
		youDontHaveEnoughPoints: 'DON\'T ENOUGH POINTS to open next section. Please, try to learn more :)',
		thanks: 'Thanks',
		thanksForDe: 'Svetlana Dubinetskaya',
		thanksForEs: 'Viktoriya Kostyuk',
		shareUs: 'Share',
		designerName: 'Anna Rudnitskaya',
		designer: 'Designer'
	};

	for (var i = 0; i <= 9; i++) {
		lang.en['number-' + i] = '/android_asset/www/sound/numbers/en/' + i + '.mp3';
	}

}());

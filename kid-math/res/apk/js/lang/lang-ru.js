(function () {

	"use strict";
	/*global window, document, console, alert */

	window.lang = window.lang || {};

	window.lang.ru = {
		language: 'Язык',
		languageName: 'Русский',
		score: 'очки',
		digits: 'цифры',
		learn: 'учить',
		test: 'тест',
		addition: 'сложение',
		subtraction: 'вычитание',
		doPreviousLevel: 'Этот уровень пока не открыт. Пожалуйста, пройдите предыдущий уровень ;)',
		levelIsDone: 'Поздравляем! Уровень пройден. Пожалуйста, пройдите следующий уровень :)',
		sectionIsDone: 'Поздравляем! Секция пройдена. Пожалуйста, пройдите следующую секцию :)',
		settings: 'Настройки',
		level: '!!! do NOT USE or REPLACE this field !!!',
		beginner: 'новичок',
		expert: 'знаток',
		ball_many: 'мячей',
		book_many: 'книг',
		chicken_many: 'цыплят',
		cup_many: 'кружек',
		dog_many: 'собак',
		leaf_many: 'листьев',
		mouse_many: 'мышей',
		rabbit_many: 'кроликов',
		snail_many: 'улиток',
		squirrel_many: 'белок',
		testBasicsQuestion: 'Сколько %thing% на экране?',
		youHaveDoneThisSection: 'Поздравляем! Секция пройдена. Пожалуйста, пройдите другие секции ;)',
		youDontHaveEnoughPoints: 'НЕДОСТАТОЧНО ОЧКОВ чтобы открыть следующую секцию. Пожалуйста, потренируйтесь ещё :)',
		thanks: 'Благодарности',
		thanksForDe: 'Светлана Дубинецкая',
		thanksForEs: 'Виктория Костюк',
		shareUs: 'Поделиться',
		designerName: 'Анна Рудницкая',
		designer: 'Дизайнер'
	};

	for (var i = 0; i <= 9; i++) {
		lang.ru['number-' + i] = '/android_asset/www/sound/numbers/ru/' + i + '.mp3';
	}

}());

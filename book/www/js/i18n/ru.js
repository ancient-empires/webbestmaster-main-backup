/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	'use strict';
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.ru = {
		language: 'Язык',
		languageName: 'Русский',
		shortLanguageName: 'Рус',
		appName: 'CB',

		notification: {
			storyByStoryOn: 'Режим "сказка за сказкой" - включён',
			storyByStoryOff: 'Режим "сказка за сказкой" - отключён'
		},
		hint: {
			autoplay: 'Включить\/выклюить режим|"сказка за сказкой".|(Доступно только в платной версии приложения)',
			removeAds: 'Отключить рекламу.|Купить приложение.',
			thanksForBuy: 'Поздровляем!|Вы являетесь обладателем полной версии приложения!',
			showTitle: 'Если название не помещается полностью, то кликните по нему.',
			showText: 'Что бы увидеть текст сказки - дважды кликните по картинке.',
			stopAndStartPlay: 'Остановить\/начать воспроизведение.'
		}

	};

}(window));
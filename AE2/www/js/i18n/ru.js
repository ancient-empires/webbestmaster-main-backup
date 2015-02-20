(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.ru = {
		language: 'язык',
		languageName: 'Русский',
		shortLanguageName: 'Рус',
		appName: 'AE2',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: 'играть',
		online: 'по сети',
		settings: 'настройки',
		instructions: 'инструкции',
		about: 'о программе',

		// settings
		on: 'вкл',
		off: 'выкл',
		music: 'музыка',
		vibrate: 'вибро',
		help: 'помощь',
		fightAnimation: 'анимация боя',
		gameSpeed: 'скорость игры',

		// play
		newGame: 'новая игра',
		loadGame: 'загрузить игру',
		selectLevel: 'выбор уровня',
		skirmish: 'схватка',

		rateUs: {
			header: 'Пожалуйста, оцените приложение!',
			notNow: 'не сейчас',
			fiveStars: 'Да, 5 звёзд!'
		},

		aboutText: 'Программист:<br>Дмитрий Туровцов<br><br>Благодарности:<br>Павел Прилуцкий<br>Игорь Купреев<br>Павел Сычиков'


	};

}(window));
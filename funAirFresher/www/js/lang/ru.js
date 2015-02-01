(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.langs = APP.langs || {};

	APP.langs.ru = {
		shortName: 'ru',
		fullName: 'Русский',
		language: 'язык',

		thanksForBuyProVersion: 'Спасибо что приобрели платную версию',

		// <-- rate us
		rateUs: {
			rateUs: 'Оценить приложение',
			pleaseRateUs: 'Пожалуйста, оцените приложение :)',
			stars: ['none', 'Ужасно', 'Плохо', 'Неплохо', 'Хорошо', 'Отлично'],
			stillNotRated: 'Пока нет оценки',
			writeFeedBackHere: 'Написать отзыв...',
			sendFeedback: 'Оценить',
			rateUsOnGooglePlay: 'Оценить на Google Play',
			rateUsOnAppStore: 'Оценить на App Store',
			notNow: 'Не сейчас'
		},

		mailSendingIsSuccessful: 'Спасибо за Ваш отзыв!',
		mailSendingIsFailed: 'Письмо НЕ было отпралено,\nпроверьте соединение с интернетом.',
		// /--> rate us

		appName: 'Освежитель Воздуха',
		freshAir: 'Освежить Воздух',
		howItWorks: 'Как это работает',
		dataCollection: 'Сбор<br>Данных',
		clearing: 'Очистка воздуха...',
		airHasBeenClean: 'Воздух очищен.',
		clearAirAgain: 'Очистить воздух ещё раз?'

	};

}(window));
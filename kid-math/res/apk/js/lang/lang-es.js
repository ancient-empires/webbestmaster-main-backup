(function () {

	"use strict";
	/*global window, document, console, alert */

	window.lang = window.lang || {};

	window.lang.es = {
		language: 'lengua',
		languageName: 'Español',
		score: 'nivel',
		digits: 'números',
		learn: 'educación',
		test: 'entrenamiento',
		addition: 'adición',
		subtraction: 'resta',
		doPreviousLevel: 'El nivel aún no está abierto. Por favor, ve al nivel anterior ;)',
		levelIsDone: '¡Felicitaciones! Nivel completado. Por favor, ve al nivel siguiente :)',
		sectionIsDone: '¡Felicitaciones! Sección completada. Por favor, ve a la sección siguiente :)',
		settings: 'Ajustes',
		level: '!!! do NOT USE or REPLACE this field !!!',
		beginner: 'principiante',
		expert: 'experto',
		ball_many: 'balones',
		book_many: 'libros',
		chicken_many: 'pollos',
		cup_many: 'tazas',
		dog_many: 'perros',
		leaf_many: 'hojas',
		mouse_many: 'ratones',
		rabbit_many: 'conejos',
		snail_many: 'caracoles',
		squirrel_many: 'ardillas',
		testBasicsQuestion: '¿Cuantos %thing% hay en la pantalla?',
		youHaveDoneThisSection: '¡Felicitaciones! Sección completada. Por favor, ve a la sección siguiente ;)',
		youDontHaveEnoughPoints: 'NO TIENE SUFICIENTES PUNTOS para abrir esta sección. Por favor, cumple las secciónes anteriores :)',
		thanks: 'Agradecimientos',
		thanksForDe: 'Svetlana Dubinetskaya',
		thanksForEs: 'Viktoriya Kostyuk',
		shareUs: 'Cuota',
		designerName: 'Anna Rudnitskaya',
		designer: 'Designer'
	};

	for (var i = 0; i <= 9; i++) {
		lang.es['number-' + i] = '/android_asset/www/sound/numbers/es/' + i + '.mp3';
	}

}());

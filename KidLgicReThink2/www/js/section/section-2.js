/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window, document, console, alert */

	win.APP = win.APP || {};

	win.APP.sectionList = win.APP.sectionList || {};

	win.APP.sectionList.section_2 = {
		name_en: 'Select right answer',
		name_ru: 'Выбери правильный ответ',
		imgPath: 'img/section/section-2/',
		img: 'find-most-unsuitable-picture-1.svg',


		items: [
			{
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/1.svg',
				text_en: 'For playing hockey you need a ...',
				text_ru: 'Для игры в хоккей необходим ...',
				answer: 0
			},
			{
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/2.svg',
				text_en: 'What does hedgehog need for painting?',
				text_ru: 'Что нужно ёжику для рисования?',
				answer: 1
			},
			{
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/3.svg',
				text_en: 'What was baked for Rabbit\'s birthday?',
				text_ru: 'Что было испечено на день родения кролика?',
				answer: 2
			},
			{
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/4.svg',
				text_en: 'What should Fox use to measure temperature?',
				text_ru: 'Что нужно лисе для измерения температуры?',
				answer: 3
			},
			{
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/1.svg',
				text_en: 'What Rabbit loves more?',
				text_ru: 'Что кролик любит больше всего?',
				answer: 0,
				item: 4
			},
			{
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/2.svg',
				text_en: 'What Mouse loves more?',
				text_ru: 'Что мышка любит больше всего?',
				answer: 1
			},
			{
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/3.svg',
				text_en: 'What Dog loves more?',
				text_ru: 'Что собачка любит больше всего?',
				answer: 2
			},
			{
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/4.svg',
				text_en: 'What Bear loves more?',
				text_ru: 'Что медведь любит больше всего?',
				answer: 3
			},
			{
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/1.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 0
			},
			{
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/2.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 1
			},
			{
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/3.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 2
			},
			{
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/4.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 3
			},
			{
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/1.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 0
			},
			{
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/2.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 1
			},
			{
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/3.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 2
			},
			{
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/4.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 3
			},
			{
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/1.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 0
			},
			{
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/2.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 1
			},
			{
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/3.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 2
			},
			{
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/4.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 3
			},
			{
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/1.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 0
			},
			{
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/2.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 1
			},
			{
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/3.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 2
			},
			{
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/4.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 3
			},
			{
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/1.svg',
				text_en: 'What Mouse loves more?',
				text_ru: 'Что мышка любит больше всего?',
				answer: 0
			},
			{
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/2.svg',
				text_en: 'What Squirrel loves more?',
				text_ru: 'Что белочка любит больше всего?',
				answer: 1
			},
			{
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/3.svg',
				text_en: 'What Rabbit loves more?',
				text_ru: 'Что кролик любит больше всего?',
				answer: 2
			},
			{
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/4.svg',
				text_en: 'What Dog loves more?',
				text_ru: 'Что собачка любит больше всего?',
				answer: 3
			}

		]

	};

}(window));

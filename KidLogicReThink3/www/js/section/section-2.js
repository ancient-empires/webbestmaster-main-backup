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
			{ // 0
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/1.svg',
				text_en: 'For playing hockey you need a ...',
				text_ru: 'Для игры в хоккей необходим ...',
				answer: 0
			},
			{ // 1
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/2.svg',
				text_en: 'What does hedgehog need for painting?',
				text_ru: 'Что нужно ёжику для рисования?',
				answer: 1
			},
			{ // 2
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/3.svg',
				text_en: 'What was baked for Rabbit\'s birthday?',
				text_ru: 'Что было испечено на день родения кролика?',
				answer: 2
			},
			{ // 3
				list: ['a1/1.svg', 'a1/2.svg', 'a1/3.svg', 'a1/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q1/4.svg',
				text_en: 'What should Fox use to measure temperature?',
				text_ru: 'Что нужно лисе для измерения температуры?',
				answer: 3
			},
			{ // 4
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/1.svg',
				text_en: 'What Rabbit loves more?',
				text_ru: 'Что кролик любит больше всего?',
				answer: 0,
				item: 4
			},
			{ // 5
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/2.svg',
				text_en: 'What Mouse loves more?',
				text_ru: 'Что мышка любит больше всего?',
				answer: 1
			},
			{ // 6
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/3.svg',
				text_en: 'What Dog loves more?',
				text_ru: 'Что собачка любит больше всего?',
				answer: 2
			},
			{ // 7
				list: ['a2/1.svg', 'a2/2.svg', 'a2/3.svg', 'a2/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q2/4.svg',
				text_en: 'What Bear loves more?',
				text_ru: 'Что медведь любит больше всего?',
				answer: 3
			},
			{ // 8
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/1.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 0
			},
			{ // 9
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/2.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 1
			},
			{ // 10
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/3.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 2
			},
			{ // 11
				list: ['a3/1.svg', 'a3/2.svg', 'a3/3.svg', 'a3/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q3/4.svg',
				text_en: 'Find suitable pattern.',
				text_ru: 'Найди подходящий паттерн.',
				answer: 3
			},
			{ // 12
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/1.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 0
			},
			{ // 13
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/2.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 1
			},
			{ // 14
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/3.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 2
			},
			{ // 15
				list: ['a4/1.svg', 'a4/2.svg', 'a4/3.svg', 'a4/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q4/4.svg',
				text_en: 'Find pair.',
				text_ru: 'Найди пару.',
				answer: 3
			},
			{ // 16
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/1.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 0
			},
			{ // 17
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/2.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 1
			},
			{ // 18
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/3.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 2
			},
			{ // 19
				list: ['a5/1.svg', 'a5/2.svg', 'a5/3.svg', 'a5/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q5/4.svg',
				text_en: 'Find equal building.',
				text_ru: 'Найди такое же здание.',
				answer: 3
			},
			{ // 20
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/1.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 0
			},
			{ // 21
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/2.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 1
			},
			{ // 22
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/3.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 2
			},
			{ // 23
				list: ['a6/1.svg', 'a6/2.svg', 'a6/3.svg', 'a6/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q6/4.svg',
				text_en: 'Find a similar one.',
				text_ru: 'Найди похожее.',
				answer: 3
			},
			{ // 24
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/1.svg',
				text_en: 'What Mouse loves more?',
				text_ru: 'Что мышка любит больше всего?',
				answer: 0
			},
			{ // 25
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/2.svg',
				text_en: 'What Squirrel loves more?',
				text_ru: 'Что белочка любит больше всего?',
				answer: 1
			},
			{ // 26
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/3.svg',
				text_en: 'What Rabbit loves more?',
				text_ru: 'Что кролик любит больше всего?',
				answer: 2
			},
			{ // 27
				list: ['a7/1.svg', 'a7/2.svg', 'a7/3.svg', 'a7/4.svg'],
				type: 'select-right-answer', // vibery variant otveta
				questionImage: 'q7/4.svg',
				text_en: 'What Dog loves more?',
				text_ru: 'Что собачка любит больше всего?',
				answer: 3
			},
			// shadow section

			{ // 28 - boots - 4 
				list: ['shadow/boot-1-s.jpg', 'shadow/boot-2-s.jpg', 'shadow/boot-3-s.jpg', 'shadow/boot-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/boot-1.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 29
				list: ['shadow/boot-1-s.jpg', 'shadow/boot-2-s.jpg', 'shadow/boot-3-s.jpg', 'shadow/boot-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/boot-2.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 1
			},
			{ // 30
				list: ['shadow/boot-1-s.jpg', 'shadow/boot-2-s.jpg', 'shadow/boot-3-s.jpg', 'shadow/boot-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/boot-3.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 2
			},
			{ // 31
				list: ['shadow/boot-1-s.jpg', 'shadow/boot-2-s.jpg', 'shadow/boot-3-s.jpg', 'shadow/boot-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/boot-4.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 3
			},

			{ // 32 flower - 4
				list: ['shadow/flower-1-s.jpg', 'shadow/flower-2-s.jpg', 'shadow/flower-3-s.jpg', 'shadow/flower-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/flower-1.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 33
				list: ['shadow/flower-1-s.jpg', 'shadow/flower-2-s.jpg', 'shadow/flower-3-s.jpg', 'shadow/flower-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/flower-2.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 1
			},
			{ // 34
				list: ['shadow/flower-1-s.jpg', 'shadow/flower-2-s.jpg', 'shadow/flower-3-s.jpg', 'shadow/flower-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/flower-3.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 2
			},
			{ // 35
				list: ['shadow/flower-1-s.jpg', 'shadow/flower-2-s.jpg', 'shadow/flower-3-s.jpg', 'shadow/flower-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/flower-4.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 3
			},

			{ // 36 bird - 6
				list: ['shadow/bird-1-s.jpg', 'shadow/bird-2-s.jpg', 'shadow/bird-3-s.jpg', 'shadow/bird-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/bird-1.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 37
				list: ['shadow/bird-2-s.jpg', 'shadow/bird-3-s.jpg', 'shadow/bird-4-s.jpg', 'shadow/bird-5-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/bird-2.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 38
				list: ['shadow/bird-3-s.jpg', 'shadow/bird-4-s.jpg', 'shadow/bird-5-s.jpg', 'shadow/bird-6-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/bird-3.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 39
				list: ['shadow/bird-4-s.jpg', 'shadow/bird-5-s.jpg', 'shadow/bird-6-s.jpg', 'shadow/bird-1-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/bird-4.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 40
				list: ['shadow/bird-5-s.jpg', 'shadow/bird-6-s.jpg', 'shadow/bird-1-s.jpg', 'shadow/bird-2-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/bird-5.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 41
				list: ['shadow/bird-6-s.jpg', 'shadow/bird-1-s.jpg', 'shadow/bird-2-s.jpg', 'shadow/bird-3-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/bird-6.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},

			{ // 42 - lists - 4
				list: ['shadow/list-1-s.jpg', 'shadow/list-2-s.jpg', 'shadow/list-3-s.jpg', 'shadow/list-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/list-1.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 43
				list: ['shadow/list-1-s.jpg', 'shadow/list-2-s.jpg', 'shadow/list-3-s.jpg', 'shadow/list-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/list-2.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 1
			},
			{ // 44
				list: ['shadow/list-1-s.jpg', 'shadow/list-2-s.jpg', 'shadow/list-3-s.jpg', 'shadow/list-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/list-3.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 2
			},
			{ // 45
				list: ['shadow/list-1-s.jpg', 'shadow/list-2-s.jpg', 'shadow/list-3-s.jpg', 'shadow/list-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/list-4.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 3
			},
			
			{ // 46 - fishes - 4
				list: ['shadow/fish-1-s.jpg', 'shadow/fish-2-s.jpg', 'shadow/fish-3-s.jpg', 'shadow/fish-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/fish-1.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 47
				list: ['shadow/fish-1-s.jpg', 'shadow/fish-2-s.jpg', 'shadow/fish-3-s.jpg', 'shadow/fish-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/fish-2.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 1
			},
			{ // 48
				list: ['shadow/fish-1-s.jpg', 'shadow/fish-2-s.jpg', 'shadow/fish-3-s.jpg', 'shadow/fish-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/fish-3.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 2
			},
			{ // 49
				list: ['shadow/fish-1-s.jpg', 'shadow/fish-2-s.jpg', 'shadow/fish-3-s.jpg', 'shadow/fish-4-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/fish-4.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 3
			},




			{ // 50 - snake - 3 and crocodile - 1
				list: ['shadow/crocodile-1-s.jpg', 'shadow/snake-1-s.jpg', 'shadow/snake-2-s.jpg', 'shadow/snake-3-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/crocodile-1.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 0
			},
			{ // 51
				list: ['shadow/crocodile-1-s.jpg', 'shadow/snake-1-s.jpg', 'shadow/snake-2-s.jpg', 'shadow/snake-3-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/snake-1.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 1
			},
			{ // 51
				list: ['shadow/crocodile-1-s.jpg', 'shadow/snake-1-s.jpg', 'shadow/snake-2-s.jpg', 'shadow/snake-3-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/snake-2.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 2
			},
			{ // 53
				list: ['shadow/crocodile-1-s.jpg', 'shadow/snake-1-s.jpg', 'shadow/snake-2-s.jpg', 'shadow/snake-3-s.jpg'],
				type: 'select-right-answer',
				questionImage: 'shadow/snake-3.jpg',
				text_en: 'Find the right shade.',
				text_ru: 'Найди подходящую тень.',
				answer: 3
			}





















		]

	};

}(window));

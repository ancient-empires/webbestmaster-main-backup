(function () {

	"use strict";
	/*global window, document, console, alert */

	window.sectionList = window.sectionList || {};

	window.sectionList.section_1 = {
		name_ar: 'ar Select improper',
		name_de: 'de Select improper',
		name_en: 'Select improper',
		name_es: 'es Select improper',
		name_ru: 'Выбери лишний',
		name_zh: 'zh Select improper',
		itemsNumber: 28,
		imgPath: 'img/section/section-1/',
		img: 'find-an-extra-item-1.svg',
		mainQuestion_ar: 'ar Select one that doesn\'t match others',
		mainQuestion_de: 'de Select one that doesn\'t match others',
		mainQuestion_en: 'Select one that doesn\'t match others',
		mainQuestion_es: 'es Select one that doesn\'t match others',
		mainQuestion_ru: 'Выбери лишнее',
		mainQuestion_zh: 'zh Select one that doesn\'t match others',
		items: {
			'item-1': {
				'1': '1/cup.svg',
				'2': '1/cup2.svg',
				'3': '1/plate.svg',
				'4': '1/scissors.svg',
				type: 1, // 4to lishnee
				// question: 'here is custom question', // only for example
				answer: 4,
				item: 4
			},
			'item-2': {
				'1': '2/ball.svg',
				'2': '2/book.svg',
				'3': '2/cubes.svg',
				'4': '2/gorka.svg',
				type: 1, // 4to lishnee
				answer: 2,
				item: 4
			},
			'item-3': {
				'1': '3/banana.svg',
				'2': '3/carrot.svg',
				'3': '3/kapusta.svg',
				'4': '3/ogurec.svg',
				type: 1, // 4to lishnee
				answer: 1,
				item: 4
			},
			'item-4': {
				'1': '4/boots.svg',
				'2': '4/skirt.svg',
				'3': '4/sweeter.svg',
				'4': '4/trousers.svg',
				type: 1, // 4to lishnee
				answer: 2,
				item: 4
			},
			'item-5': {
				'1': '5/snowman1.svg',
				'2': '5/snowman1.svg',
				'3': '5/snowman1.svg',
				'4': '5/snowman1.svg',
				'5': '5/snowman2.svg',
				'6': '5/snowman1.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 6
			},
			'item-6': {
				'1': '6/house_1.svg',
				'2': '6/house_1.svg',
				'3': '6/house_1.svg',
				'4': '6/house_1.svg',
				'5': '6/house_answer.svg',
				'6': '6/house_1.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 6
			},
			'item-7': {
				'1': '7/kite_1.svg',
				'2': '7/kite_1.svg',
				'3': '7/kite_1.svg',
				'4': '7/kite_1.svg',
				'5': '7/kite_answer.svg',
				'6': '7/kite_1.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 6
			},
			'item-8': {
				'1': '8/butt_1.svg',
				'2': '8/butt_1.svg',
				'3': '8/butt_1.svg',
				'4': '8/butt_1.svg',
				'5': '8/butt_1.svg',
				'6': '8/butt_answer.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-9': {
				'1': '9/1.svg',
				'2': '9/2.svg',
				'3': '9/3.svg',
				'4': '9/4.svg',
				'5': '9/5.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 5
			},
			'item-10': {
				'1': '10/1.svg',
				'2': '10/1.svg',
				'3': '10/1.svg',
				'4': '10/1.svg',
				'5': '10/1.svg',
				'6': '10/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-11': {
				'1': '11/1.svg',
				'2': '11/1.svg',
				'3': '11/1.svg',
				'4': '11/1.svg',
				'5': '11/1.svg',
				'6': '11/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-12': {
				'1': '12/1.svg',
				'2': '12/1.svg',
				'3': '12/1.svg',
				'4': '12/1.svg',
				'5': '12/1.svg',
				'6': '12/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-13': {
				'1': '13/1.svg',
				'2': '13/2.svg',
				'3': '13/3.svg',
				'4': '13/4.svg',
				'5': '13/5.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 5
			},
			'item-14': {
				'1': '14/1.svg',
				'2': '14/1.svg',
				'3': '14/1.svg',
				'4': '14/1.svg',
				'5': '14/1.svg',
				'6': '14/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-15': {
				'1': '15/1.svg',
				'2': '15/1.svg',
				'3': '15/1.svg',
				'4': '15/2.svg',
				'5': '15/2.svg',
				'6': '15/3.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-16': {
				'1': '16/1.svg',
				'2': '16/1.svg',
				'3': '16/1.svg',
				'4': '16/1.svg',
				'5': '16/1.svg',
				'6': '16/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-17': {
				'1': '17/1.svg',
				'2': '17/1.svg',
				'3': '17/1.svg',
				'4': '17/2.svg',
				'5': '17/2.svg',
				'6': '17/3.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-18': {
				'1': '18/1.svg',
				'2': '18/1.svg',
				'3': '18/1.svg',
				'4': '18/1.svg',
				'5': '18/1.svg',
				'6': '18/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-19': {
				'1': '19/1.svg',
				'2': '19/2.svg',
				'3': '19/3.svg',
				'4': '19/4.svg',
				'5': '19/5.svg',
				type: 1, // 4to lishnee
				answer: 1,
				item: 5
			},
			'item-20': {
				'1': '20/1.svg',
				'2': '20/2.svg',
				'3': '20/3.svg',
				'4': '20/4.svg',
				'5': '20/5.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 5
			},
			'item-21': {
				'1': '21/1.svg',
				'2': '21/1.svg',
				'3': '21/1.svg',
				'4': '21/1.svg',
				'5': '21/1.svg',
				'6': '21/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-22': {
				'1': '22/1.svg',
				'2': '22/1.svg',
				'3': '22/1.svg',
				'4': '22/1.svg',
				'5': '22/1.svg',
				'6': '22/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-23': {
				'1': '23/1.svg',
				'2': '23/2.svg',
				'3': '23/3.svg',
				'4': '23/4.svg',
				'5': '23/5.svg',
				'6': '23/6.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-24': {
				'1': '24/1.svg',
				'2': '24/2.svg',
				'3': '24/3.svg',
				'4': '24/4.svg',
				'5': '24/5.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 5
			},
			'item-25': {
				'1': '25/1.svg',
				'2': '25/2.svg',
				'3': '25/3.svg',
				'4': '25/4.svg',
				'5': '25/5.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 5
			},
			'item-26': {
				'1': '26/1.svg',
				'2': '26/1.svg',
				'3': '26/1.svg',
				'4': '26/1.svg',
				'5': '26/1.svg',
				'6': '26/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-27': {
				'1': '27/1.svg',
				'2': '27/1.svg',
				'3': '27/1.svg',
				'4': '27/1.svg',
				'5': '27/1.svg',
				'6': '27/2.svg',
				type: 1, // 4to lishnee
				answer: 6,
				item: 6
			},
			'item-28': {
				'1': '28/1.svg',
				'2': '28/2.svg',
				'3': '28/3.svg',
				'4': '28/4.svg',
				'5': '28/5.svg',
				type: 1, // 4to lishnee
				answer: 5,
				item: 5
			}

		}

	};

}());

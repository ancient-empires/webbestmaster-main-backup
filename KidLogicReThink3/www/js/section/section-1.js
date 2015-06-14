/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window, document, console, alert */

	win.APP = win.APP || {};

	win.APP.sectionList = win.APP.sectionList || {};

	win.APP.sectionList.section_1 = {
		name_en: 'Select improper',
		name_ru: 'Выбери лишнее',
		imgPath: 'img/section/section-1/',
		img: 'find-an-extra-item-1.svg',

		mainQuestion_en: 'Select one that doesn\'t match others',
		mainQuestion_ru: 'Выбери лишнее',

		items: [
			{
				list: ['1/cup.svg', '1/cup2.svg', '1/plate.svg', '1/scissors.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 3
			},
			{
				list: ['2/ball.svg', '2/book.svg', '2/cubes.svg', '2/gorka.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 1
			},
			{
				list: ['3/banana.svg', '3/carrot.svg', '3/kapusta.svg', '3/ogurec.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 0
			},
			{
				list: ['4/boots.svg', '4/skirt.svg', '4/sweeter.svg', '4/trousers.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 1
			},
			{
				list: ['5/snowman1.svg', '5/snowman1.svg', '5/snowman1.svg', '5/snowman1.svg', '5/snowman2.svg', '5/snowman1.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['6/house_1.svg', '6/house_1.svg', '6/house_1.svg', '6/house_1.svg', '6/house_answer.svg', '6/house_1.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['7/kite_1.svg', '7/kite_1.svg', '7/kite_1.svg', '7/kite_1.svg', '7/kite_answer.svg', '7/kite_1.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['8/butt_1.svg', '8/butt_1.svg', '8/butt_1.svg', '8/butt_1.svg', '8/butt_1.svg', '8/butt_answer.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['9/1.svg', '9/2.svg', '9/3.svg', '9/4.svg', '9/5.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['10/1.svg', '10/1.svg', '10/1.svg', '10/1.svg', '10/1.svg', '10/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['11/1.svg', '11/1.svg', '11/1.svg', '11/1.svg', '11/1.svg', '11/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['12/1.svg', '12/1.svg', '12/1.svg', '12/1.svg', '12/1.svg', '12/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['13/1.svg', '13/2.svg', '13/3.svg', '13/4.svg', '13/5.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['14/1.svg', '14/1.svg', '14/1.svg', '14/1.svg', '14/1.svg', '14/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['15/1.svg', '15/1.svg', '15/1.svg', '15/2.svg', '15/2.svg', '15/3.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['16/1.svg', '16/1.svg', '16/1.svg', '16/1.svg', '16/1.svg', '16/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['17/1.svg', '17/1.svg', '17/1.svg', '17/2.svg', '17/2.svg', '17/3.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['18/1.svg', '18/1.svg', '18/1.svg', '18/1.svg', '18/1.svg', '18/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['19/1.svg', '19/2.svg', '19/3.svg', '19/4.svg', '19/5.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 0
			},
			{
				list: ['20/1.svg', '20/2.svg', '20/3.svg', '20/4.svg', '20/5.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['21/1.svg', '21/1.svg', '21/1.svg', '21/1.svg', '21/1.svg', '21/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['22/1.svg', '22/1.svg', '22/1.svg', '22/1.svg', '22/1.svg', '22/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['23/1.svg', '23/2.svg', '23/3.svg', '23/4.svg', '23/5.svg', '23/6.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['24/1.svg', '24/2.svg', '24/3.svg', '24/4.svg', '24/5.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['25/1.svg', '25/2.svg', '25/3.svg', '25/4.svg', '25/5.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['26/1.svg', '26/1.svg', '26/1.svg', '26/1.svg', '26/1.svg', '26/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['27/1.svg', '27/1.svg', '27/1.svg', '27/1.svg', '27/1.svg', '27/2.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 5
			},
			{
				list: ['28/1.svg', '28/2.svg', '28/3.svg', '28/4.svg', '28/5.svg'],
				type: 'select-improper', // 4to lishnee
				answer: 4
			},
			{
				list: ['29/1.jpg', '29/2.jpg', '29/3.jpg', '29/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 3
			},
			{
				list: ['30/1.jpg', '30/2.jpg', '30/3.jpg', '30/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 2
			},
			{
				list: ['31/1.jpg', '31/2.jpg', '31/3.jpg', '31/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 2
			},
			{
				list: ['32/1.jpg', '32/2.jpg', '32/3.jpg', '32/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 1
			},
			{
				list: ['33/1.jpg', '33/2.jpg', '33/3.jpg', '33/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 0
			},
			{
				list: ['34/1.jpg', '34/2.jpg', '34/3.jpg', '34/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 3
			},
			{
				list: ['35/1.jpg', '35/2.jpg', '35/3.jpg', '35/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 1
			},
			{
				list: ['36/1.jpg', '36/2.jpg', '36/3.jpg', '36/4.jpg'],
				type: 'select-improper', // 4to lishnee
				answer: 1
			}

		]

	};

}(window));

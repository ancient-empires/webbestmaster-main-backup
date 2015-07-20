/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP.booksData = {

		'en': [
			{
				folder: 'book 0',
				title: {
					text: 'title text',
					img: 'title.jpg',
					sound: '1.mp3'
				},
				pages: [
					{
						//text: 'englist text 1',
						img: '1.jpg',
						sound: '1.mp3',
						time: 3
					},
					{
						text: 'englist text 2 englist text 2 englist text 2 englist text 2 englist text 2 englist text 2 englist text 2 englist text 2 ',
						img: '2.jpg',
						sound: '2.mp3',
						time: 3
					},
					{
						text: 'englist text 3',
						img: '1.jpg',
						sound: '3.mp3',
						time: 3
					}

				]
			},

			{
				folder: 'book 1',
				title: {
					text: 'title text',
					img: 'title.jpg',
					sound: '1.mp3'
				},
				pages: [
					{
						text: 'englist text 1',
						img: '1.jpg',
						sound: '1.mp3',
						time: 3
					},
					{
						text: 'englist text 2',
						img: '2.jpg',
						sound: '2.mp3',
						time: 3
					},
					{
						text: 'englist text 3',
						img: '1.jpg',
						sound: '3.mp3',
						time: 3
					}

				]
			},

			{
				folder: 'book 2',
				title: {
					text: 'title text',
					img: 'title.jpg',
					sound: '1.mp3'
				},
				pages: [
					{
						text: 'englist text 1',
						img: '1.jpg',
						sound: '1.mp3',
						time: 3
					},
					{
						text: 'englist text 2',
						img: '2.jpg',
						sound: '2.mp3',
						time: 3
					},
					{
						text: 'englist text 3',
						img: '1.jpg',
						sound: '3.mp3',
						time: 3
					}

				]
			}

		],

		'ru': [

			//{
			//	folder: 'alfavit',
			//	title: {
			//		text: 'Алфавит',
			//		img: 'alfavit-00.jpg'
			//	},
			//	pages: [
			//		{ img: 'alfavit-01.jpg', time: 10 },
			//		//{ text: 'вставь текст если нужно', img: 'alfavit-01.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-02.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-03.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-04.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-05.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-06.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-07.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-08.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-09.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-10.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-11.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-12.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-13.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-14.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-15.jpg', sound: '1.mp3', time: 20 },
			//		{ text: 'вставь текст если нужно', img: 'alfavit-16.jpg', sound: '1.mp3', time: 20 }
			//	]
            //
			//},
			{
				folder: 'bagazh',
				title: {
					text: 'Багаж',
					img: 'title.jpg'
				},
				pages: [
					{ text: 'Дама сдавала в багаж<br>Диван,<br>Чемодан,<br>Саквояж,<br>Картину,<br>Корзину,<br>Картонку<br>И маленькую собачонку.',
						img: 'bagazh-01.jpg', sound: 'bagazh-01.mp3', time: 11.8755 },
					{ text: 'Выдали даме на станции<br>Четыре зелёных квитанции<br>О том, что получен багаж:<br>Диван,<br>Чемодан,<br>Саквояж,<br>Картина,<br>Корзина,<br>Картонка<br>И маленькая собачонка.',
						img: 'bagazh-02.jpg', sound: 'bagazh-02.mp3', time: 15.584875 },
					{ text: 'Вещи везут на перрон.<br>Кидают в открытый вагон.<br>Готово! Уложен багаж:<br>Диван,<br>Чемодан,<br>Саквояж,<br>Картина,<br>Корзина,<br>Картонка<br>И маленькая собачонка.<br>Но только раздался звонок,<br>Удрал из вагона щенок.',
						img: 'bagazh-03.jpg', sound: 'bagazh-03.mp3', time: 19.29425 },
					{ text: 'Хватились на станции Дно:<br>Потеряно место одно.<br>В испуге считают багаж:<br>Диван,<br>Чемодан,<br>Саквояж,<br>Картина,<br>Корзина,<br>Картонка...<br>Товарищи! Где собачонка?',
						img: 'bagazh-04.jpg', sound: 'bagazh-04.mp3', time: 15.480375 },
					{ text: 'Вдруг видят: стоит у колёс<br>Огромный взъерошенный пёс.<br>Поймали его и в багаж,<br>Туда, где лежал саквояж,<br>Картина,<br>Корзина,<br>Картонка,<br>Где прежде была собачонка.',
						img: 'bagazh-05.jpg', sound: 'bagazh-05.mp3', time: 18.353875 },
					{ text: 'Приехали в город Житомир.<br>Носильщик пятнадцатый номер<br>Везёт на тележке багаж:<br>Диван,<br>Чемодан,<br>Саквояж,<br>Картину,<br>Корзину,<br>Картонку,<br>А сзади ведут собачонку.',
						img: 'bagazh-06.jpg', sound: 'bagazh-06.mp3', time: 19.633875 },
					{ text: 'Собака-то как зарычит.<br>А барыня как закричит:<br>Разбойники! Воры! Уроды!<br>Собака - не той породы!<br>Швырнула она чемодан,<br>Ногой отпихнула диван,<br>Картину,<br>Корзину,<br>Картонку...<br>Отдайте мою собачонку!',
						img: 'bagazh-07.jpg', sound: 'bagazh-07.mp3', time: 22.89925 },
					{ text: 'Позвольте, мамаша! На станции,<br>Согласно багажной квитанции,<br>От вас получили багаж:<br>Диван,<br>Чемодан,<br>Саквояж,<br>Картину,<br>Корзину,<br>Картонку<br>И маленькую собачонку.<br>Однако<br>За время пути<br>Собака<br>Могла подрасти!',
						img: 'bagazh-08.jpg', sound: 'bagazh-08.mp3', time: 50.406125 }
				]
			}

		]

	};

}(window));
/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP, Swiper, _ */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BookView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (dataArg) {

			var view = this,
				data = dataArg || {},
				info = view.info,
				languageName = info.get('language'),
				booksByLang = win.APP.booksData[languageName],
				book = _.find(booksByLang, {folder: data.bookFolder}),
				soundMaster = win.APP.soundMaster;

			view.$el = $(view.tmpl.book(book));

			view.proto.initialize.apply(view, arguments);

			// init swipe
			view.render();

			view.initSwiper();

			view.bindEventListeners();

			soundMaster.play({
				sound: ['books', languageName, book.folder, book.title.sound ].join('/'),
				road: 0,
				isLoop: false
			});

		},

		initSwiper: function () {

			var view = this,
				swiper;

			swiper = new Swiper ('.swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				loop: false,

				// remove it for nonPAHTbI swipe
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows : true
				},

				// If we need pagination
				pagination: '.swiper-pagination',

				// Navigation arrows
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',

				// And if we need scrollbar
				scrollbar: '.swiper-scrollbar'
			});

			view.set('swiper', swiper);

		},

		bindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper');

			//onSlideChangeEnd
			swiper.on('onSlideChangeEnd', function (swiper) {
				console.log(swiper.activeIndex);
			});

		},

		unbindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper');

			swiper.off('onSlideChangeEnd');

			swiper.detachEvents();

		}


	});

}(window));
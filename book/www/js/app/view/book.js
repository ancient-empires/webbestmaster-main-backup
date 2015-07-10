/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP, Swiper, _, setTimeout, clearTimeout */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BookView = APP.BB.BaseView.extend({

		events: {
			'click .js-play-pause': 'playPause'
		},

		initialize: function (dataArg) {

			var view = this,
				data = dataArg || {},
				info = view.info,
				languageName = info.get('language'),
				booksByLang = win.APP.booksData[languageName],
				book = _.find(booksByLang, {folder: data.bookFolder});

			view.$el = $(view.tmpl.book(book));

			view.set('book', book);

			view.set('state', 'playing'); // playing or pause

			view.set('previousPageIndex', 0);

			view.proto.initialize.apply(view, arguments);

			// init swipe
			view.render();

			view.initSwiper();

			view.bindEventListeners();

			view.runPage(book.pages[0]);

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
			swiper.on('onTransitionEnd', function (swiper) {

				var book = view.get('book'),
					index = swiper.activeIndex,
					isPageChanged = view.isPageChanged(index);

				if ( !isPageChanged ) {
					return;
				}

				view.runPage(book.pages[index]);

			});

		},

		runPage: function (dataArg) {

			var view = this,
				data = dataArg || {},
				info = view.info,
				languageName = info.get('language'),
				book = view.get('book'),
				soundMaster = win.APP.soundMaster;

			soundMaster.play({
				sound: ['books', languageName, book.folder, data.sound].join('/'),
				road: 0,
				isLoop: false
			});

			view.set('state', 'playing');

			view.doNextActionAfter(data.time);

		},

		doNextActionAfter: function (timeout) {

			var view = this,
				swiper = view.get('swiper'),
				previousTimeoutId = view.get('nextActionTimeoutId'),
				currentTimeoutId;

			clearTimeout(previousTimeoutId);

			currentTimeoutId = setTimeout(function () {

				var wasSwipe = swiper.slideNext(),
					isStoryByStory;

				if ( wasSwipe ) { // swipe was good
					return;
				}

				isStoryByStory = view.info.get('storyByStory') === 'on';

				if (isStoryByStory) {
					view.hide().then(function () {

						var info = view.info,
							languageName = info.get('language'),
							booksData = win.APP.booksData,
							util = win.APP.util,
							books = JSON.parse(JSON.stringify(booksData[languageName])),
							book = util.assortArray(books)[0];

						new win.APP.BB.BookView({
							bookFolder: book.folder
						});

					});
				} else {
					view.routeBack();
				}

			}, timeout * 1e3);

			view.set('nextActionTimeoutId', currentTimeoutId);

		},

		playPause: function () {

			var view = this,
				state = view.get('state');

			if (state === 'playing') {
				view.stopCurrentPage();
			}

			if (state === 'pause') {
				view.playCurrentPage();
			}

		},

		stopCurrentPage: function () {

			var view = this,
				soundMaster = win.APP.soundMaster;

			view.set('state', 'pause');

			// stop music and clear timeout

			soundMaster.stop({
				road: 0
			});

			clearTimeout( view.get('nextActionTimeoutId') );

		},

		playCurrentPage: function () {

			var view = this,
				swiper = view.get('swiper'),
				index = swiper.activeIndex,
				book = view.get('book');

			// view.set('state', 'playing'); will set from runPage

			view.runPage(book.pages[index]);

		},

		isPageChanged: function (pageIndex) {

			var view = this,
				previousPageIndex = view.get('previousPageIndex'),
				currentPageIndex = pageIndex;

			if (previousPageIndex === currentPageIndex) {
				return false;
			}

			view.set('previousPageIndex', currentPageIndex);
			return true;

		},

		unbindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper'),
				previousTimeoutId = view.get('nextActionTimeoutId');

			win.APP.soundMaster.stop({
				road: 0
			});

			clearTimeout(previousTimeoutId);

			swiper.off('onTransitionEnd');

			swiper.detachEvents();

		}


	});

}(window));
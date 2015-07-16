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

		selectors: {
			playPauseButton: '.js-play-pause',
			bookPage: '.js-book-page',
			pageText: '.js-page-text',
			hiddenPageText: '.js-page-text-hidden',
			bookPageImage : '.js-book-page-image'
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
			view.onResize();

			view.loadFirstImage()
				.then(function () {
					view.onResize();
					return view.render();
				})
				.then(function () {
					view.initSwiper();
					view.bindEventListeners();
					view.onResize();
					view.runPage(book.pages[0]);
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
					slideShadows : false
				}

				// If we need pagination
				//pagination: '.swiper-pagination',

				// Navigation arrows
				//nextButton: '.swiper-button-next',
				//prevButton: '.swiper-button-prev',

				// And if we need scrollbar
				//scrollbar: '.swiper-scrollbar'

			});

			view.set('swiper', swiper);

		},

		bindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper'),
				device = win.APP.bb.device;

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

			view.listenTo(device, 'resize', view.onResize);

		},

		unbindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper'),
				previousTimeoutId = view.get('nextActionTimeoutId'),
				textAnimationIntervalId = view.get('textAnimationIntervalId'),
				device = win.APP.bb.device;

			view.stopListening(device);

			clearTimeout(previousTimeoutId);
			clearInterval(textAnimationIntervalId);

			win.APP.soundMaster.stop({
				road: 0
			});

			swiper.off('onTransitionEnd');

			swiper.detachEvents();

		},

		onResize: function () {

			var view = this,
				device = win.APP.bb.device,
				selectors = view.selectors,
				selectorHiddenText = selectors.hiddenPageText,
				pageTextSelector = selectors.pageText,
				selectorImage = selectors.bookPageImage,
				$pages = view.$el.find(selectors.bookPage);

			$pages.each(function () {

				var $page = $(this),
					$pageText = $page.find(pageTextSelector),
					$hiddenText = $page.find(selectorHiddenText),
					hiddenTextHeight = $hiddenText.outerHeight(),
					$image = $page.find(selectorImage),
					imageNode = $image.get(0),
					beautifulSpace = 0.9,
					availableSpace = {
						width: device.get('width'),
						height: device.get('height') - hiddenTextHeight
					},
					image = {
						width: imageNode.naturalWidth,
						height: imageNode.naturalHeight
					},
					endWidth,
					endHeight,
					endTop,
					q;

				availableSpace.aspectRatio = availableSpace.height / availableSpace.width;
				image.aspectRatio = image.height / image.width;

				q = availableSpace.aspectRatio > image.aspectRatio ? image.width / availableSpace.width : image.height / availableSpace.height;

				if ($pageText.length) {

					endWidth = Math.floor(image.width / q * beautifulSpace);
					endHeight = Math.floor(image.height / q * beautifulSpace);
					endTop = Math.floor((availableSpace.height - image.height / q) / 2 + image.height / q * beautifulSpace * (1 - beautifulSpace) / 2);

					$image.css({
						width: endWidth + 'px',
						height: endHeight + 'px',
						top: endTop + 'px'
					});

					$pageText.css({
						top: endTop + endHeight + 'px'
					});

				} else {
					$image.css({
						//width: Math.floor(image.width / q * beautifulSpace) + 'px',
						//height: Math.floor(image.height / q * beautifulSpace) + 'px',
						top: Math.floor((availableSpace.height - image.height / q) / 2 + image.height / q * beautifulSpace * (1 - beautifulSpace) / 2) + 'px'
					});
				}

			});

		},

		loadFirstImage: function () {

			var view = this,
				book = view.get('book'),
				firstPage = book.pages[0],
				src = firstPage.img,
				deferred = $.Deferred(),
				img = new Image();

			$(img).one('load', function () {
				deferred.resolve();
			});

			img.src = ['books', view.info.get('language'), book.folder, src].join('/');

			return deferred.promise();

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
			view.autoSetPlayPauseButtonState();

			view.animateText();

			view.doNextActionAfter(data.time);

		},

		autoSetPlayPauseButtonState: function () {

			var view = this,
				state = view.get('state'),
				$button = view.$el.find(view.selectors.playPauseButton);

			if (state === 'pause') {
				$button.removeClass('book-pause-button').addClass('book-play-button');
			}

			if (state === 'playing') {
				$button.removeClass('book-play-button').addClass('book-pause-button');
			}

		},

		animateText: function () {

			var view = this,
				selectors = view.selectors,
				swiper = view.get('swiper'),
				index = swiper.activeIndex,
				$slides = view.$el.find('.swiper-slide'),
				$slide = $slides.eq(index),
				$texts = view.$el.find(selectors.pageText),
				$text = $slide.find(selectors.pageText),
				book = view.get('book'),
				page = book.pages[index],
				text = page.text;

			$texts.empty();

			view.showTextAnimation({
				$el: $text,
				text: text
			});

		},

		showTextAnimation: function (dataArg) {

			var view = this,
				data = dataArg || {},
				index = 0,
				textAnimationIntervalId = view.get('textAnimationIntervalId');

			clearInterval(textAnimationIntervalId);

			textAnimationIntervalId = setInterval(function () {

				if ( !data.text || !data.text[index] ) {
					clearInterval(view.get('textAnimationIntervalId'));
					return;
				}

				if ( view.get('state') === 'pause' ) {
					clearInterval(view.get('textAnimationIntervalId'));
					view.$el.find(view.selectors.pageText).empty();
					return;
				}

				index += 1;

				data.$el.html(data.text.substring(0, index));

			}, 25);

			view.set('textAnimationIntervalId', textAnimationIntervalId);

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

						// detect book/:bookFolder
						if ( Backbone.history.fragment.indexOf('book/') !== 0 ) {
							return;
						}

						var info = view.info,
							languageName = info.get('language'),
							booksData = win.APP.booksData,
							util = win.APP.util,
							books = util.copyJSON(booksData[languageName]),
							book = util.assortArray(books)[0];

						new win.APP.BB.BookView({
							bookFolder: book.folder
						});

					});
				} else {
					view.routeBack();
				}

			}, timeout * 10000e3); // 1e3

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
			view.autoSetPlayPauseButtonState();

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

		}

	});

}(window));
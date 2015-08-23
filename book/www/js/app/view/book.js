/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP, Swiper, _, setTimeout, clearTimeout */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BookView = APP.BB.BaseView.extend({

		events: {
			'click .js-play-pause': 'playPause',
			'dbl .js-book-page': 'toggleState'
		},

		selectors: {
			playPauseButton: '.js-play-pause',
			bookPage: '.js-book-page',
			pageText: '.js-page-text',
			bookPageImage: '.js-book-page-image',
			backPageTextWrapper: '.js-back-page-wrapper'
		},

		initialize: function (dataArg) {

			var view = this,
				data = dataArg || {},
				info = view.info,
				languageName = info.get('language'),
				booksByLang = win.APP.booksData[languageName],
				book = _.find(booksByLang, {folder: data.bookFolder});

			view.set('withText', false);

			view.set('pageMode', 'normal'); // fullText or normal

			view.$el = $(view.tmpl.book(
				{
					book: book,
					settings: {
						withText: view.get('withText')
					}
				}
			));

			view.set('book', book);

			view.set('url', Backbone.history.fragment);

			view.set('playerState', 'playing'); // playing or pause

			view.set('previousPageIndex', 0);

			view.proto.initialize.apply(view, arguments);
			//view.onResize();

			view.loadBooksImages()
				.then(function () {
					view.onResize();
					return view.render();
				})
				.then(function () {

					if ( !view.checkNeedUrl() ) {
						return;
					}

					view.initSwiper();
					view.bindEventListeners();
					view.onResize();
					view.runPage(book.pages[0]);
				});

		},

		checkNeedUrl: function () {
			return this.get('url') === Backbone.history.fragment;
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

				if ( view.get('pageMode') === 'normal' || view.get('playerState') === 'playing') {
					view.runPage(book.pages[index]);
				}

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

			win.clearTimeout(previousTimeoutId);
			win.clearInterval(textAnimationIntervalId);

			win.APP.soundMaster.stop({
				road: 0
			});

			if (swiper) {
				swiper.off('onTransitionEnd');
				swiper.detachEvents();
			}

		},

		onResize: function () {

			var view = this,
				device = win.APP.bb.device,
				selectors = view.selectors,
				pageTextSelector = selectors.pageText,
				selectorImage = selectors.bookPageImage,
				$pages = view.$el.find(selectors.bookPage),
				topBarHeight = view.info.get('remSize', true) * 3.4; // see style css .header

			$pages.each(function () {

				var $page = $(this),
					$pageText = $page.find(pageTextSelector),
					textHeight = $pageText.outerHeight() || 0,
					$image = $page.find(selectorImage),
					imageNode = $image.get(0),
					beautifulSpace = view.get('withText') ? 1 : 0.9,
					availableSpace = {
						width: device.get('width'),
						height: device.get('height') - textHeight - topBarHeight
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

				//if ($pageText.length) {

					endWidth = Math.floor(image.width / q * beautifulSpace);
					endHeight = Math.floor(image.height / q * beautifulSpace);
					endTop = Math.floor((availableSpace.height - image.height / q) / 2 + image.height / q * beautifulSpace * (1 - beautifulSpace) / 2) + topBarHeight;

					$image.css({
						width: endWidth + 'px',
						height: endHeight + 'px',
						top: endTop + 'px'
					});

					$pageText.css({
						top: endTop + endHeight + 'px'
					});

				//} else {
				//	$image.css({
				//		width: Math.floor(image.width / q * beautifulSpace) + 'px',
				//		height: Math.floor(image.height / q * beautifulSpace) + 'px',
				//		top: Math.floor((availableSpace.height - image.height / q) / 2 + image.height / q * beautifulSpace * (1 - beautifulSpace) / 2) + 'px'
				//	});
				//}

			});

		},

		loadBooksImages: function () {

			var view = this,
				book = view.get('book'),
				mainBookFolder = 'books',
				pages = book.pages,
				language = view.info.get('language'),
				bookFolder = book.folder,
				loadDeferred = $.Deferred(),
				loadPromise = loadDeferred.promise(),
				mainDeferred = $.Deferred();

			function loadImage(page) {

				var deferred = $.Deferred(),
					img = new Image();

				img.addEventListener('load', function resolve() {
					this.removeEventListener('load', resolve, false);
					deferred.resolve();
				}, false);

				img.src = [mainBookFolder, language, bookFolder, page.img].join('/');

				return deferred.promise();

			}

			_.each(pages, function (page) {
				loadPromise = loadPromise.then(function () {
					return loadImage(page);
				});
			});

			loadPromise.then(function () {
				return mainDeferred.resolve();
			});

			loadDeferred.resolve();

			return mainDeferred.promise();

		},

		runPage: function (dataArg) {

			var view = this,
				data = dataArg || {},
				info = view.info,
				languageName = info.get('language'),
				book = view.get('book'),
				soundMaster = win.APP.soundMaster;

			if (data.sound) {
				soundMaster.play({
					sound: ['books', languageName, book.folder, data.sound].join('/'),
					road: 0,
					isLoop: false
				});
			} else {
				soundMaster.stop({
					road: 0
				});
			}

			view.set('playerState', 'playing');
			view.autoSetPlayPauseButtonState();

			//view.animateText();

			view.doNextActionAfter(data.time);

		},

		autoSetPlayPauseButtonState: function () {

			var view = this,
				state = view.get('playerState'),
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

			win.clearInterval(textAnimationIntervalId);

			textAnimationIntervalId = win.setInterval(function () {

				if ( !data.text || !data.text[index] ) {
					win.clearInterval(view.get('textAnimationIntervalId'));
					return;
				}

				if ( view.get('playerState') === 'pause' ) {
					win.clearInterval(view.get('textAnimationIntervalId'));
					view.$el.find(view.selectors.pageText).empty();
					return;
				}

				index += 1;

				data.$el.html(data.text.substring(0, index).replace(/\|/g, '<br />'));

			}, 25);

			view.set('textAnimationIntervalId', textAnimationIntervalId);

		},

		doNextActionAfter: function (timeout) {

			var view = this,
				swiper = view.get('swiper'),
				previousTimeoutId = view.get('nextActionTimeoutId'),
				currentTimeoutId;

			win.clearTimeout(previousTimeoutId);

			currentTimeoutId = win.setTimeout(function () {

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
							books = booksData[languageName],
							index = Math.floor(books.length * Math.random()),
							book = books[index];

						new win.APP.BB.BookView({
							bookFolder: book.folder
						});

					});
				} else {
					view.routeBack();
				}

			}, timeout * 1e3); // 1e3

			view.set('nextActionTimeoutId', currentTimeoutId);

		},

		playPause: function () {

			var view = this,
				state = view.get('playerState');

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

			view.set('playerState', 'pause');
			view.autoSetPlayPauseButtonState();

			// stop music and clear timeout

			soundMaster.stop({
				road: 0
			});

			win.clearTimeout( view.get('nextActionTimeoutId') );

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

		},

		toggleState: function () {

			var view = this,
				state = view.get('pageMode'), // fullText or normal
				selectors = view.selectors,
				$el = view.$el,
				$images = $el.find(selectors.bookPageImage),
				$pageText = $el.find(selectors.pageText),
				$backPageTextWrapper = $el.find(selectors.backPageTextWrapper);

			switch (state) {

				case 'fullText':

					view.set('pageMode', 'normal');

					$images.removeClass('hidden');
					$pageText.removeClass('hidden');
					$backPageTextWrapper.addClass('hidden');

					view.playCurrentPage();

					break;

				case 'normal':

					view.set('pageMode', 'fullText');

					$images.addClass('hidden');
					$pageText.addClass('hidden');
					$backPageTextWrapper.removeClass('hidden');

					view.stopCurrentPage();

					break;

			}

		}

	});

}(window));
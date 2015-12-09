'use strict';
/*global window */

import info from './../../services/info';
import _ from './../../lib/lodash';
import booksData from './../books-data';
import $ from './../../lib/jbone';
import Backbone from './../../lib/backbone';
import Swiper from './../../lib/swiper';
import device from './../../services/device';
import sm from './../../sound/sound-master';
import tm from './../../services/template-master';
import util from './../../services/util';
import BaseView from './core/base';

var win = window,

	BookView = BaseView.extend({

		events: {
			'click .js-play-pause': 'playPause',
			'click .js-show-inner-html': 'showInnerHtml'
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
				languageName = info.get('language'),
				booksByLang = booksData[languageName],
				book = _.find(booksByLang, {folder: data.bookFolder});

			view.set('withText', false);

			view.set('pageMode', 'normal'); // fullText or normal

			view.setElement(tm.tmplFn.book({
					info: info,
					util: util,
					book: book,
					settings: {
						withText: view.get('withText')
					}
				}));

			view.set('book', book);

			view.set('url', Backbone.history.fragment);

			view.set('playerState', 'playing'); // playing or pause

			view.set('previousPageIndex', 0);

			BaseView.prototype.initialize.apply(view, arguments);
			//view.onResize();

			view.loadBooksImages()
				.then(function () {

					if (!view.checkNeedUrl()) {
						return;
					}

					view.render();

					view.initSwiper();
					view.bindEventListeners();
					view.onResize();

					if (info.hintIsDone('showTitle')) {

						view.runPage({index: 0});

						return;

					}

					var hintViewData = {};

					view.publish('showHint', {name: 'showTitle'}, hintViewData);

					hintViewData.view.onHide(function () {

						view.publish('showHint', {name: 'showText'}, hintViewData);

						hintViewData.view.onHide(function () {

							view.publish('showHint', {name: 'stopAndStartPlay'}, hintViewData);

							hintViewData.view.onHide(view.runPage, [{index: 0}], view);

						});

					});

					view.onResize();

				});

		},

		checkNeedUrl: function () {
			return this.get('url') === Backbone.history.fragment;
		},

		initSwiper: function () {

			var view = this,
				swiper;

			swiper = new Swiper('.swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				loop: false

				// remove it for nonPAHTbI swipe
				//effect: 'coverflow',
				//grabCursor: true,
				//centeredSlides: true,
				//slidesPerView: 'auto',
				//coverflow: {
				//	rotate: 50,
				//	stretch: 0,
				//	depth: 100,
				//	modifier: 1,
				//	slideShadows : false
				//}

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
				swiper = view.get('swiper');

			//onSlideChangeEnd
			swiper.on('onTransitionEnd', function (swiper) {

				var book = view.get('book'),
					index = swiper.activeIndex,
					isPageChanged = view.isPageChanged(index);

				if (!isPageChanged) {
					return;
				}

				if (view.get('pageMode') === 'normal' || view.get('playerState') === 'playing') {
					view.runPage({index: index});
				}

			});

			swiper.on('onDoubleTap', function () {
				view.toggleState();
			});

			view.listenTo(device, 'resize', view.onResize);

		},

		unbindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper'),
				previousTimeoutId = view.get('nextActionTimeoutId'),
				textAnimationIntervalId = view.get('textAnimationIntervalId');

			view.stopListening(device);

			win.clearTimeout(previousTimeoutId);
			win.clearInterval(textAnimationIntervalId);

			sm.stop({
				road: 0
			});

			if (swiper) {
				swiper.off('onTransitionEnd');
				swiper.detachEvents();
				swiper.destroy();
			}

		},

		onResize: function () {

			var view = this,
				selectors = view.selectors,
				pageTextSelector = selectors.pageText,
				selectorImage = selectors.bookPageImage,
				$pages = view.$el.find(selectors.bookPage),
				topBarHeight = info.get('remSize', true) * 3.4; // see style css .header

			$pages.forEach(function (pageNode) {

				var $page = $(pageNode),
					$pageText = $page.find(pageTextSelector),
					textHeight = $pageText && $pageText.clientHeight || 0,
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
				language = info.get('language'),
				bookFolder = book.folder,
				loadDeferred = $.Deferred(),
				loadPromise = loadDeferred.promise(),
				getPath = util.getPath,
				mainDeferred = $.Deferred();

			function loadImage(index) {

				var deferred = $.Deferred(),
					img = new Image();

				img.addEventListener('load', function resolve() {
					this.removeEventListener('load', resolve, false);
					deferred.resolve();
				}, false);

				img.src = [mainBookFolder, language, getPath(bookFolder, index, 'jpg')].join('/');

				return deferred.promise();

			}

			_.each(pages, function (page, index) {
				loadPromise = loadPromise.then(function () {
					return loadImage(index);
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
				languageName = info.get('language'),
				book = view.get('book'),
				getPath = util.getPath,
				index = data.index;

			sm.play({
				sound: ['books', languageName, getPath(book.folder, index, 'mp3')].join('/'),
				road: 0,
				isLoop: false
			});

			view.set('playerState', 'playing');
			view.autoSetPlayPauseButtonState();

			//view.animateText();

			view.doNextActionAfter(book.pages[index].time);

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

				if (!data.text || !data.text[index]) {
					win.clearInterval(view.get('textAnimationIntervalId'));
					return;
				}

				if (view.get('playerState') === 'pause') {
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

				if (wasSwipe) { // swipe was good
					return;
				}

				isStoryByStory = info.get('storyByStory') === 'on';

				if (isStoryByStory) {
					view.hide().then(function () {

						// detect book/:bookFolder
						if (Backbone.history.fragment.indexOf('book/') !== 0) {
							return;
						}

						var languageName = info.get('language'),
							books = booksData[languageName],
							index = Math.floor(books.length * Math.random()),
							book = books[index];

						// todo: create a new book from 'this'

						new BookView({
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

			var view = this;

			view.set('playerState', 'pause');
			view.autoSetPlayPauseButtonState();

			// stop music and clear timeout

			sm.stop({
				road: 0
			});

			win.clearTimeout(view.get('nextActionTimeoutId'));

		},

		playCurrentPage: function () {

			var view = this,
				swiper = view.get('swiper'),
				index = swiper.activeIndex,
				book = view.get('book');

			view.runPage({index: index});

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

					//view.playCurrentPage();

					break;

				case 'normal':

					view.set('pageMode', 'fullText');

					$images.addClass('hidden');
					$pageText.addClass('hidden');
					$backPageTextWrapper.removeClass('hidden');

					//view.stopCurrentPage();

					break;

			}

		},

		showInnerHtml: function (e) {

			var view = this,
				html = $(e.currentTarget).html();

			view.showPopup({
				name: 'notification',
				timeout: 9e3,
				cssClass: 'popup-title',
				data: {
					text: html
				}
			});

		},

		hide: function () {

			var view = this;

			view.publish('hide-hint', {}, {doNotTrack: true});

			return BaseView.prototype.hide.call(view);

		}

	});

export default BookView;
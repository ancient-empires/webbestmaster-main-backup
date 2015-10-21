'use strict';
/*global window */

import info from './../../services/info';
import lang from './../../services/lang';
import device from './../../services/device';
import tm from './../../services/template-master';
import booksData from './../books-data';
import BaseView from './core/base';

var win = window,
	HomeView = BaseView.extend({

		events: {
			'click .js-story-by-story': 'setStoryByStory',
			'click .js-title-book-wrapper': 'openBook'
			//'click .js-show-popup': 'testShowPopup'
		},

		initialize: function () {

			var view = this,
				hintViewAutoplay = {};

			view.setElement(tm.tmplFn.home({
				info,
				booksData,
				shelf: view.getBooksOnShelfNumber()
				//booksOnShelf:
			}));

			view.bindEventListeners();

			view.render();

			view.setVerticalSwiper();

			view.scrollToTop();

			// show hint if needed
			if (!info.hintIsDone('autoplay')) {
				view.publish('showHint', {name: 'autoplay'}, hintViewAutoplay);
				hintViewAutoplay.view.onHide(
					() => view.publish('showHint', {name: info.isNormal ? 'removeAds' : 'thanksForBuy'})
				);
			}

			return BaseView.prototype.initialize.apply(view, arguments);

		},

		getBooksOnShelfNumber: function () {

			var view = this,
				remSize = info.get('remSize', true),
				bookWidth = 8.8, // SEE CSS
				availableWidth = device.get('width') / remSize,
				booksOnShelf = Math.floor(availableWidth / bookWidth),
				firstBookMarginLeft = (availableWidth % bookWidth) / 2 + 0.6; // SEE CSS

			return {
				firstBookMarginLeft: firstBookMarginLeft + 'rem',
				booksOnShelf: booksOnShelf
			};

		},

		setStoryByStory: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				notification = lang.get('notification'),
				popupText,
				isStoryByStory = info.get('storyByStory') === 'on';

			if (isStoryByStory) {
				$this.removeClass('active-on-off');
				info.set('storyByStory', 'off');
				popupText = notification.storyByStoryOff;
			} else {
				$this.addClass('active-on-off');
				info.set('storyByStory', 'on');
				popupText = notification.storyByStoryOn;
			}

			view.showPopup({
				name: 'notification',
				timeout: 3e3,
				data: {
					text: popupText
				}
			});

		},

		bindEventListeners: function () {

			var view = this,
				rateUsTimeoutId;

			view.listenTo(device, 'change:orientation', function () {
				$('.js-hint-wrapper').trigger('hide', {doNotTrack: true});
				view.loadUrl();
			});

			rateUsTimeoutId = setTimeout(function () {
				// check for rate up popup
				if (Date.now() - info.get('installTime') > 20e3) {
					view.rateUsPopup();
				}
			}, 2e3);

			view.set('rateUsTimeoutId', rateUsTimeoutId);

		},

		unbindEventListeners: function () {

			var view = this,
				rateUsTimeoutId = view.get('rateUsTimeoutId');

			view.stopListening(device);

			view.get('vertical-swiper').destroy();

			clearTimeout(rateUsTimeoutId);

		},

		openBook: function (e) {

			var view = this,
				$node = $(e.currentTarget),
				isClicked = $node.attr('data-is-clicked');

			if (isClicked) {
				view.publish('navigate', $node.attr('data-js-route'), true);
				return;
			}

			$node
				.attr('data-is-clicked', '1')
				.addClass('book-titles-wrapper-clicked');

		}

		//testShowPopup: function () {
		//
		//	var view = this;
		//
		//	view.showPopup({
		//		name: 'popup-text',
		//		//timeout: 2.5e3,
		//		sound: {
		//			sound: 'good-answer.mp3',
		//			isLoop: false,
		//			road: 3
		//		},
		//		data: {
		//			text: 'TEXT!!!!!!!!!'
		//		}
		//		//,onHide: { // see popup view source code
		//		//	fn: 'newQuestion',
		//		//	context: view
		//		//}
		//	});
		//
		//}


	});

export default HomeView;
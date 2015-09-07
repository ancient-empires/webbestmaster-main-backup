/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	//https://github.com/nolimits4web/Swiper/blob/master/demos/14-nav-arrows.html

	win.APP = win.APP || {};

	win.APP.slider = {

		attr: {},

		get: function (key) {
			return this.attr[key];
		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		initGoodsItem: function () {

			var slider = this,
				$slides = $('.js-goods-item-swiper-container .swiper-slide'),
				swiper = new Swiper('.js-goods-item-swiper-container .swiper-container', {
					//pagination: '.swiper-pagination',
					slidesPerView: 4,
					paginationClickable: true,
					spaceBetween: 0,
					nextButton: '.js-goods-item-swiper-container .swiper-button-next',
					prevButton: '.js-goods-item-swiper-container .swiper-button-prev'
				});

			$slides.on('click', function (e) {
				var $slideImg = $(e.currentTarget).find('img');
				$('.js-goods-item-swiper-container .goods-item-slide-selected').removeClass('goods-item-slide-selected');
				$slideImg.addClass('goods-item-slide-selected');
				$('.js-goods-item-image').attr('src', $slideImg.attr('src'));
			});

			$slides.eq(0).trigger('click');

			slider.set('goods-item', swiper);

			return swiper;

		}

	};

}(window));
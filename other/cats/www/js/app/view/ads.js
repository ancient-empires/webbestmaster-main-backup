'use strict';
/*global window */

import $ from './../../lib/jquery';
import info from './../../services/info';
import lang from './../../services/lang';
import device from './../../services/device';
import tm from './../../services/template-master';
import BaseView from './core/base';
import androidAds from './../../services/android-ads';

var win = window,
	AdsView = BaseView.extend({

		events: {

		},

		getRandomColor: function (number) {

			var color = ((Math.random() * 255)|0).toString(number || 16);

			return color.length < 2 ? (0 + color) : color;

		},

		getRandomHEXColor: function () {

			var view = this,
				getRandomColor = view.getRandomColor;

			return [getRandomColor(), getRandomColor(), getRandomColor()].join('');

		},

		initialize: function () {

			var view = this,
				width = device.get('width'),
				height = device.get('height'),
				bgColor = view.getRandomHEXColor(),
				textColor = view.getRandomHEXColor();

			view.setElement(tm.tmplFn['ads-page']({
				width,
				height,
				src: 'http://dummyimage.com/' + width + 'x' + height + '/' + bgColor + '/' + textColor + '.png&text=' + Math.random()
			}));

			view.render();

			setTimeout(() => {
				androidAds.showAd();

				setTimeout(() => {
					view.backTo('');
				}, 30e3);

			}, 5e3);

			return BaseView.prototype.initialize.apply(view, arguments);

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

export default AdsView;
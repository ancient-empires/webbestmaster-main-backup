'use strict';
/*global window */

import $ from './../../lib/jquery';
import info from './../../services/info';
import lang from './../../services/lang';
import device from './../../services/device';
import tm from './../../services/template-master';
import BaseView from './core/base';

var win = window,
	HomeView = BaseView.extend({

		events: {
			'click .js-story-by-story': 'setStoryByStory',
			'click .js-title-book-wrapper': 'openBook'
			//'click .js-show-popup': 'testShowPopup'
		},

		initialize: function () {

			var view = this;
			view.setElement(tm.tmplFn.home());

			view.render();

			view.scrollToTop();

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

export default HomeView;
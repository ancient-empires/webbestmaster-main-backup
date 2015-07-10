/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.HomeView = APP.BB.BaseView.extend({

		events: {
			'click .js-story-by-story': 'setStoryByStory',
			'click .js-show-popup': 'testShowPopup'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.home());

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		setStoryByStory: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				info = view.info,
				isStoryByStory = info.get('storyByStory') === 'on';

			if (isStoryByStory) {
				$this.removeClass('active-on-off');
				info.set('storyByStory', 'off');
			} else {
				$this.addClass('active-on-off');
				info.set('storyByStory', 'on');
			}

		},

		testShowPopup: function () {

			var view = this;

			view.showPopup({
				name: 'popup-text',
				//timeout: 2.5e3,
				sound: {
					sound: 'good-answer.mp3',
					isLoop: false,
					road: 3
				},
				data: {
					text: 'TEXT!!!!!!!!!'
				}
				//,onHide: { // see popup view source code
				//	fn: 'newQuestion',
				//	context: view
				//}
			});

		}


	});

}(window));
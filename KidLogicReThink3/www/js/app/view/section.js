/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	win.APP.BB.SectionView = win.APP.BB.BaseView.extend({

		events: {
			'click .js-good-answer': 'goodAnswer',
			'click .js-bad-answer': 'badAnswer'
		},

		selectors: {
			badAnswer: '.js-bad-answer',
			goodAnswer: '.js-good-answer'
		},

		initialize: function (data) {

			var view = this,
				section = win.APP.sectionList[data.jsKey],
				util = win.APP.util,
				assortArray = util.assortArray,
				question = assortArray(section.items)[0],
				// for test only
				//question = win.questionIndex ? section.items[win.questionIndex] : assortArray(section.items)[0],
				answer = question.list[question.answer];

			question.list = assortArray(question.list);
			question.answer = question.list.indexOf(answer);

			view.$el = $(view.tmpl.section({
				section: section,
				question: question
			}));

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		goodAnswer: function () {

			var view = this;

			view.showPopup({
				name: 'good-answer',
				timeout: 2.5e3,
				sound: {
					sound: 'good-answer.mp3',
					isLoop: false,
					road: 3
				},
				onHide: {
					fn: 'newQuestion',
					context: view
				}
			});

		},

		newQuestion: function () {
			this.loadUrl();
		},

		badAnswer: function (e) {

			var view = this;

			$(e.currentTarget).addClass('bad-answer-clicked');

			view.showPopup({
				name: 'bad-answer',
				timeout: 2.5e3,
				sound: {
					sound: 'bad-answer.mp3',
					isLoop: false,
					road: 3
				}
			});

		}

	});

}(window));
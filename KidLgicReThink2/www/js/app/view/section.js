/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SectionView = APP.BB.BaseView.extend({

		events: {

			'click .js-good-answer': 'goodAnswer',
			'click .js-bad-answer': 'badAnswer'

		},

		initialize: function (data) {

			var view = this,
				section = win.APP.sectionList[data.jsKey],
				util = win.APP.util,
				assortArray = util.assortArray,
				question = assortArray(section.items)[0];

			question.list = assortArray(question.list);

			view.$el = $(view.tmpl.section({
				section: section,
				question: question
			}));

			view.proto.initialize.apply(view, arguments);

			view.render();

			view.showAppearAnimation();

			log('do not show showRateUs');
			//this.showRateUs();

		},

		goodAnswer: function () {

			var view = this;

			view.showPopup({

			});

		},

		badAnswer: function () {

		}

	});

}(window));
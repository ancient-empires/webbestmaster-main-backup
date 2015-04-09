/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.StoryView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (data) { // parentView, pages[]

			var view = this,
				story = window.APP.lang.get('story'),
				text = story.list[data.pageIndex],
				imgPathPrefix = story.imgPathPrefix,
				pages = text.split('_!!_');

			pages = _.map(pages, function (page) {
				var parts = page.split('_!_');
				parts = _.map(parts, function (part) {

				});

			});

			view.$el = $(view.tmpl.story({ text: text }));

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);
			view.render();

		},

		render: function () {





		}

	});

}(window));
/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	var hintsMap = {
		autoplay: {
			x1: 0,
			y1: 0,
			// use this
			x2: 0,
			y2: 0,
			// or this
			width: 0,
			height: 0
		},
		nextHint: {
			x1: 0,
			y1: 0,
			// use this
			x2: 0,
			y2: 0,
			// or this
			width: 0,
			height: 0
		}
	};

	APP.BB.HintView = APP.BB.BaseView.extend({

		events: {
			'click': 'hide'
			//'click .js-story-by-story': 'setStoryByStory',
			//'click .js-title-book-wrapper': 'openBook'
			//'click .js-show-popup': 'testShowPopup'
		},

		test: function () {
			console.log('test');
		},

		initialize: function (data) {

			var view = this;

			view.extendFromObj(data);

			view.$el = $(view.tmpl.hint());

			view.proto.initialize.apply(view, arguments);

			view.bindEventListeners();

			view.render();

		},

		render: function () {

			var view = this,
				$wrapper = view.$wrapper,
				hintName = view.get('name'),
				remSize = view.info.get('remSize', true),
				coordinatesSource = hintsMap[hintName],
				coordinatesFinal;

			// set _ coordinates
			if (coordinatesSource.hasOwnProperty('width')) {
				coordinatesFinal = {
					x1: coordinatesSource.x1,
					y1: coordinatesSource.y1,
					x2: coordinatesSource.x1 + coordinatesSource.width,
					y2: coordinatesSource.y1 + coordinatesSource.height
				};
			} else {
				coordinatesFinal = coordinatesSource;
			}





			$wrapper.append(view.$el);

		},

		hide: function () {

		},

		bindEventListeners: function () {

		},

		unbindEventListeners: function () {

		},

		onHide: function (fn, args, context) {



		}

	});

}(window));
/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	var hintsMap = {
		autoplay: {
			x1: 0.4,
			y1: 0.1,
			// use this
			//x2: -3,
			//y2: -4
			// or this
			width: 4.6,
			height: 3.5
		},
		// just example
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

		selectors: {
			fadePart: '.js-fade-part'
		},

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
				$wrapper = view.$wrapper;

			view.setCoordinates({
				$parts: view.$el.find(view.selectors.fadePart),
				coordinates: hintsMap[view.get('name')]
			});

			$wrapper.append(view.$el);

			view.showInAnimation();

		},

		showInAnimation: function () {
			this.$el.addClass('hint-container-show-in');
		},

		showOutAnimation: function () {

			var view = this,
				$el = view.$el,
				deferred = $.Deferred(),
				animationEnd = view.info.get('animationEnd', true);

			$el.one(animationEnd, function () {
				deferred.resolve();
			}); // work only one time

			$el.addClass('hint-container-show-out');

			return deferred.promise();

		},

		setCoordinates: function (data) {

			var coordinates = data.coordinates,
				x1 = coordinates.x1,
				y1 = coordinates.y1,
				x2, y2;

			// set _ coordinates
			if ( coordinates.hasOwnProperty('width') ) {
				x2 = coordinates.x1 + coordinates.width;
			} else {
				x2 = coordinates.x2;
			}

			// set | coordinates
			if ( coordinates.hasOwnProperty('height') ) {
				y2 = coordinates.y1 + coordinates.height;
			} else {
				y2 = coordinates.y2;
			}

			data.$parts.each(function (index) {

				var css;

				switch (index) {

					case 0:

						css = {
							top: 0,
							left: 0,
							bottom: 0,
							width: x1
						};

						break;

					case 1:

						css = {
							top: 0,
							left: x1
						};

						if (x2 > x1) {
							css.width = x2 - x1;
						} else {
							css.right = Math.abs(x2);
						}

						if (y2 > y1) {
							css.height = y1;
						} else {
							css.height = Math.abs(y1);
						}

						break;

					case 2:

						css = {
							top: 0,
							bottom: 0
						};

						if (x2 > x1) {
							css.right = 0;
							css.left = x2;
						} else {
							css.right = 0;
							css.width = Math.abs(x2);
						}

						break;

					case 3:

						css = {
							bottom: 0,
							left: x1
						};

						if (x2 > x1) {
							css.width = x2 - x1;
						} else {
							css.right = Math.abs(x2);
						}

						if (y2 > y1) {
							css.top = y2;
						} else {
							css.height = Math.abs(y2);
						}

						break;

					case 4:

						css = {
							left: x1,
							top: y1
						};

						if (x2 > x1) {
							css.width = x2 - x1;
						} else {
							css.right = Math.abs(x2);
						}

						if (y2 > y1) {
							css.height = y2 - y1;
						} else {
							css.bottom = Math.abs(y2);
						}

						break;

				}

				_.each(css, function (value, key) {
					css[key] = value + 'rem';
				});

				$(this).css(css);

			});

		},

		hide: function () {

			var view = this;

			view.showOutAnimation().then(function () {

				//var onHide = view.get('onHide'),
				//	context;
				//
				//if (onHide) {
				//	context = onHide.context || view;
				//	context[onHide.fn].apply(context, onHide.args);
				//}

				view.proto.hide.call(view);

				//view.get('deferred').resolve();

			});

		},

		bindEventListeners: function () {

		},

		unbindEventListeners: function () {

		},

		onHide: function (fn, args, context) {

		}

	});

}(window));
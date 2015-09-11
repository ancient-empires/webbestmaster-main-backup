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
			fadePart: '.js-fade-part',
			text: '.js-hint-text'
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

			view.$el = $(view.tmpl.hint({
				text: win.APP.lang.get('hint')[data.name]
			}));

			view.proto.initialize.apply(view, arguments);

			view.bindEventListeners();

			view.render();

		},

		render: function () {

			var view = this,
				$wrapper = view.$wrapper;

			view.setCoordinates({
				$parts: view.$el.find(view.selectors.fadePart),
				$text: view.$el.find(view.selectors.text),
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

			var view = this,
				allCoordinates = view.getAllCoordinates(data);

			view.setFadeCoordinates({
				$parts: data.$parts,
				allCoordinates: allCoordinates
			});

			view.setHintCoordinates({
				$text: data.$text,
				allCoordinates: allCoordinates
			});

		},

		setHintCoordinates: function (data) {



		},

		setFadeCoordinates: function (data) {

			var xys = data.allCoordinates;

			data.$parts.each(function (index) {

				var css;

				switch (index) {

					case 0:

						css = {
							top: 0,
							left: 0,
							bottom: 0,
							width: xys.x1
						};

						break;

					case 1:

						css = {
							top: 0,
							left: xys.x1,
							width: xys.width,
							height: xys.y1
						};

						break;

					case 2:

						css = {
							top: 0,
							bottom: 0,
							right: 0,
							left: xys.x2
						};

						break;

					case 3:

						css = {
							bottom: 0,
							left: xys.x1,
							width: xys.width,
							top: xys.y2
						};

						break;

					case 4:

						css = {
							left: xys.x1,
							top: xys.y1,
							width: xys.width,
							height: xys.height
						};

						break;

				}

				_.each(css, function (value, key) {
					css[key] = value + 'rem';
				});

				$(this).css(css);

			});

		},

		getAllCoordinates: function (data) {

			var view = this,
				remSize = view.info.get('remSize'),
				device = win.APP.bb.device,
				maxWidth = device.get('width') / remSize,
				maxHeight = device.get('height') / remSize,
				width,
				height,
				coordinates = data.coordinates,
				x1 = coordinates.x1,
				y1 = coordinates.y1,
				x2, y2;

			// set _ coordinates
			if ( coordinates.hasOwnProperty('width') ) {
				width = coordinates.width;
				x2 = coordinates.x1 + width;
			} else {
				x2 = coordinates.x2;
				x2 = x2 >= 0 ? x2 : maxWidth + x2;
				width = x2 - x1;
			}

			// set | coordinates
			if ( coordinates.hasOwnProperty('height') ) {
				height = coordinates.height;
				y2 = coordinates.y1 + height;
			} else {
				y2 = coordinates.y2;
				y2 = y2 >= 0 ? y2 : maxWidth + y2;
				width = y2 - y1;
			}

			return {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				width: width,
				height: height,
				maxWidth: maxWidth,
				maxHeight: maxHeight
			};

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
'use strict';
/*global window */

import BaseView from './base';
import $ from './../../../lib/jbone';
import _ from './../../../lib/lodash';
import lang from './../../../services/lang';
import info from './../../../services/info';
import device from './../../../services/device';
import tm from './../../../services/template-master';
import mediator from './../../../services/mediator';

var win = window,
	HintView,
	hintMaster,
	hintsMap = {

		autoplay: {
			x1: 0.3,
			y1: 0,
			// use this
			//x2: -10,
			//y2: -10
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal' // just click to hint to never see this hint
		},

		removeAds: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal'
		},

		thanksForBuy: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal'
		},

		showTitle: {
			x1: 3.3,
			y1: 0.3,
			// use this
			x2: -3.3,
			//y2: 3.3,
			// or this
			//width: 4.9,
			height: 3,
			submitType: 'normal'
		},

		showText: {
			x1: 3,
			y1: 10,
			// use this
			x2: -3,
			y2: -11,
			// or this
			//width: 4.9,
			//height: 3.7,
			submitType: 'normal'
		},

		stopAndStartPlay: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 3.7,
			height: 3.6,
			submitType: 'normal'
		}

	},
	s = 'rem'; // size

HintView = BaseView.extend({

	selectors: {
		hintFocus: '.js-hint-focus',
		text: '.js-hint-text',
		hintArrow: '.js-hint-arrow'
	},

	events: {
		'click': 'hide',
		'scroll': 'stopEvent'
		//'click .js-story-by-story': 'setStoryByStory',
		//'click .js-show-popup': 'testShowPopup'
	},

	initialize: function (data) {

		var view = this,
			hintName = data.name;

		view.extendFromObj(data);
		view.extendFromObj(hintsMap[hintName]);

		view.setElement(tm.get('hint')({
			text: lang.get('hint')[hintName]
		}));

		BaseView.prototype.initialize.apply(view, arguments);

		view.bindEventListeners();

		view.subscribe('hide-hint', view.hide);

		view.render();

	},

	render: function () {

		var view = this,
			$wrapper = view.$wrapper,
			isAndroid = info.get('isAndroid', true),
			execute;

		if (isAndroid) {
			execute = function (fn, timeout) {
				setTimeout(fn, timeout);
			};
		} else {
			execute = function (fn) {
				fn();
			}
		}

		view.setCoordinates({
			$hintFocus: view.$el.find(view.selectors.hintFocus),
			$text: view.$el.find(view.selectors.text),
			coordinates: hintsMap[view.get('name')]
		});

		execute(function () {
			$wrapper.append(view.$el);
		}, 50);

		execute(function () {
			view.showInAnimation();
		}, 100);

	},

	showInAnimation: function () {

		var view = this,
			isScreenAnimation = info.get('screenAnimation') === 'on';

		if (isScreenAnimation) {
			view.$el.addClass('hint-container-show-in');
		} else {
			view.$el.addClass('hint-container-show-in-no-animation');
		}

	},

	showOutAnimation: function () {

		var view = this,
			$el = view.$el,
			deferred = $.Deferred(),
			animationEnd = info.get('animationEnd', true),
			isScreenAnimation = info.get('screenAnimation') === 'on';

		if (isScreenAnimation && $el.hasClass('hint-container-show-in')) {

			$el.one(animationEnd, function () {
				deferred.resolve();
			}); // work only one time

			$el.addClass('hint-container-show-out');

		} else {
			deferred.resolve();
		}

		return deferred.promise();

	},

	setCoordinates: function (data) {

		var view = this,
			allCoordinates = view.getAllCoordinates(data);

		view.setFadeCoordinates({
			$hintFocus: data.$hintFocus,
			allCoordinates: allCoordinates
		});

		view.setHintCoordinates({
			$text: data.$text,
			allCoordinates: allCoordinates
		});

	},

	setHintCoordinates: function (data) {

		var view = this,
			textWidth = 12,
			halfTextWidth = textWidth / 2,
			xys = data.allCoordinates,
			maxWidth = xys.maxWidth,
		//maxHeight = xys.maxHeight,
			minX1 = 1,
			maxX2 = maxWidth - minX1,
			x1, y1, x2, dx = 0;
		//y2,
		//dy;

		x1 = xys.center.bottom.x - halfTextWidth;
		y1 = xys.center.bottom.y;

		x2 = x1 + textWidth;

		if (x1 <= minX1) {
			dx = minX1 - x1;
		}

		if (x2 >= maxX2) {
			dx = maxX2 - x2;
		}

		data.$text.css({
			width: textWidth + s,
			top: y1 + s,
			left: x1 + dx + s
		});

		data.$text.find(view.selectors.hintArrow).css({
			left: halfTextWidth - dx + s
		});

	},

	setFadeCoordinates: function (data) {

		var view = this,
			isScreenAnimation = info.get('screenAnimation') === 'on',
			xys = data.allCoordinates;

		if (isScreenAnimation) {
			data.$hintFocus.css({
				left: xys.x1 + s,
				top: xys.y1 + s,
				width: xys.width + s,
				height: xys.height + s
			});
		} else {
			data.$hintFocus.remove();
		}

	},

	getAllCoordinates: function (data) {

		var view = this,
			remSize = info.get('remSize', true),
			maxWidth = device.get('width') / remSize,
			maxHeight = device.get('height') / remSize,
			coordinates = data.coordinates,
			width = coordinates.width,
			height = coordinates.height,
			x1 = coordinates.x1,
			y1 = coordinates.y1,
			x2, y2;

		if (x1 < 0) {
			x1 = maxWidth + x1 - width;
		}

		if (y1 < 0) {
			y1 = maxHeight + y1 - height;
		}

		// set _ coordinates
		if (coordinates.hasOwnProperty('width')) {
			x2 = x1 + width;
		} else {
			x2 = coordinates.x2;
			x2 = x2 >= 0 ? x2 : maxWidth + x2;
			width = x2 - x1;
		}

		// set | coordinates
		if (coordinates.hasOwnProperty('height')) {
			y2 = y1 + height;
		} else {
			y2 = coordinates.y2;
			y2 = y2 >= 0 ? y2 : maxHeight + y2;
			height = y2 - y1;
		}

		return {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			width: width,
			height: height,
			maxWidth: maxWidth,
			maxHeight: maxHeight,

			// you can add your custom coordinates
			center: {
				bottom: {
					x: x1 + width / 2,
					y: y2
				}
			}
		};

	},

	hide: function (evt, dataArg) {

		var view = this,
			data = dataArg || {},
			submitType = view.get('submitType'),
			hints = info.get('hint'),
			hintName = view.get('name');

		hints[hintName] = hints[hintName] || {};

		if (data.doNotTrack) {
			view.clearOnHides();
		} else {
			if (submitType === 'normal') {
				hints[hintName].state = 'done';
				info.set('hint', hints);
			}
		}

		view.showOutAnimation().then(function () {
			BaseView.prototype.hide.call(view);
			view.runOnHides();
		});

	},

	bindEventListeners: function () {

	},

	unbindEventListeners: function () {

	},

	onHide: function (fn, args, context) {

		var view = this,
			onHides = view.get('onHides') || [];

		onHides.push({
			fn: fn,
			args: args,
			context: context
		});

		view.set('onHides', onHides);

		return view;

	},

	runOnHides: function () {

		var view = this,
			onHides = view.get('onHides') || [];

		_.each(onHides, function (item) {
			item.fn.apply(item.context, item.args);
		});

		view.set('onHides', null);

	},

	clearOnHides: function () {
		this.set('onHides', null);
	}

});

hintMaster = {
	showHint: function (data, result) {
		return result ? (result.view = new HintView(data)) : new HintView(data);
	}
};

mediator.installTo(hintMaster);

hintMaster.subscribe('showHint', hintMaster.showHint);

export default hintMaster;
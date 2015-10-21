'use strict';
/*global window */

import BaseView from './base';
import $ from './../../lib/jquery';
import _ from './../../lib/lodash';
import sm from './../../sound/sound-master';
import tm from './../../services/template-master';
import info from './../../services/info';

var win = window,
	PopupView;

PopupView = BaseView.extend({

	events: {
		//'click .js-popup-container': 'stopEvent'
		'click': 'hidePopupByRouter',
		'scroll': 'stopEvent'
	},

	selectors: {
		popupContainer: '.js-popup-container'
	},

	initialize: function (data) { // timeout, cssClass, from, data {text, header ...}, append$el, sound, onShow {context, fn}, onHide {context, fn}

		var view = this,
			popupUrl = view.popupUrl,
			url = win.location.href;

		if (url.indexOf(popupUrl) === -1) {
			view.routeToPopup();
		}

		view.extendFromObj(data); // name, parentView, data(objToView)

		view.setElement(tm.tmplFn['popup-wrapper']());

		if (data.cssClass) {
			view.$el.addClass(data.cssClass);
		}

		BaseView.prototype.initialize.apply(this, arguments);

		view.render();

		view.showInAnimation();

		view.bindEventListeners();

	},

	bindEventListeners: function () {

		var view = this,
			timeout = view.get('timeout'),
			timeoutId;

		if (timeout) {
			timeoutId = setTimeout(function () {
				view.hidePopupByRouter();
			}, timeout);
			view.set('timeoutId', timeoutId);
		}

		view.bindExtraEvents();

	},

	unbindEventListeners: function () {

		var view = this,
			timeout = view.get('timeout');

		if (timeout) {
			clearTimeout(view.get('timeoutId'))
		}

		view.unbindExtraEvents();

	},

	bindExtraEvents: function () {

		var view = this,
			$el = view.$el,
			events = view.get('extraEvents');

		_.each(events, function (data) {
			$el.find(data.selector).on(data.event, data.fn);
		});

	},

	unbindExtraEvents: function () {

		var view = this,
			$el = view.$el,
			events = view.get('extraEvents');

		_.each(events, function (data) {
			$el.find(data.selector).off(data.event, data.fn);
		});

	},

	render: function () {

		var view = this,
			append$el = view.get('append$el'),
			data = view.get('data') || {},
			sound = view.get('sound'),
			$content = $(tm.tmplFn[view.get('name')](data)),
			$container = view.$el.find(view.selectors.popupContainer),
			onShow = view.get('onShow'),
			context;

		if (sound) {
			sm.play(sound);
		}

		$container.append($content);

		view.$wrapper.append(view.$el);

		if (onShow) {
			context = onShow.context || view;
			context[onShow.fn].apply(context, onShow.args);
		}

	},

	hide: function () {

		var view = this;

		view.showOutAnimation().then(function () {

			var onHide = view.get('onHide'),
				context;

			if (onHide) {
				context = onHide.context || view;
				context[onHide.fn].apply(context, onHide.args);
			}

			BaseView.prototype.hide.call(view);

			view.get('deferred').resolve();

		});

	},

	// actions
	showInAnimation: function () {
		var view = this;
		view.$el.addClass('popup-show-in');
	},

	showOutAnimation: function () {

		var view = this,
			$el = view.$el,
			deferred = $.Deferred(),
			animationEnd = info.get('animationEnd', true);

		$el.one(animationEnd, function () {
			deferred.resolve();
		}); // work only one time

		$el.addClass('popup-show-out');

		return deferred.promise();

	}


});

export default PopupView;
'use strict';
/*global window */

import BaseView from './base';
import $ from './../../../lib/jbone';
import _ from './../../../lib/lodash';
import sm from './../../../sound/sound-master';
import tm from './../../../services/template-master';
import info from './../../../services/info';
import mediator from './../../../services/mediator';

var win = window,
	PopupView,
	popupMaster;

PopupView = BaseView.extend({

	events: {
		//'click .js-popup-container': 'stopEvent'
		//'click': 'hidePopupByRouter',
		scroll: 'stopEvent'
	},

	selectors: {
		popupContainer: '.js-popup-container'
	},

	initialize: function (data) {

	// timeout, cssClass, from,
	// data {text, header ...},
	// sound,
	// hideOnClick
	// onShow {context, fn}, onHide {context, fn}

		var view = this,
			popupUrl = view.popupUrl,
			url = win.location.href;

		if (url.indexOf(popupUrl) === -1) {
			view.publish('route-to-popup');
		}

		if (data.hideOnClick) {
			view.events.click = 'hidePopupByRouter';
		}

		view.extendFromObj(data); // name, parentView, data(objToView)

		view.setElement(tm.get('popup-wrapper')(data));

		if (data.cssClass) {
			view.$el.addClass(data.cssClass);
		}

		BaseView.prototype.initialize.apply(this, arguments);

		view.render();

		view.showInAnimation();

		view.bindEventListeners();

		view.set('deferred', $.Deferred());

		view.subscribe('hide-popup', view.hide);

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
			clearTimeout(view.get('timeoutId'));
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
			//append$el = view.get('append$el'),
			data = view.get('data') || {},
			sound = view.get('sound'),
			$content = $(tm.get(view.get('name'))(data)),
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
				context,
				deferred = view.get('deferred');

			if (onHide) {
				context = onHide.context || view;
				context[onHide.fn].apply(context, onHide.args || []);
			}

			BaseView.prototype.hide.call(view);

			deferred.resolve();

		});

	},

	// actions
	showInAnimation: function () {

		// todo: add check for animation is on/off

		var view = this;
		view.$el.addClass('popup-show-in');
	},

	showOutAnimation: function () {

		// todo: add check for animation is on/off

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

popupMaster = {
	showPopup: function (data, result) {
		return result ? (result.view = new PopupView(data)) : new PopupView(data);
	}
};

mediator.installTo(popupMaster);

popupMaster.subscribe('show-popup', popupMaster.showPopup);

export default popupMaster;
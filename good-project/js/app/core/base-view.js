define(['underscore', 'jquery', 'backbone', 'mediator', 'router', 'templateMaster', 'log', 'info'], function (_, $, bb, mediator, router, templateMaster, log, info) {

	'use strict';

	return bb.View.extend({

		baseEvents: {
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack'
		},

		baseSelectors: {
			//wrapper: '.js-wrapper',
			//viewWrapper: '.js-view-wrapper'
		},

		// will be changed after initStatic
		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend'],
			dbl: ['dblclick', 'doubletap']
		},

		tmpl: templateMaster.tmplFn,

		info: info,

		constructor: function() {

			var view = this,
				proto = view.constructor.prototype,
				newEvents = {};

			view.events = $.extend( {}, proto.baseEvents, view.events );

			// prepare extra events from eventTypes
			_.each(view.events, function (functionName,  eventAndSelector) {
				newEvents[view.getFullEventNameAndSelector(eventAndSelector)] = functionName;
			});

			view.events = newEvents;

			view.selectors = $.extend( {}, proto.baseSelectors, view.selectors );

			mediator.installTo(view);

			view.subscribe('hide', view.hide);

			//view.attr = {};

			//view.setClassNames();

			//view.proto = proto;

			return bb.View.prototype.constructor.apply(view, arguments);

		},

		getFullEventNameAndSelector: function (eventNameAndSelector) {

			var view = this,
				arr = eventNameAndSelector.split(' '),
				newEventName = view.eventTypes[arr[0]];

			if (newEventName) {
				return [newEventName, arr[1]].join(' ');
			}

			return eventNameAndSelector;

		},

		routeTo: function (e) {

			var $this = $(e.currentTarget),
				route = $this.attr('data-route');

			router.navigate(route, true);

		},

		routeBack: function () {

			if (window.location.hash) {
				bb.history.history.back();
			}

		},

		render: function () {

			var view = this;

			$('.js-wrapper').append(view.$el);

			view.publish('hide', {except: [this]});

		},

		hide: function (dataArg) {

			var view = this,
				data = dataArg || {},
				info = view.info,
				$el = view.$el,
				animationEnd = info.get('animationEnd', true),
				isScreenAnimation = info.get('screenAnimation') === 'on',
				deferred = $.Deferred();

			if ( _.contains(data.except, view) ) {
				log(view, 'not!!');
				return;
			}

			if (view.unbindEventListeners) {
				view.unbindEventListeners();
			}

			if (isScreenAnimation && $el.hasClass('show-view-animation')) {
				$el.one(animationEnd, function () {
					view.destroyView();
					deferred.resolve();
				});
				//$el.removeClass('show-view-animation');
				$el.addClass('hide-view-animation');
			} else {
				view.destroyView();
				deferred.resolve();
			}

		},

		destroyView: function() {

			var view = this;

			view.undelegateEvents();

			view.$el.removeData().unbind().remove().empty();

			view.remove();
			view.unbind();

			bb.View.prototype.remove.call(view);

		},

		initStatic: function () {

			var proto = this,
				info = proto.info,
				isTouch = info.get('isTouch', true),
				eventTypesIndex = Number(isTouch),
				types = proto.eventTypes;

			proto.$wrapper = $('.js-wrapper');

			_.each(types, function (typesArr, key) {
				types[key] = typesArr[eventTypesIndex];
			});

			$(window.document.body).on('contextmenu', proto.stopEvent);

		},

		stopEvent: function (e) {

			if (!e) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

		}


	});

});
define(['underscore', 'jquery', 'backbone', 'mediator', 'router', 'templateMaster'], function (_, $, bb, mediator, router, templateMaster) {

	'use strict';

	return bb.View.extend({

		baseEvents: {
			'click [data-route]': 'routeTo'
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

			var view = this,
				$this = $(e.currentTarget),
				route = $this.attr('data-route');

			router.navigate(route, true);

		},

		render: function () {

			$('.js-wrapper').append(this.$el);

		}

	});

});
define(['underscore', 'jquery', 'backbone', 'mediator'], function (_, $, bb, mediator) {

	'use strict';

	return bb.View.extend({

		events: {

		},

		selectors: {
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

		constructor: function() {

			var view = this,
				proto = view.constructor.prototype,
				newEvents = {};

			view.events = $.extend( {}, proto.events, view.events );

			// prepare extra events from eventTypes
			_.each(view.events, function (functionName,  eventAndSelector) {
				newEvents[view.getFullEventNameAndSelector(eventAndSelector)] = functionName;
			});

			view.events = newEvents;

			view.selectors = $.extend( {}, proto.selectors, view.selectors );

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

		}

	});

});


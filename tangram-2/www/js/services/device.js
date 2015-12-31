'use strict';
/*global window */

import Backbone from './../lib/backbone';
import mediator from './mediator';

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	device,
	Device = Backbone.Model.extend({

		defaults: {
			width: 0,
			height: 0,
			orientation: ''
		},

		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend']
		},

		events: {},

		mapEventType: {
			mousedown: 'down',
			touchstart: 'down',
			mousemove: 'move',
			touchmove: 'move',
			mouseup: 'up',
			touchend: 'up'
		},

		initialize: function () {

			var device = this;

			device.collectInfo();

			device.setPointData({ x: 0, y: 0, scale: 1 });

			device.bindEventListeners();

			mediator.installTo(device);

			device.onResize();

		},

		collectInfo: function () {

			var device = this,
				isTouch = 'ontouchstart' in doc,
				eventTypesIndex = Number(isTouch),
				types = device.eventTypes,
				events = device.events;

			// set is touch
			device.set('isTouch', isTouch);

			// set events names - touch or mouse
			_.each(types, function (typesArr, key) {
				events[key] = typesArr[eventTypesIndex];
			});

		},

		bindEventListeners: function () {

			var device = this,
				events = device.events,
				body = doc.body;

			win.addEventListener('resize', function () {
				device.onResize();
			}, false);

			body.addEventListener(events.down, function (e) {
				device.onDown(e);
			}, false);

			body.addEventListener(events.move, function (e) {
				device.onMove(e);
			}, false);

			body.addEventListener(events.up, function (e) {
				device.onUp(e);
			}, false);

			device.on('change:actionIsActive', function (self, actionIsActive) {

				if ( actionIsActive ) {
					device.publish('deviceActionIsActive', actionIsActive, {xy: device.get('startDownEventXY') });
				} else {
					device.publish('deviceActionIsActive', actionIsActive);
				}

			});

		},

		getEvents: function (e) {

			//e = e.originalEvent; // for jQ like

			var device = this,
				evt = {
					events: [],
					length: 0,
					type: ''
				},
				events = e.touches || [e];

			evt.length = events.length;
			evt.type = device.mapEventType[e.type];

			_.each(events, function (e) {
				evt.events.push({
					x: e.clientX,
					y: e.clientY
				});
			});

			return evt;

		},

		getAverageXY: function (arr) {

			var sumX = 0,
				sumY = 0,
				count = arr.length;

			_.each(arr, function (xy) {
				sumX += xy.x;
				sumY += xy.y;
			});

			return {
				x: sumX / count,
				y: sumY / count
			};

		},

		logMoving: function (xy) {

			var device = this,
				logMoving = device.get('log-moving');

			if (logMoving.length > 10) {
				logMoving.shift(); // delete first item
			}

			logMoving.push({
				x: xy.x,
				y: xy.y,
				timeStamp: Date.now()
			});

			//device.set('log-moving', logMoving);

		},

		clearLogMoving: function () {
			this.set('log-moving', []);
		},

		getPinchData: function (events) {

			var device = this,
				startEvents = device.get('pinchStartEvents'),
				before,
				after;

			before = Math.pow(startEvents[0].x - startEvents[1].x, 2) + Math.pow(startEvents[0].y - startEvents[1].y, 2);
			before = Math.pow(before, 0.5);

			after = Math.pow(events[0].x - events[1].x, 2) + Math.pow(events[0].y - events[1].y, 2);
			after = Math.pow(after, 0.5);

			return {
				scale: (after / before) || 1
			};

		},

		setPointData: function (xys) {

			var device = this;

			if (xys.hasOwnProperty('x')) {
				device.set('pointDataX', xys.x);
			}

			if (xys.hasOwnProperty('y')) {
				device.set('pointDataY', xys.y);
			}

			if (xys.hasOwnProperty('scale')) {
				device.set('pointDataScale', xys.scale);
			}

			return device;
		},

		getPointData: function () {

			var device = this;

			return {
				x: device.get('pointDataX'),
				y: device.get('pointDataY'),
				scale: device.get('pointDataScale')
			};

		},

		onDown: function (e) {

			var device = this,
				events = device.getEvents(e),
				startEventXY = device.getAverageXY(events.events),
				pointData = device.getPointData();

			// set start events position
			device.set('startDownEventXY', startEventXY);

			// set start point position
			device.set('startPointData', pointData);
			device.set('currentPointData', pointData);

			device.set('actionIsActive', true);

			device.clearLogMoving();
			device.logMoving(startEventXY);

			// detect start zooming
			if (events.length === 2) {
				device.set('pinchIsActive', true);
				device.set('pinchStartEvents', events.events);
			} else {
				device.set('pinchIsActive', false);
			}

		},

		onMove: function (e) {

			if ( !this.get('actionIsActive') ) {
				return false;
			}

			var device = this,
				events = device.getEvents(e),
				currentEventXY = device.getAverageXY(events.events),
				currentPointData = device.get('currentPointData'),
				logMoving = device.get('log-moving'),
				lastEventXY = logMoving[logMoving.length - 1],
				pinchData,
				x,
				y,
				dx,
				dy,
				scale;

			dx = lastEventXY.x - currentEventXY.x;
			x = currentPointData.x - dx;

			dy = lastEventXY.y - currentEventXY.y;
			y = currentPointData.y - dy;

			device.set('currentPointData', {
				x: x,
				y: y
			});

			if ( device.get('pinchIsActive') ) { // zooming
				pinchData = device.getPinchData(events.events);
				scale = pinchData.scale;
				device.setPointData({
					x: x * scale,
					y: y * scale,
					scale: scale
				});
			} else { // just moving
				device.setPointData({
					x: x,
					y: y
				});
			}

			device.logMoving(currentEventXY);

		},

		onUp: function (e) {

			var device = this,
				events = device.getEvents(e),
				eventsArr = events.events,
				eventsArrLength = eventsArr.length,
				isTouch = device.get('isTouch');

			if ( !eventsArrLength && isTouch && device.get('pinchIsActive') ) { // 2 fingers -> 0 finger
				device.set('pinchIsActive', false);
				device.set('actionIsActive', false);
				//device.setContainerSize();
				return;
			}

			if ( !eventsArrLength || !isTouch) { // if is not touch device - stop moving
				device.set('actionIsActive', false);
				//this.sliding();
				device.clearLogMoving();
				return;
			}

			if (eventsArrLength === 1 && isTouch) { // 2 fingers -> 1 finger
				device.set('pinchIsActive', false);
				//device.setContainerSize();
				device.onDown(e);
			}

		},

		onResize: function () {

			var device = this,
				width = docElem.clientWidth,
				height = docElem.clientHeight,
				orientation = width > height ? '-' : '|',
				data = {
					width: width,
					height: height,
					orientation: orientation
				};

			device.set(data);

			device.trigger('resize');

			device.publish('resize', data);

		}

	});

device = new Device();

export default device;
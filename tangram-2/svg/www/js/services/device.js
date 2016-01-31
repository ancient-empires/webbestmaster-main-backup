'use strict';
/*global window */

import Backbone from './../lib/backbone';
import mediator from './mediator';
import log from './log';

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	device,
	Device = Backbone.Model.extend({

		defaults: {
			width: 0,
			height: 0,
			orientation: '',
			minScreenSize: 153600 // 153600 = 320 * 480
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

			device.clearLogMoving();

			device.clearLogDown();

			device.collectInfo();

			device.setPointData({x: 0, y: 0, scale: 1});

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
				self.publish('deviceAction:isActive', actionIsActive, self.logMovingGetLast());
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

		logDown: function (events) {

			var device = this,
				logDown = device.get('log-down'),
				xy;

			if (events.length !== 1) {
				return;
			}

			if (logDown.length > 10) {
				logDown.shift(); // delete first item
			}

			xy = events.events[0];

			logDown.push({
				x: xy.x,
				y: xy.y,
				timeStamp: Date.now()
			});

		},

		clearLogDown: function () {
			return this.set('log-down', []);
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
			return this.set('log-moving', []);
		},

		logMovingGetLast: function () {

			var logMoving = this.get('log-moving');

			return logMoving[logMoving.length - 1];

		},

		getPinchData: function (events) {

			var device = this,
				startEvents = device.get('pinchStartEvents'),

				startXY0 = startEvents[0],
				startXY1 = startEvents[1],
				startXY0X = startXY0.x,
				startXY0Y = startXY0.y,
				startXY1X = startXY1.x,
				startXY1Y = startXY1.y,
				startVectorX = startXY1X - startXY0X,
				startVectorY = startXY1Y - startXY0Y,

				currentXY0 = events[0],
				currentXY1 = events[1],
				currentXY0X = currentXY0.x,
				currentXY0Y = currentXY0.y,
				currentXY1X = currentXY1.x,
				currentXY1Y = currentXY1.y,
				currentVectorX = currentXY1X - currentXY0X,
				currentVectorY = currentXY1Y - currentXY0Y,

				before,
				after,
				startAngle,
				currentAngle,
				deltaAngle;

			// get scale
			before = Math.pow(startXY0X - startXY1X, 2) + Math.pow(startXY0Y - startXY1Y, 2);
			before = Math.pow(before, 0.5);

			after = Math.pow(currentXY0X - currentXY1X, 2) + Math.pow(currentXY0Y - currentXY1Y, 2);
			after = Math.pow(after, 0.5);

			// get angle
			startAngle = Math.atan2(startVectorY, startVectorX);
			currentAngle = Math.atan2(currentVectorY, currentVectorX);
			deltaAngle = (currentAngle - startAngle) * 180 / Math.PI;

			return {
				scale: (after / before) || 1,
				deltaAngle: deltaAngle
			}

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

			device.clearLogMoving();
			device.logMoving(startEventXY);
			device.logDown(events);

			device.set('actionIsActive', true);

			// detect start zooming
			if (events.length === 2) {
				device.set('pinchIsActive', true);
				device.set('pinchStartEvents', events.events);
			} else {
				device.set('pinchIsActive', false);
			}

		},

		onMove: function (e) {

			if (!this.get('actionIsActive')) {
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

			dx = currentEventXY.x - lastEventXY.x;
			x = currentPointData.x + dx;

			dy = currentEventXY.y - lastEventXY.y;
			y = currentPointData.y + dy;

			device.set('currentPointData', {
				x: x,
				y: y
			});

			if (device.get('pinchIsActive')) { // zooming
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

			device.publish('deviceAction:moving', {
				x: currentEventXY.x,
				y: currentEventXY.y,
				dx: dx,
				dy: dy
			});

			device.logMoving(currentEventXY);

		},

		onUp: function (e) {

			var device = this,
				events = device.getEvents(e),
				eventsArr = events.events,
				eventsArrLength = eventsArr.length,
				isTouch = device.get('isTouch'),
				pinchIsActive = device.get('pinchIsActive');

			// try to detect double click
			// and auto trigger event

			if (!eventsArrLength && isTouch && pinchIsActive) { // 2 fingers -> 0 finger
				device.set('pinchIsActive', false);
				device.set('actionIsActive', false);
				device.checkDblTap();
				//device.setContainerSize();
				return;
			}

			if (!eventsArrLength || !isTouch) { // if is not touch device - stop moving
				device.set('actionIsActive', false);
				//this.sliding();
				device.checkDblTap();
				device.clearLogMoving();
				return;
			}

			if (eventsArrLength === 1 && isTouch) { // 2 fingers -> 1 finger
				device.set('pinchIsActive', false);
				//device.setContainerSize();
				device.onDown(e);
			}

		},

		checkDblTap: function () {

			var device = this,
				downLog = device.get('log-down'),
				downLogLength = downLog.length,
				lastDown = downLog[downLogLength - 1],
				preLastDown = downLog[downLogLength - 2];

			if ( downLogLength < 2 ) {
				return;
			}

			// timer check
			if ( (lastDown.timeStamp - preLastDown.timeStamp) > 300 ) {
				return;
			}

			// coordinates check
			if ( Math.abs(lastDown.x - preLastDown.x) > 10 || Math.abs(lastDown.y - preLastDown.y) > 10 ) {
				return;
			}

			device.publish('deviceAction:dblTap', lastDown);

		},

		onResize: function () {

			var device = this,
				width = docElem.clientWidth,
				height = docElem.clientHeight,
				orientation = width > height ? '-' : '|',
				data = {
					width: width,
					height: height,
					orientation: orientation,
					spaceSize: width * height
				};

			device.set(data);

			device.trigger('resize');

			device.publish('resize', data);

		}

	});

device = new Device();

export default device;
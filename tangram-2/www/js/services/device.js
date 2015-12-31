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

		initialize: function () {

			var device = this;

			device.bindEventListeners();

			mediator.installTo(device);

			device.onResize();

		},

		bindEventListeners: function () {

			var device = this;

			win.addEventListener('resize', function () {
				device.onResize();
			}, false);

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
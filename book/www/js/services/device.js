/*jslint white: true, nomen: true */
(function (win, doc, docElem) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};
	win.APP.BB = win.APP.BB || {};

	win.APP.BB.DeviceModel = Backbone.Model.extend({

		defaults: {
			width: 0,
			height: 0,
			orientation: ''
		},

		initialize: function () {

			var device = this;

			device.bindEventListeners();

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
				orientation = width > height ? '-' : '|';

			device.set({
				width: width,
				height: height,
				orientation: orientation
			});

			device.trigger('resize');

		}

	});

}(window, window.document, window.document.documentElement ));
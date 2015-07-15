/*jslint white: true, nomen: true */
(function (win, doc, docElem) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};
	win.APP.BB = win.APP.BB || {};

	win.APP.BB.DeviceModel = Backbone.Model.extend({

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
				height = docElem.clientHeight;

			device.set('width', width);
			device.set('height', height);

			device.trigger('resize');

		}




	});

}(window, window.document, window.document.documentElement ));
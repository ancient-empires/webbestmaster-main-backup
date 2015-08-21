define(['jquery', 'backbone', 'mediator'], function ($, bb, mediator) {

	'use strict';
	/*global window */

	var win = window,
		doc = win.document,
		docElem = doc.documentElement,
		Device,
		device;

	Device = bb.Model.extend({

		url: {
			internetConnection: 'http://statlex.com/i/statlex-icon.png'
		},

		initialize: function () {

			var device = this;

			device.bindEventListeners();

		},

		bindEventListeners: function () {

			var device = this;

			win.addEventListener('resize', function () {
				device.onResize();
			}, false);

		},

		onResize: function () {

			var device = this;

			device.set({
				width: docElem.clientWidth,
				height: docElem.clientHeight
			});

			device.publish('resize');

		},

		checkInternetConnection: function () {

			var device = this,
				url = device.url.internetConnection + '?timestamp=' + Date.now(),
				img = new Image(),
				deferred = $.Deferred();

			function onLoad() {
				img.removeEventListener('load', onLoad, false);
				img.removeEventListener('error', onError, false);
				device.set('isOnLine', true);
				device.publish('connectionStatus', true);
				deferred.resolve();
			}

			function onError() {
				img.removeEventListener('load', onLoad, false);
				img.removeEventListener('error', onError, false);
				device.set('isOnLine', false);
				device.publish('connectionStatus', false);
				deferred.reject();
			}

			img.addEventListener('load', onLoad, false);

			img.addEventListener('error', onError, false);

			img.src = url;

			return deferred.promise();

		}

	});

	device = new Device();

	mediator.installTo(device);

	device.onResize();

	device.checkInternetConnection();

	return device;

});
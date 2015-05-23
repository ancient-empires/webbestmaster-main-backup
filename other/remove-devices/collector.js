/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global window */
	/*global */

	var collector = {

		selectors: {
			itemWrapper: '[data-device-id]',
			deviceName: '[data-device-name]',
			product: '[data-product]'
		},

		findAll: function (selector, context) {

			return this.toArray((context || doc).querySelectorAll(selector));

		},

		find: function (selector, context) {

			return (context || doc).querySelector(selector);

		},

		toArray: function (list) {

			return Array.prototype.slice.call(list);

		},

		collect: function () {

			var collector = this,
				selectors = collector.selectors,
				wrappers = collector.findAll(selectors.itemWrapper),
				devices = [];

			wrappers.forEach(function (node) {

				var nodeProduct = collector.find(selectors.product, node),
					nodeDeviceName = collector.find(selectors.deviceName, node),
					product = null,
					deviceName = null;

				if (nodeProduct) {
					product = nodeProduct.innerHTML.trim();
				}

				if (nodeDeviceName) {
					deviceName = nodeDeviceName.innerHTML.trim()
						// remove extra symbols
						.replace(/^\–/, '').trim();
				}

				devices.push({
					product: product,
					deviceName: deviceName
				});

			});

			console.log(JSON.stringify(devices));
			console.log(devices.length);

		}

	};

	win.collector = collector;

}(window, window.document));
/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global window */
	/*global */

	var disabler = {

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

		}


	};

	win.disabler = disabler;

}(window, window.document));
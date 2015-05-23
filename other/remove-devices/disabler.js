/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global window */
	/*global */

	var disabler = {

		selectors: {
			searchInput: '.DWI0QJD-cc-d'
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

		dispatchChange: function (data) {

			var node = data.node,
				evt = new Event('change');

			node.dispatchEvent(evt);

		},

		dispatchClick: function (data) {

			var node = data.node,
				evt = doc.createEvent('MouseEvents');

			evt.initEvent('click', true, true );

			node.dispatchEvent(evt);

		},

		disableDevice: function (data) {

			var disabler = this,
				deferred = Promise.defer(),
				deviceWrapper,
				deviceName = data.deviceName,
				selectors = disabler.selectors,
				input = disabler.find(selectors.searchInput);

				input.value = deviceName;
				disabler.dispatchChange({ node: input });

			setTimeout(function () {
				deviceWrapper = disabler.find('[data-device-id="' + deviceName + '"]');

				if (!deviceWrapper) {
					console.log(deviceName + ' is not found');
					return;
				}

				var checkbox = disabler.find('checkbox', deviceWrapper);

				if (checkbox.getAttribute('aria-disabled') === 'true') {
					console.log(deviceName + ' - disabled by google');
					return;
				}

				if (checkbox.getAttribute('aria-checked') === 'true') {
					return;
				}

				disabler.dispatchClick({ node: checkbox });

			}, 100);

			setTimeout(function () {
				deferred.resolve();
			}, 500);

			return deferred.promise;

		},

		disableDevices: function () {

			var disabler = this,
				deferred = Promise.defer(),
				promise = deferred.promise,
				devices = window.devices;

			devices.forEach(function (data) {
				promise = promise.then(function () {
					return disabler.disableDevice(data);
				});
			});

			deferred.resolve();

		}

	};

	win.disabler = disabler;

}(window, window.document));
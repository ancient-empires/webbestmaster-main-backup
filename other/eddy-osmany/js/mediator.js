/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */


	var mediator = (function() {

		var subscribe = function(channel, fn) {

				var channels = mediator.channels;

				if ( !channels[channel] ) {
					channels[channel] = [];
				}

				channels[channel].push({ context: this, callback: fn });

				return this;

			},

			publish = function(channel) {

				var list = mediator.channels[channel],
					args;

				if ( !list ) {
					return this;
				}

				args = Array.prototype.slice.call(arguments, 1);

				list.forEach(function (item) {
					item.callback.apply(item.context, args);
				});

				return this;

			},

			unsubscribe = function (channel) {

				var channels = mediator.channels;

				if ( !channels[channel] ) {
					return this;
				}

				channels[channel] = channels[channel].filter(function (item) {
					return item.context !== this;
				}, this);

				return this;

			};

		return {
			channels: {},
			publish: publish,
			subscribe: subscribe,
			unsubscribe: unsubscribe,
			installTo: function(obj) {
				obj.subscribe = subscribe;
				obj.publish = publish;
				obj.unsubscribe = unsubscribe;

			}
		};

	}());

	win.mediator = mediator;


}(window));
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
					return false;
				}

				args = Array.prototype.slice.call(arguments, 1);

				list.forEach(function (item) {
					item.callback.apply(item.context, args);
				});

				return this;

			},

			unSubscribe = function (channel) {

				mediator.channels[channel] = mediator.channels[channel].filter(function (item) {
					return item.context !== this;
				}, this);

			};

		return {
			channels: {},
			publish: publish,
			subscribe: subscribe,
			unSubscribe: unSubscribe,
			installTo: function(obj) {
				obj.subscribe = subscribe;
				obj.publish = publish;
				obj.unSubscribe = unSubscribe;

			}
		};

	}());

	win.mediator = mediator;


}(window));
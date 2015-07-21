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

			};

		return {
			channels: {},
			publish: publish,
			subscribe: subscribe,
			installTo: function(obj) {
				obj.subscribe = subscribe;
				obj.publish = publish;
			}
		};

	}());

	win.mediator = mediator;


}(window));
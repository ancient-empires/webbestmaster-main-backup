'use strict';
/*global window */

import log from './log';

var mediator;

function subscribe(channel, fn) {

	var channels = mediator.channels;

	if (!channels[channel]) {
		channels[channel] = [];
	}

	channels[channel].push({context: this, callback: fn});

	return this;

}

function publish(channel) {

	var list = mediator.channels[channel],
		args;

	log('publish -', channel, arguments);

	if ( !list ) {
		return this;
	}

	args = Array.prototype.slice.call(arguments, 1);

	list.forEach(function (item) {
		item.callback.apply(item.context, args);
	});

	return this;

}

function unsubscribe(channel) {

	var channels = mediator.channels,
		ch;

	if (!channel) {

		for (ch in channels) {
			if (channels.hasOwnProperty(ch)) {
				this.unsubscribe(ch);
			}
		}

		return this;

	}

	if (!channels[channel]) {
		return this;
	}

	channels[channel] = channels[channel].filter(function (item) {
		return item.context !== this;
	}, this);

	return this;

}

mediator = {
	channels: {},
	publish: publish,
	subscribe: subscribe,
	unsubscribe: unsubscribe,
	installTo: function (obj) {
		obj.subscribe = subscribe;
		obj.publish = publish;
		obj.unsubscribe = unsubscribe;
	},
	uninstallFrom: function (obj) {
		['subscribe', 'publish', 'unsubscribe'].forEach(function (methodName) {
			obj[methodName] = null;
			delete obj[methodName];
		});
	}
};

export default mediator;

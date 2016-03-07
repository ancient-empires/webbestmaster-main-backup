'use strict';
/*global window */
/*global */

import $ from './jbone';

function Queue() {

	this.queue = [];
	this.index = 0;
	this.deferred = $.Deferred();

}

Queue.prototype = {

	push: function (fn) {
		this.queue.push(fn);
	},

	getNext: function () {
		return this.queue[this.index++];
	},

	canNext: function () {
		return this.queue.length > this.index;
	},

	run: function () {

		var self = this,
			result;

		if (!self.canNext()) {
			return self.end();
		}

		result = self.getNext()();
		if (result && result.always) {
			result.always(self.run.bind(self));
		} else {
			self.run();
		}

		return self.deferred.promise();

	},
	end: function () {
		return this.deferred.resolve();
	}

};

export default Queue;
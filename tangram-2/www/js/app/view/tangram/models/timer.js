'use strict';
/*global window */

import Backbone from './../../../../lib/backbone';
import mediator from './../../../../services/mediator';
import info from './../../../../services/info';

var Timer = Backbone.Model.extend({

	defaults: {
		stars: [45e3, 90e3],
		updatePeriod: 200,
		visibleTime: '0:00'
	},

	initialize: function ($el) {

		var timer = this;

		timer.set('$el', $el);

		timer.update = timer.update.bind(timer);

		timer.bindEventListeners();

		timer.updateVisibleTime();

	},

	updateVisibleTime: function () {

		this.get('$el').html(this.get('visibleTime'));

	},

	bindEventListeners: function () {

		this.on('change:visibleTime', this.updateVisibleTime);

	},

	start: function () {

		var timer = this,
			intervalId;

		timer.set('startTime', Date.now());

		intervalId = setInterval(timer.update, timer.get('updatePeriod'));

		timer.set('intervalId', intervalId);

	},

	update: function () {

		var timer = this,
			now = Date.now(),
			start = timer.get('startTime'),
			time = now - start;

		if (time < 0) {
			console.log('!!!!!!!!!!!!!! time < 0 !!!!!!!!!!!!!!');
		}

		timer.set('time', time);
		timer.set('visibleTime', timer.formatTime(time));

	},

	destroy: function () {

		var timer = this,
			$el;

		clearInterval(timer.get('intervalId'));

		timer.get('$el').remove();

		timer.set('$el', null);

		timer.off();

		return Backbone.Model.prototype.destroy.call(timer);

	},

	formatTime: function (time) {

		var timeSec = time / 1000,
			seconds = Math.floor(timeSec % 60),
			minutes = Math.floor(timeSec / 60);

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		return minutes + ':' + seconds;

	},

	getStars: function () {

		var timer = this,
			difficult = info.get('gameDifficult'),
			difficultQ = difficult === 'regular' ? 1 : 1.6,
			time = timer.get('time'),
			stars = timer.get('stars');

		if (time < (stars[0] * difficultQ)) {
			return 3;
		}

		if (time < (stars[1] * difficultQ)) {
			return 2;
		}

		return 1;

	}

});

export default Timer;
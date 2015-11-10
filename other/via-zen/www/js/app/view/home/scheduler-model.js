'use strict';
/*global window */

import Backbone from './../../../lib/backbone';
import SchedulerView from './scheduler-view';

var schedule, SchedulerModel, key;

function parseTime(str) {

	var arr = str.match(/\d+/g),
		h = +arr[0],
		m = +(arr[1] || 0);

	return (h * 60 + m) * 60 * 1000;
}

schedule = {
	man: [
		{
			from: '8h45m',
			to: '9h'
		},
		{
			from: '16h45m',
			to: '17h'
		}
	],
	woman: [
		{
			from: '9h10m',
			to: '9h25m'
		},
		{
			from: '17h10m',
			to: '17h25m'
		}
	]
};


for (key in schedule) {
	if (schedule.hasOwnProperty(key)) {
		schedule[key] = schedule[key].map(function (timePeriod) {
			timePeriod.from = parseTime(timePeriod.from);
			timePeriod.to = parseTime(timePeriod.to);
			return timePeriod;
		});
	}
}

SchedulerModel = Backbone.Model.extend({

	schedule: schedule,

	defaults: {
		state: 'available'
	},

	initialize: function (data = {gender: 'man'}) {

		var model = this,
			gender = data.gender,
			schedule = model.schedule[gender],
			view;

		model.set({schedule});

		view = new SchedulerView({gender, schedule});

		model.set({view});

		view.setState(model.get('state'));

		view.listenTo(model, 'change:state', function (model, state) {
			view.setState(state);
		});

		view.listenTo(model, 'change:nextChangeState', function (model, time) {
			view.setNextChangeStateTime(time);
		});

	},

	updateTime: function (data) {

		var model = this,
			nextChangeState = model.getNearestTimeToChangeState(data.time);

		model.set({ nextChangeState });

		if ( model.isInScheduler(data.time) ) {
			model.set('state', 'occupied');
		} else {
			model.set('state', 'available');
		}

	},

	isInScheduler: function (time) {

		return this.get('schedule').some(function (fromTo) {
			return fromTo.from <= time && fromTo.to >= time;
		});

	},

	getNearestTimeToChangeState: function (time) {

		var model = this,
			schedule = model.get('schedule'),
			nextChange = 'to end of day';

		schedule.every(function (fromTo) {

			if (fromTo.from > time) {
				nextChange = fromTo.from - time;
				return false;
			}

			if (fromTo.to > time) {
				nextChange = fromTo.to - time;
				return false;
			}

			return true;

		});

		return nextChange;

	}

});

export default SchedulerModel;
'use strict';
/*global window */

import Backbone from './../../../lib/backbone';
import SchedulerModel from './scheduler-model';

var win = window,
	SchedulerCollection = Backbone.Collection.extend({

	model: SchedulerModel,

	attr: {},

	initialize: function () {




		this.startTime();

	},

	startTime: function () {

		var updateTimeIntervalId = win.setInterval(() => this.updateTime(), 100);

		this.setData('updateTimeIntervalId', updateTimeIntervalId);

	},

	updateTime: function () {

		var collection = this,
			date = new Date(),
			h = date.getHours(),
			m = date.getMinutes(),
			s = date.getSeconds(),
			time = ((h * 60 + m) * 60 + s)* 1000;

		collection.each( model => {
			model.updateTime({ time })
		});

	},

	setData: function (key, value) {
		this.attr[key] = value;
		return value;
	},

	getData: function (key) {
		return this.attr[key];
	},

	setViewWrapper: function ($el) {

		this.setData('$wrapper', $el);

	},

	renderToWrapper: function () {

		var collection = this,
			$wrapper = collection.getData('$wrapper');

		collection.each( model => $wrapper.append(model.get('view').$el));

	}

});

export default SchedulerCollection;






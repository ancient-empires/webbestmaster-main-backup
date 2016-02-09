'use strict';
/*global window */
/*global */

import Backbone from './../../../lib/backbone';
import mediator from './../../../services/mediator';
import log from './../../../services/log';
import WheelModel from './wheel-model';

var WheelCollection = Backbone.Collection.extend({

	model: WheelModel,

	//attr: {}, // will added to instance from initialize -> initDataStore

	setData: function (keyOrObj, value) {

		var self = this,
			attr = self.attr;

		if (typeof keyOrObj === 'string') {
			attr[keyOrObj] = value;
			return self;
		}

		Object.keys(keyOrObj).forEach(function (key) {
			this[key] = keyOrObj[key];
		}, attr);

		return self;

	},

	getData: function (key) {

		return this.attr[key];

	},

	emptyData: function () {

		this.attr = {};

		return this;

	},

	initDataStore: function () {

		this.attr = {};

	},

	initialize: function () {

		var wheelCollection = this;

		mediator.installTo(wheelCollection);

		wheelCollection.initDataStore();

	},

	initializeWheels: function (data) {

		var collection = this,
			i,
			len = data.wheelCount;

		for (i = 0; i < len; i += 1) {
			collection.initializeWheel();
			collection.publish('render:increase-wheel');
		}

		collection.publish('render:draw-wheels', {
			wheels: collection.toJSON()
		});

	},

	initializeWheel: function () {

		var collection = this;

		collection.add({
			position: Math.round(Math.random() * 9)
		});

	}


});

export default WheelCollection;
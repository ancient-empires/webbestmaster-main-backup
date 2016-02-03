'use strict';
/*global window */

import BaseView from './../core/base';
import Backbone from './../../../lib/backbone';
import ColumnModel from './column-model';

var GameCollection = Backbone.Collection.extend({

	model: ColumnModel,

	initialize: function () {

		var collection = this;

		collection.createColumns(6);

	},

	createColumn: function () {

		this.add({});

	},

	createColumns: function (count) {

		var collection = this,
			i;

		for (i = 0; i < count; i += 1) {
			collection.createColumn();
			collection.last().get('view').set('is-last', i + 1 === count);
		}

	},

	spin: function () {

		var collection = this;

		var i = 0;

		collection.each(function (model) {

			i += 1;

			setTimeout(function () {
				model.spin();
			}, (i * 300));

		});

	},

	stop: function () {

		var collection = this;

		var i = 0;

		collection.each(function (model) {

			i += 1;

			setTimeout(function () {
				model.stop();
			}, (i * 300));

		});

	}

});

export default GameCollection;
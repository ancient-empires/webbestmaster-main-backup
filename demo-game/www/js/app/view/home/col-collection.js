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

		for (var i = 0; i < count; i += 1) {
			this.createColumn();
		}

	},

	spin: function () {

		var collection = this;

		var i = 0;

		collection.each(function (model) {
			setTimeout(function () {
				model.spin();
			}, (i * 300));

			i += 1;

		});

	}

});

export default GameCollection;
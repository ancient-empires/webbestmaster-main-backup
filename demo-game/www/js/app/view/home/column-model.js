'use strict';
/*global window */

import Backbone from './../../../lib/backbone';
import ColumnView from './column-view';


var ColumnModel = Backbone.Model.extend({

	initialize: function (data) {

		var model = this,
			columnSize = 9,
			startIndex = Math.floor(Math.random() * columnSize),
			stopIndex = startIndex,
			view;

		console.log(startIndex);

		view = new ColumnView(data);

		view.set('column-size', columnSize);

		//model.set('start-index', startIndex);
		//model.set('stop-index', stopIndex);
		//model.set('column-size', columnSize);

		model.set('view', view);

		//model.bindEventListeners();

		//model.trigger('change:stop-index');

		view.moveTo({
			stopIndex: stopIndex,
			isInstant: true
		});

	},

	bindEventListeners: function () {

		return;

		var model = this,
			view = model.get('view');

		model.on('change:stop-index', function () {

			var model = this,
				view = model.get('view'),
				stopIndex = model.get('stop-index');

			view.moveTo({
				stopIndex: stopIndex
			});

		});

	},

	spin: function () {

		var model = this;

		model.get('view').spin();

	},

	stop: function () {

		var model = this,
			stopIndex = Math.floor(Math.random() * 9);

		model.set('stop-index', stopIndex);

		model.get('view').stop(stopIndex);

	}


});

export default ColumnModel;
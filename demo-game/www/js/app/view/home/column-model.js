'use strict';
/*global window */

import Backbone from './../../../lib/backbone';
import ColumnView from './column-view';


var ColumnModel = Backbone.Model.extend({

	initialize: function (data) {

		var model = this,
			stopIndex = Math.floor(Math.random() * 9),
			view;

		view = new ColumnView(data);

		model.set('stop-index', stopIndex);
		view.set('stop-index', 0);

		view.moveTo({
			stopIndex: stopIndex
		});

		model.set('view', view);

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
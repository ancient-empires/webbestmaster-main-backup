'use strict';
/*global window */

import Backbone from './../../../lib/backbone';
import ColumnView from './column-view';


var ColumnModel = Backbone.Model.extend({

	initialize: function () {

		var model = this,
			columnSize = model.get('column-size'),
			stopIndex = Math.floor(Math.random() * columnSize),
			view;

		view = new ColumnView({
			columnSize: columnSize
		});

		model.set('view', view);

		view.moveTo({
			stopIndex: stopIndex,
			isInstant: true
		});

	},

	spin: function () {

		var model = this;

		model.get('view').spin();

	},

	stop: function () {

		var model = this,
			stopIndex = Math.floor(Math.random() * 9);

		//model.set('stop-index', stopIndex);

		model.get('view').stop(stopIndex);

	}


});

export default ColumnModel;
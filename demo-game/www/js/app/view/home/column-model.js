'use strict';
/*global window */

import Backbone from './../../../lib/backbone';
import ColumnView from './column-view';


var ColumnModel = Backbone.Model.extend({

	initialize: function () {

		var model = this,
			view = new ColumnView();

		model.set('view', view);

	},

	spin: function () {

		var model = this;

		model.get('view').spin();


	}

});

export default ColumnModel;
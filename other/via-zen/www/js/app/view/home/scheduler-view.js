'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';

var SchedulerView = BaseView.extend({

	events: {

	},

	initialize: function (data) {

		var view = this;

		view.setElement(tm.tmplFn.scheduler(data));

		//view.render();

		// create scheduler collection

		// insert data for m and w to collection

	},

	setState: function (state) {

		this.$el.find('.js-is-available').html(state);

	},

	setNextChangeStateTime: function (time) {
		this.$el.find('.js-next-change-state-time').html(time);
	}

});

export default SchedulerView;
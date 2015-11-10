'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import util from './../../../services/util'

var SchedulerView = BaseView.extend({

	events: {},

	initialize: function (data) {

		var view = this,
			$isAvailable,
			$nextChangeStateTime;

		view.setElement(tm.tmplFn.scheduler({data, util}));

		$isAvailable = view.$el.find('.js-is-available');
		$nextChangeStateTime = view.$el.find('.js-next-change-state-time');

		view.set('$isAvailable', $isAvailable);
		view.set('$nextChangeStateTime', $nextChangeStateTime);

		//view.render();

		// create scheduler collection

		// insert data for m and w to collection

	},

	setState: function (state) {

		var view = this,
			$isAvailable = view.get('$isAvailable');

		switch (state) {

			case 'occupied':
				$isAvailable
						.removeClass('toilet-is-available')
						.addClass('toilet-is-occupied');

				break;

			case 'available':
				$isAvailable
						.removeClass('toilet-is-occupied')
						.addClass('toilet-is-available');
				break;



		}

		$isAvailable.html(state);



	},

	setNextChangeStateTime: function (time) {

		if ( typeof time === 'number' ) {
			time = util.formatMs(time);
			time = [time.h, time.m, time.s].join('.')
		}

		this.get('$nextChangeStateTime').html(time);
	}

});

export default SchedulerView;
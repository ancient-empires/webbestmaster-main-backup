'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import info from './../../../services/info';
import log from './../../../services/log';

var ColumnView = BaseView.extend({

	initialize: function () {

		var view = this;

		view.setElement(tm.get('column')());

		view.set('$column-container', view.$el.find('.js-column-container'));

		view.bindEventListeners();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	bindEventListeners: function () {

		var view = this,
			$columnContainer = view.get('$column-container');

		$columnContainer.on('animationiteration', function () {

			log('s111');



		});

		$columnContainer.on(info.get('animationEnd', true), function () {

			var viewState = view.get('state'),
				$columnContainer = view.get('$column-container');

			switch (viewState) {

				case 'roll-begin':
					// switch to roll-roll
					view.set('state', 'roll-roll');
					$columnContainer.addClass('animation-roll-roll');
					break;

			}

		});

	},

	spin: function () {

		var view = this;

		//if (view.get('state')) {
		//	view.set('state', 0);
		//	view.get('$column-container').removeClass('animation-roll-roll').removeClass('animation-roll-begin');
		//	return;
		//
		//}

		view.set('state', 'roll-begin');

		view.get('$column-container').addClass('animation-roll-begin');

	}

});

export default ColumnView;
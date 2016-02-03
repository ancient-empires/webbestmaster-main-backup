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

		$columnContainer.on(info.get('animationIteration', true), function () {

			var viewState = view.get('state'),
				$columnContainer = view.get('$column-container');

			if (viewState === 'roll-end') {
				$columnContainer.removeClass('animation-roll-roll').addClass('animation-roll-end');
			}

		});

		$columnContainer.on(info.get('animationEnd', true), function () {

			var viewState = view.get('state'),
				$columnContainer = view.get('$column-container');

			if (viewState === 'roll-begin') {
				// switch to roll-roll
				$columnContainer.removeClass('animation-roll-begin').addClass('animation-roll-roll');
				view.set('state', 'roll-roll');

				if (view.get('is-last')) {
					view.publish('game-model:set-state', 'main-spin');
				}

			}

			if (viewState === 'roll-end') {

				$columnContainer.removeClass('animation-roll-end');

				if (view.get('is-last')) {
					view.publish('game-model:set-state', 'idle');
				}

			}

		});

	},

	spin: function () {

		var view = this;

		view.set('state', 'roll-begin');

		view.get('$column-container')
			.removeClass('animation-roll-end')
			.removeClass('animation-roll-roll')
			.addClass('animation-roll-begin');

	},

	stop: function () {

		var view = this;

		view.set('state', 'roll-end');

	}








});

export default ColumnView;
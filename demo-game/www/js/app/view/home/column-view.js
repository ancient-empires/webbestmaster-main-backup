'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import info from './../../../services/info';
import log from './../../../services/log';
import $ from './../../../lib/jbone';

var ColumnView = BaseView.extend({

	initialize: function (data) {

		var view = this,
			index = data.index,
			cssClass = 'column-container-' + index;

		view.setElement(tm.get('column')({
			cssClass: cssClass
		}));

		view.set({
			index: index,
			'animation-roll-begin-class': 'animation-roll-begin-' + index,
			'animation-roll-end-class': 'animation-roll-end-' + index,
			cssClass: cssClass
		});

		view.set('$column-container', view.$el.find('.js-column-container'));

		view.bindEventListeners();

		view.initStyles();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	bindEventListeners: function () {

		var view = this,
			$columnContainer = view.get('$column-container');

		$columnContainer.on(info.get('animationIteration', true), function () {

			var viewState = view.get('state'),
				$columnContainer = view.get('$column-container');

			if (viewState === 'roll-end') {
				$columnContainer
					.removeClass('animation-roll-roll')
					.addClass(view.get('animation-roll-end-class'));
			}

		});

		$columnContainer.on(info.get('animationEnd', true), function () {

			var viewState = view.get('state'),
				$columnContainer = view.get('$column-container');

			if (viewState === 'roll-begin') {
				// switch to roll-roll
				$columnContainer
					.removeClass(view.get('animation-roll-begin-class'))
					.addClass('animation-roll-roll');

				view.set('state', 'roll-roll');

				if (view.get('is-last')) {
					view.publish('game-model:set-state', 'main-spin');
				}

			}

			if (viewState === 'roll-end') {

				//$columnContainer.removeClass('animation-roll-end');

				if (view.get('is-last')) {
					view.publish('game-model:set-state', 'idle');
				}

			}

		});

	},

	spin: function () {

		var view = this;

		view.set('state', 'roll-begin');


		view.moveTo({
			stopIndex: view.get('stop-index') + 1,
			fill: 'both'
		});

		//view.get('$column-container')
		//.removeClass(view.get('animation-roll-end-class'))
		//.removeClass('animation-roll-roll')
		//.addClass(view.get('animation-roll-begin-class'));

	},

	stop: function (stopIndex) {

		var view = this;

		view.moveTo({
			stopIndex: stopIndex
		});

		view.set('state', 'roll-end');

	},

	initStyles: function () {

		var view = this,
			$wrapper = view.$wrapper,
			$animationStyle = $('<style type="text/css"></style>');

		view.set('$animationStyle', $animationStyle);

		$wrapper.append($animationStyle);

	},

	createAnimationStyle: function (data) {

		var view = this,
			style = tm.get('column-keyframes')({
				cssClass: view.get('cssClass'),
				begin: 4 * (data.begin || 0) + 'rem',
				end: 4 * data.end + 'rem',
				fill: data.fill || 'both'
			});

		view.get('$animationStyle').html(style);

	},

	moveTo: function (data) {

		var view = this,
			stopIndex = data.stopIndex;

		//view.get('$column-container').removeClass(view.get('cssClass'));

		view.createAnimationStyle({
			begin: view.get('stop-index'),
			end: stopIndex,
			fill: data.fill
		});

		//setTimeout(function () {
		//	view.get('$column-container').addClass(view.get('cssClass'));
		//}, 200);


		view.set('stop-index', stopIndex);

	}

});

export default ColumnView;

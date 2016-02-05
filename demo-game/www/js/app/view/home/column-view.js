'use strict';
/*global window */

import BaseView from './../core/base';
import tm from './../../../services/template-master';
import info from './../../../services/info';
import log from './../../../services/log';
import $ from './../../../lib/jbone';

var ColumnView = BaseView.extend({

	initialize: function (data) {

		var view = this;

		view.setElement(tm.get('column')());

		view.set({
			'$column-container': view.$el.find('.js-column-container'),
			'transitionEnd': info.get('transitionEnd', true),
			'column-size': data.columnSize
		});

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	spin: function () {

		var view = this;

		view.moveTo({
			stopIndex: view.get('stop-index'),
			type: 'begin'
		}).done(function () {
			view.turn();
		});

	},

	stop: function (lastIndex) {

		var view = this;

		view.set('state', 'spin-end');

	},

	turn: function () {

		var view = this,
			$columnContainer = view.get('$column-container');

		$columnContainer.off();

		$columnContainer.addClass('a-roll');

		$columnContainer.css({
			top: -view.get('stop-index') * 76 + 'px'
		});

		if (view.get('is-last')) {
			view.publish('game-model:set-state', 'spin-main');
		}

		$columnContainer.on(info.get('animationIteration', true), function () {

			if (view.get('state') === 'spin-end') {

				$columnContainer.removeClass('a-roll');
				$columnContainer.css({
					top: 0
				});

				view.moveTo({
					stopIndex: view.get('stop-index'),
					isInstant: true
				});

				setTimeout(function () {
					view.moveTo({
						stopIndex: Math.floor(Math.random() * 9),
						type: 'end'
					});
				}, 0);

			}

		});

	},

	moveTo: function (data) {

		var view = this,
			defer = $.Deferred(),
			transitionTimeFn,
			stopIndex = data.stopIndex,
			isInstant = data.isInstant,
			columnStopIndex = view.get('stop-index'),
			columnSize = view.get('column-size'),
			transitionEnd = view.get('transitionEnd'),
			$columnContainer = view.get('$column-container');

		if (isInstant) {
			$columnContainer.css({
				transition: 'none',
				transform: 'translate3d(0,' + -(stopIndex + columnSize) * 76 + 'px,0)'
			});

			view.set('stop-index', stopIndex);

			return defer.resolve();

		}

		switch ( data.type ) {

			case 'begin':
				transitionTimeFn = 'ease-in';
				break;

			case 'end':
				transitionTimeFn = 'ease-out';
				break;

			case 'linear':
				transitionTimeFn = 'linear';
				break;

			default :
				transitionTimeFn = 'linear';

		}

		if (stopIndex < columnStopIndex) {
			$columnContainer.css({
				transition: 'transform 1s ' + transitionTimeFn,
				transform: 'translate3d(0,' + -(stopIndex + columnSize) * 76 + 'px,0)'
			});
			$columnContainer.one(transitionEnd, function () {
				defer.resolve();
			});
		} else {
			$columnContainer.css({
				transition: 'transform 1s ' + transitionTimeFn,
				transform: 'translate3d(0,' + -stopIndex * 76 + 'px,0)'
			});
			$columnContainer.one(transitionEnd, function () {
				$columnContainer.css({
					transition: 'none',
					transform: 'translate3d(0,' + -(stopIndex + columnSize) * 76 + 'px,0)'
				});
				defer.resolve();
			});
		}

		view.set('stop-index', stopIndex);

		return defer.promise();

	}

});

export default ColumnView;

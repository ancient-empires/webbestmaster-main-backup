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

	turn: function () {

		var view = this,
			$columnContainer = view.get('$column-container');

		$columnContainer.addClass('a-roll');

		$columnContainer.css({
			top: -view.get('stop-index') * 4  + 'rem'
		});

		view.publish('game-model:set-state', 'spin-main');

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
				transform: 'translate3d(0,' + -(stopIndex + columnSize) * 4 + 'rem,0)'
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
				transform: 'translate3d(0,' + -(stopIndex + columnSize) * 4 + 'rem,0)'
			});
			$columnContainer.one(transitionEnd, function () {
				defer.resolve();
			});
		} else {
			$columnContainer.css({
				transition: 'transform 1s ' + transitionTimeFn,
				transform: 'translate3d(0,' + -stopIndex * 4 + 'rem,0)'
			});
			$columnContainer.one(transitionEnd, function () {
				$columnContainer.css({
					transition: 'none',
					transform: 'translate3d(0,' + -(stopIndex + columnSize) * 4 + 'rem,0)'
				});
				defer.resolve();
			});
		}

		view.set('stop-index', stopIndex);

		return defer.promise();

	}

});

export default ColumnView;

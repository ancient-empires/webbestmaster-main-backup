/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};

	win.APP.BB.FightAnimationView = APP.BB.BaseView.extend({

		events: {},

		selectors: {
			statusBarWrapper: '.js-fight-animation-status-bar'
		},

		initialize: function (data) { // parentView, parentDeferred, attacker, defender

			var view = this;

			view.extendFromObj(data);

			view.$el = $(view.tmpl['fight-animation'](data));

			view.render();

		},

		render: function () {

			var view = this,
				parentView = view.get('parentView');

			parentView.$el.append(view.$el);

			setTimeout(function () {
				view.get('parentDeferred').resolve();
			}, 2e3);


		},

		refreshStatusBar: function () {

			var view = this,
				selectors = view.selectors,
				$el = view.$el,
				$statusBar = $el.find(selectors.statusBarWrapper),
				$newStatusBar = $(view.tmpl['fight-animation-status-bar']({
					attacker: view.get('attacker'),
					defender: view.get('defender')
				}));

			$statusBar.empty().html($newStatusBar.html());

		}


	});

}(window));
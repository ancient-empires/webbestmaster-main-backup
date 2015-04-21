/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP, Backbone */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.LoadGamePopupView = APP.BB.BaseView.extend({

		selectors: {
			closeLoadConfirm: '.js-close-load-confirm'

		},

		events: {

		},

		initialize: function (data) {

			var view = this;

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				dbMaster = win.APP.map.db;

			view.$el = $(view.tmpl['load-game-popup']());

			dbMaster.getSavedGames().then(function (savedGames) {
				var html = view.tmpl['load-game-popup']({ savedGames: savedGames });
				view.$el.html(html);
				view.undelegateEvents();
				view.bindEventListeners();
			});

		},

		bindEventListeners: function () {

			var view = this,
				selectors = view.selectors;

			view.unbindEventListeners();

			//view.$el.find(selectors.saveGame).on('click', $.proxy(view, 'saveGame') );
			//view.$el.find(selectors.removeSavedGame).on('click', $.proxy(view, 'removeSavedGame') );
			view.$el.find(selectors.closeLoadConfirm).on('click', $.proxy(view, 'closeLoadConfirm') );


		},

		unbindEventListeners: function () {

			var view = this,
				selectors = view.selectors;

			//view.$el.find(selectors.saveGame).off('click', view.saveGame );
			//view.$el.find(selectors.removeSavedGame).off('click', view.removeSavedGame );
			view.$el.find(selectors.closeLoadConfirm).off('click', view.closeLoadConfirm );

		},

		closeLoadConfirm: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				gameName = $this.attr('data-save-name'),
				$button = view.$el.find('.js-tab-button[data-save-name="' + gameName + '"]');

			$button.trigger('click');

		}






	});

}(window));

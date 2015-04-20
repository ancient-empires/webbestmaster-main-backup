/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP, Backbone */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SaveGameView = APP.BB.BaseView.extend({

		selectors: {
			'saveInputText': '.js-save-input-text'
		},

		events: {
			'click .js-save-game': 'saveGame'
		},

		initialize: function (data) {

			var view = this;

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				saveName = view.getSaveName();

			view.$el = $(view.tmpl['save-game']({
				saveName: saveName
			}))

		},

		getSaveName: function () {

			var view = this,
				info = view.info,
				language = info.get('language'),
				battleView = view.get('battleView'),
				battleModel = view.get('battleModel'),
				map = battleModel.get('map'),
				mapName = map['name-' + language] || map.name,
				date = new Date(),
				saveName = mapName + ' ' + [date.getSeconds(), date.getMinutes(), date.getHours(), date.getDate(), date.getMonth() + 1, date.getFullYear()].join('-');

			saveName = saveName.replace(/(\d+)/g, function (match, p1) {
				return p1.length > 1 ? p1 : 0 + p1;
			});

			return saveName;

		},

		saveGame: function () {

			var view = this,
				saveDate = Date.now(),
				gameData = view.getDataToSave(),
				saveName = view.$el.find(view.selectors.saveInputText).val();



		},

		getDataToSave: function () {

			var view = this,
				model = view.get('battleModel'),
				players,
				activePlayer,
				units,
				buildings,
				map,
				jsMapKey;

			// save players - ALL data
			// active player - save ID
			// save units - ALL data.toJSON(), active and no active
			// save buildings - ALL data
			// save map - terrain



		}

	});

}(window));

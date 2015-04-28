/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SettingsView = APP.BB.BaseView.extend({

		selectors: {
			settingsWrapper: '.js-battle-settings-wrapper',
			onOffSetting: '.js-change-on-off-setting',
			style: '.js-game-speed-style'
		},

		events: {
			'click .js-change-on-off-setting-wrapper': 'changeOnOffSetting',
			'click .js-change-select-setting': 'changeSelectSetting',
			'click .js-setting-item-wrapper': 'changeSettings',
			'hide-battle-setting': 'hide'
		},

		initialize: function (data) {

			var view = this,
				isBattleState = /^battle/.test(Backbone.history.fragment);

			view.$el = $(this.tmpl.settings({ view: view, info: view.info, isBattleState: isBattleState }));

			view.extendFromObj(data);

			view.set('args', data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				$mainWrapper = view.$wrapper,
				$wrapper = $mainWrapper.find(view.selectors.settingsWrapper),
				battleView = view.get('view');

			if ($wrapper.length) {
				$wrapper.empty().append(view.$el);
				battleView.$el.find(battleView.selectors.moveAreaContainer).addClass('hidden');
				return;
			}

			view.proto.render.call(view);

		},

		changeOnOffSetting: function (e) {

			var view = this,
				$wrapper = $(e.currentTarget),
				$this = $wrapper.find(view.selectors.onOffSetting),
				key = $this.attr('data-key'),
				value = ( $this.attr('data-value') === 'on' ) ? 'off' : 'on';

			if ( value === 'on' ) {
				$this.addClass('on-off-enable');
			} else {
				$this.removeClass('on-off-enable');
			}

			$this.attr( 'data-value', value );
			view.info.set(key, value);

			switch (key) {

				case 'help':
					view.autoShowHelpButton();
					break;

				case 'buildingSmoke':
					view.autoShowBuildingSmoke();
					break;

				case 'unitAnimation':
					view.autoShowUnitAnimation();
					break;

				case 'music':
					view.autoSetMusic();
					break;

			}

		},

		changeSelectSetting: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				key = $this.attr('data-key'),
				value = $this.attr('data-value'),
				$nodes = view.$el.find('.js-change-select-setting[data-key="' + key + '"]');

			$nodes.addClass('opacity50');
			$nodes.removeClass('selected-in-list');

			$this.removeClass('opacity50');
			$this.addClass('selected-in-list');

			view.info.set(key, value);

			if (key === 'language') {
				win.APP.lang.set(value);
				new view.constructor(view.get('args')); // do not use this.loadUrl(); cause this view used in battle view
			}

			if (key === 'gameSpeed') {
				view.setSpeedStyle();
			}

		},

		setSpeedStyle: function () {

			var view = this,
				speed = parseInt(view.info.get('gameSpeed'), 10),
				time = view.info.actionTime(),
				$style = view.tmpl['game-speed']({time: time - 100});

			view.$wrapper.find(view.selectors.style).remove();

			view.$wrapper.append($style);

		},

		autoShowBuildingSmoke: function () {

			var view = this,
				info = view.info,
				smokeState = info.get('buildingSmoke');

			if (smokeState === 'on') {
				view.$wrapper.removeClass('hide-building-smoke');
			} else {
				view.$wrapper.addClass('hide-building-smoke');
			}

		},

		autoShowUnitAnimation: function () {

			var view = this,
				info = view.info,
				unitAnimationState = info.get('unitAnimation');

			if (unitAnimationState === 'on') {
				view.$wrapper.removeClass('hide-unit-animation');
			} else {
				view.$wrapper.addClass('hide-unit-animation');
			}

		},


		autoSetMusic: function () {

			var view = this,
				info = view.info,
				musicState = info.get('music'),
				soundMaster = win.APP.soundMaster;

			if (musicState === 'on') {
				debugger
				soundMaster.restoreBgSound();
			} else {
				debugger
				soundMaster.stopBgSound();
			}

		}

	});

}(window));

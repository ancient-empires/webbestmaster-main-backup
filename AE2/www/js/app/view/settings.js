/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SettingsView = APP.BB.BaseView.extend({

		selectors: {
			settingsWrapper: '.js-battle-settings-wrapper',
			onOffSetting: '.js-change-on-off-setting'
		},

		events: {
			'click .js-change-on-off-setting-wrapper': 'changeOnOffSetting',
			'click .js-change-select-setting': 'changeSelectSetting',
			'click .js-setting-item-wrapper': 'changeSettings',
			'hide-battle-setting': 'hide'
		},

		initialize: function (data) {

			var view = this;

			view.$el = $(this.tmpl.settings({ view: view, info: view.info }));

			view.extendFromObj(data);

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
				value = ( $this.attr('data-value') === 'on' ) ? 'off' : 'on',
				html;

			$this.attr( 'data-value', value );
			html = value === 'on' ? '[*]' : '[&nbsp;]';
			//$this.html( win.APP.lang.get(value) );
			$this.html(html);

			view.info.set(key, value);

		},

		changeSelectSetting: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				key = $this.attr('data-key'),
				value = $this.attr('data-value'),
				$nodes = view.$el.find('.js-change-select-setting[data-key="' + key + '"]');

			$nodes.addClass('opacity50');
			$this.removeClass('opacity50');

			view.info.set(key, value);

			if (key === 'language') {
				win.APP.lang.set(value);
				new view.constructor(); // do not use this.loadUrl(); cause this view used in battle view
			}

		}


	});

}(window));

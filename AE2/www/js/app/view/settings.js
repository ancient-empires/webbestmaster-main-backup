/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SettingsView = APP.BB.BaseView.extend({

		selectors: {
			settingsWrapper: '.js-battle-settings-wrapper'
		},

		events: {
			'click .js-change-on-off-setting': 'changeOnOffSetting',
			'click .js-change-select-setting': 'changeSelectSetting',
			'hide-battle-setting': 'hide'
		},

		initialize: function () {

			this.$el = $(this.tmpl.settings({ view: this, info: this.info }));

			this.proto.initialize.apply(this, arguments);

			this.render();

		},

		render: function () {

			var view = this,
				$mainWrapper = view.$wrapper,
				$wrapper = $mainWrapper.find(view.selectors.settingsWrapper);

			if ($wrapper.length) {
				$wrapper.empty().append(view.$el);
				return;
			}

			view.proto.render.call(view);

		},

		changeOnOffSetting: function (e) {

			var $this = $(e.target),
				key = $this.attr('data-key'),
				value = ( $this.attr('data-value') === 'on' ) ? 'off' : 'on';

			$this.attr( 'data-value', value );
			$this.html( win.APP.lang.get(value) );

			this.info.set(key, value);

		},

		changeSelectSetting: function (e) {

			var view = this,
				$this = $(e.target),
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

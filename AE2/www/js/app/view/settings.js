(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SettingsView = APP.BB.BaseView.extend({

		defaults: {
		},

		events: {
			'click .js-change-on-off-setting': 'changeOnOffSetting',
			'click .js-change-select-setting': 'changeSelectSetting'
		},

		initialize: function () {

			this.$el = $(this.tmpl.settings({ view: this, info: this.info }));

			this.proto.initialize.apply(this, arguments);

			this.render();

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

			var $this = $(e.target),
				key = $this.attr('data-key'),
				value = $this.attr('data-value'),
				$nodes = this.$el.find('.js-change-select-setting[data-key="' + key + '"]');

			$nodes.addClass('opacity50');
			$this.removeClass('opacity50');

			this.info.set(key, value);

			if (key === 'language') {
				win.APP.lang.set(value);
				this.loadUrl();
			}

		}


	});

}(window));

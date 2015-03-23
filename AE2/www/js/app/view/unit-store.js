/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.UnitStoreView = APP.BB.BaseView.extend({

		selectors: {
			storeWrapper: '.js-store-wrapper'
		},

		events: {
			//'click .js-change-on-off-setting': 'changeOnOffSetting',
			//'click .js-change-select-setting': 'changeSelectSetting'
		},

		initialize: function (data) {

			this.extendFromObj(data);

			this.$el = $(this.tmpl['unit-store']());

			this.proto.initialize.apply(this, arguments);

			this.render();

		},

		render: function () {

			var view = this,
				storeWrapper = view.$wrapper.find(view.selectors.storeWrapper);

			storeWrapper.append(view.$el);

		}

	});

}(window));

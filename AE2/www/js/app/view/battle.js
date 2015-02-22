(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BattleView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (data) {

			log(data);

			this.$el = $(this.tmpl.battle(data));

			this.proto.initialize.apply(this, arguments);

			this.render();

		}

	});

}(window));

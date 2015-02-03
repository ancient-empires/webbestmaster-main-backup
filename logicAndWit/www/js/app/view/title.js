(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TitleView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			this.$el = $(this.tmpl.title({ getProgressBySection: this.getProgressBySection }));

			this.proto.initialize.apply(this, arguments);

			this.render();

		},

		getProgressBySection: function (jsPath, section) {

			var questionLength = section.questions.length,
				info = win.APP.info,
				sections = info.get('sections') || {},
				questionsDone = sections[jsPath] || {},
				questionsDoneLength = _.keys(questionsDone).length;

			return questionsDoneLength / questionLength * 100;

		}

	});

}(window));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.QuestionView = APP.BB.BaseView.extend({

		events: {
			'click div': 'test'
		},

		test: function () {
			console.log('asdsad');
		},

		initialize: function (data) {

			this.proto.initialize.apply(this, arguments);

			this.set('sectionName', data.sectionName);
			this.set('questionIndex', data.questionIndex);

			this.render();

		},

		render: function () {

			var sectionName = this.get('sectionName'),
				questionIndex = this.get('questionIndex'),
				question = this.util.copyJSON(win.sections[sectionName].questions[questionIndex]);

			question.text = question.text.split('_!_').map(function (chunk) {
				return chunk.trim();
			});

			this.$el = $(this.tmpl.question(question));

			this.proto.render.call(this);

		}


	});

}(window));
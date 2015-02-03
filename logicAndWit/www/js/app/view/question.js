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

			question.hint = question.hint.trim();
			if ( question.hint ) {
				question.hint = question.hint.split('_!_').map(function (chunk) {
					return chunk.trim();
				});
			} else {
				question.hint = [];
			}

			question.answer = question.answer.split('_!_').map(function (chunk) {
				return chunk.trim();
			});

			question.parseChunk = this.parseChunk.bind(this);

			this.$el = $(this.tmpl.question(question));

			this.proto.render.call(this);

		},
		parseChunk: function (chunk) {

			if ( !chunk ) {
				return '';
			}

			// detect image
			if ( /^http/gi.test(chunk) ) {
				chunk = 'image/' + chunk.split('/').pop();
				return this.tmpl.questionImage({ src: chunk });
			}

			return this.tmpl.questionText({ text: chunk });

		}


	});

}(window));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.QuestionView = APP.BB.BaseView.extend({

		events: {
			'click .js-show-block': 'showBlock',
			'click .js-navigate-button': 'nextQuestion'
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

			question.hint = (question.hint ||'' ).trim();
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

		},

		showBlock: function (e) {

			var $this = $(e.target),
				selector = $this.attr('data-show-button'),
				$hiddenBlock = this.$el.find('[data-hidden-block="' + selector + '"]');

			$hiddenBlock.removeClass('hidden');

		},

		nextQuestion: function (e) {

			var $this = $(e.target),
				direction = $this.attr('data-navigate'),
				sectionName = this.get('sectionName'),
				questionIndex = this.get('questionIndex'),
				questionsLength = win.sections[sectionName].questions.length;

			questionIndex += (direction === 'next') ? 1 : -1;

			if (questionIndex < 0) {
				questionIndex = questionsLength - 1;
			}

			if (questionIndex >= questionsLength) {
				questionIndex = 0;
			}

			APP.bb.questionView = new APP.BB.QuestionView({
				sectionName: this.get('sectionName'),
				questionIndex: questionIndex
			});

		}

	});

}(window));
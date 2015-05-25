(function (win) {

	"use strict";
	/*global window, document */

	win.asker = {
		beginSection: function(sectionName) {
			this.section = Object.create(win.sectionList[sectionName]);
			viewer.history.push('ask');
			this.createQuestionsList();
			this.showQuestion();
		},
		showQuestion: function() {

			var question = {};
			var answers = [];
			var mainQuestion = $.shuffle(this.questions).pop();
			if (!mainQuestion) {
				ui.alert.show(lang[info.lang].sectionIsDone,
					function() {
						viewer.back();
					}
				);
				return;
			}

			if (mainQuestion.type === 1) {
				$.createSimpleArray(1, 6).forEach(function(number){
					if (mainQuestion.hasOwnProperty(number)) {
						answers.push({
							img: mainQuestion[number],
							right: number === mainQuestion.answer
						});
					} else {
						answers.push({
							img: false,
							right: false
						});
					}

				});
				question.answers = $.shuffle(answers);
				question.text = question['question_' + info.lang] || this.section['mainQuestion_' + info.lang];
			}

			if (mainQuestion.type === 2) {
				$.createSimpleArray(1, 6).forEach(function(number){
					if (mainQuestion.hasOwnProperty(number)) {
						answers.push({
							img: mainQuestion[number],
							right: number === mainQuestion.answer
						});
					}
				});
				question.answers = $.shuffle(answers);
				question.text = mainQuestion['text_' + info.lang] || mainQuestion['text'];
//				question.text = mainQuestion['text'];
				question.questionImage = mainQuestion.questionImage;
			}

			question.imgPathPrefix = this.section.imgPath;
			viewer.show('question-type-' + mainQuestion.type, question, true);


		},
		createQuestionsList: function() {
			var questions = Object.create(this.section).items;
			this.questions = [];
			for (var key in questions) {
				if (questions.hasOwnProperty(key)) {
					this.questions.push(questions[key])
				}
			}
			// get only 10 questions
			this.questions = $.shuffle(this.questions).slice(5, 16);
		},
		goodAnswer: function() {
			ui.splashScreen.show(true, 'asker.showQuestion()');
			info.change('score', 5, true);
			statusBar.update();
		},
		badAnswer: function(node) {
			ui.splashScreen.show(false);
			node.onclick = function(){};
			$.addClass(node, 'gray-answer');
			info.change('score', -3, true);
			statusBar.update();
		}

	}

}(window));

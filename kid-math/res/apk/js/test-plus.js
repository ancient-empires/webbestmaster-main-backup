(function (win) {

	"use strict";
	/*global window, document, console, alert, $, tmpl, lang, info, $$, ui, dataStorage, statusBar */

	win.testPlus = {

		startTest: function() {

			info.currentLevelName = 'test-plus';
			this.questionsArray = this.createQuestions();
			this.showLevel();
			this.setAnswerSize();

		},
		createQuestions: function(){
			var pluses = [], i, j;
			for ( i = 0; i <= 10; i++ ) {
				for ( j = 0; j <= 10; j++ ) {
					if ( (i + j) <= 10 ) {
						var slide = {
							a: i,
							b: j,
							sum: i + j
						};
						pluses.push(slide);
					}
				}
			}

			$.shuffle(pluses);
			pluses.filter(function(obj){
				return obj.a !== 0;
			});
			return pluses.splice(10, 10);

		},
		showLevel: function() {

			if (info.currentLevelName !== 'test-plus') {
				return;
			}

			var object = {};
			if (this.questionsArray.length === 0) {
				var path = lang[info.lang].endSection || soundList.endSection;
				player.play(path);
				statusBar.updateScore(info.bonus.normal);
				if (dataStorage.getItem('score') >= 100) {
					ui.message.show(lang[info.lang].youHaveDoneThisSection, 'app insetHTML .title-page');
					win.dataStorage.addToOpenSections('learn--');
				} else {
					ui.message.show(lang[info.lang].youDontHaveEnoughPoints, 'app insetHTML .title-page');
				}
				statusBar.updateScore();
				return;
			}
			object.question = this.questionsArray.pop();
			object.answer = object.question.sum;
			object.answers = [];
			var arr = [];
			do {
				arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				arr = $.shuffle(arr);
				arr.splice(3, 6);
			} while (arr.indexOf(object.question.sum) === -1);
			object.answers = arr;

			var template = tmpl($('.js-template.test-plus-question').innerHTML)(object);

			$('#wrapper .page-wrapper').innerHTML = template;
			var answerNodes = $$('#wrapper .test-basic-answer-number');
			answerNodes.forEach(function(node){

				node.addEventListener('click', function(){
					if ($.hasClass(this, 'right-answer')) {
						ui.answerSplashScreen.show(1, 'testPlus showLevel {}');
						win.statusBar.updateScore(info.bonus.small);
						var path = lang[info.lang].goodAnswer || soundList.goodAnswer;
						player.play(path);
					} else {
						var path = lang[info.lang].badAnswer || soundList.badAnswer;
						player.play(path);
						// do not click twice to bad answer
						if (this.style.opacity) {
							return;
						}
						ui.answerSplashScreen.show(0, 'ui hideAnswerSplashScreen {}');
						win.statusBar.updateScore(-info.bonus.small);
						this.style.opacity = 0.3;
					}
				}, false);

			});

			this.setAnswerSize();

		},
		setAnswerSize: function() {
			function setAnswerSize() {
				var answers = $$('#wrapper .test-basics-question .test-basic-answer-number span');
				answers.forEach(function(answer) {
					answer.style.lineHeight = 0;
					answer.style.fontSize = 0;
				});
				var height = answers[0] ? answers[0].clientHeight : 0;
				answers.forEach(function(answer) {
					answer.style.lineHeight = height + 'px';
					answer.style.fontSize = height * 0.7 + 'px';
				});
			}

			setTimeout(setAnswerSize, 100);
			setTimeout(setAnswerSize, 500);
		}

	};

	win.addEventListener('resize', win.testPlus.setAnswerSize, false);

}(window));

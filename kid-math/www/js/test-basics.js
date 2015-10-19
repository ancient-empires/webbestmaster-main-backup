(function (win) {

	"use strict";
	/*global window, document, console, alert, $, tmpl, lang, info, $$, ui, dataStorage, statusBar */

	win.testBasics = {

		startTest: function() {

			info.currentLevelName = 'test-basics';
			this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			this.questionsArray = $.shuffle(this.numbers);
			this.availableImages = Object.create(info.availableImages);
			this.availableImages = $.shuffle(this.availableImages);
			this.showLevel();
			this.setAnswerSize();

		},

		showLevel: function() {

			if (info.currentLevelName !== 'test-basics') {
				return;
			}

			var object = {}, i;
			this.availableImages = $.shuffle(this.availableImages);
			object.image = this.availableImages[4];
			if (this.questionsArray.length === 0) {
				statusBar.updateScore(info.bonus.normal);
				var path = lang[info.lang].endSection || soundList.endSection;
				player.play(path);
				if (dataStorage.getItem('score') >= 50) {
					ui.message.show(lang[info.lang].youHaveDoneThisSection, 'app insetHTML .title-page');
					win.dataStorage.addToOpenSections('learn-+');
				} else {
					ui.message.show(lang[info.lang].youDontHaveEnoughPoints, 'app insetHTML .title-page');
				}
				statusBar.updateScore();
				return;
			}
			object.answer = this.questionsArray.pop();
			object.question = lang[info.lang].testBasicsQuestion.replace('%thing%', lang[info.lang][object.image + '_many']);
			var arr = [];
			do {
				arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
				arr = $.shuffle(arr);
				arr.splice(3, 5);
			} while (arr.indexOf(object.answer) === -1);
			object.answers = arr;

			object.imagesArray = [];
			for (i = 1; i <= object.answer; i += 1) {
				object.imagesArray.push(object.answer);
			}

			var template = tmpl($('.js-template.test-basics-question').innerHTML)(object);

			$('#wrapper .page-wrapper').innerHTML = template;
			var answerNodes = $$('#wrapper .test-basic-answer-number');
			answerNodes.forEach(function(node){

				node.addEventListener('click', function(){
					if ($.hasClass(this, 'right-answer')) {
						ui.answerSplashScreen.show(1, 'testBasics showLevel {}');
						win.statusBar.updateScore(info.bonus.small);
						var path = lang[info.lang].goodAnswer || soundList.goodAnswer;
						player.play(path);
					} else {
						// do not click twice to bad answer
						var path = lang[info.lang].badAnswer || soundList.badAnswer;
						player.play(path);
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

	win.addEventListener('resize', win.testBasics.setAnswerSize, false);

}(window));

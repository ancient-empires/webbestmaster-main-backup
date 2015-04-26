(function (win) {

	"use strict";
	/*global window, document */

	win.findLetter = {
		init: function() {
			this.template = $('.js-template.find-letter').innerHTML;
			this.template = viewer.template(this.template);
		},
		questions: [],
		showLevel: function() {
			statusBar.show(['playAgain']);

			this.questions = $.createSimpleArray(1, lang[info.lang].alphabetLength);
			this.answer = $.shuffle(Object.create(this.questions))[5];

			setTimeout(player.play.bind(player, 'alphabets/' + info.lang + '/' + this.answer + '.mp3'), 1000);

			// if difficult == 1 -> show message
			if (info.difficult === 1) {
				ui.message.show(lang[info.lang].find + ': ' + lang[info.lang].alphabet[this.answer]);
			}

			// if difficult == 2 -> normal mode
			if (info.difficult === 2) {
			}

			// if difficult == 3 -> change number positions
			if (info.difficult === 3) {
				this.questions = $.shuffle(this.questions);
			}

			$('#wrapper').innerHTML = this.template({});

			var that = this;
			var blocks = $$('#wrapper .js-letter-for-find');
			blocks.forEach(function(node) {
				node.onclick = function() {
					if (parseInt(node.getAttribute('letter')) === that.answer) {
						that.showLevel();
						win.ui.splashScreen.show(true);
						dataStorage.changeItem('score', 3 + info.difficult);
					} else {
						dataStorage.changeItem('score', -3);
						$.addClass(this, 'disable');
						this.onclick = function(){};
						win.ui.splashScreen.show(false);
					}
					info.score = dataStorage.getItem('score');
					statusBar.update();
				}
			});

		}

	};


	win.addEventListener('load', findLetter.init.bind(findLetter), false);



}(window));

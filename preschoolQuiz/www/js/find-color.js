(function (win) {

	"use strict";
	/*global window, document */

	win.findColor = {
		init: function() {
			this.template = $('.js-template.find-color').innerHTML;
			this.template = viewer.template(this.template);
		},
		questions: [],
		showLevel: function() {
			statusBar.show(['playAgain']);

			this.questions = $.createSimpleArray(1, lang[info.lang].colors.length - 1);
			this.answer = $.shuffle(Object.create(this.questions))[5];

			setTimeout(player.play.bind(player, 'colors/' + info.lang + '/' + lang[info.lang].colors[this.answer] + '.mp3'), 1000);

			// if difficult == 1 -> show message
			if (info.difficult === 1) {
				var coloredBlock = '<span class="color-block-in-message" style="background-color: #' + lang[info.lang].colors[this.answer] + '"><\/span>   '
				ui.message.show(coloredBlock);
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
			var blocks = $$('#wrapper .js-color-for-find');
			blocks.forEach(function(node) {
				node.onclick = function() {
					if (node.getAttribute('color') === lang[info.lang].colors[that.answer]) {
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


	win.addEventListener('load', findColor.init.bind(findColor), false);



}(window));

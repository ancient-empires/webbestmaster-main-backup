(function (win) {

	"use strict";
	/*global window, document */

	win.statusBar = {
		buttons: ['setup', 'playAgain'],
		handleEvent: function() {
			this.wrapper = $('.js-status-bar');
			this.scoreWords = $$('[text]', this.wrapper);
			this.score = $('.js-score-field', this.wrapper);
			this.setup = $('.js-setup', this.wrapper);
			this.playAgain = $('.js-play-again', this.wrapper);
			this.backButton = $('.js-back', this.wrapper);
			this.update();
			this.setLang();
		},
		setLang: function() {
			this.scoreWords.forEach(function(node){
				node.innerHTML = lang[info.lang][node.getAttribute('text')];
			});
		},
		update: function() {
			if (info.score < 0) {
				info.score = 0;
				dataStorage.setItem('score', 0);
			}
			this.score.innerHTML = info.score;
		},
		show: function(arr) {
			var that = this;
			this.buttons.forEach(function(buttonName){
				console.log(buttonName);
				if (arr.indexOf(buttonName) !== -1) {
					$.removeClass(that[buttonName], 'hidden');
				} else {
					$.addClass(that[buttonName], 'hidden');
				}
			});
			this.needShowBackButton(true);
		},
		needShowBackButton: function(needShow) {
			this.backButton.style.display = needShow ? 'block' : 'none';
		}

	};

	win.addEventListener('load', win.statusBar, false);

}(window));

(function (win) {

	"use strict";
	/*global window, document */

	var statusBar = {
		buttons: ['more', 'playAgain'],
		handleEvent: function() {
			this.wrapper = $('.js-status-bar');
			this.words = $$('[text]', this.wrapper);
			this.score = $('.js-score-field', this.wrapper);
			this.more = $('.js-more', this.wrapper);
			this.playAgain = $('.js-play-again', this.wrapper);
			this.backButton = $('.js-back', this.wrapper);
			this.update();
			this.setLang();
		},
		setLang: function() {
			this.words.forEach(function(node){
				$.html(node, lang[info.lang][node.getAttribute('text')]);
			});
		},
		update: function() {
			if (info.score < 0) {
				info.score = 0;
				info.set('score', 0, true);
			}
			$.html(this.score, info.score);
		},
		show: function(arr) {
			var that = this;
			this.buttons.forEach(function(buttonName){
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

	win.statusBar = statusBar;

	win.addEventListener('load', statusBar, false);

}(window));

(function (win) {

	"use strict";
	/*global window, document, console, alert, $, $$, info, ui, dataStorage */

	win.statusBar = {
		init: function() {
			this.wrapper = $('.status-bar');
			this.setLang();
			this.backButton = $('.back', this.wrapper);

			win.onBackButton = onBackButton;

			function onBackButton() {

				var that = $('.status-bar .back');

				var str = that.getAttribute('to');

				if (!str || that.style.display === 'none') {
					return;
				}
				var arr = str.split(' ');
				var controller = arr[0];
				var action = arr[1];
				var params = arr[2];

				ui.fade.show();
				win.setTimeout(function(){
					window[controller][action](params);
					ui.fade.hide();
				}, ui.fade.time);

			}

			this.backButton.addEventListener('click', onBackButton, false);



			this.setupButton = $('.setup', this.wrapper);
			this.setupButton.addEventListener('click', function(){
				ui.fade.show();
				win.setTimeout(function() {
					win.app.insetHTML('.setup-page');
					ui.fade.hide();
				}, ui.fade.time);
			}, false);
			this.score = $('.score-field', this.wrapper);
			this.updateScore();

			$$('.back, .setup', this.wrapper).forEach(function(node) {
				node.addEventListener('click', function() {
					player.play(soundList.click);
				}, false);
			});

		},
		setLang: function() {
			$$('[text]', this.wrapper).forEach(function(node){
				node.innerHTML = win.lang[info.lang][node.getAttribute('text')];
			});
		},
		setBackButton: function(str) {
			if (str) {
				this.backButton.style.display = 'block';
				this.backButton.setAttribute('to', str);
			} else {
				this.backButton.style.display = 'none';
			}
		},
		setSetupButton: function(needShow) {
			this.setupButton.style.display = needShow ? 'block' : 'none';
		},
		updateScore: function(number) {
			dataStorage.changeItem('score', number || 0);
			this.score.innerHTML = dataStorage.getItem('score');
			if (!number) {
				return;
			}
			this.score.parentNode.style.color = ( number > 0 ) ? '#0C0' : '#C00';
			win.setTimeout(function() {
				this.score.parentNode.style.color = '';
			}.bind(this), 1500);

		}

	};

	win.addEventListener('load', win.statusBar.init.bind(win.statusBar), false);

}(window));

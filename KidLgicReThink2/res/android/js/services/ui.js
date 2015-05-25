(function (win) {

	"use strict";
	/*global window, document */

	win.ui = win.ui || {};

	win.ui.splashScreen = {
		showTime: 2000,
		setTimeoutId: 0,
		handleEvent: function() {
			var that = this;
			this.wrapper = $('.js-splash-screen');
			this.goodAnswer = $('.js-good-answer', this.wrapper);
			this.badAnswer = $('.js-bad-answer', this.wrapper);
			this.wrapper.addEventListener('click', function(){
				clearTimeout(that.setTimeoutId);
				that.hide();
			}, false);
		},
		show: function(isRight, action) {
			clearTimeout(this.setTimeoutId);
			this.goodAnswer.style.display = isRight ? 'block' : 'none';
			this.badAnswer.style.display = isRight ? 'none' : 'block';
			$.addClass(this.wrapper, 'active');
			this.setTimeoutId = setTimeout(this.hide.bind(this), this.showTime);
			player.play(isRight ? soundList.goodAnswer : soundList.badAnswer);
			this.wrapper.setAttribute('onclick', action);
		},
		hide: function() {
			$.removeClass(this.wrapper, 'active');
			if (this.wrapper.onclick) {
				this.wrapper.onclick();
			}
			this.wrapper.onclick = function() {};
		}
	};

	win.addEventListener('load', win.ui.splashScreen, false);

}(window));

(function (win) {

	"use strict";
	/*global window, document */

	win.ui = win.ui || {};

	win.ui.alert = {
		handleEvent: function() {
			this.wrapper = $('.js-alert');
			this.okBtn = $('.js-alert-button', this.wrapper);
			this.message = $('.js-alert-message', this.wrapper);
			this.okBtn.addEventListener('click', this.hide.bind(this), false);
		},
		show: function(msg, action) {
			$.html(this.message, msg);
			this.wrapper.style.display = 'table';
			var that = this;
			setTimeout(function(){
				that.wrapper.style.opacity = 1;
			}, 20);
			this.okBtn.onclick = action;
		},
		hide: function() {
			var that = this;
			this.wrapper.style.opacity = '';
			setTimeout(function(){
				that.wrapper.style.display = '';
			}, 520);
			player.play(soundList.click);
		}
	};

	win.addEventListener('load', win.ui.alert, false);

}(window));

(function (win) {

	"use strict";
	/*global window, document, console, alert */

	win.ui = win.ui || {};

	win.ui.externalLinkHandler = {
		setLinks: function(links) {
			return;
			var that = this;
			links.forEach(function(link){
				link.setAttribute('can-use', 'no');
				link.addEventListener('click', function(e){
					if (this.getAttribute('can-use') === 'no') {
						e.preventDefault();
						e.stopPropagation();
						that.showQuestion(this);
						return false;
					}
				}, false);
			})
		},
		showQuestion: function(link) {
			var a, b, c, answer;
			a = Math.round(Math.random() * 40);
			b = Math.round(Math.random() * 40);
			c = a + b;
			answer = 0;
			while (!answer) {
				answer = prompt(a + ' + ' + b + ' = ?');
				if (answer === null) {
					answer = true;
					return;
				}
				if (parseInt(answer) === c) {
					answer = true;
					link.setAttribute('can-use', 'yes');
					link.click();
				} else {
					answer = false;
					a = Math.round(Math.random() * 40);
					b = Math.round(Math.random() * 40);
					c = a + b;
				}
			}
		}

	}

}(window));


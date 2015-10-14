(function (win) {

	"use strict";
	/*global window, document */

	win.ui = win.ui || {};

	win.ui.message = {
		showTime: 3000, // two second to show message
		setTimeoutId: 0,
		handleEvent: function() {
			this.wrapper = $('.js-message-wrapper');
			this.textNode = $('.js-message-text', this.wrapper);
		},
		show: function(msg) {
			clearTimeout(this.setTimeoutId);
			this.textNode.innerHTML = msg;
			$.addClass(this.wrapper, 'active');
			this.setTimeoutId = setTimeout(this.hide.bind(this), this.showTime);
		},
		hide: function() {
			$.removeClass(this.wrapper, 'active');
		}

	};

	win.addEventListener('load', win.ui.message, false);

}(window));

(function (win) {

	"use strict";
	/*global window, document */

	win.ui = win.ui || {};

	win.ui.splashScreen = {
		showTime: 2500,
		setTimeoutId: 0,
		handleEvent: function() {
			this.wrapper = $('.js-splash-screen');
			this.goodAnswer = $('.js-good-answer', this.wrapper);
			this.badAnswer = $('.js-bad-answer', this.wrapper);
			this.wrapper.addEventListener('click', function(){
				clearTimeout(this.setTimeoutId);
				this.hide();
			}.bind(this), false);
		},
		show: function(isRight) {
			clearTimeout(this.setTimeoutId);
			this.goodAnswer.style.display = isRight ? 'block' : 'none';
			this.badAnswer.style.display = isRight ? 'none' : 'block';
			$.addClass(this.wrapper, 'active');
			this.setTimeoutId = setTimeout(this.hide.bind(this), this.showTime);
			player.play(isRight ? soundList.goodAnswer : soundList.badAnswer);
		},
		hide: function() {
			$.removeClass(this.wrapper, 'active');
		}
	};

	win.addEventListener('load', win.ui.splashScreen, false);

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






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
			this.wrapper.onclick();
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
			setTimeout(this.hide.bind(this), 900);
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
	if (!info.debugger.isActive) {
		return;
	}

	var logger = {
		handleEvent: function(){
			this.wrapper = $('.js-logger');
			this.wrapper.style.display = 'block';
			this.innerBlock = $('.js-logger-inner-block', this.wrapper);
			// save current method
			console._log = console.log;
			var that = this;
			console.log = function(text) {
				that.innerBlock.innerHTML += text + '<br>';
			}
		}

	};

	win.addEventListener('load', logger, false);

}(window));

(function () {
	"use strict";
	/*global window, document, console, alert */

	window.addEventListener('load', noBodyScroll, false); // + no gesture
	function noBodyScroll() {
		$('body').addEventListener('touchmove', function(e){
			if (!info.canScroll) {
				e.preventDefault();
			}
		}, false);
	}

}());

(function (win) {

	"use strict";
	/*global window, document, console, alert */

	win.ui = win.ui || {};

	win.ui.externalLinkHandler = {
		setLinks: function(links) {
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

(function (win) {

	"use strict";
	/*global window, document */

	win.ui = win.ui || {};

	win.ui.confirm = {
		handleEvent: function() {
			this.wrapper = $('.js-confirm');
			this.okBtn = $('.js-confirm-button-ok', this.wrapper);
			this.cancelBtn = $('.js-confirm-button-cancel', this.wrapper);
			this.message = $('.js-confirm-message', this.wrapper);

			this.okBtn.addEventListener('click', this.hide.bind(this), false);
			this.cancelBtn.addEventListener('click', this.hide.bind(this), false);

		},
		show: function(msg, okAction, cancelAction) {
			$.html(this.message, msg);
			this.wrapper.style.display = 'table';
			var that = this;
			setTimeout(function(){
				that.wrapper.style.opacity = 1;
			}, 20);
			this.okBtn.onclick = okAction;
			this.cancelBtn.onclick = cancelAction;
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

	win.addEventListener('load', win.ui.confirm, false);

}(window));

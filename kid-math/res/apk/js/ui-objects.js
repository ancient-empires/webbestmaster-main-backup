(function (win) {

	"use strict";
	/*global window, document, console, alert, $, info */

	win.ui = win.ui || {};

	win.ui.fade = {
		time: 600,
		handleEvent: function () {
			this.node = $('#fade');
			this.node.addEventListener(info.vendorPrefix + 'TransitionEnd', function () {
				if (parseInt(this.style.opacity, 10) === 0) {
					this.style.display = 'none';
				}
			}, false);
		},
		show: function () {
			this.node.style.display = 'block';
			win.setTimeout(function () {
				this.node.style.opacity = '1';
			}.bind(this), 10);
		},
		hide: function () {
			this.node.style.opacity = '0';
		}

	};

	win.addEventListener('load', win.ui.fade, false);

}(window));

(function (win) {

	"use strict";
	/*global window, document, console, alert, $, info */

	win.ui = win.ui || {};

	win.ui.message = {
		handleEvent: function () {
			this.wrapper = $('#message-wrapper');

			this.wrapper.addEventListener(info.vendorPrefix + 'TransitionEnd', function () {
				if (parseInt(this.style.opacity, 10) === 0) {
					this.style.display = 'none';
				}
			}, false);

			this.message = $('.message-container h1', this.wrapper);
			this.okBuuton = $('.message-container .message-ok-button', this.wrapper);
			this.okBuuton.addEventListener('click', this.hide.bind(this), false);

		},
		show: function (text, action) {
			this.message.innerHTML = text;
			this.wrapper.style.display = 'block';
			win.setTimeout(function () {
				this.wrapper.style.opacity = '1';
			}.bind(this), 10);
			this.okBuuton.setAttribute('action', action || '');
		},
		hide: function () {
			this.wrapper.style.opacity = '0';
			// run action

			var arr = this.okBuuton.getAttribute('action');

			if (!arr) {
				return;
			}
			arr = arr.split(' ');
			var controller = arr[0];
			var action = arr[1];
			var params;
			try {
				params = JSON.parse(arr[2] || '{}');
			} catch (e) {
				params = arr[2];
			}
			win[controller][action](params, this);
		}

	};

	win.addEventListener('load', win.ui.message, false);

}(window));

(function (win) {

	"use strict";
	/*global window, document, console, alert, $, info */

	win.ui = win.ui || {};

	win.ui.answerSplashScreen = {
		handleEvent: function () {
			this.wrapper = $('#splash-screen-wrapper');
			this.good = $('.good-answer', this.wrapper);
			this.bad = $('.bad-answer', this.wrapper);

			this.wrapper.addEventListener(info.vendorPrefix + 'TransitionEnd', function () {
				if (parseInt(this.style.opacity, 10) === 0) {
					this.style.display = 'none';

					// run action
					var arr = this.getAttribute('action');
					if (!arr) {
						return;
					}
					arr = arr.split(' ');
					var controller = arr[0];
					var action = arr[1];
					var params;
					try {
						params = JSON.parse(arr[2] || '{}');
					} catch (e) {
						params = arr[2];
					}
					win[controller][action](params, this);
				}
			}, false);

			this.wrapper.addEventListener('click', function () {
				this.style.opacity = 0;
				win.setTimeout(function(){
					this.style.opacity = 1;
					win.setTimeout(function(){
						this.style.opacity = 0;
					}.bind(this), 15);
				}.bind(this), 1000);
			}, false);

		},
		show: function (isGood, action) {

			this.good.style.display = isGood ? 'block' : 'none';
			this.bad.style.display = !isGood ? 'block' : 'none';
			this.wrapper.style.display = 'block';

			win.setTimeout(function () {
				this.wrapper.style.opacity = '1';
			}.bind(this), 10);

			win.setTimeout(function () {
				this.hide();
			}.bind(this), 2000);

			this.wrapper.setAttribute('action', action || '');

		},
		hide: function () {
			this.wrapper.style.opacity = '0';
		}

	};

	win.ui.hideAnswerSplashScreen = function() {
		win.ui.answerSplashScreen.hide();
	};

	win.addEventListener('load', win.ui.answerSplashScreen, false);

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
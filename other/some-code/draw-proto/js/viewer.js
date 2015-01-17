(function (win) {

	"use strict";
	/*global window, document, $ */

	win.viewer = {
		wrapper: null, // field for page wrapper, type Node
		templatePrefix: '.js-template',
		history: [],
		historyCurrentState: '',
		isBack: false,
		show: function(cssSelector, model, notTrack) {

			// do not push doubled state (selector)
			if (cssSelector !== this.historyCurrentState && !notTrack) {
				this.history.push(cssSelector);
			}

			this.historyCurrentState = cssSelector;

			this.transition1stPart(); // only for decoration

			var template = $(this.templatePrefix + cssSelector);
			this.wrapper.innerHTML = this.template(template.innerHTML)(model || {});

			// run action
			var action = template.getAttribute('onshow');
			if (action) {
				win.eval(action);
			}

			this.transition2ndPart(); // only for decoration
			this.isBack = false; // only for decoration

		},
		back: function() {
			this.isBack = true;
			var curPage = this.history.pop();
			if (!curPage) {
				return;
			}
			var prePage = this.history.pop();
			if (!prePage) {
				return;
			}
			this.show(prePage);
		},
		refresh: function(){
			this.show(this.historyCurrentState, true);
			statusBar.setLang();
		},
		transition1stPart: function() {
			var wrapper = $('#wrapper');
			var transitionWrapper = $('#wrapper-for-transition');
			transitionWrapper.style.webkitTransition = '';
			$.removeClass(transitionWrapper, 'to-right');
			$.removeClass(transitionWrapper, 'to-left');
			transitionWrapper.innerHTML = wrapper.innerHTML;
		},
		transition2ndPart: function() {
			setTimeout(function(back){
				var transitionWrapper = $('#wrapper-for-transition');
				transitionWrapper.style.webkitTransition = '0.5s all ease-out';
				$.addClass(transitionWrapper, back ? 'to-left' : 'to-right');
			}.bind(this, this.isBack), 10);
		},
		template: function(str) {
			return new Function("obj",
				"var p=[];" +
					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" + str
					.replace(/[\r\t\n]/g, " ")
					.split("{{").join("\t")
					.replace(/((^|}})[^\t]*)'/g, "$1\r")
					.replace(/\t=(.*?)}}/g, "',$1,'")
					.split("\t").join("');")
					.split("}}").join("p.push('")
					.split("\r").join("\\'") + "');} return p.join('');");

		}

	};



}(window));

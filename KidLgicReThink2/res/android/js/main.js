(function (win) {

	"use strict";
	/*global window, document */

	var main = {

		handleEvent: function() {

			this.wrapper = $('#wrapper');
			viewer.show('title-page');

		},
		setMorePage: function(){
			var langSelectNode = $('.js-language-select', this.wrapper);

			langSelectNode.addEventListener('change', function(){
				info.set('lang', this.value, true);
				viewer.refresh();
			}, false);

			// set external link
			var links = $$('a', main.wrapper);
			ui.externalLinkHandler.setLinks(links);

		}

	};

	win.main = main;

	win.addEventListener('load', main, false);

	win.onBackButton = function() {

		var btn = document.querySelector('.js-status-bar .js-back');

		if (btn.style.display === 'none'){
			return;
		}

		btn.onclick();

	};

}(window));

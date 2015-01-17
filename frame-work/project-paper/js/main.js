(function (win) {

	"use strict";
	/*global window, document */

	viewer.contextPath = 'http://localhost:63342/statlex_git/kidgames/frame-work/project-paper/';

	// routing
	app.routes['index.html'] = {
		template: 'title-page'
	};

	app.routes['info.html'] = {
		template: 'more-page'
	};

	app.routes['404.html'] = {
		template: '404'
	};

	var main = {

		handleEvent: function () {

			this.wrapper = $('#wrapper');
			viewer.show('title-page');
			ui.fn.setBodyScroll(true);

		},
		setMorePage: function () {
			var langSelectNode = $('.js-language-select', this.wrapper);

			langSelectNode.addEventListener('change', function () {
				info.set('lang', this.value, true);
				app.showByPath();
			}, false);

			// set external link
			var links = $$('a', main.wrapper);
			ui.externalLinkHandler.setLinks(links);

		}

	};

	win.main = main;

	win.addEventListener('load', main, false);

}(window));


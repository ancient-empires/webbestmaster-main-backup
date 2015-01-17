(function (win) {

	"use strict";
	/*global window, document, $, $$, info, viewer, ui */

	var main = {

		handleEvent: function () {

			this.wrapper = $('#wrapper');
			viewer.show('title-page');
			ui.fn.setBodyScroll(true);
			this.setBodyClassLang();

		},
		setMorePage: function () {
			var langSelectNode = $('.js-language-select', this.wrapper),
				links = $$('a', main.wrapper),
				that = this;

			langSelectNode.addEventListener('change', function () {
				info.set('lang', this.value, true);
				that.setBodyClassLang();
				viewer.refresh();

			}, false);

			ui.externalLinkHandler.setLinks(links);

		},
		setBodyClassLang: function () {
			info.availableLangs.forEach(function (lang) {
				$.removeClass(this.wrapper, 'lang-' + lang);
			}, this);
			$.addClass(this.wrapper, 'lang-' + info.lang);
		}

	};

	win.main = main;

	win.addEventListener('load', main, false);

}(window));


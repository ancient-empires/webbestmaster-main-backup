(function () {

	"use strict";
	/*global window, document, console, alert */



	function run() {

		window.pagin = new Pagination({wrapper:$('.pagination-wrapper'), container: $('.pagination-page-container'),  pages: $$('.pagination-page')} );
		new Pagination({wrapper:$('.pagination-wrapper-2'), container: $('.pagination-page-container-2'),  pages: $$('.pagination-page-2')} );

	}

	window.addEventListener('load', run, false);

}());

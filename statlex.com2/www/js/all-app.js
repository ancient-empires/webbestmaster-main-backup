(function (win, doc, docElem) {

	"use strict";
	/*global window, document, console, alert, $ */

	var allApp = {
		init: function() {

			this.items = $('.list-app-item');
			this.infoBlocks = $('.app-info-wrapper');

			this.addEventListeners();

			this.showInfo(this.items[0]);

		},

		addEventListeners: function() {

			this.items.forEach(function(node){
				var item = $(node);
				item.on('click', this.showInfo.bind(this));
			}, this);

		},
		showInfo: function(e) {
			var item = $(e.currentTarget || e),
				selector = item.data('app-name'); // event or node

			this.items.removeClass('active');
			item.addClass('active');

			this.infoBlocks.each(function(){
				var $block = $(this);
				if ($block.data('app-name') === selector) {
					$block.removeClass('hidden');
				} else {
					$block.addClass('hidden');
				}
			});

		}

	};

	win.addEventListener('load', allApp.init.bind(allApp), false);

}(window, document, document.documentElement));
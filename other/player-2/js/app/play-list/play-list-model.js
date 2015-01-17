(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, Audio */

	win.APP.PlayListModel = Backbone.Model.extend({
		initialize: function(data) {
			this.view = data.view;

			this.set('list', []);
			this.on('change:list', this.view.update.bind(this.view));

		},
		getDataBySrc: function(src) {

			var list = this.get('list'),
				data = {};

			list.forEach(function(item){
				if (item.src === src) {
					data = item;
				}
			});

			return data;

		}


	});

}(window, document, document.documentElement));
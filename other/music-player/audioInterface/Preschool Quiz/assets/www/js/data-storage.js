(function (win) {

	"use strict";
	/*global window, document, localStorage */

	var ls = localStorage;

	win.dataStorage = {
		saveItem: 'save-item-kid-game',
		getData: function() {
			var data = ls.getItem(this.saveItem) || '{}';
			return JSON.parse(data);
		},
		getItem: function(itemName) {
			return this.getData()[itemName] || 0;
		},
		setItem: function(itemName, value) {
			info[itemName] = value;
			var data = this.getData();
			data[itemName] = value;
			data = JSON.stringify(data);
			ls.setItem(this.saveItem, data);
		},
		changeItem: function(itemName, delta) {
			this.setItem(itemName, this.getItem(itemName) + delta);
		}
	}

}(window));

(function (win) {

	"use strict";
	/*global console, alert, window, $, setTimeout, clearInterval */

	function Listener() {
		this.nodeList = [];
		this.eventList = [];
		this.uniList = [];
		this.savedMove = [];
		this.func = function(){};
	}

	win.Listener = Listener;

	Listener.prototype.setEventList = function (events) {
		this.eventList = events;

		//set uni list
		this.uniList = [];
		events.forEach(function (eventName) {
			if (this.uniList.indexOf(eventName) === -1) {
				this.uniList.push(eventName);
			}
		}, this);

		this.uniList.forEach(function (eventName) {
			this.nodeList.on(eventName, this.addToSavedMode.bind(this));
		}, this);

	};

	Listener.prototype.addToSavedMode = function (e) {
		clearInterval(this.clearTimeoutId);
		this.savedMove.push(e.type.replace(/\$/gi, ''));
		this.detectAction();
		this.clearTimeoutId = setTimeout(this.clearSavedMove.bind(this), 1000);
	};

	Listener.prototype.clearSavedMove = function() {
		this.savedMove = [];
	};

	Listener.prototype.pushNode = function (nodes) {

		nodes.forEach(function (node) {
			this.nodeList.push(node);
		}, this);

		this.nodeList = $(this.nodeList);

	};

	Listener.prototype.detectAction = function() {
		var currentSavedList = this.savedMove.join(','),
			detectingEventList = this.eventList.join(','),
			re = new RegExp(detectingEventList + '$', '');

		if ( re.test(currentSavedList) ) {
			this.runFunction();
		}

	};

	Listener.prototype.setFunction = function(func) {
		this.func = func;
	};

	Listener.prototype.runFunction = function() {
		this.func();
	};

}(window));
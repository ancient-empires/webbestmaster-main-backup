/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	var mediator = win.mediator;

	mediator.name = "tim";
	mediator.subscribe('nameChange', function(arg) {
		console.log(this.name);
		this.name = arg;
		console.log(this.name);
	});

	mediator.publish('nameChange', 'david'); //tim, david
	mediator.unsubscribe('nameChange'); // unsubscribe to prevent follow publish, only for 'nameChange';
	mediator.unsubscribe(); // unsubscribe to prevent follow publish, for all channels;

	var obj = {name: 'sam'};

	mediator.installTo(obj);
	obj.subscribe('nameChange', function(arg) {
		console.log(this.name);
		this.name = arg;
		console.log(this.name);
	});

	obj.publish('nameChange', 'john'); //sam, john

}(window));
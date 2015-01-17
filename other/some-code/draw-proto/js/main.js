(function (win) {

	"use strict";
	/*global window, document */

	win.main = {
		handleEvent: function() {
			// show drawing page
			viewer.wrapper = $('#wrapper');
			viewer.show('.drawing-page');

		},

		startDraw: function() {

			var canvas = $('#wrapper canvas');

			drawer.init({canvas:canvas});
			drawer.addImage('img/image.png');

			drawer.activeTool = 'bucket';

		}

	};

	win.addEventListener('load', win.main, false);

}(window));

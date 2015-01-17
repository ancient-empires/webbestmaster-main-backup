(function (win, doc, docElem) {

	"use strict";
	/*global window, document, console, alert */

	var myMvc = {

		routes: {},
		init: function() {

			var history = win.history;
			var that = this;

			history.replaceState(null, null, viewer.contextPath);

			// handle history change
			win.addEventListener('popstate', function(e) { // mozPopsate, webkitPopstate and etc...
				that.showByPath();
			}, false);

			// handle history push state
			var pushState = history.pushState;
			history.pushState = function(state) {
				if (typeof history.onpushstate === "function") {
					history.onpushstate({state: state});
				}
				pushState.apply(history, arguments);
				that.showByPath();
			};
		},
		getDataFromPath: function() {
			var path = win.location.href.replace(viewer.contextPath, '');
			if (!path.length) {
				path = 'index.html';
				history.replaceState(null, null, viewer.contextPath);
			}

			var data = this.routes[path];

			if (!data) {
				data = this.routes['404.html'];
				history.replaceState(null, null, viewer.contextPath + '404.html');
			}

			return data;

		},
		showByPath: function() {
			var data = this.getDataFromPath();
			viewer.show(data.template);
		}

	};

	myMvc.init();

	win.app = myMvc;

}(window, document, document.documentElement));

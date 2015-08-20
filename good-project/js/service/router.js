define(['backbone', 'mediator', 'log'], function (bb, mediator, log) {

	'use strict';

	var Router, router;

	function newViewByPath(path, data) {
		var ViewConstructor = require(path);
		return new ViewConstructor(data);
	}

	Router = bb.Router.extend({

		routes: {
			'': 'home',
			'page': 'page',
			'*action': 'route'
		},

		url: {
			popup: 'show-popup=popup'
		},

		home: function () {
			this.trigger('route:route', '/');
			newViewByPath('app/home/home-view');
		},

		page: function () {
			newViewByPath('app/page/page-view');
		},

		routeToPopup: function () {
			this.navigate(bb.history.fragment + '?' + this.url.popup, false);
		}

	});

	router = new Router();

	mediator.installTo(router);

	router.on('route:route', function (url) {
		this.publish('url', url);
		log('url -', url);
	});

	return router;

});
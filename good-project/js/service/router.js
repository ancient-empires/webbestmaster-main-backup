define(['backbone', 'mediator'], function (bb, mediator) {

	'use strict';

	var Router = bb.Router.extend({

			routes: {
				'': 'home',
				'*action': 'route'
			},

			home: function () {
				this.trigger('route:route', '/');
			}

		}),
		router = new Router();

	mediator.installTo(router);

	router.on('route:route', function (url) {
		this.publish('url', url);
	});

	return router;

});
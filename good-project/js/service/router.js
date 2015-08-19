define(['backbone', 'mediator'], function (bb, mediator) {

	'use strict';

	var Router = bb.Router.extend({

			routes: {
				"*actions": "route"
			}

		}),
		router = new Router();

	mediator.installTo(router);

	router.on('route:route', function (action) {
		console.log(action);
		// mediator publish here
	});

	return router;

});
define(['underscore', 'backbone', 'mediator', 'log'], function (_, bb, mediator, log) {

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

		home: function () {
			console.log('home');
			this.trigger('route:route', '/');
			newViewByPath('app/home/home-view');
		},

		page: function () {
			newViewByPath('app/page/page-view');
		},

		url: {
			popup: 'show-popup=popup'
		},

		getAction: function () {

			var router = this,
				e = window.event || {},
				newURL = e.newURL || '',
				oldURL = e.oldURL || '',
				popupPart = router.url.popup,
				viewAction;

			if ( newURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'showPopup';
			}

			if ( oldURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'hidePopup';
			}

			// other action is here
			return viewAction;

		},

		constructor: function () {

			var router = this,
				originalFunctions = {},
				proto = Router.prototype;

			_.each(router.routes, function (value) {

				originalFunctions[value] = proto[value];

				proto[value] = function () {

					var router = this,
						viewAction = router.getAction();

					if ( !viewAction ) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						case 'hidePopup':
							this.publish('hide-popup');
							break;
						case 'showPopup':
							break;
					}

				};

			});

			return bb.Router.prototype.constructor.apply(router, arguments);

		},

		routeToPopup: function () {
			this.navigate(bb.history.fragment + '?' + this.url.popup, false);
		},

		hidePopup: function () {

			var router = this;

			if (bb.history.fragment.indexOf(router.url.popup) !== -1) {
				window.history.back();
			} else {
				router.publish('hide-popup');
			}

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
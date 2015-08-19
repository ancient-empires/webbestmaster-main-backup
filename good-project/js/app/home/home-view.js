define(['jquery', 'backbone', 'BaseView'], function ($, bb, BaseView) {

	return BaseView.extend({

		events: {

		},

		selectors: {

		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.home());

			//view.constructor.prototype.initialize.apply(view, arguments);
			view.delegateEvents();
			view.render();

			console.log('home view initialize');

		}

	});

});

define(['jquery', 'backbone', 'BaseView'], function ($, bb, BaseView) {

	return BaseView.extend({

		events: {

		},

		selectors: {

		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.page());

			//view.constructor.prototype.initialize.apply(view, arguments);
			view.delegateEvents();
			view.render();

			debugger


			console.log('page view initialize');

		}

	});

});

define(['jquery', 'backbone', 'BaseView'], function ($, bb, BaseView) {

	return BaseView.extend({

		events: {

		},

		selectors: {

		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.main());

			//view.constructor.prototype.initialize.apply(view, arguments);
			view.render();

			console.log('main view initialize');

		}

	});

});

define(['jquery', 'backbone', 'BaseView', 'PopupView'], function ($, bb, BaseView, PopupView) {

	return BaseView.extend({

		events: {
			'click .js-show-popup': 'showPopupView'
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

		},

		showPopupView: function () {

			var popup = new PopupView({
				name: 'popup-test-content',
				timeout: 3e3
			});

			popup.data.onShowPromise.then(function () {
				console.log('show popup');
			});

		}

	});

});

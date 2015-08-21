define(['jquery', 'backbone', 'BaseView', 'db', 'log'], function ($, bb, BaseView, db, log) {

	return BaseView.extend({

		events: {
			'input .js-search': 'search'
		},

		selectors: {
			searchResult: '.js-search-result',
			search: '.js-search'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.main());

			//view.constructor.prototype.initialize.apply(view, arguments);
			view.render();

			console.log('main view initialize');

		},

		search: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				value = $this.val();

			if (!value) {
				return;
			}

			view.searchByValue(value);

		},

		searchByValue: function (value) {

			var view = this;

			db.searchUser(value).then(function (data) {

				var realValue = view.$el.find(view.selectors.search).val(),
					logins;

				if (realValue !== data.value) {
					log('research', data.value, '->', realValue);
					view.searchByValue(realValue);
					return;
				}

				logins = data.result.map(function (data) {
					return data.login;
				});

				view.$el.find(view.selectors.searchResult).html(JSON.stringify(logins));

			});

		}

	});

});

define(['jquery', 'backbone', 'BaseView', 'db', 'log'], function ($, bb, BaseView, db, log) {

	return BaseView.extend({

		events: {
			'input .js-search': 'search',
			'click .js-add-user': 'addUser',
			'click .js-send-message': 'sendMessage'
		},

		selectors: {
			searchResult: '.js-search-result',
			search: '.js-search',
			message: '.js-message'
		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.main());

			//view.constructor.prototype.initialize.apply(view, arguments);
			view.render();

			view.subscribe('update-contact-list', view.updateContactList);

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

				var realValue = view.$el.find(view.selectors.search).val();

				if (realValue !== data.value) {
					log('research', data.value, '->', realValue);
					view.searchByValue(realValue);
					return;
				}

				view.$el.find(view.selectors.searchResult).html(view.tmpl['search-result']( data ));

				view.delegateEvents();

			});

		},

		addUser: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				userId = $this.attr('data-user-id');

			view.publish('add-user-to-contact-list', { userId: userId });

		},

		updateContactList: function (dataArg) {

			var view = this,
				data = dataArg || {},
				list = [];

			_.each(data.list, function (id, dbHash) {
				list.push(id);
			});

			view.$el.find('.js-contact-list').html(view.tmpl['contact-list']({ list: list}));

		},

		sendMessage: function () {

			var view = this,
				$text = view.$el.find(view.selectors.message),
				text = $text.val();

			view.publish('send-message', {
				to: '2a440602246a90d34e45faaef79842b943aa639a',
				text: text
			});

		}

	});

});

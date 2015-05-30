(function (win) {

	"use strict";
	/*global window */
	/*global bingo, $ */

	win.APP = win.APP || {};

	win.APP.TitleView = win.APP.MainView.extend({
		templates: ['title'],
		events: {
			'click .js-bingo-preview': 'startBingo',
			'click .js-send-your-bingo': 'sendMail',
			'click .js-remove-ads': 'removeAds'

		},
		init: function() {

			this.$el = $('<div class="title js-title"/>').html(this.tmpl.title({}));

			this.$wrapper = $('.js-wrapper');

			this.$wrapper.html('');

			this.$wrapper.append(this.$el);

			var util = $();
			util.setBodyScroll(true);

		},

		startBingo: function(e) {

			var $node = $(e.currentTarget),
				name = $node.data('name');

			win.APP.router.navigate(name);

			win.APP.bingoView = new win.APP.BingoView({
				name: name
			});

		},

		sendMail: function() {
			win.APP.router.navigate('send-mail');
			win.APP.sendMailView = new win.APP.SendMailView();
		},

		removeAds: function() {
			window.open("https://play.google.com/store/apps/details?id=com.statlex.bingo");
		}


	});


}(window));
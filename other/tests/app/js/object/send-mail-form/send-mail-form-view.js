(function (win) {

	"use strict";
	/*global window */
	/*global bingo, $ */

	win.APP = win.APP || {};

	win.APP.SendMailView = win.APP.MainView.extend({
		templates: ['sendMail'],
		events: {
			'click .js-send-mail-button': 'sendMail'
		},
		init: function() {

			this.$el = $('<div class="send-mail js-send-mail"/>').html(this.tmpl.sendMail({}));

			this.$wrapper = $('.js-wrapper');

			this.$wrapper.html('');

			this.$wrapper.append(this.$el);

			setTimeout(function(){
				$('.js-send-mail-form *').removeAttr('disabled');
			}, 400);

			var util = $();
			util.setBodyScroll(true);

		},

		sendMail: function() {

			var $name = $('.js-new-bingo-name'),
				$words = $('.js-new-bingo-words'),
				$description = $('.js-new-bingo-description'),
				name = $name.val(),
				words = $words.val(),
				description = $description.val(),
				$button = $('.js-send-mail-button'),
				util = $();

			if ($button.hasClass('button-is-disabled')) {
				return;
			}

			$button.addClass('button-is-disabled');

			if ( (name + words + description).length < 200 || !words || !name) {
				alert(lang.tooFewWords);
				$button.removeClass('button-is-disabled');
				return;
			}

			name = encodeURIComponent(name);
			words = encodeURIComponent(words);
			description = encodeURIComponent(description);

			util.ajax({
				url: 'http://statlex.com/mail.php?name=' + name + '&words=' + words + '&description=' + description + '&time-stamp=' + Math.random(),
				success: function(text) {
					alert(lang.mailSendingIsSuccessful);
					$button.removeClass('button-is-disabled');
					Backbone.history.history.back();
					console.log(text);
				},
				error: function() {
					alert(lang.mailSendingIsFailed);
					$button.removeClass('button-is-disabled');
				}
			});




		}


	});


}(window));
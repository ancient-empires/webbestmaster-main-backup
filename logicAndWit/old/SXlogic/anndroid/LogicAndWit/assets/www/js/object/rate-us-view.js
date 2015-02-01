(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document */
	/*global templateMaster, lang, Backbone, APP, info, $, clearInterval, setTimeout, location, history */

	win.APP = win.APP || {};

	win.APP.RateUsView = win.APP.MainView.extend({
		templates: ['rate-us'],
		events: {
			'click .js-rate-us-fade': 'remove',
			'click .js-not-now': 'remove',
			'mousedown .js-rate-us-star': 'setRate',
			'click .js-rate-us-on-google-play': 'toMarket',
			'click .js-rate-us-send-button': 'sendFeedback',
			'blur .js-rate-us-send-textarea': 'onBlurTextarea',
			'focus .js-rate-us-send-textarea': 'onFocusTextarea'
		},
		parent: '.js-wrapper',
		init: function (data) {

			this.$el = $(this.tmpl['rate-us']({}));
			this.$sendButton = this.$el.find('.js-rate-us-send-button');
			this.show();

		},
		show: function () {

			APP.router.navigate('rate-us', {trigger: false});
			$(this.parent).append(this.$el);

		},
		remove: function () {
			this.$el.remove();

			if (Backbone.history.fragment === 'rate-us') {
				Backbone.history.history.back();
			}

		},
		setRate: function(e) {
			var $this = $(e.currentTarget),
				words = $this.data('word'),
				$words = this.$el.find('.js-rate-by-star'),
				value = +$this.data('value'),
				$stars = this.$el.find('.js-rate-us-star'),
				$send = this.$el.find('.js-rate-us-send-feedback'),
				$toGP = this.$el.find('.js-rate-us-on-google-play'),
				$notNow = this.$el.find('.js-not-now');

			$words.html(words);
			$notNow.css('display', 'none');

			$stars.forEach(function(star, index){
				if (index < value) {
					star.classList.add('active');
				} else {
					star.classList.remove('active');
				}
			});

			if (value < 4) {
				$send.removeClass('hidden');
				$toGP.addClass('hidden');
			} else {
				$send.addClass('hidden');
				$toGP.removeClass('hidden');
			}

			this.ratingToMail = value + ' - ' + words;

		},
		toMarket: function() {
			this.remove();

			var url = '';

			if (info.isAdsFree) {
				url = info.isAndroid ? info.adsFreeLinks.googlePlay : info.adsFreeLinks.appStore;
			} else {
				url = info.isAndroid ? info.adsNonFreeLinks.googlePlay : info.adsNonFreeLinks.appStore;
			}

			win.open(url);

		},
		sendFeedback: function(e) {
			var $textArea = this.$el.find('.js-rate-us-send-textarea'),
				description = encodeURIComponent($textArea.val()),
				ratingToMail = encodeURIComponent(this.ratingToMail),
				util = $(),
				$form = this.$el.find('.js-rate-us-form');

			$form.addClass('blurred');

			info.set('sent-mail', ratingToMail + ' - ' + description, true);

			util.ajax({
				url: 'http://statlex.com/mail.php?name=SXLogic&words=' + ratingToMail + '&description=' + description + '&time-stamp=' + Math.random(),
				success: function(text) {

					alert(lang.mailSendingIsSuccessful);
					win.APP.rateUsView.remove();

				},
				error: function() {
					//alert(lang.mailSendingIsFailed);
					alert(lang.mailSendingIsSuccessful);
					win.APP.rateUsView.remove();

				}
			});

		},
		onBlurTextarea: function() {
			this.$el.removeClass('focusTextArea');
		},
		onFocusTextarea: function() {
			this.$el.addClass('focusTextArea');
		}

	});

}(window, document, document.documentElement));
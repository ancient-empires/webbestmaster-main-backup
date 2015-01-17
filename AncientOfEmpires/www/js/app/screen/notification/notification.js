(function (win) {

	"use strict";
	/*global window, document, setTimeout, clearTimeout */
	/*global bingo, $, info, APP */

	/*
	 * setting
	 * 1 - music off/on
	 * 2 - ask for switch turn
	 * 3 - animation speed -                 slow - 1 2 [3] 4 5 - fast
	 *
	 *
	 * */

	/*

	 [*] music
	 [*] end turn confirm

	 animation speed
	 slow - 1 2 [3] 4 5 - fast

	 */


	win.APP = win.APP || {};

	APP.NotificationView = APP.BaseView.extend({

		templates: ['notification-wrapper', 'n-banner', 'n-turn'],

		showTimeout: 60e3,

		events: {

		},

		init: function() {


			this.$wrapper = $('.js-wrapper');

			//this.$wrapper.html('');
			//
			//this.setSettingsState();
			//

		},

		show: function (data) { // template name, data for template, from left||right

			if (data instanceof String) {
				data = {
					text: data
				};
			}

			data.from = data.from || 'left';

			data.tmpl = data.tmpl || 'n-banner';

			clearTimeout(this.showTimeoutId);

			this.showTimeoutId = setTimeout(this.hideExtraWindows, this.showTimeout);

			this.hideExtraWindows();

			this.$el = $(this.tmpl['notification-wrapper']());

			if (data.onHide) {
				this.$el.on('hide', data.onHide);
			}

			var newNode = $(this.tmpl[data.tmpl](data));

			newNode.on('click', this.hideExtraWindows);

			this.$el.find('.js-notification-container').append(newNode);

			this.$wrapper.append(this.$el);

			this.$el.addClass('n-anim-show-from-' + data.from);


			this.disableScrollNodes();

		},
		hideExtraWindows: function (e) {

			var $node = e ? $(e.currentTarget.parentNode.parentNode) : $('.js-wrapper').find('.js-notification-wrapper');

			if ( !$node.length ) {
				return;
			}

			$node.addClass('n-anim-hide');

			$node.forEach(function (node) {

				if (node.getAttribute('data-is-done')) {
					return;
				}

				$(node).attr('data-is-done', 'true').on('hide');

			});

			setTimeout($node.remove.bind($node), 600); // see notification.css

		}

	});

}(window));
'use strict';
/*global window */
/*global */

import mediator from './mediator';
import lang from './lang';

var win = window,
	applicationCache = win.applicationCache,
	appCache = {

		initialize: function () {

			var appCache = this;

			mediator.installTo(appCache);

			appCache.bindEventListeners();

		},

		getCacheStatus: function () {

			var appCache = applicationCache;

			switch (appCache.status) {
				case appCache.UNCACHED: // UNCACHED == 0
					return 'UNCACHED';
					break;
				case appCache.IDLE: // IDLE == 1
					return 'IDLE';
					break;
				case appCache.CHECKING: // CHECKING == 2
					return 'CHECKING';
					break;
				case appCache.DOWNLOADING: // DOWNLOADING == 3
					return 'DOWNLOADING';
					break;
				case appCache.UPDATEREADY:  // UPDATEREADY == 4
					return 'UPDATEREADY';
					break;
				case appCache.OBSOLETE: // OBSOLETE == 5
					return 'OBSOLETE';
					break;
				default:
					return 'UKNOWN CACHE STATUS';
					break;
			}

		},

		bindEventListeners: function () {

			var appCache = this;

			appCache.subscribe('app-cache:check-cache', appCache.checkCache);

			applicationCache.addEventListener('updateready', function (e) {
				appCache.checkCache();
			}, false);

		},

		checkCache: function () {

			var appCache = this;

			if (appCache.getCacheStatus() !== 'UPDATEREADY') {
				return;
			}

			mediator.publish('show-popup', {
					name: 'new-version-is-available',
					//cssClass: 'popup-title',
					extraEvents: [
						{
							selector: '.js-update-cache',
							event: 'click',
							fn: function () {
								applicationCache.swapCache();
								win.location.reload();
							}
						}
					],
					data: {
						lang: lang
					}
				}
			);

		}

	};

win.addEventListener('load', function () {
	appCache.initialize();
}, false);

export default appCache;


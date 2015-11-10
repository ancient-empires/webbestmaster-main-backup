/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var Android = {
		displayInterstitial: function () {
			console.log('ad has been shown');
		}
	};

	var info = win.info,

		androidAds = {
			attr: {},
			minShowPeriod: 4 * 60e3,
			set: function (key, value) {
				this.attr[key] = value;
				return this;
			},
			get: function (key) {
				return this.attr[key];
			},
			showAd: function () {

				var ad = this,
					now,
					lastShow;

				console.log('try to show ad');

				if (!ad.get('adsIsAvailable')) {
					return;
				}

				now = Date.now();
				lastShow = ad.get('lastShow') || 0;

				if (now - lastShow >= ad.minShowPeriod) {
					ad.set('lastShow', now);
					Android.displayInterstitial();
				}

			},
			init: function () {

				var ad = this;

				ad.set('lastShow', Date.now());

				ad.showAd = ad.showAd.bind(ad);

				ad.set('adsIsAvailable', (typeof Android !== 'undefined') && info.withAds);

			}

		};

	androidAds.init();

	win.androidAds = androidAds;

}(window));


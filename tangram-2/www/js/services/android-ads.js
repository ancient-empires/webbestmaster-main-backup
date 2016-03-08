'use strict';
/*global window, Date */

import info from './info';

var win = window,
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

			if ( !ad.get('adsIsAvailable') ) {
				return;
			}

			now = Date.now();
			lastShow = ad.get('lastShow');

			if ( now - lastShow >= ad.minShowPeriod ) {
				ad.set('lastShow', now);
				Android.displayInterstitial();
			}

		},
		init: function () {

			var ad = this;

			ad.showAd = ad.showAd.bind(ad);

			ad.set('lastShow', Date.now());

			ad.set('adsIsAvailable', (typeof Android !== 'undefined') && info.isNormal );

		}

	};


if ( info.get('dev-mode') ) {

	win.Android = {
		displayInterstitial: function () {
			console.log('--- ADS is SHOWN');
		}
	}

}

androidAds.init();

export default androidAds;

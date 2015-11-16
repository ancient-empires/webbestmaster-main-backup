'use strict';
/*global window */

import info from './info';

var win = window,
	androidAds = {
		attr: {},
		period: 3e3 * 60,
		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},
		get: function (key) {
			return this.attr[key];
		},
		showAd: function () {
			return win.Android && info.isNormal && win.Android.displayInterstitial();
		},
		init: function () {

			if ( !info.isNormal ) {
				return;
			}

			var androidAds = this,
				intervalId = win.setInterval(androidAds.showAd, androidAds.period);

			androidAds.set('intervalId', intervalId);

		}

	};

	androidAds.init();

export default androidAds;

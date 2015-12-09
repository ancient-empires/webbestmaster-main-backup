'use strict';
/*global window */

import info from './info';

var win = window,
	ad;

win.Android = win.Android || {
		displayInterstitial: function () {
			console.log('AD - ad has been shown !!!');
		}
	};

ad = {
	attr: {},
	minShowPeriod: 4 * 60e3,
	//minShowPeriod: 5 * 1000,
	set: function (key, value) {
		return this.attr[key] = value;
	},
	get: function (key) {
		return this.attr[key];
	},
	showAd: function () {

		var ad = this,
			now;

		console.log('AD - --------------');
		console.log('AD - try to show ad');

		if (!info.isNormal) {
			return;
		}

		console.log('AD - app WITH ads');

		now = Date.now();

		if (now - ad.get('lastShow') >= ad.minShowPeriod) {
			ad.set('lastShow', now);
			win.Android.displayInterstitial();
			console.log('AD was show');
		}

	},

	canShow: function () {

		return Date.now() - this.get('lastShow') >= this.minShowPeriod;

	},

	init: function () {

		var ad = this;

		ad.set('lastShow', Date.now());

		ad.showAd = ad.showAd.bind(ad);

	}

};

ad.init();

export default ad;

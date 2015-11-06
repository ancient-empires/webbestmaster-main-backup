/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Android */
	/*global */

	/*
	* ad module has depend from APP.info
	* */

	win.APP = win.APP || {};

	var ad = {
		attr: {},
		minShowPeriod: 1.5e3 * 60,
		set: function (key, value) {
			return this.attr[key] = value;
		},
		get: function (key) {
			return this.attr[key];
		},
		showAd: function () {

			var adMaster = this,
				now = Date.now(),
				lastShow = adMaster.get('lastShow') || 0;

			return win.APP.info.withAds && (now - lastShow) >= adMaster.minShowPeriod && adMaster.set('lastShow', now) && (typeof Android !== 'undefined') && Android.displayInterstitial();

		},
		init: function () {

			//var intervalId = setInterval(this.showAd, this.period);
			//this.set('intervalId', intervalId);
		}

	};

	win.APP.ad = ad;

	ad.init();

}(window));
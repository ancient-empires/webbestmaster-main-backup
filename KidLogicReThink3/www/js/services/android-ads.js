/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	/*
	* ad module has depend from APP.info
	* */

	win.APP = win.APP || {};

	var ad = {
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
			return win.Android && win.Android.displayInterstitial();
		},
		init: function () {
			var intervalId = win.setInterval(this.showAd, this.period);
			this.set('intervalId', intervalId);
		}

	};

	win.APP.ad = ad;

	if (win.APP.info.isNormal) {
		win.setTimeout(ad.showAd, 2e3);
		ad.init();
	}

}(window));
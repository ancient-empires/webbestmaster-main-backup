'use strict';
/*global window */

var win = window,
	doc = win.document;

import mediator from './services/mediator';

// init all librares
import shim from './lib/shim';
import lodash from './lib/lodash';
import jQuery from './lib/jquery';
import Backbone from './lib/backbone';
import fastclick from './lib/fastclick';
//import doT from './lib/dot';
import Swiper from './lib/swiper';

// init all services
import info from './services/info';
import device from './services/device';
import androidAds from './services/android-ads';
import lang from './services/lang';
import log from './services/log';
import tm from './services/template-master';
import bg from './services/bg';
import util from './services/util';

// init sound players
import sm from './sound/sound-master';

import router from './app/router/router';

import BaseView from './app/view/core/base';
import hintMaster from './app/view/core/hint';
import popupMaster from './app/view/core/popup';

// todo: - test - enable fast click
new fastclick(doc.body); // test it decide

(function back() {

	if ( win.location.hash ) {
		win.history.back();
		return win.setTimeout(back, 50);
	}

	BaseView.prototype.initStatic();

	Backbone.history.start();


	win.setTimeout(androidAds.showAd, 3e3);

}());
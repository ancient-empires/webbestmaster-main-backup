'use strict';
/*global window */

import log from './services/log';

import mediator from './services/mediator';

// init all librares
import polyfillClassList from './lib/polyfill-class-list';
import shim from './lib/shim';
import shimES5 from './lib/shim-es5';
import shamES5 from './lib/sham-es5';
import _ from './lib/lodash';
import $ from './lib/jbone';
import Deferred from './lib/deferred';
import Backbone from './lib/backbone';
import fastclick from './lib/fastclick';
import doT from './lib/dot';
import Queue from './lib/queue';

// init all services
import info from './services/info';
import device from './services/device';
import androidAds from './services/android-ads';
import lang from './services/lang';
import tm from './services/template-master';
import util from './services/util';
import db from './services/db';

// init sound players
import sm from './sound/sound-master';

import router from './app/router/router';

import BaseView from './app/view/core/base';
import hintMaster from './app/view/core/hint';
import popupMaster from './app/view/core/popup';

import previewSectionHelper from './app/view/sections/preview-section-helper';

import appCache from './services/app-cache';

new FastClick(window.document.body);

(function back() {

	var win = window;

	if ( win.location.hash ) {
		win.history.back();
		return win.setTimeout(back, 50);
	}

	Deferred.installInto($);

	win.$ = win.jQuery = win.jquery = $;

	BaseView.prototype.initStatic();

	db.init().done(function () {
		Backbone.history.start();
		win.setTimeout(androidAds.showAd, 3e3);
	});

}());
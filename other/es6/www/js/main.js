'use strict';
/*global window */

var win = window,
	doc = win.document;

import mediator from './services/mediator';

// init all librares
import shim from './lib/shim';
import lodash from './lib/lodash';
import $ from './lib/jbone';
import Deferred from './lib/deferred';
import Backbone from './lib/backbone';
import FastClick from './lib/fastclick';

// todo: - test - enable fast click
new FastClick(doc.body); // test it decide

import Swiper from './lib/swiper';

// init all services
import info from './services/info';
import device from './services/device';
import lang from './services/lang';
import log from './services/log';
import tm from './services/template-master';
import util from './services/util';

// init sound players
import sm from './sound/sound-master';

// init bg
import bg from './services/bg';

import router from './app/router/router';

import BaseView from './app/view/core/base';
import hintMaster from './app/view/core/hint';
import popupMaster from './app/view/core/popup';

(function back() {

	if ( win.location.hash ) {
		win.history.back();
		return win.setTimeout(back, 50);
	}

	Deferred.installInto($);

	bg.init();

	BaseView.prototype.initStatic();

	Backbone.history.start();

}());


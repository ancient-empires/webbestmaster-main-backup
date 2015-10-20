'use strict';
/*global window, document, setTimeout */

// init all librares
import shim from './lib/shim';
import lodash from './lib/lodash';
import jQuery from './lib/jquery';
import Backbone from './lib/backbone';
import jqueryMbBrowser from './lib/jquery.mb.browser';
import jqueryFinger from './lib/jquery.finger';
import fastclick from './lib/fastclick';
//import doT from './lib/dot';
import swiper from './lib/swiper';

// init all services
import info from './services/info';
import device from './services/device';
import androidAds from './services/android-ads';
import lang from './services/lang';
import log from './services/log';
import tm from './services/template-master';
import util from './services/util';

// init sound players
import sm from './sound/sound-master';

import router from './app/router/router';


console.log(router);
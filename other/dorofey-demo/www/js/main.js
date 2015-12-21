'use strict';
/*global window */

// init libs
import shim from './lib/shim';
import shimES5 from './lib/es5-shim';
import shamES5 from './lib/es5-sham';
import $ from './lib/jquery';
import lightbox from './lib/lightbox';

// run app
import showMaster from './app/show-master';

showMaster.init();



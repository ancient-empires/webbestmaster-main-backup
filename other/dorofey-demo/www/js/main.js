
	'use strict';
	/*global window */

// init libs
	import shim from './lib/shim';
	import shimES5 from './lib/es5-shim';
	import shamES5 from './lib/es5-sham';
	import Deferred from './lib/deferred';
	import $ from './lib/jbone';
	import templateMaster from './lib/template-master';

	Deferred.installInto($);

// run app
	import master from './app/show-master';

	master.init();




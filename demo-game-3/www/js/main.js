/*jslint white: true, nomen: true, onevar: true */
(function (win) {

	'use strict';

	/*global window */
	/*global */

	import info from './services/info';

	import $ from './lib/jbone';
	import PIXI from './lib/pixi';
	import _ from './lib/lodash';

	import log from './services/log';

	import game from './app/game';

	game.initialize(function () {

		console.log('inited');

	});

}(window));
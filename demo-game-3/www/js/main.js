/*jslint white: true, nomen: true, onevar: true */
(function (win) {

	'use strict';

	/*global window */
	/*global */

	import info from './services/info';

	import PIXI from './lib/pixi';
	import util from './lib/util';

	import log from './services/log';

	import game from './app/game';

	game.initialize(function () {

		console.log('inited');

	});

}(window));
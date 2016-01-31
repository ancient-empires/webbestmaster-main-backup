'use strict';
/*global window */

import androidPlayer from './player-android';
import iosPlayer from './player-ios';
import webPlayer from './player-web';
import info from './../services/info';

var win = window,
	soundMaster = {

		init: function () {

			var soundMaster = this;

			soundMaster.initPlayers();

			win.addEventListener('hashchange', soundMaster.playBgSound.bind(soundMaster), false);

		},

		roads: [{}, {}, {}, {}], // 4 roads

		initPlayers: function () {

			var soundMaster = this,
				isAndroidPlayer = win.AndAud_0,
				isIosPlayer = win.Media, // detect cordova Media
				player;

			if (isAndroidPlayer) {
				player = androidPlayer;
			}

			if (isIosPlayer) {
				player = iosPlayer;
			}

			player = player || webPlayer; // get system player or use web player

			player.init();

			soundMaster.player = player;

		},

		getPlayer: function () {
			return this.player;
		},

		playBgSound: function () {

			var soundMaster = this,
				gbSound = soundMaster.getCurrentBgSound();

			if (!gbSound) {
				return;
			}

			soundMaster.play({
				sound: gbSound,
				isLoop: true,
				road: 0
			});

		},

		getCurrentBgSound: function () {

			//var state = Backbone.history.fragment;

			//switch (state) {
			//
			//	case '':
			//	case 'play':
			//	case 'select-level':
			//	case 'skirmish-select-map':
			//		return 'main-theme.mp3'; // file name main-theme.mp3
			//
			//}

			// if false - do not anything
			return false;

		},

		play: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer(),
				prevState = soundMaster.roads[data.road],
				curStr = JSON.stringify(data),
				prevStr = JSON.stringify(prevState);

			//save arguments for - do not start play the same sound
			if (curStr === prevStr && data.isLoop) {
				return;
			}

			soundMaster.stop(data);

			soundMaster.roads[data.road] = JSON.parse(curStr);

			if (info.get('music') === 'off') {
				return;
			}

			player.play(data);

		},

		stop: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer();

			player.stop(data);

		},

		stopBgSound: function () {

			var soundMaster = this,
				state = soundMaster.roads[0]; // 0 is bg sound

			soundMaster.stop(state);

		},

		restoreBgSound: function () {

			var soundMaster = this,
				state = JSON.parse(JSON.stringify(soundMaster.roads[0])); // 0 is bg sound

			soundMaster.roads[0] = {}; // wipe previous state to force play sound

			soundMaster.play(state);

		}

	};

soundMaster.init();

export default soundMaster;


/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};

	var soundMaster;

	soundMaster = {

		init: function () {

			var soundMaster = this;

			soundMaster.initPlayers();

			win.addEventListener('hashchange', soundMaster.playBgSound.bind(soundMaster), false);

		},

		roads: [{}, {}, {}, {}], // 4 roads

		initPlayers: function () {

			// todo: detect player type here (web, android, iOS)

			var soundMaster = this,
				isAndroidPlayer = win.AndAud_0,
				player;

			if (isAndroidPlayer) {
				player = win.APP.soundMaster.androidPlayer;
			}

			player = player || win.APP.soundMaster.webPlayer; // get system player or use web player

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
				console.log(gbSound, 'do not any');
				return;
			}

			console.log('play gbSound -', gbSound, true, 0);

			soundMaster.play({
				sound: gbSound,
				isLoop: true,
				road: 0
			});

		},

		getCurrentBgSound: function () {

			var state = Backbone.history.fragment;

			switch (state) {

				case '':
				case 'select-level':
				case 'skirmish-select-map':
					return 'main-theme'; // file name main-theme.mp3

			}

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
				console.log('the same state - return');
				return;
			}

			soundMaster.stop(data);

			soundMaster.roads[data.road] = JSON.parse(curStr);

			//data.sound = data.sound + '.mp3';

			if (win.APP.info.get('music') === 'off') {
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
				state = soundMaster.roads[0]; // 0 is bg sound

			state.force = true;

			soundMaster.play(state);

		}

	};

	win.APP.soundMaster = soundMaster;

}(window));
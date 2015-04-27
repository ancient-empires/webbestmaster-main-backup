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
				webPlayer = win.APP.soundMaster.webPlayer;

			webPlayer.init();

			soundMaster.player = webPlayer;

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
					return 'main-theme.mp3';

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
			if (curStr === prevStr) {
				console.log('the same state - return');
				return;
			}

			soundMaster.stop(data);

			soundMaster.roads[data.road] = JSON.parse(curStr);

			player.play(data);

			console.log('play ', data);

		},

		stop: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer();

			player.stop(data);

			console.log('stop road -', data.road);

		}


	};

	win.APP.soundMaster = soundMaster;

}(window));
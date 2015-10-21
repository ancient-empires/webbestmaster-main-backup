'use strict';
/*global window */

var win = window,
	iosPlayer = {

		roads: new Array(4),

		pathPrefix: '',

		init: function () {

		},

		play: function (data) {

			var player = this,
				roadNumber = data.road,
				isLoop = data.isLoop,
				sound = data.sound,
				newAudio,
				settings = {
					playAudioWhenScreenIsLocked: false
				};

			player.stop(data);

			newAudio = new Media(player.pathPrefix + sound);

			if (isLoop) {
				settings.numberOfLoops = 9;
			}

			newAudio.play(settings); // play audio with needed settings

			player.roads[roadNumber] = newAudio;

		},

		stop: function (data) {

			var player = this,
				roadNumber = data.road,
				road = player.roads[roadNumber];

			if (road && road.release) {
				player.roads[roadNumber].stop();
				player.roads[roadNumber].release();
			}

		}

	};

export default iosPlayer;


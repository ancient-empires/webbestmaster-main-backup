'use strict';
/*global window */

import info from './../services/info';

var win = window,
	webPlayer = {

	roads: undefined,

	pathPrefix: '',

	init: function () {

		var player = this;

		player.roads = new Array(4).map(function () {
			return new Audio();
		});

	},

	play: function (data) {

		var player = this,
			roadNumber = data.road,
			isLoop = data.isLoop,
			sound = data.sound,
			newAudio;

		player.stop(data);

		newAudio = new Audio();
		if (isLoop) {
			newAudio.addEventListener('ended', function () {
				if (info.get('music') === 'off') {
					return;
				}
				var audio = this;
				audio.currentTime = 0;
				audio.play();
			}, false);
		}

		newAudio.addEventListener('canplay', function () {
			if (info.get('music') === 'off') {
				return;
			}
			var audio = this;
			audio.play();
		});

		player.roads[roadNumber].src = '';
		player.roads[roadNumber] = newAudio;

		newAudio.src = player.pathPrefix + sound;

	},

	stop: function (data) {

		var player = this,
			roadNumber = data.road,
			road = player.roads[roadNumber];

		if (road && road.pause) {
			road.pause();
		}

		if (road && road.currentTime && road.currentTime < 0.1) {
			road.currentTime = 0;
		}

	}

};

export default webPlayer;

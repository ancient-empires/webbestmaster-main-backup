/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP.soundMaster = win.APP.soundMaster || {};

	win.APP.soundMaster.webPlayer = {

		roads: new Array(4),

		pathPrefix: 'sounds/',

		init: function () {

			var player = this;

			player.roads = _.map(player.roads, function () {
				return new Audio();
			});

		},

		play: function (data) {

			var player = this,
				roadNumber = data.road,
				isLoop = data.isLoop,
				sound = data.sound,
				newAudio;

			newAudio = new Audio();
			if (isLoop) {
				newAudio.addEventListener('ended', function() {
					var audio = this;
					audio.currentTime = 0;
					audio.play();
				}, false);
			}

			newAudio.addEventListener('canplay', function () {
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

			road.pause();
			road.currentTime = 0;

		}

	}

}(window));
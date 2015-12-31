'use strict';
/*global window */

var win = window,
	androidPlayer = {

	pathPrefix: 'www/',

	init: function () {

	},

	play: function (data) {

		var player = this,
			roadNumber = data.road,
			isLoop = data.isLoop,
			sound = data.sound,
			src = player.pathPrefix + sound,
			andAud = win['AndAud_' + roadNumber];

		if (isLoop) {
			andAud.playAudioLooping(src);
		} else {
			andAud.playAudio(src);
		}

	},

	stop: function (data) {

		var roadNumber = data.road,
			andAud = win['AndAud_' + roadNumber];

		andAud.stop();

	}

};

export default androidPlayer;
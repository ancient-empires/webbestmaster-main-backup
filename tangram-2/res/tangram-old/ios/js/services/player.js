(function (win) {

	"use strict";
	/*global window, document, console, alert, dataStorage */

	var playerObj;
	playerObj = {
		currentSrc: '',
		currentMedia: '',
		currentMediaStatus: 4, // is stopped
		toSoundPrefix: (navigator.userAgent.toLowerCase().indexOf("android") === -1) ? 'sound/' : '/android_asset/www/sound/',
		play: function (src) {

			return;
			if (!info.soundIsActive) {
				return;
			}

			if (this.currentMediaStatus <= 2 ) {
				return;
			}

			if (this.currentSrc !== src) {
				this.currentMedia = new Media(this.toSoundPrefix + src, this.onSuccess, this.onError, this.onStatus);
				this.currentSrc = src;
			}

			try {
				this.currentMedia.play();
			} catch (e) {}

		},
		playQuestionAgain: function() {

		},
		onSuccess: function () {
//			alert('good');
		},
		onError: function (error) {
//			alert(error.code + ' - ' + error.message);
		},
		onStatus: function(status) {
			playerObj.currentMediaStatus = status;
		}
	};

	win.player = playerObj;

	return;
	// overwrite some methods
	if (document.documentElement.hasOwnProperty('ontouchstart')) {
		return;
	}

	playerObj.play = function(src) {

		if (!info.soundIsActive) {
			return;
		}

		console.log(this.toSoundPrefix + src);

		this.currentSrc = src;
		this.currentMedia = new Audio(this.toSoundPrefix + src);

		try {
			this.currentMedia.play();
		} catch (e) {
			console.log(e);
			console.log('Error for Audio.');
		}

	};

}(window));

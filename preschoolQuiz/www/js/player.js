(function (win) {

	"use strict";
	/*global window, document, console, alert, dataStorage */

	win.player = {
//		musicOn: dataStorage.getItem('music-on') || 'yes',
		currentSrc: '',
		currentMedia: '',
		currentMediaStatus: 4, // is stopped
		toSoundPrefix: (navigator.userAgent.toLowerCase().indexOf("android") === -1) ? 'sound/' : '/android_asset/www/sound/',
		play: function (src) {

			src = 'www/sound/' + src;

			AndAud_0.playAudio(src);

			return;

//			if (this.musicOn === 'no') {
//				return;
//			}

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
//		setMusic: function(on) {
//			var value = on ? 'yes' : 'no';
//			dataStorage.setItem('music-on', value);
//		},
		playQuestionAgain: function() {
//			var currentSectionName = info.section;
			// work for find number
			if (info.section === 'findNumber') {
				this.play('numbers/' + info.lang + '/' + win[info.section].answer + '.mp3');
			}

			if (info.section === 'findLetter') {
				this.play('alphabets/' + info.lang + '/' + win[info.section].answer + '.mp3');
			}

			if (info.section === 'findColor') {
				this.play('colors/' + info.lang + '/' + lang[info.lang].colors[win[info.section].answer] + '.mp3');
			}

		},
		onSuccess: function () {
//			alert('good');
		},
		onError: function (error) {
//			alert(error.code + ' - ' + error.message);
		},
		onStatus: function(status) {
			player.currentMediaStatus = status;
		}
	}

}(window));

// overwrite some methods

//(function (win) {
//
//	"use strict";
//	/*global window, document */
//
//	if (document.documentElement.hasOwnProperty('ontouchstart')) {
//		return;
//	}
//
//	win.player.play = function(src) {
//
//		console.log(this.toSoundPrefix + src);
//
//		this.currentSrc = src;
//		this.currentMedia = new Audio(this.toSoundPrefix + src);
//
//		try {
//			this.currentMedia.play();
//		} catch (e) {
//			console.log(e);
//			console.log('Error for Audio.');
//		}
//	};
//
//
//}(window));




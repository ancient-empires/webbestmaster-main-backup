import util from './../lib/util';
import effectTextures from './effect-textures';

import MovieClipWrapper from './../lib/movie-clip-wrapper';
import wheelsData from './wheels-data';

var effectMaster = {

	original: {
		full: {
			w: 780,
			h: 520
		}
	},

	clips: [],

	update: function () {

		// update clips states
		var clips = this.clips,
			i, len;

		for (i = 0, len = clips.length; i < len; i += 1) {
			clips[i].update();
		}

	},

	getCellPosition: function (x, y) {

		var wheel = wheelsData.wheels[x];

		if (wheel.hi <= y){
			return null;
		}

		return {
			x: wheel.x,
			y: wheel.y + y * wheelsData.item.h
		}

	},

	initSprites: function () {

		var effect = this;

		effect.initClubsMovies();
		effect.initSparklesMovies();

	},

	initClubsMovies: function () {

		var effect = this;

		var frames = [];

		for (var i = 0; i < 105; i++) {
			frames.push('club-' + i);
		}

		for (i = 0; i < 6; i += 1) {

			for (var j = 0; j < 7; j += 1) {

				var position = effect.getCellPosition(i, j);

				if (!position) {
					continue;
				}

				var movie = PIXI.extras.MovieClip.fromFrames(frames);
				effect.stage.addChild(movie);


				movie.position.x = position.x;
				movie.position.y = position.y;

				var movieClipWrapper = new MovieClipWrapper(movie);
				effect.clips.push(movieClipWrapper);

				movieClipWrapper.className = 'club';

				movieClipWrapper.play();

			}

		}

	},

	initSparklesMovies: function () {


		var effect = this;

		var frames = [];

		for (var i = 0; i < 3; i++) {
			frames.push('i/game/effect/sparkles/sparkles-' + i + '.png');
		}

		var movie = PIXI.extras.MovieClip.fromImages(frames);
		effect.stage.addChild(movie);

		movie.position.x = 240;
		movie.position.y = 35;

		movie.rotation = Math.PI / 2;
		movie.anchor.x = 0.2;
		movie.anchor.y = 0.2;
		movie.scale.x = 0.3333;
		movie.scale.y = 0.3333;

		movie.animationSpeed = 0.1;

		var movieClipWrapper = new MovieClipWrapper(movie);
		effect.clips.push(movieClipWrapper);

		movieClipWrapper.className = 'sparkle';

		movieClipWrapper.play();

	}

};

export default effectMaster;
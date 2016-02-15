import util from './../lib/util';
//import frameTextures from './frame-textures';

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


		//movieClipWrapper.play();
		//movieClipWrapper.loop(false);



		/*
				var frame = this;
				var frameStage = frame.stage;

				util.eachHash(frameTextures.textures, function (spriteData) {

					var sprite = new PIXI.Sprite(spriteData.texture.texture);

					spriteData.sprite = sprite;

					sprite.position.x = spriteData.x;
					sprite.position.y = spriteData.y;
					sprite.width = spriteData.w;
					sprite.height = spriteData.h;

					frameStage.addChild(sprite);

				});
		*/

		//frame.updateAnimateLogo();

	}

	/*
	 // todo: remove this code -> create normal animator object and logic
	 logoFrame: 100,

	 updateAnimateLogo: function () {

	 var frame = this;

	 var logoSprite = frameTextures.textures.logo.sprite;

	 var filter = new PIXI.filters.PixelateFilter();

	 filter.size = new PIXI.Point(frame.logoFrame / 10, frame.logoFrame / 10);

	 logoSprite.filters = [filter];

	 frame.logoFrame -= 1;

	 if (frame.logoFrame < 0) {
	 logoSprite.filters = null;
	 frame.isAnimate = false;
	 frame.draw();
	 }

	 }
	 */

};

export default effectMaster;
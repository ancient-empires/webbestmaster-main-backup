import util from './../lib/util';
//import frameTextures from './frame-textures';

import MovieClipWrapper from './../lib/movie-clip-wrapper';

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

	initSprites: function () {


		var effect = this;

		var frames = [];

		for (var i = 0; i < 105; i++) {
			frames.push('club-' + i);
		}

		var movie = PIXI.extras.MovieClip.fromFrames(frames);

		var movieClipWrapper = new MovieClipWrapper(movie);

		//movie.visible = false;

		effect.stage.addChild(movie);

		effect.clips.push(movieClipWrapper);

		movieClipWrapper.play(function () {
			console.log('play');
		});

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
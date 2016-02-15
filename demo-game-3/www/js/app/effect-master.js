import util from './../lib/util';
//import frameTextures from './frame-textures';

var effectMaster = {

	original: {
		full: {
			w: 780,
			h: 520
		}
	},

	initSprites: function () {


		var effect = this;

		var frames = [];

		for (var i = 0; i < 105; i++) {
			// magically works since the spritesheet was loaded with the pixi loader
			frames.push(PIXI.Texture.fromFrame('club-' + i));
		}

		// create a MovieClip (brings back memories from the days of Flash, right ?)
		var movie = new PIXI.extras.MovieClip(frames);

		movie.visible = false;

		effect.stage.addChild(movie);

		movie.play();

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
import PIXI from './../lib/pixi';
import util from './../lib/util';
import log from './../services/log';


var game = {

	original: {
		full: {
			w: 780,
			h: 520
		}
	},

	textures: {
		logo: {
			path: 'i/game/logo.png',
			texture: null,
			x: 48,
			y: 13,
			w: 209,
			h: 145
		},
		frame: {
			path: 'i/game/frame.png',
			texture: null,
			x: 9,
			y: 16,
			w: 761,
			h: 495
		}
	},

	stage: null,
	renderer: null,

	initialize: function (cd) {

		var game = this;

		game.initCanvas();

		game.initTextures(function () {

			game.initSprites();
			game.renderer.render(game.stage);
			cd();

		});

	},

	initCanvas: function () {

		var game = this;

		var stage = new PIXI.Container();

		var renderer = PIXI.autoDetectRenderer(game.original.full.w, game.original.full.h, {
			transparent: true
		});

		game.stage = stage;
		game.renderer = renderer;

		document.body.appendChild(renderer.view);

	},

	initTextures: function (cb) {

		var game = this;
		var gameTextures = game.textures;
		var loader = PIXI.loader;

		util.eachHash(gameTextures, function (item, key) {
			loader.add(key, item.path);
		});

		loader
			.on('progress', function () {
				log('on loading progress');
			})
			.load(function (loader, resources) {

				log('textures are loaded');

				util.eachHash(resources, function (value, key) {
					gameTextures[key].texture = value;
				});

				cb();

			});

	},

	initSprites: function () {

		var game = this;
		var gameTextures = game.textures;
		var stage = game.stage;

		util.eachHash(gameTextures, function (spriteData) {

			var sprite = new PIXI.Sprite(spriteData.texture.texture);

			sprite.position.x = spriteData.x;
			sprite.position.y = spriteData.y;
			sprite.width = spriteData.w;
			sprite.height = spriteData.h;

			stage.addChild(sprite);

		});

	}

};

export default game;
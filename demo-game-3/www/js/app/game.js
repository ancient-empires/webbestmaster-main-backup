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

	frameTextures: {
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

	gameStage: null,
	gameRenderer: null,
	frameStage: null,
	frameRenderer: null,
	effectStage: null,
	effectRenderer: null,

	initialize: function (cd) {

		var game = this;

		game.initCanvas();

		game.initTextures(function () {

			game.initSprites();
			game.frameRenderer.render(game.frameStage);
			cd();

		});

	},

	initCanvas: function () {

		var game = this,
			width = game.original.full.w,
			height = game.original.full.h;

		['game', 'frame', 'effect'].forEach(function (value) {
			var renderer = PIXI.autoDetectRenderer(width, height, { transparent: true });
			game[value + 'Stage'] = new PIXI.Container();
			game[value + 'Renderer'] = renderer;
			renderer.view.className = value + '-renderer';
			document.body.appendChild(renderer.view);
		});

	},

	initTextures: function (cb) {

		var game = this;
		var frameTextures = game.frameTextures;
		var loader = PIXI.loader;

		util.eachHash(frameTextures, function (item, key) {
			loader.add(key, item.path);
		});

		loader
			.on('progress', function () {
				log('on loading progress');
			})
			.load(function (loader, resources) {

				log('textures are loaded');

				util.eachHash(resources, function (value, key) {
					frameTextures[key].texture = value;
				});

				cb();

			});

	},

	initSprites: function () {

		var game = this;
		var frameTextures = game.frameTextures;
		var frameStage = game.frameStage;

		util.eachHash(frameTextures, function (spriteData) {

			var sprite = new PIXI.Sprite(spriteData.texture.texture);

			sprite.position.x = spriteData.x;
			sprite.position.y = spriteData.y;
			sprite.width = spriteData.w;
			sprite.height = spriteData.h;

			frameStage.addChild(sprite);

		});

	}

};

export default game;
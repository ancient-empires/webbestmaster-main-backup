import PIXI from './../lib/pixi';
import _ from './../lib/lodash';
import log from './../services/log';


var game = {

	textures: {
		logo: {
			path: 'i/game/logo.png',
			texture: null
		}
	},

	stage: null,
	renderer: null,

	original: {
		full: {
			w: 780,
			h: 530
		}
	},

	positions: {

		logo: {
			x: 48,
			y: 13,
			w: 209,
			h: 145
		}

	},

	initialize: function (cd) {

		var app = this;

		app.initCanvas();

		app.initTextures(function () {

			app.initSprites();
			app.renderer.render(app.stage);
			cd();

		});

	},

	initCanvas: function () {

		var app = this;

		var stage = new PIXI.Container();

		var renderer = PIXI.autoDetectRenderer(app.original.full.w, app.original.full.h, {
			transparent: true
		});

		app.stage = stage;
		app.renderer = renderer;

		document.body.appendChild(renderer.view);

	},

	initTextures: function (cb) {

		var game = this;
		var gameTextures = game.textures;
		var loader = PIXI.loader;

		_.each(gameTextures, function (item, key) {
			loader.add(key, item.path);
		});

		loader
			.on('progress', function () {
				log('on loading progress');
			})
			.load(function (loader, resources) {

				log('textures are loaded');

				_.each(resources, function (value, key) {
					gameTextures[key].texture = value;
				});

				cb();

			});

	},

	initSprites: function () {

		var game = this;
		var gameTextures = game.textures;
		var stage = game.stage;

		_.each(game.positions, function (position, key) {

			var sprite = new PIXI.Sprite(gameTextures[key].texture.texture);

			sprite.position.x = position.x;
			sprite.position.y = position.y;
			sprite.width = position.w;
			sprite.height = position.h;

			stage.addChild(sprite);

		});















	}


};

export default game;
import PIXI from './../lib/pixi';
import util from './../lib/util';
import Deferred from './../lib/deferred';
import log from './../services/log';
import wheelsData from './wheels-data';

var game = {

	//wheelsData: wheelsData,

	wheels: [],

	original: {
		full: {
			w: 780,
			h: 520
		}
	},

	frameTextures: {
		logo: {
			path: 'i/game/frame/logo.png',
			texture: null,
			x: 48,
			y: 13,
			w: 209,
			h: 145
		},
		frame: {
			path: 'i/game/frame/frame.png',
			texture: null,
			x: 9,
			y: 16,
			w: 761,
			h: 495
		}
	},

	gameTextures: {},

	gameStage: null,
	gameRenderer: null,
	frameStage: null,
	frameRenderer: null,
	effectStage: null,
	effectRenderer: null,

	initialize: function (cd) {

		var game = this;

		game.initCanvas();

		game.initTextures().done(function () {
			game.initFrameSprites();
			game.frameRenderer.render(game.frameStage);
			game.createWheels();
			game.drawWheels();
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

	initTextures: function () {

		var defer = new Deferred();
		var game = this;

		var loader = PIXI.loader;

		var frameTextures = game.frameTextures;
		game.defineGameTextures();
		var gameTextures = game.gameTextures;

		util.eachHash(frameTextures, function (item, key) {
			loader.add('frameTextures/' + key, item.path);
		});

		util.eachHash(gameTextures, function (item, key) {
			loader.add('gameTextures/' + key, item.path);
		});

		loader
			.on('progress', function () {
				log('on loading texture progress');
			})
			.load(function (loader, resources) {

				util.eachHash(resources, function (value, key) {

					var path = key.split('/');

					game[path[0]][path[1]].texture = value;

				});

				defer.resolve();

			});

		return defer.promise();

	},

	defineGameTextures: function () {

		var game = this;

		var gameTextures = game.gameTextures;

		//var wheelsData = game.wheelsData;

		var itemWidth = wheelsData.item.w;
		var itemHeight = wheelsData.item.h;

		util.eachHash(wheelsData.item.list, function (value, key) {

			gameTextures[key] = {
				w: itemWidth,
				h: itemHeight * 2,
				path: value.path,
				texture: null
			};

		});

	},

	initFrameSprites: function () {

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

	},

	createWheels: function () {

		var game = this;

		var wheels = game.wheels;

		wheelsData.wheels.forEach(function (wheelData) {

			// create container
			var stage = new PIXI.Container();

			stage.position.x = wheelData.x;
			stage.position.y = wheelData.y;

			game.gameStage.addChild(stage);

			var newWheel = {
				stage: stage,
				sprites: {}
			},
				i = 0;

			// created double of every sprite to show overlay sprite on sprite

			util.eachHash(game.gameTextures, function (obj, key) {

				newWheel.sprites[key] = {
					index: i,
					arr: []
				};

				var sprite = new PIXI.Sprite(obj.texture.texture);

				newWheel.sprites[key].arr.push(sprite);

				stage.addChild(sprite);

				i += 1;

			});

			util.eachHash(game.gameTextures, function (obj, key) {

				var sprite = new PIXI.Sprite(obj.texture.texture);

				newWheel.sprites[key].arr.push(sprite);

				stage.addChild(sprite);

			});

			wheels.push(newWheel);

		});

	},

	drawWheels: function () {

		var game = this;

		game.gameRenderer.render(game.gameStage);

	}

};

export default game;
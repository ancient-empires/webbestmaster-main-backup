import PIXI from './../lib/pixi';
import util from './../lib/util';
import Deferred from './../lib/deferred';
import log from './../services/log';
import wheelsData from './wheels-data';
import frameData from './frame-data';
import Wheel from './wheel';

var game = {

	//wheelsData: wheelsData,

	wheels: [],

	original: {
		full: {
			w: 780,
			h: 520
		}
	},

	state: 'ready',

	isAnimate: false,

	frameTextures: frameData.textures,

	gameTextures: {
		mainSprite: {
			path: 'i/game/game/items-sprite.png',
			texture: null
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

		game.animateWheels = game.animateWheels.bind(game);

		game.initCanvas();

		game.initTextures().done(function () {
			game.initFrameSprites();
			game.frameRenderer.render(game.frameStage);
			game.createWheels();
			game.drawWheels();
			game.bindEventListeners();
		});

	},

	bindEventListeners: function () {

		var game = this;

		document.querySelector('.js-spin').addEventListener('click', function () {

			game.spin();

		}, false);

	},

	spin: function () {

		var game = this,
			spinState = game.state;

		switch (spinState) {

			case 'ready':

				game.state = 'spin-begin';

				game.startAnimateWheels();

				game.beginSpin();

				break;

			case 'spin':

/*
				collection.setSpinState('spin-end');

				collection.endSpin();
*/

				break;


		}

	},


	beginSpin: function () {

		var game = this;

		var wheels = game.wheels;

		wheels.forEach(function (wheel, index) {
			setTimeout(function () {
				wheel.beginSpin();
			}, 300 * index);
		});

		console.log('implement callback for last wheel here');

		wheels[wheels.length - 1].beginSpinCb = function () {
			game.state = 'spin';
			console.log('collection state is - spin');
		}

/*
		collection.last().set('beginSpinCb', function () {
		});
*/

	},

	startAnimateWheels: function () {

		var game = this;

		game.isAnimate = true;

		game.animateWheels(); //

	},

	animateWheels: function () {

		if (this.isAnimate) {

			requestAnimationFrame(this.animateWheels);

			var wheels = this.wheels;

			for (var i = 0, len = wheels.length; i < len; i += 1) {
				wheels[i].updatePosition();
			}

			this.drawWheels();

		}

	},

	initCanvas: function () {

		var game = this,
			width = game.original.full.w,
			height = game.original.full.h;

		//gameStage: null,
		//gameRenderer: null,
		//frameStage: null,
		//frameRenderer: null,
		//effectStage: null,
		//effectRenderer: null,

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
		var mainSpriteTexture = game.gameTextures.mainSprite.texture.texture;

		wheelsData.wheels.forEach(function (wheelData) {

			//var sprite = new PIXI.extras.TilingSprite(texture, render.get('itemWidth'), wheelVisibleItemSize * itemHeight);
			var tilingSprite = new PIXI.extras.TilingSprite(mainSpriteTexture, wheelsData.item.w, wheelData.hi * wheelsData.item.h);

			tilingSprite.position.x = wheelData.x;
			tilingSprite.position.y = wheelData.y;

			game.gameStage.addChild(tilingSprite);

			var newWheel = new Wheel({
				itemHeight: wheelsData.item.h,
				position: 0,
				tilingSprite: tilingSprite,
				wheelItemCount: wheelsData.wheelItemCount
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
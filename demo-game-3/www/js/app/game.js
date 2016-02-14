import PIXI from './../lib/pixi';
import util from './../lib/util';
import Deferred from './../lib/deferred';
import log from './../services/log';
import wheelsData from './wheels-data';
import Wheel from './wheel';
import textureMaster from './texture-master';
import frameMaster from './frame-master';
import gameTextures from './game-textures';

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

	stage: null,
	renderer: null,
	//effectStage: null,
	//effectRenderer: null,

	initialize: function (cd) {

		var game = this;

		game.animateWheels = game.animateWheels.bind(game);

		game.initCanvas();

		textureMaster.initTextures().done(function () {
			frameMaster.initSprites();
			frameMaster.draw();

			game.createWheels();
			game.drawWheels();
			game.bindEventListeners();

			cd();
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

				game.state = 'spin-end';

				game.endSpin();

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

		wheels[wheels.length - 1].beginSpinCb = function () {
			game.state = 'spin';
			console.log('collection state is - spin');
		};

	},

	endSpin: function () {

		var game = this;

		var wheels = game.wheels;

		wheels.forEach(function (wheel, index) {
			setTimeout(function () {
				wheel.endSpin(Math.floor(Math.random() * wheel.wheelItemCount));
			}, 500 * index);
		});

		wheels[wheels.length - 1].endSpinCb = function () {
			game.state = 'ready';
			game.isAnimate = false;
			console.log('collection state is - ready');
		};

	},

	startAnimateWheels: function () {

		var game = this;

		game.isAnimate = true;

		game.animateWheels();

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
			q = 1,
			width = game.original.full.w * q,
			height = game.original.full.h * q,
			renderer;

		renderer = PIXI.autoDetectRenderer(width, height, {transparent: true});
		game.stage = new PIXI.Container();
		game.renderer = renderer;
		game.stage.scale.x = q;
		game.stage.scale.y = q;
		renderer.view.className = 'game-renderer';
		document.body.appendChild(renderer.view);

/*
		renderer = PIXI.autoDetectRenderer(width, height, {transparent: true});
		game[value + 'Stage'] = new PIXI.Container();
		game[value + 'Renderer'] = renderer;
		game[value + 'Stage'].scale.x = q;
		game[value + 'Stage'].scale.y = q;
		renderer.view.className = value + '-renderer';
		document.body.appendChild(renderer.view);
*/

	},

	createWheels: function () {

		var game = this;

		var wheels = game.wheels;
		var mainSpriteTexture = gameTextures.textures.mainSprite.texture.texture;

		wheelsData.wheels.forEach(function (wheelData) {

			var tilingSprite = new PIXI.extras.TilingSprite(mainSpriteTexture, wheelsData.item.w, wheelData.hi * wheelsData.item.h);

			tilingSprite.position.x = wheelData.x;
			tilingSprite.position.y = wheelData.y;

			game.stage.addChild(tilingSprite);

			var newWheel = new Wheel({
				itemHeight: wheelsData.item.h,
				position: Math.floor(Math.random() * wheelsData.wheelItemCount),
				tilingSprite: tilingSprite,
				wheelItemCount: wheelsData.wheelItemCount
			});

			wheels.push(newWheel);

			newWheel.updatePosition();

		});

	},

	drawWheels: function () {

		var game = this;

		game.renderer.render(game.stage);

	}

};

export default game;
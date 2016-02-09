'use strict';
/*global window */
/*global */

import log from './../../../services/log';
import util from './../../../services/util';
import device from './../../../services/device';
import mediator from './../../../services/mediator';
import $ from './../../../lib/jbone';

function Render() {

	var render = this;

	mediator.installTo(render);

	render.attr = {
		wheels: []
	};

	render.initialize();

	render.bindEventListeners();

	//render.preLoadAssets();

}

Render.prototype = {

/*
	images: [
		'item-bonus',
		'item-elli',
		'item-lame',
		'item-lion',
		'item-metal-man',
		'item-wild',
		'item-wild-small-1',
		'item-wild-small-2'
	],
*/

	set: function (keyOrObj, value) {

		var self = this,
			attr = self.attr;

		if (typeof keyOrObj === 'string') {
			attr[keyOrObj] = value;
			return self;
		}

		Object.keys(keyOrObj).forEach(function (key) {
			this[key] = keyOrObj[key];
		}, attr);

		return self;

	},
	get: function (key) {

		return this.attr[key];

	},

	empty: function () {

		this.attr = {};

		return this;

	},

	initialize: function () {

		var render = this,

			w = device.get('width'),
			h = device.get('height'),

		// create an new instance of a pixi stage
			stage = new PIXI.Container(),

		// create a renderer instance.
			renderer = PIXI.autoDetectRenderer(w, h, {
				backgroundColor: 0x000000
			});

		render.set({
			w: w,
			h: h,
			stage: stage,
			renderer: renderer
		});

	},

	bindEventListeners: function () {

		var render = this;

		render.subscribe('render:increase-wheel', render.increaseWheel);
		render.subscribe('render:draw-wheels', render.drawWheels);

	},

	drawWheels: function (data) {

		var render = this,
			width = render.get('w'),
			height = render.get('h'),
			wheelsData = data.wheels,
			wheelsLength = wheelsData.length,
			wheelWidth = width / wheelsLength,
			itemHeight = wheelWidth / 354 * 234,
			wheelScale = wheelWidth / 354,
			wheelsSprite = render.get('wheels');

		wheelsSprite.forEach(function (sprite, index) {

			sprite.scale.x = wheelScale;
			sprite.scale.y = wheelScale;
			sprite.position.x = index * wheelWidth;
			sprite.position.y = wheelsData[index].position * itemHeight;

			console.log(wheelsData[index].position);

		});

		render.rerender();

	},

	rerender: function () {

		var render = this,
			renderer = render.get('renderer'),
			stage = render.get('stage');

		renderer.render(stage);

	},

	increaseWheel: function () {

		var render = this,
			texture = render.get('itemsSprite').texture,
			wheel = new PIXI.Sprite(texture),
			stage = render.get('stage'),
			wheels = render.get('wheels');

		wheels.push(wheel);

		stage.addChild(wheel);

	},

	appendTo: function (node) {

		var render = this;

		node.appendChild(render.get('renderer').view);

	},

	preLoadAssets: function () {

		var render = this,
			loader = PIXI.loader,
			defer = $.Deferred();

/*
		render.images.forEach(function (item) {
			loader = loader.add(item, 'i/item/' + item + '.png');
		});
*/

		loader = loader.add('itemsSprite', 'i/items-sprite.png');

		loader
			.on('progress', function () {
				log('on loading progress');
			})
			.load(function (loader, resources) {
				log('on loading complete');

				render.set(resources);

				defer.resolve();

			});

		//var sprite = new PIXI.Sprite(resources[itemName]texture);    });

		return defer.promise();

	}

};

export default Render;
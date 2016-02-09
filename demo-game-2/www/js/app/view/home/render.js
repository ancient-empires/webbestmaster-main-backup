'use strict';
/*global window */
/*global */

import log from './../../../services/log';
import util from './../../../services/util';
import device from './../../../services/device';

function Render() {

	var render = this;

	render.attr = {};

	render.initialize();

}

Render.prototype = {

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

	appendTo: function (node) {

		var render = this;

		node.appendChild(render.get('renderer').view);

	}

};

export default Render;
import Backbone from './../../../../lib/backbone';
import Tan from './tan';
import _ from './../../../../lib/lodash';
import device from './../../../../services/device';
import mediator from './../../../../services/mediator';
import log from './../../../../services/log';

var tansInfo = {
	triangleBig: {
		count: 2,
		coordinates: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.5}]
	},
	triangleMedium: {
		count: 1,
		coordinates: [{x: 0, y: 0.5}, {x: 0.5, y: 1}, {x: 0, y: 1}]
	},
	triangleSmall: {
		count: 2,
		coordinates: [{x: 0.25, y: 0.25}, {x: 0.5, y: 0.5}, {x: 0.25, y: 0.75}]
	},
	square: {
		count: 1,
		coordinates: [{x: 0.5, y: 0.5}, {x: 0.75, y: 0.75}, {x: 0.5, y: 1}, {x: 0.25, y: 0.75}]
	},
	parallelogram: {
		count: 1,
		coordinates: [{x: 0, y: 0}, {x: 0.25, y: 0.25}, {x: 0.25, y: 0.75}, {x: 0, y: 0.5}]
	}
};

var TanCollection = Backbone.Collection.extend({

	model: Tan,

	attr: {},

	setData: function (keyOrObj, value) {

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

	getData: function (key) {

		return this.attr[key];

	},

	initialize: function () {

		var collection = this;

		collection.detectScale();
		collection.bindEventListeners();

	},

	bindEventListeners: function () {

		var collection = this;

		mediator.installTo(collection);

		collection.subscribe('deviceAction:isActive', collection.activateDeActiveTans);
		collection.subscribe('deviceAction:dblTap', collection.flipTan);

	},

	activateDeActiveTans: function (isActive, data) {

		var collection = this,
			hoveredTan = collection.getHoveredTan(data);

		if (!hoveredTan) {
			log('no hovered tan');
			log('deactive all tans');
			collection.deActiveAll();
			return;
		}

		if (isActive) {
			collection.deActiveAll();
			hoveredTan.set('isActive', true);
			hoveredTan.setLastAccept();
			return;
		}


		log('show rotater');


	},

	flipTan: function (data) {

		var collection = this,
			hoveredTan = collection.getHoveredTan(data);

		return hoveredTan && hoveredTan.flip();

	},

	getHoveredTan: function (xy) {

		var collection = this,
			hoveredTan;

		collection.each(function (tan) {

			// touch XY is not in tan
			if (!tan.isIn(xy)) {
				return;
			}

			if (!hoveredTan) {
				return hoveredTan = tan;
			}

			if (tan.getLastAccept() > hoveredTan.getLastAccept()) {
				hoveredTan = tan;
			}

		});

		return hoveredTan;

	},

	deActiveAll: function () {

		this.each(function (tan) {
			tan.set('isActive', false);
		});

	},

	detectScale: function () {

		// TODO: SET SCALE!!!!!

		var scale = 200;

		this.setData('scale', scale);

		return scale;

	},

	createTans: function () {

		_.each(tansInfo, function (data) {
			for (var i = 0, len = data.count; i < len; i += 1) {
				this.add({
					coordinates: data.coordinates,
					count: len,
					scale: this.getData('scale')
				});
			}
		}, this);

	},

	createDrawElement: function () {

		// device
		var collection = this,
			width = device.get('width'),
			height = device.get('height'),
			svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
			attributes = {
				x: '0px',
				y: '0px',
				width: width + 'px',
				height: height + 'px',
				viewBox: [0, 0, width, height].join(' ')
			};

		Object.keys(attributes).forEach(function (key) {
			var attr = document.createAttribute(key);
			attr.value = attributes[key];
			svg.setAttributeNode(attr);
		});

		collection.setData('draw-node', svg);

		return svg;

	},

	addDrawFieldTo: function ($node) {

		$node.append(this.createDrawElement());

	},

	drawTans: function () {

		var svg = this.getData('draw-node');

		this.each(function (tan) {
			tan.drawTo(svg);
		});

	}

});

export default TanCollection;
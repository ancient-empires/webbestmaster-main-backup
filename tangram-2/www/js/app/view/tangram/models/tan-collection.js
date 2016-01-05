import Backbone from './../../../../lib/backbone';
import Tan from './tan';
import _ from './../../../../lib/lodash';
import device from './../../../../services/device';
import mediator from './../../../../services/mediator';
import log from './../../../../services/log';

var tansInfo = {
	triangleBig: {
		count: 2,
		coordinates: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.5}],
		parts: 4
	},
	triangleMedium: {
		count: 1,
		coordinates: [{x: 0, y: 0.5}, {x: 0.5, y: 1}, {x: 0, y: 1}],
		parts: 4
	},
	triangleSmall: {
		count: 2,
		coordinates: [{x: 0.25, y: 0.25}, {x: 0.5, y: 0.5}, {x: 0.25, y: 0.75}],
		parts: 2
	},
	square: {
		count: 1,
		coordinates: [{x: 0.5, y: 0.5}, {x: 0.75, y: 0.75}, {x: 0.5, y: 1}, {x: 0.25, y: 0.75}],
		parts: 2
	},
	parallelogram: {
		count: 1,
		coordinates: [{x: 0, y: 0}, {x: 0.25, y: 0.25}, {x: 0.25, y: 0.75}, {x: 0, y: 0.5}],
		parts: 2
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

		collection.bindEventListeners();

	},

	bindEventListeners: function () {

		var collection = this;

		mediator.installTo(collection);

		collection.subscribe('deviceAction:isActive', collection.activateDeActiveTans);
		collection.subscribe('deviceAction:dblTap', collection.flipTan);

		collection.subscribe('tan:align', collection.align);

	},

	activateDeActiveTans: function (isActive, data) {

		var collection = this,
			hoveredTan = collection.getHoveredTan(data),
			rotater = collection.getData('rotater'),
			isInRingRotater = rotater.isInRing(data);

		collection.deActiveAll();

		if (isActive) {

			if (isInRingRotater) {

				rotater.setStartData(data);

			} else {

				rotater.deActivate();
				if (hoveredTan) {
					hoveredTan.set('isActive', true);
					collection.setData('lastActiveTan', hoveredTan);
				} else {


				}


			}


		} else {

			// stop rotating if needed

			if (rotater.get('isActive')) {

				rotater.endRotating();

			} else {

				if (hoveredTan) {
					collection.align({tan: hoveredTan});
					rotater.connectTan({
						tan: hoveredTan
					});
				}

			}

		}

	},

	flipTan: function (data) {

		var collection = this,
			rotater = collection.getData('rotater'),
			hoveredTan = collection.getHoveredTan(data);

		return hoveredTan && rotater.get('tan') === hoveredTan && hoveredTan.flip();

	},

	align: function (data) {

		var collection = this,
			alignData = collection.getAlignData(data);


		log(alignData);


	},

	getAlignData: function (data) {

		var collection = this,
			alignTan = data.tan,
			alignTanCoordinates = alignTan.getAlignCoordinates(),
			align = {},
			minPath = Infinity,
			otherTansCoordinates = [],
			pow = Math.pow.bind(Math);

		collection.each(function (tan) {
			if (tan === alignTan) {
				return;
			}
			otherTansCoordinates = otherTansCoordinates.concat(tan.getAlignCoordinates());
		});

		otherTansCoordinates.forEach(function (otherXY) {

			alignTanCoordinates.forEach(function (alignXY) {

				var otherX = otherXY.x,
					otherY = otherXY.y,
					alignX = alignXY.x,
					alignY = alignXY.y,
					curPath = pow(otherX - alignX, 2) + pow(otherY - alignY, 2);

				if (curPath > minPath) {
					return;
				}

				minPath = curPath;

				align = {
					otherX: otherX,
					otherY: otherY,
					alignX: alignX,
					alignY: alignY,
					minPath: Math.sqrt(minPath)
				}

			});

		});

		return align;

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

	setScale: function (scale) {
		this.setData('scale', scale);
	},

	createTans: function () {

		_.each(tansInfo, function (data) {
			for (var i = 0, len = data.count; i < len; i += 1) {
				this.add({
					coordinates: data.coordinates,
					parts: data.parts,
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
import Backbone from './../../../../lib/backbone';
import mediator from './../../../../services/mediator';

var Tan = Backbone.Model.extend({

	styles: {
		fill: '#c00',
		stroke: '#0c0',
		'stroke-width': 0.02
	},

	activeStyles: {
		fill: '#0c0',
		stroke: '#c00',
		'stroke-width': 0.02
	},

	nodeAttributes: {
		'stroke-linejoin': 'round',
		'stroke-alignment': 'center'
	},

	initialize: function (data) {

		var tan = this,
			scale = data.scale,
			coordinates = data.coordinates;

		coordinates.forEach(function (xy, index) {
			tan.set('x' + index, xy.x * scale);
			tan.set('y' + index, xy.y * scale);
		});

		tan.set('anglesLength', coordinates.length);

		//tan.setLastAccept();

		tan.bindEventListeners();

	},

	setLastAccept: function () {
		return this.set('last-accept', Date.now());
	},

	getLastAccept: function () {
		return this.get('last-accept');
	},

	bindEventListeners: function () {

		var tan = this;

		mediator.installTo(tan);

		tan.on('change:isActive', tan.setStateActiveDeActive);

		tan.subscribe('deviceMoving', tan.move);

	},

	move: function (dxdy) {

		if ( !this.get('isActive') ) {
			return;
		}

		var tan = this,
			dx = dxdy.dx,
			dy = dxdy.dy,
			coordinates = tan.getCoordinates();

		_.each(coordinates, function (xy) {
			xy.x -= dx;
			xy.y -= dy;
		});

		tan.setCoordinates(coordinates);

		tan.reDraw();

	},

	setStateActiveDeActive: function (self, isActive) {

		this.drawActiveDeActive(isActive);

	},

	drawActiveDeActive: function (isActive) {

		var tan = this;

		tan.setStyles(isActive && tan.activeStyles);

	},

	getCoordinates: function () {

		var tan = this,
			arr = [],
			i, len;

		for (i = 0, len = tan.get('anglesLength'); i < len; i += 1) {
			arr.push({
				x: tan.get('x' + i),
				y: tan.get('y' + i)
			});
		}

		return arr;

	},

	setCoordinates: function (coordinates) {

		var tan = this;

		_.each(coordinates, function (xy, i) {
			tan.set('x' + i, xy.x);
			tan.set('y' + i, xy.y);
		});

		return tan;

	},

	drawTo: function (drawNode) {

		var tan = this,
			tanNode = tan.get('node'),
			polygonCoordinates = tan.getPolygonCoordinates();

		if (!tanNode) {
			tanNode = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			tan.set('node', tanNode);
			tan.setStyles();
			drawNode.appendChild(tanNode);
		}

		tanNode.setAttribute('points', polygonCoordinates);

	},

	reDraw: function () {

		var tan = this,
			tanNode = tan.get('node'),
			polygonCoordinates = tan.getPolygonCoordinates();

		tanNode.setAttribute('points', polygonCoordinates);

	},

	setStyles: function (stylesArg) {

		var tan = this,
			node = tan.get('node'),
			styles = stylesArg || tan.styles,
			nodeAttributes = tan.nodeAttributes,
			styleStr = '',
			attr = document.createAttribute('style');

		Object.keys(styles).forEach(function (key) {
			var value = (key === 'stroke-width') ? styles[key] * tan.get('scale') : styles[key];
			styleStr += key + ':' + value + ';';
		});

		attr.value = styleStr;
		node.setAttributeNode(attr);

		Object.keys(nodeAttributes).forEach(function (key) {
			var attr = document.createAttribute(key);
			attr.value = nodeAttributes[key];
			node.setAttributeNode(attr);
		});

	},

	getPolygonCoordinates: function () {

		var tan = this,
			scale = tan.get('scale');

		return tan.getCoordinates().map(function (xy) {
			return xy.x + ',' + xy.y ;
		}).join(' ');

	},

	isIn: function (xy) {

	var tan = this,
		anglesLength = tan.get('anglesLength');
		
		if (anglesLength === 3) {
			return tan.isInTriangle.apply(tan, tan.getCoordinates().concat([xy]));
		}

		if (anglesLength === 4) {
			return tan.isInFourAngle.apply(tan, tan.getCoordinates().concat([xy]));
		}

	},

	// x0, y0 - point coordinates

	isInTriangle: function (xy1, xy2, xy3, xy0) {

		var a, b, c,
			x1 = xy1.x,
			y1 = xy1.y,
			x2 = xy2.x,
			y2 = xy2.y,
			x3 = xy3.x,
			y3 = xy3.y,
			x0 = xy0.x,
			y0 = xy0.y;

		a = (x1 - x0) * (y2 - y1) - (x2 - x1) * (y1 - y0);
		b = (x2 - x0) * (y3 - y2) - (x3 - x2) * (y2 - y0);
		c = (x3 - x0) * (y1 - y3) - (x1 - x3) * (y3 - y0);

		return (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0);

	},

	isInFourAngle: function (xy1, xy2, xy3, xy4, xy0) {

		var tan = this;

		return tan.isInTriangle(xy1, xy2, xy3, xy0) || tan.isInTriangle(xy3, xy4, xy1, xy0);

	}

});

export default Tan;
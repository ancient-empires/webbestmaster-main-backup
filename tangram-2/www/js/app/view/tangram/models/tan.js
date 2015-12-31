import Backbone from './../../../../lib/backbone';

var Tan = Backbone.Model.extend({

	styles: {
		fill: '#c00',
		stroke: '#0c0',
		'stroke-width': 0.02
	},

	nodeAttributes: {
		'stroke-linejoin': 'round',
		'stroke-alignment': 'center'
	},

	initialize: function (data) {

		var scale = data.scale,
			coordinates = data.coordinates;

		coordinates.forEach(function (xy, index) {
			this.set('x' + index, xy.x * scale);
			this.set('y' + index, xy.y * scale);
		}, this);

		this.set('anglesLength', coordinates.length);

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

	setStyles: function () {

		var tan = this,
			node = tan.get('node'),
			styles = tan.styles,
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

	isIn: function (x, y) {

	var tan = this,
		anglesLength = tan.get('anglesLength');
		
		if (anglesLength === 3) {
			return tan.isInTriangle(tan.getCoordinates().concat(x,y ))
		}


	},

	// x0, y0 - point coordinates

	isInTriangle: function (x1, y1, x2, y2, x3, y3, x0, y0) {

		var a, b, c;

		a = (x1 - x0) * (y2 - y1) - (x2 - x1) * (y1 - y0);
		b = (x2 - x0) * (y3 - y2) - (x3 - x2) * (y2 - y0);
		c = (x3 - x0) * (y1 - y3) - (x1 - x3) * (y3 - y0);

		return (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0);

	}


});

export default Tan;
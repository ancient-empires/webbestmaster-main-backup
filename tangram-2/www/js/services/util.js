'use strict';
/*global window */

import $ from './../lib/jbone';
import Queue from './../lib/queue';

var arrayProto = Array.prototype,
	win = window,
//doc = win.document,
//docElem = doc.documentElement,
	util = {

		tempDiv: document.createElement('div'),
		forEach: arrayProto.forEach,
		DOMURL: win.URL || win.webkitURL || win,

		svgBoundingBox: function (svg) {

			var maxX = -Infinity,
				maxY = -Infinity,
				minX = Infinity,
				minY = Infinity,
				polygons = svg.querySelectorAll('*');

			arrayProto.forEach.call(polygons, function (polygon) {

				var polygonPoints = polygon.points,
					len,
					i,
					point,
					x,
					y;

				for (i = 0, len = polygonPoints.length; i < len; i += 1) {
					point = polygonPoints.getItem(i);

					x = point.x;
					y = point.y;

					if (x > maxX) {
						maxX = x;
					}

					if (y > maxY) {
						maxY = y;
					}

					if (x < minX) {
						minX = x;
					}

					if (y < minY) {
						minY = y;
					}

				}

			});

			return {
				maxX: maxX,
				maxY: maxY,
				minX: minX,
				minY: minY,
				width: parseFloat(svg.getAttribute('width')),
				height: parseFloat(svg.getAttribute('height')),
				sizeX: maxX - minX,
				sizeY: maxY - minY
			}

		},

		svgToCanvas: function (data, cb) { // data -> svg + padding

			var util = this,
				svg = data.svg,
				svgBoundingBox = util.svgBoundingBox(svg),
				svgText = util.getOuterHtml(svg),
				minX = svgBoundingBox.minX,
				minY = svgBoundingBox.minY,
				sizeX = svgBoundingBox.sizeX,
				sizeY = svgBoundingBox.sizeY,
				padding = data.hasOwnProperty('padding') ? data.padding : 5, // 5 px
				dblPadding = padding * 2,
				canvas = document.createElement('canvas'),
				//canvasStyle = canvas.style,
				ctx = canvas.getContext('2d'),
				DOMURL = util.DOMURL,
				img = new Image(),
				svgBlob,
				url,
				left = minX - padding,
				top = minY - padding;

			sizeX += dblPadding;
			sizeY += dblPadding;

			canvas.width = sizeX;
			canvas.height = sizeY;

			svgBlob = new Blob([svgText], {type: 'image/svg+xml;charset=utf-8'});
			url = DOMURL.createObjectURL(svgBlob);

			img.addEventListener('load', function onLoad() {
				img.removeEventListener('load', onLoad, false);
				ctx.drawImage(this, left, top, sizeX, sizeY, 0, 0, sizeX, sizeY);
				DOMURL.revokeObjectURL(url);
				cb({
					canvas: canvas,
					left: left,
					top: top,
					sizeX: sizeX,
					sizeY: sizeY,
					width: svgBoundingBox.width,
					height: svgBoundingBox.height
				});
			}, false);

			img.src = url;

		},

		toArray: function (likeArray) {

			return Array.prototype.slice.call(likeArray);

		},

		getOuterHtml: function (node) {

			var util = this,
				tempDiv = util.tempDiv,
				outerHtml;

			tempDiv.appendChild(node);

			outerHtml = tempDiv.innerHTML;
			tempDiv.removeChild(node);

			return outerHtml;

		},

		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		},

		arrayRemoveByValue: function (arr, value) {
			var index = arr.indexOf(value);
			if (index !== -1) {
				arr.splice(index, 1);
			}
			return arr;
		},

		getBetween: function (min, current, max) {
			current = Math.min(current, max);
			current = Math.max(current, min);
			return current;
		},

		getRandomBetween: function (min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},

		toTop: function () {
			win.scrollTo(0, 0);
		},

		copyJSON: function (obj) { // external
			return JSON.parse(JSON.stringify(obj));
		},
		formatTime: function (number) {
			return number >= 10 ? number : '0' + number;
		},
		formatMs: function (ms) {

			var util = this,
				date = new Date(ms);

			return {
				d: util.formatTime(date.getUTCDate()),
				h: util.formatTime(date.getUTCHours()),
				m: util.formatTime(date.getUTCMinutes()),
				s: util.formatTime(date.getUTCSeconds()),
				ms: util.formatTime(date.getUTCMilliseconds())
			};

		},

		loadImage: function (src) {

			var def = $.Deferred(),
				$img = $(new Image());

			$img.one('load error', def.resolve);

			$img.attr('src', src);

			return def.promise();

		},

		loadImages: function (srcs) {

			var loadImage = this.loadImage,
				queue = new Queue();

			srcs.forEach(function (src) {
				queue.push(function () {
					return loadImage(src);
				});
			});

			return queue.run();

		},

/*
		hexToDecimal: function (hex) {

			return parseInt(hex, 16);

		},

		decimalToHex: function (decimal) {

			return decimal.toString(16);

		},

		getRandomColor: function () {

			return '#' + [0, 0, 0].map(function () {
				return this.decimalToHex(this.getRandomBetween(0, 256));
			}, this).join('');

		},
*/

		// tangram

		preLoadInterfaceImages: function () {

			// load interface images
			return this.loadImages([
				//'main-bg.jpg', // load from css
				'rotate-bg.svg',
				'tangram-frame.svg'
			].concat([0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (index) {
				return 'tangram-texture/' + index + '.jpg';
			})).map(function (path) {
				return 'i/' + path;
			}));

		}

	};

export default util;
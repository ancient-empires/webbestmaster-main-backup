'use strict';
/*global window */

import $ from './../lib/jbone';
import _ from './../lib/lodash';
import Queue from './../lib/queue';
// tangram
import tansInfo from './../app/view/tangram/models/tans-info';
import tangrams from './../app/data/tangrams';

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
				polygons = svg.querySelectorAll('polygon');

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
				padding = data.padding || 0, // 5 px
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

			img.addEventListener('error', function (e) {
				console.log('error');
				console.log(e);
			}, false);

			img.src = url;

		},

		toArray: function (likeArray) {

			return Array.prototype.slice.call(likeArray);

		},

		getOuterHtml: function (node) {

			var util = this,
				tempDiv = util.tempDiv,
				outerHtml,
				cloneNode = node.cloneNode(true);

			tempDiv.appendChild(cloneNode);

			outerHtml = tempDiv.innerHTML;
			tempDiv.removeChild(cloneNode);

			return outerHtml;

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

			$img.one('load', function (e) {
				def.resolve(e.currentTarget);
				$img.off();
			});
			$img.one('error', function (e) {
				def.reject(e);
				$img.off();
			});

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
			var imagesPath = ['mover-bg.svg', 'rotate-bg.svg', 'popup-close-icon.svg', 'tangram-frame.svg'];
				//i;

/*
			for (i = 0; i < 9; i += 1) {

				// push texture for settings
				imagesPath.push('tangram-texture/' + i + '.jpg');

				// tan textures
				Object.keys(tansInfo).forEach(function (key) {
					imagesPath.push('tan-textures/texture-' + i + '-' + key + '.png');
				});

			}
*/

			imagesPath = imagesPath.map(function (path) {
				return 'i/' + path;
			});

			return this.loadImages(imagesPath);

		},

		preLoadTangramParts: function (index) {

			var imagesPath = [];

			Object.keys(tansInfo).forEach(function (key) {
				imagesPath.push('i/tan-textures/texture-' + index + '-' + key + '.png');
			});

			return this.loadImages(imagesPath);

		},

		getPathBetween: function (xy0, xy1) {

			return Math.sqrt( Math.pow(xy0.x - xy1.x, 2) + Math.pow(xy0.y - xy1.y, 2));

		},

/*
		preLoadTangramImages: function () {

			var imagesSrc = [];

			tangrams.data.forEach(function (section) {

				section.data.forEach(function (item) {
					imagesSrc.push(item.hash);
				});

			});

			imagesSrc = imagesSrc.map(function (hash) {
				return 'i/item-preview/' + hash + '.png';
			});

			return this.loadImages(imagesSrc);

		},
*/

		getSectionInfo: function (data) {

			var id = data.id,
				section = _.find(tangrams.data, function (data) {
					// {name: name}
					return data.id === id;
				}),
				lastIndex = section.data.length - 1,
				nextIndex,
				prevIndex,
				index = data.index;

			if (index === lastIndex) { // index === lastIndex
				nextIndex = 0;
				prevIndex = index - 1;
			} else if (!index) { // index === 0
				nextIndex = 1;
				prevIndex = lastIndex;
			} else {
				nextIndex = index + 1;
				prevIndex = index - 1;
			}

			return {
				nextIndex: nextIndex,
				prevIndex: prevIndex,
				section: section,
				id: data.id,
				index: index
			};

		}

	};

export default util;
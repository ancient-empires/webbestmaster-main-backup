(function (win) {

	"use strict";
	/*global window, document */

	var isTouch = document.documentElement.hasOwnProperty('ontouchstart');

	var evt = {
		down: isTouch ? 'touchstart' : 'mousedown',
		move: isTouch ? 'touchmove' : 'mousemove',
		up: isTouch ? 'touchend' : 'mouseup',
		out: isTouch ? 'touchcancel' : 'mouseout'
	};

	win.drawer = {

		canvas: null,
		context: null,
		img: null,

		activeTool: 'brush', // bucket, brush, hand
		toolIsActive: false,
		eventType: '',
		brush: {
			action: function (mainObj) {

				var x, y, dx, dy;

				switch (mainObj.eventType) {

					case 'up':
						dx = Math.abs(mainObj.toolStartX - mainObj.toolEndX);
						dy = Math.abs(mainObj.toolStartY - mainObj.toolEndY);
						if (dx < 10 && dy < 10) {
							x = mainObj.toolEndX;
							y = mainObj.toolEndY;
						}
						break;
					case 'move':
						if (!mainObj.toolIsActive) {
							return;
						}
						x = mainObj.toolCurrentX;
						y = mainObj.toolCurrentY;
						break;

				}

				if (!x || !y) {
					return;
				}

				mainObj.context.beginPath();
				mainObj.context.arc(x, y, this.size, 0, 2 * Math.PI, false);
				mainObj.context.fillStyle = 'rgb(' + this.color + ')';
				mainObj.context.fill();

				this.drawLine(mainObj);

			},

			drawLine: function (mainObj) {

				var x, y, x0, y0, x1, y1, dx, dy;

				x0 = mainObj.toolPreCurrentX;
				y0 = mainObj.toolPreCurrentY;
				x1 = mainObj.toolCurrentX;
				y1 = mainObj.toolCurrentY;

				dx = x1 - x0;
				dy = y1 - y0;

				for (y = y0; y < y1; y += 0.5) {
					x = (y - y0) / dy * dx + x0;
					mainObj.context.beginPath();
					mainObj.context.arc(x, y, this.size, 0, 2 * Math.PI, false);
					mainObj.context.fillStyle = 'rgb(' + this.color + ')';
					mainObj.context.fill();
				}

				for (x = x0; x < x1; x += 0.5) {
					y = (x - x0) / dx * dy + y0;
					mainObj.context.beginPath();
					mainObj.context.arc(x, y, this.size, 0, 2 * Math.PI, false);
					mainObj.context.fillStyle = 'rgb(' + this.color + ')';
					mainObj.context.fill();
				}

			},
			size: 10,
			color: '200, 0, 0'

		},

		bucket: {
			action: function (mainObj) {

				var x, y, dx, dy;

				switch (mainObj.eventType) {
					case 'up':
						dx = Math.abs(mainObj.toolStartX - mainObj.toolEndX);
						dy = Math.abs(mainObj.toolStartY - mainObj.toolEndY);
						if (dx < 10 && dy < 10) {
							x = mainObj.toolEndX;
							y = mainObj.toolEndY;
						}

						break;
				}


				if (!x || !y) {
					return;
				}

				// draw area

				// prepare canvas to draw

				var px, height, width, cx, cy;

				width = mainObj.canvas.width;
				height = mainObj.canvas.height + 3;

				// delete black color -> add transparent
				for (var i = 0, len = mainObj.imageData.data.length; i < len; i += 4) {

					cx = (i / 4) % width;
					cy = Math.floor((i / 4) / height);

					px = {
						r: mainObj.imageData.data[i],
						g: mainObj.imageData.data[i + 1],
						b: mainObj.imageData.data[i + 2],
						a: mainObj.imageData.data[i + 3]
					};

					if ((px.r + px.g + px.b) === 0) {
						mainObj.context.clearRect(cx, cy, 1, 1);
					}

				}

				// fill area
				this.fillPixel(x, y);

			},

			fillPixel: function (x, y) {

				// get color pixel under x, y
				var context = drawer.context;

				var currentColor = context.getImageData(x, y, 1, 1).data;
				currentColor = currentColor[0] + ',' + currentColor[1] + ',' + currentColor[2];

				if (currentColor === this.color) {
					return;
				}

				if (currentColor === '0,0,0') {
					return;
				}

				context.fillStyle = 'rgb(' + this.color + ')';
				context.fillRect(x, y, 1, 1);

				setTimeout(this.fillPixel.bind(this, x + 1, y), 0);
				setTimeout(this.fillPixel.bind(this, x - 1, y), 0);
				setTimeout(this.fillPixel.bind(this, x, y + 1), 0);
				setTimeout(this.fillPixel.bind(this, x, y - 1), 0);

			},

			color: '200,0,0'

		},

		addImage: function (pathToImage) {

			this.img = new Image();
			this.img.src = pathToImage;
			this.img.onload = function () {
				this.setCanvasSize();
				this.drawImage();
				this.setImagePixelData();
			}.bind(this);

		},

		init: function (params) {

			this.canvas = params.canvas;
			this.context = this.canvas.getContext("2d");

			var that = this;

			this.canvas.addEventListener(evt.down, function (e) {
				that.eventType = 'down';
				that.toolIsActive = true;
				that.toolStartX = e.pageX || e.touches[0].pageX;
				that.toolStartY = e.pageY || e.touches[0].pageY;
				that.toolEndX = that.toolStartX;
				that.toolEndY = that.toolStartY;
				that.toolCurrentX = that.toolStartX;
				that.toolCurrentY = that.toolStartY;
				that.toolPreCurrentX = that.toolStartX;
				that.toolPreCurrentY = that.toolStartY;
				that[that.activeTool].action(that);
			}, false);

			this.canvas.addEventListener(evt.move, function (e) {
				if (!that.toolIsActive) {
					return;
				}
				that.eventType = 'move';
				that.toolPreCurrentX = that.toolCurrentX;
				that.toolPreCurrentY = that.toolCurrentY;
				that.toolCurrentX = e.pageX || e.touches[0].pageX;
				that.toolCurrentY = e.pageY || e.touches[0].pageY;
				that.toolEndX = that.toolCurrentX;
				that.toolEndY = that.toolCurrentY;
				that[that.activeTool].action(that);
			}, false);

			this.canvas.addEventListener(evt.up, function () {
				that.eventType = 'up';
				that.toolIsActive = false;
				that[that.activeTool].action(that);
				that.reDrawImage();
			}, false);

			this.canvas.addEventListener(evt.out, function () {
				that.eventType = 'up';
				that.toolIsActive = false;
				that[that.activeTool].action(that);
				that.reDrawImage();
			}, false);

		},

		setCanvasSize: function () {
			this.canvas.width = this.img.width;
			this.canvas.height = this.img.height;
		},

		drawImage: function () {
			this.context.drawImage(this.img, 0, 0);
		},

		reDrawImage: function () {
			// redraw black pixels
			var px, x, y, height, width;

			width = this.canvas.width;
			height = this.canvas.height + 3;

			// delete black color -> add transparent
			for (var i = 0, len = this.imageData.data.length; i < len; i += 4) {

				x = (i / 4) % width;
				y = Math.floor((i / 4) / height);

				px = {
					r: this.imageData.data[i],
					g: this.imageData.data[i + 1],
					b: this.imageData.data[i + 2],
					a: this.imageData.data[i + 3]
				};

				if ((px.r + px.g + px.b) === 0) {
					this.context.fillStyle = "#000";
					this.context.fillRect(x, y, 1, 1);
				}

			}

		},
		setImagePixelData: function () {
			this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
		}



	};


}(window));

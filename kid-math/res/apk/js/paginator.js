(function (win) {

	"use strict";
	/*global window, document, event, setTimeout, info */

	var isTouch = document.documentElement.hasOwnProperty('ontouchstart');

	var down = isTouch ? 'touchstart' : 'mousedown';
	var up = isTouch ? 'touchend' : 'mouseup';
	var move = isTouch ? 'touchmove' : 'mousemove';

	function Pagination (params) {

		this.coords = {
			xStart: 0,
			xCur: 0,
			isDown: false,
			xContainerStart: 0,
			containerX: 0
		};

		this.wrapper = params.wrapper;
		this.container = params.container;
		this.pages = params.pages;
		this.curPageNumber = 0;

		this.init();
		this.addEventListeners();
		win.addEventListener('resize', this.init.bind(this), false);

	}

	window.Pagination = Pagination;

	Pagination.prototype.init = function() {

		this.wrapper.style.overflow = 'hidden';

		this.pagesLength = this.pages.length;

		var width = this.wrapper.clientWidth;
		this.container.style.width = this.pagesLength * width + 'px';
		this.pages.forEach(function(page) {
			page.style.width = width + 'px';
			page.style.float = 'left';
		});

		this.width = width;
		this.maxXPos = -(this.pagesLength - 1) * this.width;

		this.adjustEdge();

	};

	Pagination.prototype.addEventListeners = function() {
		this.wrapper.addEventListener(down, this.onMouseDown.bind(this), false);
		this.wrapper.addEventListener(move, this.onMouseMove.bind(this), false);
		this.wrapper.addEventListener(up, this.onMouseUp.bind(this), false);
		this.wrapper.addEventListener('touchcancel', this.onMouseUp.bind(this), false);
	};

	Pagination.prototype.onMouseDown = function() {
		this.coords.isDown = true;

		this.coords.xStart = isTouch ? event.touches[0].pageX : event.x;

		this.coords.xContainerStart = this.coords.containerX;
		this.container.style.WebkitTransition = 'none';

		// set current page number
		this.curPageNumber = Math.round(this.coords.containerX / this.width);

	};

	Pagination.prototype.onMouseMove = function() {

		if (!this.coords.isDown) {
			return;
		}

		this.coords.xCur = isTouch ? event.touches[0].pageX : event.x;

		this.coords.containerX = this.coords.xContainerStart + this.coords.xCur - this.coords.xStart;
		if (this.coords.containerX > 0) {
			this.coords.containerX = this.coords.xContainerStart + (this.coords.xCur - this.coords.xStart) / 2;
		}

		if (this.coords.containerX < this.maxXPos) {
			this.coords.containerX = this.coords.xContainerStart + (this.coords.xCur - this.coords.xStart) / 2;
		}

		if (this.coords.containerX === 0) {
			this.coords.containerX = 0.1;
		}

		this.container.style.WebkitTransform = 'translate(' + this.coords.containerX + 'px, 0.1px)';

		event.stopPropagation();
		event.preventDefault();

		setTimeout(function(){
			this.coords.containerBeforeX = this.coords.containerX;
		}.bind(this), 200);

	};

	Pagination.prototype.onMouseUp = function() {
		this.coords.isDown = false;

		var direction = ((this.coords.containerBeforeX - this.coords.containerX) < 0) ? 1: -1;
		var speed = Math.abs(this.coords.containerBeforeX - this.coords.containerX) || 0;

		if (speed > 0) {
			this.coords.containerX = (this.curPageNumber + direction) * this.width;
		}

		if (this.coords.containerX > 0) {
			this.coords.containerX = 0;
		}

		// //

		if (info.currentLevelName === 'learning-basics' && this.coords.containerX >= this.maxXPos) {
			var audio = 'number-' + info.currentLevel;
			var path = lang[info.lang][audio] || soundList[audio];
			player.play(path);
		}

		if (info.currentLevelName === 'learn-+' || info.currentLevelName === 'learn--') {
			var path = lang[info.lang].swipe || soundList.swipe;
			player.play(path);
		}

		// \\

		if (this.coords.containerX < this.maxXPos) {
			this.coords.containerX = this.maxXPos;
			// // this is extra code - only for KG.Math

			window.dataStorage.openNextLevel();
			window.statusBar.updateScore(info.bonus.smallest);
			window.statusBar.updateScore(info.bonus.small);
			// \\ this is extra code - only for KG.Math

		}


		this.coords.containerX = Math.abs(this.coords.containerX);
		var fullPages = Math.floor(this.coords.containerX / this.width);
		var extraPage = Math.round((this.coords.containerX % this.width) / this.width);
		this.coords.containerX = -(fullPages + extraPage) * this.width;

		this.container.style.WebkitTransition = 'all 0.3s ease-out';
		if (this.coords.containerX === 0) {
			this.coords.containerX = 0.1;
		}
		this.container.style.WebkitTransform = 'translate(' + this.coords.containerX + 'px, 0.1px)';

		var previousPageNumber = this.curPageNumber; // only for math
		this.curPageNumber = Math.round(this.coords.containerX / this.width);

		if (this.curPageNumber < previousPageNumber) { // only for math
			window.statusBar.updateScore(info.bonus.smallest);
		}

	};

	Pagination.prototype.adjustEdge = function() {
		this.coords.containerX = (this.curPageNumber || 0) * this.width;
		this.container.style.WebkitTransition = 'none';
		if (this.coords.containerX === 0) {
			this.coords.containerX = 0.1;
		}
		this.container.style.WebkitTransform = 'translate(' + this.coords.containerX + 'px, 0.1px)';
	};

	Pagination.prototype.changePage = function(n) {

		this.curPageNumber -= n;

		if (this.curPageNumber > 0) {
			this.curPageNumber = 0;
		}

		if (Math.abs(this.curPageNumber) > this.pagesLength - 1) {
			this.curPageNumber = -(this.pagesLength - 1);
		}

		this.adjustEdge();

	};

}(window));

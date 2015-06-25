/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document, setTimeout, history, location, Image*/
	/*global APP, Backbone, FastClick, _, $ */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};


	function prepareTiles(tiles) {

		var deferred = $.Deferred(),
			promise = deferred.promise();

		function preLoadImage(base64, key) {

			var deferred = $.Deferred(),
				img = new Image();

			function onceLoad() {
				this.removeEventListener('load', onceLoad);
				this.removeEventListener('error', onceLoad);

				var base64Scaled = win.APP.map.scaleImage(this, 8);

				tiles[key] = {
					base64: base64Scaled,
					img: img
				};

				img.src = base64Scaled;

				deferred.resolve();

			}

			img.addEventListener('load', onceLoad, false);
			img.addEventListener('error', onceLoad, false);

			img.src = base64;

			return deferred.promise();

		}

		_.each(tiles, function (base64, key) {

			promise = promise.then(function () {
				return preLoadImage(base64, key);
			});

		});

		deferred.resolve();

	}

	function preCacheImages() {

		// just preload all images
		function preLoadImage(src) {

			var deferred = $.Deferred(),
				img = new Image();

			function onceLoad() {
				this.removeEventListener('load', onceLoad);
				this.removeEventListener('error', onceLoad);
				deferred.resolve();
			}

			img.addEventListener('load', onceLoad, false);
			img.addEventListener('error', onceLoad, false);

			img.src = src;

			return deferred.promise();

		}

		var deferred = $.Deferred(),
			promise = deferred.promise();

		_.each(win.APP.allImages, function (imgPath) {
			promise = promise.then(function () {
				return preLoadImage(imgPath);
			});
		});

		deferred.resolve();

	}

	function start() {

		prepareTiles(win.APP.mapTiles);
		prepareTiles(win.APP.mapTilesPreview);
		preCacheImages();

		APP.templateMaster.init();
		win.APP.util.setHTMLStyle();
		win.APP.BB.BaseView.prototype.initStatic();

		FastClick.attach(document.body);

		function back() {

			var settingsPrototype;

			if ( location.hash ) {
				history.back();
				setTimeout(back, 50);
			} else {
				// prepare map
				win.APP.map.db.init();
				//win.APP.BB.BaseView.prototype.util.loadSavedTheme();
				win.APP.bb.router = new win.APP.BB.Router();
				Backbone.history.start();
				settingsPrototype = win.APP.BB.SettingsView.prototype;
				settingsPrototype.setSpeedStyle();
				settingsPrototype.autoShowBuildingSmoke();
				settingsPrototype.autoShowUnitAnimation();
				settingsPrototype.autoSetFont();
				win.APP.soundMaster.init();
				win.APP.soundMaster.playBgSound();

				//setTimeout(function () {
				//	win.APP.soundMaster.play({
				//		sound: 'click.mp3',
				//		road: 3,
				//		isLoop: false
				//	});
				//}, 1000);
				//
				//setTimeout(function () {
				//	win.APP.soundMaster.playBgSound();
				//}, 2000);


			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window));
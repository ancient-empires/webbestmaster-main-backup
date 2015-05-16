/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document, setTimeout, history, location, Image*/
	/*global APP, Backbone, FastClick, _, $ */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function initTiles() {

		_.each(win.APP.mapTiles, function (base64, key) {
			var img = new Image(),
				scale = 8;

			$(img).one('load', function () {

				var base64Scaled = win.APP.map.scaleImage(this, scale);

				win.APP.mapTiles[key] = {
					base64: base64Scaled,
					img: img
				};

				img.src = base64Scaled;

			}.bind(img, scale, key));

			img.src = base64;

		});

	}

	function start() {

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
				initTiles();
				settingsPrototype = win.APP.BB.SettingsView.prototype;
				settingsPrototype.setSpeedStyle();
				settingsPrototype.autoShowBuildingSmoke();
				settingsPrototype.autoShowUnitAnimation();
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
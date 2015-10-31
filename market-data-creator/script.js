/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global window, FileReader, atob, Blob, Uint8Array */
	/*global */

	function $(selector, context) {
		return (context || doc).querySelector(selector);
	}

	function $$(selector, context) {
		return (context || doc).querySelectorAll(selector);
	}

	function Resizer() {
		this.readAsDataURLPromise = null;
		this.getImageFromDataUrlPromise = null;
	}

	Resizer.prototype.readAsDataURL = function (file) {

		var defer = Promise.defer(),
			reader = new FileReader();

		reader.readAsDataURL(file);

		reader.addEventListener('load', function (e) {

			defer.resolve(e.target.result);

		}, false);

		this.readAsDataURLPromise = defer.promise;

		return this;

	};

	Resizer.prototype.getImageFromDataUrl = function () {

		var img = new Image(),
			defer = Promise.defer();

		this.readAsDataURLPromise.then(function (dataUrl) {
			img.addEventListener('load', function (e) {
				defer.resolve(e.target);
			}, false);
			img.src = dataUrl;
		});

		this.getImageFromDataUrlPromise = defer.promise;

		return this;

	};

	Resizer.prototype.saveScaledImages = function () {

		var resizer = this;

		this.getImageFromDataUrlPromise.then(function (img) {
			var i = 1,
				max = 3,
				width = img.width,
				height = img.height,
				canvas = doc.createElement('canvas'),
				context = canvas.getContext('2d');

			while (i <= max) {

				canvas.width = width * i;
				canvas.height = height * i;
				context.drawImage(img, 0, 0, width * i, height * i);

				resizer.saveToDisk(resizer.dataURItoBlob(canvas.toDataURL()), 'screen-' + width + 'x' + height + '@' + i + '.png');

				i += 1;

			}

		});

	};

	Resizer.prototype.saveScaledIcons = function () {

		var resizer = this,
			canvas = doc.createElement('canvas'),
			context = canvas.getContext('2d'),
			iconSizes = [22, 29, 32, 44, 48, 50, 58, 60, 64, 66, 75, 76, 80, 87, 96, 120, 128, 144, 152, 167, 180, 256, 512, 1042];

		this.getImageFromDataUrlPromise.then(function (img) {

			iconSizes.forEach(function (size) {

				canvas.width = size;
				canvas.height = size;
				context.drawImage(img, 0, 0, size, size);

				resizer.saveToDisk(resizer.dataURItoBlob(canvas.toDataURL()), 'icon-' + size + 'x' + size + '.png');

			});

		});

	};

	Resizer.prototype.saveToDisk = function (blobURL, fileName) {
		var reader = new FileReader();
		reader.readAsDataURL(blobURL);
		reader.onload = function (evt) {
			var save, cEvent;
			save = doc.createElement('a');
			save.href = evt.target.result;
			save.target = '_blank';
			save.download = fileName || 'unknown file';

			cEvent = document.createEvent('Event');
			cEvent.initEvent('click', true, true);
			save.dispatchEvent(cEvent);
			(win.URL || win.webkitURL).revokeObjectURL(save.href);
		};
	};

	Resizer.prototype.dataURItoBlob = function (dataURI) {
		var binary, array, i, len;
		binary = atob(dataURI.split(',')[1]);
		array = [];
		for (i = 0, len = binary.length; i < len; i += 1) {
			array.push(binary.charCodeAt(i));
		}
		return new Blob([new Uint8Array(array)], {type: 'image/png'});
	};

	function getScreenShots() {

		var screenShotsInput = $('.js-input-file'),
			files = screenShotsInput.files;

		Array.prototype.forEach.call(files, function (file) {

			new Resizer().readAsDataURL(file).getImageFromDataUrl().saveScaledImages();

		});

	}

	function getIcons() {

		var screenShotsInput = $('.js-input-file'),
			files = screenShotsInput.files;

		Array.prototype.forEach.call(files, function (file) {
			new Resizer().readAsDataURL(file).getImageFromDataUrl().saveScaledIcons();
		});

	}

	$('.js-get-screen-shots-button').addEventListener('click', getScreenShots, false);
	$('.js-get-icons').addEventListener('click', getIcons, false);

}(window, window.document));
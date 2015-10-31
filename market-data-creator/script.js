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

	/*
	 * async
	 * @file - file from input type=file
	 * return promise(dataUrl)
	 * */
	function readAsDataURL(file) {

		var defer = Promise.defer(),
			reader = new FileReader();

		reader.readAsDataURL(file);

		reader.addEventListener('load', function (e) {

			defer.resolve(e.target.result);

		}, false);

		return defer.promise;

	}

	/*
	* async
	* @dataUrl - data url aka base64
	* return promise(image)
	* */
	function getImageFromDataUrl(dataUrl) {

		var img = new Image(),
			defer = Promise.defer();

		img.addEventListener('load', function (e) {
			defer.resolve(e.target);
		}, false);

		img.src = dataUrl;

		return defer.promise;

	}

	function saveToDisk(blobURL, fileName) {
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
	}

	function dataURItoBlob(dataURI) {
		var binary, array, i, len;
		binary = atob(dataURI.split(',')[1]);
		array = [];
		for (i = 0, len = binary.length; i < len; i += 1) {
			array.push(binary.charCodeAt(i));
		}
		return new Blob([new Uint8Array(array)], {type: 'image/png'});
	}

	function saveScaledImages(img) {

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

			saveToDisk(dataURItoBlob(canvas.toDataURL()), width + 'x' + height + '@' + i + '.png');

			i += 1;

		}

	}

	function saveScaledIcons(img) {

		var canvas = doc.createElement('canvas'),
			context = canvas.getContext('2d'),
			iconSizes = [22, 29, 32, 44, 48, 50, 58, 60, 64, 66, 75, 76, 80, 87, 96, 120, 128, 144, 152, 167, 180, 256, 512, 1042];

		iconSizes.forEach(function (size) {

			canvas.width = size;
			canvas.height = size;
			context.drawImage(img, 0, 0, size, size);

			saveToDisk(dataURItoBlob(canvas.toDataURL()), 'icon-' + size + 'x' + size + '.png');

		});

	}

	function getScreenShots() {

		var screenShotsInput = $('.js-input-file'),
			files = screenShotsInput.files;

		Array.prototype.forEach.call(files, function (file) {

			readAsDataURL(file).then(getImageFromDataUrl).then(saveScaledImages);

		});

	}

	function getIcons() {

		var screenShotsInput = $('.js-input-file'),
			files = screenShotsInput.files;

		Array.prototype.forEach.call(files, function (file) {

			readAsDataURL(file).then(getImageFromDataUrl).then(saveScaledIcons);

		});

	}

	$('.js-get-screen-shots-button').addEventListener('click', getScreenShots, false);
	$('.js-get-icons').addEventListener('click', getIcons, false);

}(window, window.document));
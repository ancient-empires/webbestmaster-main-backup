/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global window, Image, FileReader, atob, Blob, Uint8Array */
	/*global */

	function $(selector, context) {
		return (context || doc).querySelector(selector);
	}

/*
	function $$(selector, context) {
		return (context || doc).querySelectorAll(selector);
	}
*/

	function Resizer() {

	}

	Resizer.prototype.readAsDataURL = function (file) {

		var defer = Promise.defer(),
			reader = new FileReader();

		reader.addEventListener('load', function (e) {

			defer.resolve(e.target.result);

		}, false);

		reader.readAsDataURL(file);

		return defer.promise;

	};

	Resizer.prototype.getImageFromDataUrl = function (dataUrl) {

		var img = new Image(),
			defer = Promise.defer();

		img.addEventListener('load', function (e) {
			defer.resolve(e.target);
		}, false);

		img.src = dataUrl;

		return defer.promise;

	};

	Resizer.prototype.saveScaledImages = function (img, name) {



var q = 3;
				var resizerProto = this,
						width = img.width,
						height = img.height,
						canvas = doc.createElement('canvas'),
						context = canvas.getContext('2d');

				canvas.width = width * q;
				canvas.height = height * q;

				context.drawImage(img, 0, 0, width * q, height * q);

				resizerProto.saveCanvasToDisk(canvas, name + '-screen-' + width + 'x' + height + '@' + q + '.png');



	};

	Resizer.prototype.formatNumber = function (numberArg, lengthArg) {

		return new Array( ( lengthArg || 4 ) - numberArg.toString(10).length).fill('0').join('') + numberArg;

	};

	Resizer.prototype.saveScaledIcons = function (img) {

		var resizerProto = this,
			canvas = doc.createElement('canvas'),
			context = canvas.getContext('2d'),
			iconSizes = [14, 16, 18, 20, 22, 24, 29, 32, 44, 48, 50, 58, 60, 64, 66, 75, 76, 80, 87, 96, 120, 128, 144, 152, 167, 180, 256, 512, 1024];

		iconSizes.forEach(function (size) {

			canvas.width = size;
			canvas.height = size;

			context.drawImage(img, 0, 0, size, size);

			resizerProto.saveCanvasToDisk(canvas, 'icon-' + resizerProto.formatNumber(size) + '-' + size + 'x' + size + '.png');

		});

	};

	Resizer.prototype.saveCanvasToDisk = function (canvas, fileName) {

		var resizerProto = this;

		resizerProto.saveToDisk(resizerProto.dataURItoBlob(canvas.toDataURL()), fileName);

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

			cEvent = doc.createEvent('Event');
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

	Resizer.prototype.scaleAndSaveImages = function (file) {

		var resizerProto = this;

		resizerProto.readAsDataURL(file).then(resizerProto.getImageFromDataUrl).then(function (img) {
			resizerProto.saveScaledImages(img, file.name.replace('.png', ''));
		});

	};

	Resizer.prototype.scaleAndSaveIcons = function(file) {

		var resizerProto = this;

		resizerProto.readAsDataURL(file).then(resizerProto.getImageFromDataUrl).then(resizerProto.saveScaledIcons.bind(resizerProto));

	};

	function getScreenShotsOrIcon() {

		var button = this,
			resizerProto = Resizer.prototype,
			screenShotsInput = $('.js-input-file'),
			files = screenShotsInput.files,
			type = button.dataset.type,
			fn = type === 'icon' ? resizerProto.scaleAndSaveIcons : resizerProto.scaleAndSaveImages;

		Array.prototype.forEach.call(files, fn, resizerProto);

	}

	$('.js-get-screen-shots-button').addEventListener('click', getScreenShotsOrIcon, false);
	$('.js-get-icons').addEventListener('click', getScreenShotsOrIcon, false);

}(window, window.document));
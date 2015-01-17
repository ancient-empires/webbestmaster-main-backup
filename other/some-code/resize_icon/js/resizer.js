(function (win, doc) {

	"use strict";
	/*global console, alert, window, document, FileReader, event, Image, atob, Blob, Uint8Array, webkitURL, revokeObjectURL */

	var resizer;

	function saveToDisk(blobURL, fileName) {
		var reader = new FileReader();
		reader.readAsDataURL(blobURL);
		reader.onload = function (evt) {
			var save, cEvent;
			save = document.createElement('a');
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

	resizer = {
		sizes: {
			icon: [29, 40, 50, 57, 58, 60, 72, 76, 80, 100, 114, 120, 144, 152, 256, 512, 1024],
			splashScreen: [

				// landscape
				{x: 480, y: 320}, // n
				{x: 960, y: 640}, // d

				{x: 568, y: 320}, // n
				{x: 1136, y: 640}, // d

				{x: 1004, y: 768}, // n
				{x: 2008, y: 1536}, // d

				{x: 1024, y: 748}, // n
				{x: 2048, y: 1496}, // d

				{x: 1024, y: 768}, // n
				{x: 2048, y: 1536}, // d

				// portrait
				{x: 320, y: 480}, // n
				{x: 640, y: 960}, // d

				{x: 320, y: 568}, // n
				{x: 640, y: 1136}, // d

				{x: 748, y: 1024}, // n
				{x: 1496, y: 2048}, // d

				{x: 768, y: 1004}, // n
				{x: 1536, y: 2008}, // d

				{x: 768, y: 1024}, // n
				{x: 1536, y: 2048} // d

			]
		},
		init: function (initData) {
			this.inputFile = initData.inputFile;
			this.addEventListeners();
		},
		addEventListeners: function () {
			this.inputFile.addEventListener('change', this.getFiles.bind(this), false);
		},
		getFiles: function (evt) {

			var that = this,
				files, i, len, reader;

			files = evt.target.files; // FileList object

			function createImage(file) {
				that.createImageFromDataURL(event.target.result, file);
			}

			for (i = 0, len = files.length; i < len; i += 1) {

				reader = new FileReader();

				reader.onload = createImage.bind(this, files[i]);

				// Read in the image file as a data URL.
				reader.readAsDataURL(files[i]);

			}

		},
		createImageFromDataURL: function (dataURL, file) {

			var fileName, img;
			fileName = file.name.replace(/\.[\s\S]*?$/gi, ''); // reduce .*

			img = new Image();
			img.src = dataURL;

			this.sizes.icon.forEach(function (size) {
				if (img.width !== img.height) {
					return;
				}
				var canvas, ctx;
				canvas = doc.createElement('canvas');
				canvas.width = size;
				canvas.height = size;
				ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0, size, size);
				saveToDisk(dataURItoBlob(canvas.toDataURL()), fileName + '-' + size + 'x' + size + '.png');

			});


			this.sizes.splashScreen.forEach(function (sizes, index) {

				if (index % 2 === 1) {
					console.warn('you will got only normal size');
					return;
				}

				if (img.width === img.height) {
					return;
				}

				if ((img.width > img.height) !== (sizes.x > sizes.y)) {
					return;
				}

				var width, height, canvas, ctx;
				width = sizes.x;
				height = sizes.y;

				canvas = doc.createElement('canvas');
				canvas.width = width;
				canvas.height = height;

				ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0, width, height);

				saveToDisk(dataURItoBlob(canvas.toDataURL()), fileName + '-' + width + 'x' + height + '.png');

			});

		}

	};

	win.resizer = resizer;

}(window, document));
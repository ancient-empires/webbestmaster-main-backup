(function (win, doc, docElem) {

	"use strict";
	/*global console, alert */


	win.addEventListener('load', draw, false);

	function draw() {
		var canvas = document.getElementById('canvas');
		var ctx    = canvas.getContext('2d');
		console.log(ctx);

		var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +

			'<foreignObject width="100%" height="100%">' +
			'<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
				'<h1 style="font-size: 21px; background-image: url(https://www.google.ru/images/srpr/logo11w.png);">asfsf</h1>' +
			'</div>' +
			'</foreignObject>' +

			'</svg>';
		console.log(data);

		var DOMURL = window.URL || window.webkitURL || window;

		var img = new Image();
		var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
		var url = DOMURL.createObjectURL(svg);

		img.onload = function () {
			ctx.drawImage(img, 0, 0);
			DOMURL.revokeObjectURL(url);
		}

		img.src = url;

		doc.body.appendChild(img);

	}



}(window, document, document.documentElement));
(function (win) {

	return;

	"use strict";
	/*global window, document */

	var img = new Image();
	img.src = 'level.svg';

	img.addEventListener('load', function(){
		console.log(this);
		console.log('---------------------');

		for (var key in img) {
			if (img.hasOwnProperty(key)) {
				console.log( key + ' - ' + img[key]  );
			}
		}

		console.log('---------------------');

		console.log( img.cloneNode(true) );


		var s = new XMLSerializer();
		var str = s.serializeToString(img);
		console.log(str);

	}, false);












}(window));

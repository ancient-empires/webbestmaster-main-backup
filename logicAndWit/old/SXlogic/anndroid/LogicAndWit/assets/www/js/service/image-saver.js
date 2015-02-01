(function (win, doc, docElem) {

	"use strict";
	/*global console, alert */

	win.addEventListener('load', function(){

		var sections = win.sections,
			key;

		return;

		for (key in sections) {
			if (sections.hasOwnProperty(key)) {

				sections[key].questions.forEach(function(question){

					var key, body;

					body = doc.body;

					for (key in question) {
						if (question.hasOwnProperty(key)) {

							var img;

							question[key].split(/\s*_!_\s*/gi).forEach(function(str){
								if (str.indexOf('http') !== -1) {
									img = new Image();
									console.log(str);
									img.src = str;
									body.appendChild(img);
								}
							});

						}
					}

				});

			}
		}

	}, false);

}(window, document, document.documentElement));
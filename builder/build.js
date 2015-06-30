/*jslint white: true, nomen: true */
(function () {

	'use strict';
	/*global window */
	/*global */

	var fs = require('fs'),

		html = fs.readFileSync('./www/index.html', 'utf-8'),

		scripts = html.match(/src="js\/\S+"/g),

		endJs = '',

		endHtml = html;

	scripts.forEach(function (src) {

		endHtml = endHtml.replace('<script ' + src + ' type="text/javascript"><\/script>', 'scriptRemoved');

		src = './www/' + src.replace(/^src="|"$/g, '');
		endJs += fs.readFileSync(src, 'utf-8');
		fs.unlink(src);
	});

	endHtml = endHtml.replace('scriptRemoved', '<script src="js/all.js" type="text/javascript"><\/script>')
		.replace(/scriptRemoved[\s\S]+scriptRemoved/g, '')
		.replace(/\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->/g, '')
		.replace(/>\s+</g, '><')
		.replace(/\s+/g, ' ');

	fs.appendFile('./www/js/all.js', endJs, function (err) {
		if (err) throw err;
		console.log('ALL JS');
	});

	fs.writeFile('./www/index.html', endHtml, function (err) {
		if (err) throw err;
		console.log('INDEX HTML');
	});



}());
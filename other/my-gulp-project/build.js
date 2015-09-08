/*jslint white: true, nomen: true */
(function () {

	'use strict';
	/*global window */
	/*global */

	var fs = require('fs'),

		html = fs.readFileSync('./www/index.html', 'utf-8'),

		scripts = html.match(/src="js\/\S+"/g),

		css = fs.readFileSync('./www/css/main.css', 'utf-8'),

		cssArr,

		endJs = '',

		endHtml = html;

	var deleteFolderRecursive = function(path) {
		if( fs.existsSync(path) ) {
			fs.readdirSync(path).forEach(function(file, index){
				var curPath = path + "/" + file;
				if(fs.lstatSync(curPath).isDirectory()) { // recurse
					deleteFolderRecursive(curPath);
				} else { // delete file
					fs.unlinkSync(curPath);
				}
			});
			fs.rmdirSync(path);
		}
	};

	scripts.forEach(function (src) {

		endHtml = endHtml.replace('<script ' + src + ' type="text/javascript"><\/script>', 'scriptRemoved');

		src = './www/' + src.replace(/^src="|"$/g, '');
		endJs += fs.readFileSync(src, 'utf-8');
		fs.unlinkSync(src);
	});

	endHtml = endHtml.replace('scriptRemoved', '<script src="js/all.min.js" type="text/javascript" async><\/script>')
		.replace(/scriptRemoved[\s\S]+scriptRemoved/g, ' ')
		.replace(/\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->/g, ' ')
		.replace(/>\s+</g, '> <')
		.replace(/\s+/g, ' ');

	deleteFolderRecursive('./www/js');

	fs.mkdirSync('./www/js');

	fs.appendFile('./www/js/all.js', endJs, function (err) {
		if (err) throw err;
		console.log('ALL JS');
	});

	fs.writeFile('./www/index.html', endHtml, function (err) {
		if (err) throw err;
		console.log('INDEX HTML');
	});

	css = css.replace(/\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->/g, '');

	cssArr = css.trim().replace(/\s/g, '').replace(/@importurl\(([\s\S]+?)\)/g, '$1').split(';').filter(function (fileName) {
		return fileName;
	});

	cssArr = cssArr.map(function (fileName) {

		var file = fs.readFileSync('./www/css/' + fileName, 'utf-8');

		fs.unlink('./www/css/' + fileName);

		return file.replace(/\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ');

	});

	fs.writeFile('./www/css/main.css', cssArr.join(' '), function (err) {
		if (err) throw err;
		console.log('MAIN CSS');
	});

}());
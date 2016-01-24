var fs = require('fs'),
	rimraf = require('rimraf'),
	mime = require('mime-types'),
	path = require('path'),
	zlib = require('zlib'),
	deferred = require('deferred'),
	tinify = require("tinify"),
	multiparty = require('multiparty'),
	tinyImagesKeys;

function parseReqUrl(req) {

	return './../dist/www/' + parseReqUrlOriginal(req).replace('./', '');

}

function parseReqUrlOriginal(req) {

	// try to detect index file
	var headers = req.headers,
		reqUrl = req.url,
		reqUrlSlashIndex = reqUrl.lastIndexOf('/'),
		referer,
		refererSlashIndex;

	if (reqUrl.indexOf('/favicon.ico') !== -1) {
		return './favicon.ico';
	}

	// http://asdsasd/asdsad/ or http://asdsasd/asds.ad/sad but not http://asdsasd/asdsad/s.ad
	if ((reqUrlSlashIndex === reqUrl.length - 1) || (reqUrl.lastIndexOf('.') < reqUrlSlashIndex)) {
		return '.' + path.normalize(reqUrl + '/index.html');
	}

	referer = headers.referer;

	if (!referer) {
		return '.' + path.normalize(reqUrl);
	}

	referer = referer.replace(req.protocol + '://' + headers.host, '');

	// referer like a /asdsad/adsad/asd/
	refererSlashIndex = referer.lastIndexOf('/');

	if ( refererSlashIndex === referer.length - 1 ) {
		return '.' + path.normalize(reqUrl);
	}

	return '.' + path.normalize( (refererSlashIndex ? referer.slice(0, refererSlashIndex) : referer) + reqUrl);

}

function sendFile(req, res) {

	var reqUrl = parseReqUrl(req),
		file,
		acceptEncoding;

	fs.stat(reqUrl, function (err, data) {

		var lastModified;

		if (err) {
			res.statusCode = 404;
			res.end('Not found - 404');
			//console.error(err);
			return;
		}

		lastModified = data.mtime.toString();

		if (req.headers['if-modified-since'] === lastModified) {
			res.statusCode = 304;
			res.end('Not Modified - 304');
			//console.log('Not Modified - 304');
			return;
		}

		res.setHeader('last-modified', lastModified);

		res.setHeader('cache-control', 'private, max-age=300');

		res.setHeader('content-type', mime.contentType(path.extname(reqUrl)));

		file = new fs.ReadStream(reqUrl);

		acceptEncoding = req.headers['accept-encoding'].split(/\s?\,\s?/gi);

		if (acceptEncoding.indexOf('deflate') !== -1) {
			res.setHeader('content-encoding', 'deflate');
			file.pipe(zlib.createDeflate()).pipe(res);
		} else if (acceptEncoding.indexOf('gzip') !== -1) {
			res.setHeader('content-encoding', 'gzip');
			file.pipe(zlib.createGzip()).pipe(res);
		} else {
			file.pipe(res);
		}

		//file.pipe(process.stdout); // see in console
		file.on('error', function (err) {
			res.statusCode = 404;
			res.end('Not found - 404');
			//console.error('Not found - 404');
			//console.error(err);
		});

		// detect when user close page until data was received
		res.on('close', function () {
			file.destroy();
		});

	});

	// normal behavior for file stream - open and close
	/*
	 file
	 .on('open', function (err) {
	 // start pipe from file to res
	 console.log('file stream is open');
	 console.log(Date.now());
	 })
	 .on('close', function (err) {
	 // end pipe from file to res
	 console.log(Date.now());
	 console.log('file stream is close');
	 })
	 .on('data', function (buffer) {
	 console.log('---');
	 console.log(buffer);
	 });
	 */

}

function renameSavedFile(name, file) {

	var def = deferred(),
		curPath = file.path,
		newPath,
		pathToFile,
		pathArr,
		fileName = file.originalFilename;

	pathArr = curPath.split('/');
	pathArr.pop();
	pathToFile = pathArr.join('/');
	pathArr.push(fileName);
	newPath = pathArr.join('/');

	fs.rename(curPath, newPath, function (err) {
		if (err) {
			//console.log('ERROR: ' + err);
			return;
		}
		//console.log('rename');
		def.resolve({
			name: fileName,
			path: './' + pathToFile
		});
	});

	return def.promise;

}

function saveFilesToDisk(req, res) {

	var form = new multiparty.Form({
			//autoFiles: true,
			uploadDir: 'upload-files'
		}),
		files = [],
		def = deferred(),
		savedFiles = 0,
		allFiles = Infinity;

	function tryToResolve() {
		return savedFiles === allFiles && def.resolve(files);
	}

	form.on('file', function (name, file) {

		renameSavedFile(name, file).then(function (data) {
			files.push(data);
			savedFiles += 1;
			tryToResolve();
		});

	});

	form.parse(req, function (err, fields, files) {

		//Object.keys(fields).forEach(function (name) {
		//console.log('got field named ' + name);
		//});

		//Object.keys(files).forEach(function (name) {
		//console.log(arguments);
		//console.log('got file named ' + name);
		//});

		allFiles = Object.keys(files).length;

		tryToResolve();

	});

	return def.promise;

}

function Queue() {

	this.queue = [];
	this.index = 0;
	this.deferred = deferred();

}

Queue.prototype = {

	push: function (data) {
		this.queue.push(data);
	},

	getNext: function () {
		return this.queue[this.index++];
	},

	canNext: function () {
		return this.queue.length > this.index;
	},

	run: function () {

		var self = this,
			result;

		if ( !self.canNext() ) {
			return self.end();
		}

		result = self.getNext()();
		if (result.then) {
			result.then(self.run.bind(self));
		} else {
			self.run();
		}

		return self.deferred.promise;

	},
	end: function () {
		return this.deferred.resolve();
	}

};

function tinifyImage(data) {

	var def = deferred();

	tinify.fromFile(data.path + '/' + data.name).toFile('./tinify/' + data.name).then(function () {
		def.resolve({
			name: data.name,
			path: '/tinify'
		});
	});

	return def.promise;

}

tinyImagesKeys = [
	{key: 'h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5', time: 0},
	//{key: 'eSu5nMg0TSDairQWQC_Bx0h41PxKgKEp', time: 0},
	//{key: 'f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp', time: 0},
	{key: '_JsmPE63lCa9UsS45vlKWMlhBhRntoK8', time: 0},
	//{key: 'uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an', time: 0},
	{key: 'RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu', time: 0}
];

function tinifyImages(arr) {

	var queue = new Queue(),
		def = deferred(),
		tinifyArr = [],
		key;

	key = tinyImagesKeys.sort(function (a, b) {
		return a.time - b.time;
	})[0];

	key.time += arr.length;

	tinify.key = key.key;

	arr.forEach(function (data) {
		queue.push(function () {
			return tinifyImage(data)
				.then(function (data) {
					tinifyArr.push(data);
				});
		});
	});

	queue.run().then(function () {
		def.resolve(tinifyArr);
	});

	return def.promise;
}

function clearFolder(folder) {

	var def = deferred();

	rimraf('./' + folder + '/*', function () {
		def.resolve();
	});

	return def.promise;
}

function clearFolders(folders) {

	var queue = new Queue(),
		def = deferred();

	folders.forEach(function (folder) {
		queue.push(function () {
			return clearFolder(folder);
		});
	});

	queue.run().then(function () {
		def.resolve();
	});

	return def.promise;
}

exports.clearFolders = clearFolders;

exports.tinifyImages = tinifyImages;

exports.saveFilesToDisk = saveFilesToDisk;

exports.sendFile = sendFile;
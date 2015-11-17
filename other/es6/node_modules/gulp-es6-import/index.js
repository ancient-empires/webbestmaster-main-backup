/**
 * Created by Dmitry Turovtsov on 11/16/15.
 */

/*global require */

var through = require('through2'),
		gutil = require('gulp-util'),
		path = require('path'),
		fs = require('fs');

var PLUGIN_NAME = 'gulp-es6-import';

function walk(dir, done) {

	var results = [];

	fs.readdir(dir, function (err, list) {

		if (err) return done(err);

		var pending = list.length;

		if (!pending) return done(null, results);

		list.forEach(function (file) {
			file = path.resolve(dir, file);
			fs.stat(file, function (err, stat) {
				if (stat && stat.isDirectory()) {
					walk(file, function (err, res) {
						results = results.concat(res);
						if (!--pending) done(null, results);
					});
				} else {
					results.push(file);
					if (!--pending) done(null, results);
				}
			});
		});

	});

}

function getFileMap(file) {

	return new Promise(function (resolve, reject) {

		walk(file.base, function (err, arr) {
			if (err) {
				console.log('Can not read dir ' + file.base);
				new gutil.PluginError(PLUGIN_NAME, 'Can not read dir ' + file.base);
				return reject('Can not read dir ' + file.base);
			}

			resolve(arr);

		});

	});

}

function readFile(path) {

	return new Promise(function (resolve, reject) {
		fs.readFile(path, 'utf-8', function (err, data) {

			if (err) {
				return reject(err);
			}

			resolve({path: path, data: data});

		});
	});

}

module.exports = function (opt) {

	function collect(file, encoding, callback) {

		if (file.isNull()) {
			return callback(null, file);
		}

		if (file.isStream()) {
			return callback(new gutil.PluginError(PLUGIN_NAME, 'doesn\'t support Streams'));
		}

		getFileMap(file)
				.then(function (paths) {

					var promises = [];

					paths.forEach(function (path) {
						promises.push(readFile(path));
					});

					return Promise.all(promises);

				})
				.then(function (filesDataArr) {

					var filesDataHash = {},
							result = [],
							replaceCwd = new RegExp(file.cwd, 'gi'),
							globalImportPath = 'gi' + (Math.random() + '').slice(2, 6);

					filesDataArr.forEach(function (fileData) {

						filesDataHash[fileData.path] = fileData.data;

					});

					function getDependencies(resolvedPathToFile) {

						var fileContent = filesDataHash[resolvedPathToFile],
								paths;

						paths = fileContent.match(/import\s+\S+\s+from\s+\'\S+?\'\;/gi);

						if (!paths) {
							return false;
						}

						return paths.map(function (pathToFile) {

							pathToFile = pathToFile.replace(/(import\s+\S+\s+from\s+\')|(\'\;)/g, '') + '.js';

							var dirName = path.dirname(resolvedPathToFile);

							return path.resolve(dirName, pathToFile);

						});

					}

					function readFileForImport(resolvedPathToFile) {

						var dependencies = getDependencies(resolvedPathToFile);

						if ( dependencies ) {

							dependencies.forEach(function (dependence) {
								readFileForImport(dependence);
							});

						}

						return result.indexOf(resolvedPathToFile) === -1 && result.push(resolvedPathToFile);

					}

					readFileForImport(filesDataArr[0].path);

					result = result.map(function (pathToFile) {

						var fileContent = filesDataHash[pathToFile];

						fileContent = fileContent.replace(/(import)\s+(\S+)\s+(from)\s+\'(\S+?)\'\;/gi, function (match, p1, p2, p3, p4, offset, string) {

							return ['var ' + p2 + ' = ' + globalImportPath + '[\'' + path.resolve(path.dirname(pathToFile), p4) + '.js\'] || window.' + p2 + ';'].join('');

						});

						fileContent = fileContent.replace(/(export\s+default\s+)(\S+)/gi, function (match, p1, p2, offset, string) {

							return globalImportPath + '[\'' + pathToFile + '\'] = ' + p2;

						});

						fileContent = fileContent.replace(replaceCwd, '');

						return '(function () {\n' + fileContent + '\n}());\n';

					});

					file.contents = new Buffer( '(function (' + globalImportPath + ') {\n' + result.join('') + '\n}({}));\n' );

					callback(null, file);

				});

	}

	return through.obj(collect);

};
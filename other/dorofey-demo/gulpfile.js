/*jslint white: true, nomen: true */
(function () {

	var es6Import = require('gulp-es6-import'),
		gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		clean = require('gulp-rimraf'),
		cssBase64 = require('gulp-css-base64'),
		cssimport = require('gulp-cssimport'),
		minifyCss = require('gulp-minify-css'),
		minifyHTML = require('gulp-minify-html'),
	//browserify = require('browserify'),
	//babelify = require('babelify'),
		sass = require('gulp-sass'),
		source = require('vinyl-source-stream');
	// gulp - run 'default' task
	// gulp <task> <othertask>.

	gulp.task('default', ['clear-dist'], function () {
		return gulp.start('html', 'css', 'js');
	});

	// watch
	gulp.task('watch', ['html', 'css', 'js'], function () {
		gulp.watch('./www/*.html', ['html']);
		gulp.watch('./www/css/**/*', ['css']);
		gulp.watch('./www/js/**/*', ['js-watch']);
		//gulp.watch('./www/i/**/*', ['copy-i']);
	});

	// helper for clean
	var clearTasks = ['css', /*'font', 'i', */ 'js', 'index.html'].map(function (dir) {

		var taskName = 'clear-dir_' + dir;

		gulp.task(taskName, function () {
			return gulp.src('./dist/www/' + dir)
				.pipe(clean({force: true}));
		});

		return taskName;

	});

	// clear distributive directory
	gulp.task('clear-dist', function () {
		return gulp.start.apply(gulp, clearTasks);
	});

	// HTML
	gulp.task('html', function () {
		return gulp.src('./www/*.html')
			.pipe(minifyHTML({
				conditionals: true,
				spare: true
			}))
			.pipe(gulp.dest('./dist/www/'));
	});

	// CSS
	// import css
	// images to base64
	// minify css

	gulp.task('css', function () {
		return gulp.start('import-css', 'sass', 'minify-css');
	});

		gulp.task('import-css', function () {
			return gulp.src('./www/css/main.css')
				.pipe(cssimport({}))
				.pipe(gulp.dest('./dist/www/css'));
		});

		gulp.task('sass', ['import-css'], function () {
			return gulp.src('./dist/www/css/main.css')
				.pipe(sass())
				.pipe(clean({force: true}))
				.pipe(gulp.dest('./dist/www/css'));
		});

		//gulp.task('css-base64', ['sass'/*, 'copy-i'*/], function () {
		//	return gulp.src('./dist/www/css/main.css')
		//		.pipe(cssBase64())
		//		.pipe(clean({force: true})) // remove original file (imported css)
		//		.pipe(gulp.dest('./dist/www/css'));
		//});

		gulp.task('minify-css', ['sass'], function () {
			return gulp.src('./dist/www/css/main.css')
				.pipe(minifyCss())
				.pipe(clean({force: true})) // remove original file (imported css)
				.pipe(gulp.dest('./dist/www/css'));
		});


	// JS
	gulp.task('js', function () {
		return gulp.start('es6-import', 'uglify-js');
	});

	gulp.task('js-watch', function () {
		return gulp.start('es6-import');
	});

		gulp.task('es6-import', function () {
			return gulp.src('./www/js/main.js')
				.pipe(es6Import())
				.pipe(gulp.dest('./dist/www/js/'));
		});

		gulp.task('uglify-js', ['es6-import'], function () {
			return gulp.src('./dist/www/js/main.js')
				.pipe(uglify())
				.pipe(gulp.dest('./dist/www/js'));
		});


	/*
	// clean
	gulp.task('clean-base64', ['minify-css'], function (cd) {

		var fs = require('fs'),
			path = require('path');

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

		return walk('./dist/www/i/', function (err, pathFiles) {

			pathFiles = pathFiles || [];

			fs.readFile('./dist/www/css/main.css', 'utf-8', function (err, css) {

				var cssPaths = css.match(/\.\.\/i\/[^\)]+/g) || [];

				pathFiles.forEach(function (pathToFile) {
					var cssPath = pathToFile.replace(/^[\s\S]+?\/dist\/www\/i\/([\s\S]+?)$/g, '../i/$1');
					return cssPaths.indexOf(cssPath) === -1 && fs.unlink(pathToFile);
				});

				return cd();

			});

		});

	});

	// copy data
	gulp.task('copy-i', function () {
		return gulp.src('./www/i/!**!/!*')
			.pipe(gulp.dest('./dist/www/i'));
	});

	gulp.task('copy-font', function () {
		return gulp.src('./www/font/!**!/!*')
			.pipe(gulp.dest('./dist/www/font'));
	});
*/

/*
	// tiny-png
	gulp.task('tiny-png', function () {
		gulp.src(['tinypng/!**!/!*.png', 'tinypng/!**!/!*.jpg', 'tinypng/!**!/!*.jpeg'])
			.pipe(tinypng('h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5'))
			// h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5 - kidmathgenius@gmail.com
			// eSu5nMg0TSDairQWQC_Bx0h41PxKgKEp - mikhail.anisimau.play@gmail.com
			// f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp - dmitry.turovtsov@gmail.com
			// _JsmPE63lCa9UsS45vlKWMlhBhRntoK8 - logikaismekalka@gmail.com
			// uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an - web.best.master@gmail.com
			// RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu - ae.fan.game@gmail.com
			.pipe(gulp.dest('dist'));
	});
*/


}());
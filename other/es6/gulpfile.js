/*jslint white: true, nomen: true */
(function () {

	var es6Import = require('gulp-es6-import'),
		gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		clean = require('gulp-rimraf'),
		//cssBase64 = require('gulp-css-base64'),
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

		gulp.start(
			'copy-i', 'copy-font',
			'html',
			'es6-import',
			'uglify-js',
			'import-css', 'sass', /*'css-base64', */'minify-css'
			//'clean-base64'
		);

	});

	// helper for clean
	var taskPrefix = 'clear-dist_',
		pathPrefix = './dist/www/',
		dirs = ['css', 'font', 'i', 'js', 'index.html'];

	dirs.forEach(function (dir, index, arr) {

		var taskName = taskPrefix + dir;

		gulp.task(taskName, function () {
			return gulp.src(pathPrefix + dir)
				.pipe(clean({force: true}));
		});

		arr[index] = taskName;

	});

	// clear distributive directory
	gulp.task('clear-dist', dirs, function () {
		return gulp.start.apply(gulp, dirs);
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

	gulp.task('import-css', function () {
		return gulp.src('./www/css/main.css')
			.pipe(cssimport({}))
			.pipe(gulp.dest('./dist/www/css'));
	});

	gulp.task('sass', ['import-css'], function () {
		gulp.src('./dist/www/css/main.css')
				.pipe(sass())
				.pipe(gulp.dest('./dist/www/css'));
	});

	//gulp.task('css-base64', ['sass', 'copy-i'], function () {
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
/*
	gulp.task('es6', function () {
		return browserify({
			entries: './www/js/main.js',
			extensions: ['.js']
			//debug: true
		})
			.transform(babelify)
			.bundle()
			.pipe(source('main.js'))
			.pipe(gulp.dest('./dist/www/js'));
	});
*/

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
		return gulp.src('./www/i/**/*')
			.pipe(gulp.dest('./dist/www/i'));
	});

	gulp.task('copy-font', function () {
		return gulp.src('./www/font/**/*')
			.pipe(gulp.dest('./dist/www/font'));
	});

	// watch
	gulp.task('watch', ['html', 'import-css', 'sass', 'es6-import', 'copy-i'], function () {
		gulp.watch('./www/*.html', ['html']);
		gulp.watch('./www/css/**/*', ['import-css', 'sass']);
		gulp.watch('./www/js/**/*', ['es6-import']);
		gulp.watch('./www/i/**/*', ['copy-i']);
	});

	// tiny-png
	gulp.task('tiny-png', function () {
		gulp.src(['tinypng/**/*.png', 'tinypng/**/*.jpg', 'tinypng/**/*.jpeg'])
			.pipe(tinypng('h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5'))
			// h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5 - kidmathgenius@gmail.com
			// eSu5nMg0TSDairQWQC_Bx0h41PxKgKEp - mikhail.anisimau.play@gmail.com
			// f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp - dmitry.turovtsov@gmail.com
			// _JsmPE63lCa9UsS45vlKWMlhBhRntoK8 - logikaismekalka@gmail.com
			// uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an - web.best.master@gmail.com
			// RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu - ae.fan.game@gmail.com
			.pipe(gulp.dest('dist'));
	});

}());
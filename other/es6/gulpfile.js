/*jslint white: true, nomen: true */
(function () {

	var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		clean = require('gulp-clean'),
		cssBase64 = require('gulp-css-base64'),
		cssimport = require('gulp-cssimport'),
		minifyCss = require('gulp-minify-css'),
		minifyHTML = require('gulp-minify-html'),
		browserify = require('browserify'),
		babelify = require('babelify'),
		source = require('vinyl-source-stream'),
		Promise = require('promise');
	// gulp - run 'default' task
	// gulp <task> <othertask>.

	gulp.task('default', ['clear-dist'], function () {

		gulp.start(
			'copy-i', 'copy-font',
			'html',
			'es6',
			'uglify-js',
			'import-css', 'css-base64', 'minify-css',
			'clean-base64'
		);

	});

	// clear distributive directory
	gulp.task('clear-dist', function () {
		return gulp.src('./dist')
			.pipe(clean({force: true}));
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

	gulp.task('css-base64', ['import-css', 'copy-i'], function () {
		return gulp.src('./dist/www/css/main.css')
			.pipe(cssBase64())
			.pipe(clean({force: true})) // remove original file (imported css)
			.pipe(gulp.dest('./dist/www/css'));
	});

	gulp.task('minify-css', ['css-base64'], function () {
		return gulp.src('./dist/www/css/main.css')
			.pipe(minifyCss())
			.pipe(clean({force: true})) // remove original file (imported css)
			.pipe(gulp.dest('./dist/www/css'));
	});

	// JS
	gulp.task('es6', function () {
		return browserify({
			entries: './www/js/main.js',
			extensions: ['.js'],
			debug: true
		})
			.transform(babelify)
			.bundle()
			.pipe(source('main.js'))
			.pipe(gulp.dest('./dist/www/js'));
	});

	gulp.task('uglify-js', ['es6'], function () {
		return gulp.src('./dist/www/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('./dist/www/js'));
	});

	// clean
	gulp.task('clean-base64', ['minify-css'], function (cd) {

		var fs = require('fs');

		return Promise
			.all([
				Promise.denodeify(fs.readFile)('./dist/www/css/main.css', 'utf-8'),
				Promise.denodeify(fs.readdir)('./dist/www/i/')
			])
			.done(function (args) {

				var css = args[0],
					dir = args[1];

				dir.forEach(function (fileName) {
					return css.indexOf('../i/' + fileName) === -1 && fs.unlink('./dist/www/i/' + fileName);
				});

				return cd();

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
	gulp.task('watch', function () {
		gulp.watch('./www/*.html', ['html']);
		gulp.watch('./www/css/**/*', ['import-css']);
		gulp.watch('./www/js/**/*', ['es6']);
		gulp.watch('./www/i/**/*', ['copy-i']);
	});

}());
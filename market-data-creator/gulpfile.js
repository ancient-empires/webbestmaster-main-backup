/*jslint white: true, nomen: true */
(function () {

	var gulp = require('gulp'),
		imageResize = require('gulp-image-resize');
	// gulp - run 'default' task
	// gulp <task> <othertask>.

	gulp.task('6plus', function () {

		return gulp.src('./src/*')
			.pipe(imageResize({
				width: 2208,
				height: 1242,
				upscale: true,
				crop: true
			}))
			.pipe(gulp.dest('./dist/6plus'));

	});

	gulp.task('ipad', function () {

		return gulp.src('./src/*')
			.pipe(imageResize({
				width: 2048,
				height: 1536,
				upscale: true,
				crop: true
			}))
			.pipe(gulp.dest('./dist/ipad'));

	});

	gulp.task('ipadPro', function () {

		return gulp.src('./src/*')
			.pipe(imageResize({
				width: 2732,
				height: 2048,
				upscale: true,
				crop: true
			}))
			.pipe(gulp.dest('./dist/ipad-pro'));

	});



}());
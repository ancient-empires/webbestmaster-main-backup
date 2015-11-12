/*jslint white: true, nomen: true */
(function () {

	var gulp = require('gulp'),
		imageResize = require('gulp-image-resize'),
		rename = require('gulp-rename'),

		sizes = {
			'mipmap-hdpi': 144,
			'mipmap-mdpi': 96,
			'mipmap-xhdpi': 192,
			'mipmap-xxhdpi': 288,
			'mipmap-xxxhdpi': 384
		},
		key;
	// gulp - run 'default' task
	// gulp <task> <othertask>.

	// create tasks

	function createTask(key, size) {

		gulp.task(key, function () {

			return gulp.src('./src/*.png')
					.pipe(rename('ic_launcher.png'))
					.pipe(imageResize({
						width: size,
						height: size,
						upscale: true,
						crop: true
					}))
					.pipe(gulp.dest('./dist/' + key));

		});

	}

	for (key in sizes) {
		if (sizes.hasOwnProperty(key)) {

			createTask(key, sizes[key]);

		}
	}

	gulp.task('default', function () {

		return gulp.start.apply(gulp, Object.keys(sizes));

	});



}());
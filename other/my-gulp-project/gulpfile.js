/*jslint white: true, nomen: true */
(function () {

    var gulp = require('gulp');
    var rename = require('gulp-rename');
    var uglify = require("gulp-uglify");
    var clean = require('gulp-clean');
    var cssBase64 = require('gulp-css-base64');
    var tinypng = require('gulp-tinypng');
    var rjs = require('gulp-requirejs');
    // gulp - run 'default' task
    // gulp <task> <othertask>.

    gulp.task('default', function() { // ae
        gulp.run('uglify-js', 'clean');
    });

    gulp.task('requirejsBuild', function() {
        return rjs({
            name: 'main',
            baseUrl: 'www/js/',
            out: 'www/js/main.js',
            //shim: {
			//
            //}
			//
            //baseUrl: 'js/',

            paths: {
                'jquery': 'lib/jquery-2.1.3',
                'underscore': 'lib/underscore',
                'bb': 'lib/backbone'
            }




        })
        .pipe(gulp.dest('./delpoy/')); // pipe it to the output DIR
    });


    gulp.task('default+css', function() { // book
        gulp.run('uglify-js', 'css-base64', 'clean');
    });

    gulp.task('uglify-js', function() {

        return gulp.src('www/js/*.js')
            .pipe(uglify())
            .pipe(rename('all.min.js'))
            .pipe(gulp.dest('./www/js'));

    });

    gulp.task('css-base64', function() {

        return gulp.src('www/css/main.css')
            .pipe(cssBase64())
            .pipe(gulp.dest('./www/css'));

	});

    gulp.task('clean', function() {

        return gulp.src('www/js/all.js')
            .pipe(clean({force: true}));

	});

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
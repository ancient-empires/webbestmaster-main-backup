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
        source = require('vinyl-source-stream');
    // gulp - run 'default' task
    // gulp <task> <othertask>.

    gulp.task('default', function() {

        gulp.start('clear-dist',
            'copy-i', 'copy-font',
            'html',
            'es6',
            'uglify-js',
            'import-css', 'css-base64', 'minify-css'
        );

    });

    // clear distributive directory
    gulp.task('clear-dist', function () {
        return gulp.src('./dist/www/*')
            .pipe(clean({force: true}));
    });

    // HTML
    gulp.task('html', ['clear-dist'], function() {
        return gulp.src('./www/*.html')
            .pipe(minifyHTML({
                conditionals: true,
                spare:true
            }))
            .pipe(gulp.dest('./dist/www/'));
    });

    // CSS
        // import css
        // images to base64
        // minify css

    gulp.task('import-css', ['clear-dist'], function() {
        gulp.src('./www/css/main.css')
            .pipe(cssimport({}))
            .pipe(gulp.dest('./dist/www/css'));
    });

    gulp.task('css-base64', ['import-css', 'copy-i'], function() {
        return gulp.src('./dist/www/css/main.css')
            .pipe(cssBase64())
            .pipe(clean({force: true})) // remove original file (imported css)
            .pipe(gulp.dest('./dist/www/css'));
    });

    gulp.task('minify-css', ['css-base64'], function() {
        return gulp.src('./dist/www/css/main.css')
            .pipe(minifyCss())
            .pipe(clean({force: true})) // remove original file (imported css)
            .pipe(gulp.dest('./dist/www/css'));
    });

    // JS
    gulp.task('es6', ['clear-dist'], function () {
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

    gulp.task('uglify-js', ['es6'], function() {
        return gulp.src('./dist/www/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('./dist/www/js'));
    });

    // copy data
    gulp.task('copy-i', ['clear-dist'], function() {
        return gulp.src('./www/i/*')
            .pipe(gulp.dest('./dist/www/i'));
    });

    gulp.task('copy-font', ['clear-dist'], function() {
        return gulp.src('./www/font/*')
            .pipe(gulp.dest('./dist/www/font'));
    });

}());
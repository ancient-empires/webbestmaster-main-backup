/*jslint white: true, nomen: true */
(function () {

    var gulp = require('gulp');
    var rename = require('gulp-rename');
    //var closureCompiler = require('gulp-closure-compiler');
    //var minify = require('gulp-minify');
    var uglify = require("gulp-uglify");
    var clean = require('gulp-clean');
    // gulp - run 'default' task
    // gulp <task> <othertask>.

    gulp.task('default', function() {
        gulp.run('uglify-js', 'clean');
    });

    gulp.task('uglify-js', function() {

        return gulp.src('www/js/*.js')
            //.pipe(closureCompiler({
            //    compilerPath: 'bower_components/closure-compiler/compiler.jar',
            //    fileName: 'www/js/all.min.js'
            //}))
            //.pipe(minify())
            .pipe(uglify())
            .pipe(rename('all.min.js'))
            .pipe(gulp.dest('./www/js'));

    });

    gulp.task('clean', function() {

        return gulp.src('www/js/all.js')
            .pipe(clean({force: true}));

	});


}());
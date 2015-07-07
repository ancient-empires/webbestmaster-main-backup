/*jslint white: true, nomen: true */
(function () {

    var gulp = require('gulp');
    var closureCompiler = require('gulp-closure-compiler');

    // gulp - run 'default' task
    // gulp <task> <othertask>.

    gulp.task('default', function() {


        return gulp.src('src/*.js')
            .pipe(closureCompiler({
                compilerPath: 'bower_components/closure-compiler/compiler.jar',
                fileName: 'all.js'
            }))
            .pipe(gulp.dest('dist'));


        // place code for your default task here


    });




}());
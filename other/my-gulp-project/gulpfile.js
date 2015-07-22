/*jslint white: true, nomen: true */
(function () {

    var gulp = require('gulp');
    var closureCompiler = require('gulp-closure-compiler');
    //var rename = require("gulp-rename");
    // gulp - run 'default' task
    // gulp <task> <othertask>.

    gulp.task('default', function() {

        return gulp.src('www/js/*.js')
            .pipe(closureCompiler({
                compilerPath: 'bower_components/closure-compiler/compiler.jar',
                fileName: 'www/js/all.min.js'
            }));

    });

    gulp.task('remove-extra', function() {
        var fs = require('fs');
        fs.unlinkSync('www/js/all.js');
    });

}());
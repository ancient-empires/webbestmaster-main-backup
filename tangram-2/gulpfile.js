const {
  autoprefixer,
  clean,
  cssImport,
  es6Import,
  gulp,
  minifyCss,
  minifyHtml,
  sass,
  server,
  tinypng,
  uglify,
} = require('../common/gulp-helpers');

const cssTasks = {
  importCss() {
    return gulp.src('./www/css/main.css')
        .pipe(cssImport({}))
        .pipe(gulp.dest('./dist/www/css'));
  },

  sass() {
    return gulp.src('./dist/www/css/main.css')
        .pipe(sass())
        .pipe(clean({
          force: true,
        }))
        .pipe(gulp.dest('./dist/www/css'));
  },

  minifyCss() {
    return gulp.src('./dist/www/css/main.css')
        .pipe(minifyCss())
        .pipe(clean({
          force: true,
        })) // remove original file (imported css)
        .pipe(gulp.dest('./dist/www/css'));
  },
};

const htmlTasks = {
  minifyHtml() {
    return gulp.src('./www/*.html')
      .pipe(minifyHtml({
        conditionals: true,
        spare: true
      }))
      .pipe(gulp.dest('./dist/www/'));
  },
};

const jsTasks = {
  es6Import() {
    return gulp.src('./www/js/main.js')
        .pipe(es6Import())
        .pipe(gulp.dest('./dist/www/js/'));
  },

  uglify() {
    return gulp.src('./dist/www/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/www/js'));
  },
};

const tasks = {
  /** Watch source files to see if any of them change. */
  watch(cb) {
    /** @type { Map<string, string[]> } */
    const depsMap = new Map([
      ['./www/*.html',    ['html']     ],
      ['./www/css/**/*',  ['css']      ],
      ['./www/js/**/*',   ['js-watch'] ],
      ['./www/i/**/*',    ['copy-data']],
      ['./www/font/**/*', ['copy-data']],
    ]);

    depsMap.forEach((deps, glob) => {
      gulp.watch(glob, deps);
    });

    cb();
  },

  /** Run a web server locally. */
  webServer(cb) {
    gulp.src('./')
        .pipe(server({
          livereload: true,
          directoryListing: true,
          open: true,
          host: '0.0.0.0',
          port: 8080,
          log: 'debug'
        }));

    cb();
  }
};

module.exports.css = gulp.series(
  cssTasks.importCss,
  cssTasks.sass,
  cssTasks.minifyCss
);

module.exports.html = gulp.series(
  htmlTasks.minifyHtml
);

module.exports.js = gulp.series(
  jsTasks.es6Import,
  jsTasks.uglify,
);

module.exports.default = gulp.series(
  gulp.parallel(
    module.exports.html,
    module.exports.css,
    module.exports.js,
  ),
);


// /*jslint white: true, nomen: true */
// (function () {

//   gulp.task('default', /*['clear-dist'],*/ function () {
//     return gulp.start(/*'app-cache', */ 'html', 'css', 'js', 'copy-data');
//   });

//   // watch
//   gulp.task('watch', ['html', 'css', 'js', 'copy-data'], function () {
//     gulp.watch('./www/*.html', ['html']);
//     gulp.watch('./www/css/**/*', ['css']);
//     gulp.watch('./www/js/**/*', ['js-watch']);
//     //gulp.watch('./www/images/**/*', ['copy-data']);
//     //gulp.watch('./www/app-cache.mf', ['app-cache']);
//     gulp.watch('./www/i/**/*', ['copy-data']);
//     gulp.watch('./www/font/**/*', ['copy-data']);
//   });

//   // helper for clean
//   var clearTasks = ['index.html', 'app-cache.mf', 'css', 'js', 'i', 'font' /*, 'images'*/].map(function (dir) {

//     var taskName = 'clear-dir_' + dir;

//     gulp.task(taskName, function (cd) {
//       return gulp.src('./dist/www/' + dir, { read: false })
//         .pipe(clean({force: true}, cd));
//     });

//     return taskName;

//   });

//   // clear distributive directory
//   gulp.task('clear-dist', function () {
//     return gulp.start.apply(gulp, clearTasks);
//   });

//   // HTML
//   gulp.task('app-cache', function () {
//     return gulp.src('./www/*.mf')
//       .pipe(gulp.dest('./dist/www/'));
//   });

//   // CSS
//   // import css
//   // images to base64
//   // minify css

//   gulp.task('css', function () {
//     return gulp.start('import-css', 'sass', /*'autoprefix', */'minify-css');
//   });

//     //gulp.task('css-base64', ['sass'/*, 'copy-i'*/], function () {
//     //  return gulp.src('./dist/www/css/main.css')
//     //    .pipe(cssBase64())
//     //    .pipe(clean({force: true})) // remove original file (imported css)
//     //    .pipe(gulp.dest('./dist/www/css'));
//     //});

//     gulp.task('autoprefix', ['sass'], function () {
//       return gulp.src('./dist/www/css/main.css')
//         .pipe(autoprefixer({
//           browsers: ['last 4 versions'],
//           cascade: false
//         }))
//         .pipe(clean({force: true})) // remove original file (imported css)
//         .pipe(gulp.dest('./dist/www/css'));
//     });


//   // JS

//   // copy data
//   gulp.task('copy-data', function () {

//     [ /*'images', */ 'i', 'font'].forEach(function (dir) {
//       return gulp.src('./www/' + dir + '/**/*')
//         .pipe(gulp.dest('./dist/www/' + dir));
//     });

//   });

//   /*
//   // clean
//   gulp.task('clean-base64', ['minify-css'], function (cd) {

//     var fs = require('fs'),
//       path = require('path');

//     function walk(dir, done) {
//       var results = [];
//       fs.readdir(dir, function (err, list) {
//         if (err) return done(err);
//         var pending = list.length;
//         if (!pending) return done(null, results);
//         list.forEach(function (file) {
//           file = path.resolve(dir, file);
//           fs.stat(file, function (err, stat) {
//             if (stat && stat.isDirectory()) {
//               walk(file, function (err, res) {
//                 results = results.concat(res);
//                 if (!--pending) done(null, results);
//               });
//             } else {
//               results.push(file);
//               if (!--pending) done(null, results);
//             }
//           });
//         });
//       });
//     }

//     return walk('./dist/www/i/', function (err, pathFiles) {

//       pathFiles = pathFiles || [];

//       fs.readFile('./dist/www/css/main.css', 'utf-8', function (err, css) {

//         var cssPaths = css.match(/\.\.\/i\/[^\)]+/g) || [];

//         pathFiles.forEach(function (pathToFile) {
//           var cssPath = pathToFile.replace(/^[\s\S]+?\/dist\/www\/i\/([\s\S]+?)$/g, '../i/$1');
//           return cssPaths.indexOf(cssPath) === -1 && fs.unlink(pathToFile);
//         });

//         return cd();

//       });

//     });

//   });

//   // copy data
//   gulp.task('copy-i', function () {
//     return gulp.src('./www/i/!**!/!*')
//       .pipe(gulp.dest('./dist/www/i'));
//   });

//   gulp.task('copy-font', function () {
//     return gulp.src('./www/font/!**!/!*')
//       .pipe(gulp.dest('./dist/www/font'));
//   });
// */

//   // tiny-png
//   gulp.task('tiny-png', function () {
//     gulp.src(['tinypng/*.png'])
//       .pipe(tinypng('h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5')) // done 7 march
//       // h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5 - kidmathgenius@gmail.com
//       // eSu5nMg0TSDairQWQC_Bx0h41PxKgKEp - mikhail.anisimau.play@gmail.com
//       // f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp - dmitry.turovtsov@gmail.com
//       // _JsmPE63lCa9UsS45vlKWMlhBhRntoK8 - logikaismekalka@gmail.com
//       // uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an - web.best.master@gmail.com
//       // RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu - ae.fan.game@gmail.com
//       .pipe(gulp.dest('dist'));
//   });


// }());
const {
  autoprefixer,
  clean,
  cssBase64,
  cssImport,
  es6Import,
  gulp,
  livereload,
  minifyCss,
  minifyHtml,
  sass,
  tinypng,
  uglify,
} = require('../common/gulp-helpers');

const cleanTasks = {
  cleanDist() {
    return gulp.src('./dist', { read: false })
      .pipe(clean({ force: true }));
  }
};

const copyTasks = {
  /** Copy *.mf files */
  appCache() {
    return gulp.src('./www/*.mf')
        .pipe(gulp.dest('./dist/www/'));
  },

  /** Copy static resources */
  staticResources(cb) {
    const staticResourcesDirs = ['i', 'font'];

    staticResourcesDirs.forEach(dir => {
      gulp.src('./www/' + dir + '/**/*')
          .pipe(gulp.dest('./dist/www/' + dir));
    });

    cb();
  },
};

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

  base64() {
    return gulp.src('./dist/www/css/main.css')
        .pipe(cssBase64())
        .pipe(clean({force: true})) // remove original file (imported css)
        .pipe(gulp.dest('./dist/www/css'));
  },

  autoPrefix() {
    return gulp.src('./dist/www/css/main.css')
        .pipe(autoprefixer())
        .pipe(clean({
          force: true, // remove original file (imported css)
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

module.exports.copy = gulp.parallel(
  copyTasks.appCache,
  copyTasks.staticResources,
);

module.exports.css = gulp.series(
  cssTasks.importCss,
  cssTasks.sass,
  cssTasks.base64,
  cssTasks.autoPrefix,
  cssTasks.minifyCss,
);

module.exports.html = gulp.series(
  htmlTasks.minifyHtml,
);

module.exports.js = gulp.series(
  jsTasks.es6Import,
  jsTasks.uglify,
);

// all build tasks
module.exports.default = gulp.series(
  module.exports.copy,
  gulp.parallel(
    module.exports.css,
    module.exports.html,
    module.exports.js,
  ),
);

// clean dist
module.exports.clean = gulp.series(
  cleanTasks.cleanDist
);

// /*jslint white: true, nomen: true */
// (function () {

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
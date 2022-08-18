const path = require('node:path');

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

const srcDirs = {
  www:  path.join(__dirname, 'www'),

  html: path.join(__dirname, 'www'),
  css:  path.join(__dirname, 'www/css'),
  js:   path.join(__dirname, 'www/js'),

  mf:   path.join(__dirname, 'www'),

  i:    path.join(__dirname, 'www/i'),
  font: path.join(__dirname, 'www/font'),
};

const srcEntryFilenames = {
  html: path.join(srcDirs.html, 'index.html'),
  css:  path.join(srcDirs.css,  'main.css'),
  js:   path.join(srcDirs.js,   'main.js'),
};

const srcGlobs = {
  html: path.join(srcDirs.html, '**/*.html'),
  css:  path.join(srcDirs.css,  '**/*'),
  js:   path.join(srcDirs.js,   '**/*'),

  mf:   path.join(srcDirs.mf,  '*.mf'),

  i:    path.join(srcDirs.i,    '**/*'),
  font: path.join(srcDirs.font, '**/*'),
};

const destDirs = {
  dist: path.join(__dirname, 'dist'),
  www:  path.join(__dirname, 'dist/www'),

  html: path.join(__dirname, 'dist/www'),
  css:  path.join(__dirname, 'dist/www/css'),
  js:   path.join(__dirname, 'dist/www/js'),

  mf:  path.join(__dirname, 'dist/www'),

  i:    path.join(__dirname, 'dist/www/i'),
  font: path.join(__dirname, 'dist/www/font'),
};

const basicTasks = {
  copy: {
    /**
     * Copy single file or directory.
     * @param { string } srcGlob Source files / directories.
     *   (may be written as glob)
     * @param { string } destDir Destination directory.
     */
    single(srcGlob, destDir) {
      return gulp.src(srcGlob).pipe(gulp.dest(destDir));
    },

    /** Copy *.mf files */
    appCache() {
      return gulp.src('./www/*.mf')
          .pipe(gulp.dest('./dist/www/'));
    },

    /** Copy static resources */
    staticResources(cb) {
      const staticResourcesDirs = ['i', 'font'];

      staticResourcesDirs.forEach(dir => {
        basicTasks.copy.single(
          path.join('./www', dir, '**/*'),
          path.join('./dist/www', dir),
        );
      });

      cb();
    },
  },

  html: {
    /**
     * Minify HTML.
     * @param { string } srcGlob Source files / directories.
     *   (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for minifying HTML.
     */
    minifyHtml(srcGlob, destDir, options = {}) {
      return function minifyHtmlTask() {
        return gulp.src(srcGlob)
            .pipe(minifyHtml(options))
            .pipe(gulp.dest(destDir));
      };
    },
  },

  css: {
    /**
     * Import CSS.
     * @param { string } srcGlob Source files / directories.
     *   (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for importing CSS.
     */
    importCss(srcGlob, destDir, options = {}) {
      return function importCssTask() {
        return gulp.src(srcGlob)
            .pipe(cssImport(options))
            .pipe(gulp.dest(destDir));
      };
    },

    /**
     * Use SASS to process CSS stylesheets.
     * @param { string } srcGlob Source files / directories.
     *   (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for SASS.
     */
    sass(srcGlob, destDir, options = {}) {
      return function sassTask() {
        return gulp.src(srcGlob)
            .pipe(sass(options))
            .pipe(gulp.dest(destDir));
      };
    },

    /**
     * Convert URLs to base64 strings that represent the actual resources.
     * @param { string } srcGlob Source files / directories.
     *   (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for base64.
     */
    base64(srcGlob, destDir, options = {}) {
      return function base64Task() {
        return gulp.src(srcGlob)
            .pipe(cssBase64(options))
            .pipe(gulp.dest(destDir));
      };
    },

    /**
     * Automatically add vendor prefixes.
     * @param { string } srcGlob Source files / directories.
     *   (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for autoprefixer.
     */
    autoPrefix(srcGlob, destDir, options = {}) {
      return function autoPrefixTask() {
        return gulp.src(srcGlob)
            .pipe(autoprefixer(options))
            .pipe(gulp.dest(destDir));
      };
    },

    /**
     * Minify CSS.
     * @param { string } srcGlob Source files / directories.
     *   (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for minifying CSS.
     */
    minify(srcGlob, destDir, options = {}) {
      return function minifyCssTask() {
        return gulp.src(srcGlob)
            .pipe(minifyCss(options))
            .pipe(gulp.dest(destDir));
      };
    },
  },

  js: {
    /**
     * Resolve ES6 imports.
     * @param { string } srcGlob Source files / directories. (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for resolving ES6 imports.
     */
    es6Import(srcGlob, destDir, options = {}) {
      return function es6ImportTask() {
        return gulp.src(srcGlob)
            .pipe(es6Import(options))
            .pipe(gulp.dest(destDir));
      }
    },

    /**
     * Resolve ES6 imports.
     * @param { string } srcGlob Source files / directories. (may be written as glob)
     * @param { string } destDir Destination directory.
     * @param { ?object } options Options for resolving ES6 imports.
     */
    uglify(srcGlob, destDir, options = {}) {
      return function uglifyTask() {
        return gulp.src(srcGlob)
            .pipe(uglify(options))
            .pipe(gulp.dest(destDir));
      }
    },
  },

  clean: {
    cleanDist() {
      return gulp.src('./dist', { read: false })
        .pipe(clean({ force: true }));
    },
  },
};

const buildTasks = {
  copy: gulp.parallel(
    basicTasks.copy.appCache,
    basicTasks.copy.staticResources,
  ),

  /**
   * Process HTML.
   * @param { string } srcGlob Source files / directories.
   *   (may be written as glob)
   * @param { string } destDir Destination directory.
   * @param { ?{ minify: ?object } } options Options for minifying HTML.
   */
  html(srcGlob, destDir, options = {}) {
    return gulp.series(
      basicTasks.html.minifyHtml(srcGlob, destDir, options),
    );
  },

  /**
   * Process CSS.
   * @param { string } srcMainFile The entry point CSS file,
   *   typically named "main.css" or "index.css".
   * @param { string } destDir Destination directory.
   * @param { ?{
   *   import: ?object,
   *   sass: ?object,
   *   base64: ?object,
   *   autoPrefix: ?object,
   *   minify: ?object,
   * } } options Options for processing CSS.
   */
  css(srcMainFile, destDir, options) {
    const destMainFile = path.join(destDir, path.basename(srcMainFile));

    return gulp.series(
      basicTasks.css.importCss(srcMainFile, destDir, options?.import),
      basicTasks.css.sass(destMainFile, destDir, options?.sass),
      basicTasks.css.base64(destMainFile, destDir, options?.base64),
      basicTasks.css.autoPrefix(destMainFile, destDir, options?.autoPrefix),
      basicTasks.css.minify(destMainFile, destDir, options?.minify),
    );
  },

  /**
   * Process JavaScript.
   * @param { string } srcMain The JavaScript file acting as the entry
   *   point, typically named "main.js" or "index.js".
   * @param { string } destDir Destination directory.
   * @param { ?{
   *   es6: ?object,
   *   minify: ?object,
   * } } options Options for processing CSS.
   */
  js(srcMain, destDir, options = {}) {
    const destMain = path.join(destDir, path.basename(srcMain));

    return gulp.series(
      basicTasks.js.es6Import(srcMain, destDir, options?.es6),
      basicTasks.js.uglify(destMain, destDir, options?.minify),
    );
  },
};

const cleanTasks = {
  clean: gulp.series(
    basicTasks.clean.cleanDist
  ),
};

const devTasks = {
  watch(cb) {
    gulp.watch(srcGlobs.mf,
        basicTasks.copy.single(srcGlobs.mf, destDirs.mf));
    gulp.watch(srcGlobs.i,
        basicTasks.copy.single(srcGlobs.i, destDirs.i));
    gulp.watch(srcGlobs.font,
        basicTasks.copy.single(srcGlobs.font, destDirs.font));

    gulp.watch(srcGlobs.html,
        buildTasks.html(srcGlobs.html, destDirs.html));
    gulp.watch(srcGlobs.css,
        buildTasks.css(srcEntryFilenames.css, destDirs.css));
    gulp.watch(srcGlobs.js,
        buildTasks.js(srcEntryFilenames.js, destDirs.js));

    cb();
  },
};

module.exports.copy = buildTasks.copy;

module.exports.html = buildTasks.html(srcGlobs.html, destDirs.html);
module.exports.css = buildTasks.css(srcEntryFilenames.css, destDirs.css);
module.exports.js = buildTasks.js(srcEntryFilenames.js, destDirs.js);

// complete build
module.exports.build = gulp.series(
  module.exports.copy,
  gulp.parallel(
    module.exports.css,
    module.exports.html,
    module.exports.js,
  ),
);
module.exports.default = module.exports.build;

module.exports.clean = cleanTasks.clean;

module.exports.watch = cb => {
  console.info(`Watching for changes in "${path.resolve(__dirname)}"...`);
  devTasks.watch(cb);

  cb();
};

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
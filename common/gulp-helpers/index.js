module.exports = {
  autoprefixer: require('gulp-autoprefixer'),
  clean: require('gulp-rimraf'),
  cssImport: require('gulp-cssimport'),
  es6Import: require('gulp-es6-import'),
  gulp: require('gulp'),
  minifyCss: require('gulp-minify-css'),
  minifyHTML: require('gulp-minify-html'),
  sass: require('gulp-sass')(require('sass')),
  server: require('gulp-server-livereload'),
  tinypng: require('gulp-tinypng'),
  uglify: require('gulp-uglify'),
};
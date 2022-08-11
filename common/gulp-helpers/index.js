module.exports = {
  autoprefixer: require('gulp-autoprefixer'),
  clean: require('gulp-rimraf'),
  cssBase64: require('gulp-css-base64'),
  cssImport: require('gulp-cssimport'),
  es6Import: require('gulp-es6-import'),
  gulp: require('gulp'),
  livereload: require('gulp-livereload'),
  minifyCss: require('gulp-minify-css'),
  minifyHtml: require('gulp-minify-html'),
  sass: require('gulp-sass')(require('sass')),
  tinypng: require('gulp-tinypng'),
  uglify: require('gulp-uglify'),
};
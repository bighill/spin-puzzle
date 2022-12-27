'use strict';

const gulp = require("gulp")
const concat = require('gulp-concat');
const connect = require('gulp-connect')

function serve() {
  connect.server({
    root: 'public',
    livereload: true,
  })
}

function javascript() {
  return gulp
    .src( "src/js/*.js" )
    .pipe( concat('js.js') )
    .pipe( gulp.dest("./public/") )
    .pipe( connect.reload() )
}

function css() {
  return gulp
    .src( "src/css/*.css" )
    .pipe( concat('css.css') )
    .pipe( gulp.dest("./public/") )
    .pipe( connect.reload() )
}

function html() {
  return gulp
    .src('./src/html/*.html')
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
}

exports.default = function() {
  gulp.watch( 'src/js/*.js', { ignoreInitial : false }, javascript )
  gulp.watch( 'src/css/*.css', { ignoreInitial : false }, css )
  gulp.watch( 'src/html/*.html', { ignoreInitial : false }, html )
  serve()
}

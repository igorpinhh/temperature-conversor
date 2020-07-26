'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', watch);

gulp.task('sass', compsass);

function compsass() {
  return gulp
    .src('src/scss/styles.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Converte Sass para CSS mimificado com gulp-sass
    .pipe(gulp.dest('src/css'));
}

function watch() {
  gulp.watch('src/scss/**/*.scss', compsass);
}

exports.default = watch;

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var cssDir = './css',
    scssDir = './scss';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  broswers: ['last 2 versions']
};

gulp.task('sass', function() {
  return gulp
    .src(scssDir + '/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(cssDir));
});

gulp.task('watch', function() {
  return gulp
    .watch(scssDir + '/**/*.scss', ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'watch']);

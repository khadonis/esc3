var gulp = require('gulp');  
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var projectError= require('gulp-util');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var compass = require('gulp-compass'),
  path = require('path');
  var cleanCSS = require('gulp-clean-css'); 

gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('minifyCss', function() {
  return gulp.src('css/custom.css')
    .pipe(cleanCSS())
    .pipe(rename('custom.min.css'))
    .pipe(gulp.dest('css'));
});

 
gulp.task('manage', function() {  
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('build'))
    .on('error', projectError.log)
});

gulp.task('default', ['compass', 'minifyCss' 'manage'], function() {
    gulp.watch(['sass/*.scss', 'css/*.css'], ['compass', 'minifyCss']);
    gulp.watch(['js/*.js', 'js/*.js'], ['manage']);
});
 

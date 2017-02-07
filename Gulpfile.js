var gulp = require('gulp'),
clean = require('gulp-clean'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
projectError= require('gulp-util'),
rename = require('gulp-rename'),
watch = require('gulp-watch'),
compass = require('gulp-compass'),
path = require('path'),
cleanCSS = require('gulp-clean-css'),
template = require('gulp-template-html'),
connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'C:/WORK/THEESCAPEHOTEL/WEBSITE/WEB/escape3',
    livereload: true,
    port: 8001
  });
});


gulp.task('temp', function () {
    return gulp.src('*.html')
      .pipe(template('templates/template.html'))
      .pipe(connect.reload())
      .pipe(gulp.dest('dist'));      
});


gulp.task('compass', function() {
  gulp.src('./assets/sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'assets/sass'
    }))
    .pipe(connect.reload());
});

gulp.task('minifyCss', function() {
  return gulp.src('./css/custom.css')
  .pipe(cleanCSS())
  .pipe(rename('custom.min.css'))
  .pipe(gulp.dest('css')).on('error', projectError.log);
});

/*gulp.task('minifyCssB', function() {
  return gulp.src('./css/bootstrap.css')
  .pipe(cleanCSS())
  .pipe(rename('bootstrap.min.css'))
  .pipe(gulp.dest('css')).on('error', projectError.log);
});*/


gulp.task('manage', function() {  
  return gulp.src('./assets/js/*.js')
  .pipe(concat('escape.js'))
  .pipe(uglify())
  .pipe(rename('escape.min.js'))
  .pipe(gulp.dest('js'))
  .on('error', projectError.log)
});

gulp.task('default', ['compass', 'minifyCss', 'manage', 'temp', 'connect'], function() {
  gulp.watch(['assets/sass/*.scss', 'css/*.css'], ['compass', 'minifyCss']);
  gulp.watch(['assets/js/*.js', 'js/*.js'], ['manage']);
  gulp.watch(['*.html', 'templates/template.html'], ['temp']);
});


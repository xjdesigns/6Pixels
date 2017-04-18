var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var _ = require('lodash');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var path = require('path');

var plumberSettings = {
  errorHandler: notify.onError({
    title: 'Sass Error',
    icon: path.join(__dirname, '../assets/sass.png'),
    message: '<%= error.message %>'
  })
};

gulp.task('sass', function () {
  var settings = _.extend({
    // sourceComments: 'map',
    imagePath: '/images' // Used by the image-url helper
  }, {
    outputStyle: 'compressed'
  });

  return gulp.src('./src/scss/**/*.{sass,scss}')
    .pipe(plumber(plumberSettings))
    // .pipe(sourcemaps.init())
    .pipe(sass(settings))
    // .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'Opera 12.1'] }))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('prod', function() {
  return gulp.src('./src/scss/style.{sass,scss}')
    .pipe(plumber(plumberSettings))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({ browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'Opera 12.1'] }))
    .pipe(gulp.dest('./SIXPIXELS'))
});

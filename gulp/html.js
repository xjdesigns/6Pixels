var gulp = require('gulp');
var browserSync  = require('browser-sync');

gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream:true}));
});
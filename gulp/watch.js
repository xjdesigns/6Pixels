var gulp = require('gulp');
var watch = require('gulp-watch');
gulp.task('watch', ['sass'], function () {

    watch('./scss/**/*.scss', function(){
      gulp.start('sass');
    });
    // watch('./*.html', function(){
    //   gulp.start('html');
    // });
});

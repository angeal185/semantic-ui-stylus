var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('one', function () {
  return gulp.src('./semantic.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('compress', function () {
  return gulp.src('./semantic.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['one']);
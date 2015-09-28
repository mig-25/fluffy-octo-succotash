var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');

var paths = {
  cssSource: 'src/css/',
  cssDestination: 'dist/css/'
};

gulp.task('styles', function() {
  return gulp.src(paths.cssSource + '**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.css', ['styles']);

gulp.task('default', ['styles']);
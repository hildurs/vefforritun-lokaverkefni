var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['babel']);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.css').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
});

gulp.task('lint-javascript', () => {
  return gulp.src('src/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});


gulp.task('babel', () => {
  return gulp.src("src/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"))
  .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'babel', 'lint-javascript']);

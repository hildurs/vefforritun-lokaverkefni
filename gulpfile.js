const gulp = require('gulp');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');

gulp.task('lint-javascript', () => {
  return gulp.src('src/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('lint-scss', () => {
  return gulp.src('src/**/*.scss')
  .pipe(stylelint({
    reporters: [{formatter: 'string', console: true}]
  }));
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  });
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.js', ['babel']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest("dist"))
  .pipe(browserSync.stream());
});

gulp.task('babel', () => {
  return gulp.src("src/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"))
  .pipe(browserSync.stream());
});

gulp.task('lint', ['lint-scss', 'lint-javascript']);

gulp.task('default', ['lint', 'sass', 'babel', 'serve']);

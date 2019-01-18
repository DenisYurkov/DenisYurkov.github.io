var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});
gulp.task('sass:watch', function(){
	gulp.watch('./sass/**/*.sass', ['sass']);
});
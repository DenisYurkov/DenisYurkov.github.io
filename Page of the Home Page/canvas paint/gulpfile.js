var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// Init browserSync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            directory: true
        }
    });
});

gulp.task('sass', function() {
    gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    // Stream changes to browserSync to live reload CSS changes
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass'])
});

// Add browserSync-init to default task
gulp.task('default', ['sass', 'watch', 'browser-sync']);
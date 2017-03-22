'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();
var minify = require("gulp-minify-css");

gulp.task('default', ['watch', 'build-css']);

/* Build Stylesheets */
gulp.task('build-css', () => {
    return gulp.src('./styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./styles/**/*.scss', ['build-css']);
    gulp.watch('./**/*.html', ['build-css']).on('change', browserSync.reload);
});

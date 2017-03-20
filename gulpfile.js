
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require("gulp-minify-css");

gulp.task('default', ['watch', 'build-css']);

/* Build Stylesheets */
gulp.task('build-css', () => {
    return gulp.src('./styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('./styles/**/*.scss', ['build-css']);
});

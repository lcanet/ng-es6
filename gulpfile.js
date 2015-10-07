var gulp = require('gulp');
var del = require('del');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var webpack = require('webpack-stream');
var loader = require('babel-loader');
var path = require('path');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var ngAnnotate = require('gulp-ng-annotate');

var paths = {
    scripts: ['src/**/*.js']
};

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('compileEs6', ['clean'], function () {
    return gulp.src(paths.scripts)
        .pipe(babel())
        .pipe(webpack({
            module: {
                loaders: [
                    { test: path.join(__dirname, ''),
                        loader: 'babel-loader' }
                ]
            }
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest('build/js'));

});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['compileEs6']);
});


gulp.task('default', [/* 'watch' */, 'compileEs6']);

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
             //Change address below to load different page with browserSync
            index: "menu.html"
        }
    });
    gulp.watch("styles/*.less", ['less']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('less', function () {
  return gulp.src('./styles/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./styles'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync']);
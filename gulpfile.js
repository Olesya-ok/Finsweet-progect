const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-jsmin');

gulp.task('html-min', async function () {
    return gulp.src('./fourth page/contact-us.page.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./building'));
});

gulp.task('css-min', async function () {
    return  gulp.src('./fourth page/contact-us.page.scss')
        .pipe(cssmin())
        .pipe(gulp.dest('./building'));
});

gulp.task('js-min', async function () {
    return  gulp.src('./second page/all-posts.page.js')
        .pipe(jsmin())
        .pipe(gulp.dest('./building'));
});


gulp.task('default', gulp.series('html-min', 'css-min', 'js-min'));
const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-cssnano');
const concat = require('gulp-concat');

const isDevelopment = !process.env.NODE_ENV || !process.env.NODE_ENV == 'development';

gulp.task('clean', () => {
    return del('public');
});

gulp.task('html:demo', () => {
    return gulp.src('assets/*.html', {since: gulp.lastRun('html:demo')})
        .pipe(gulp.dest('public'));
});

gulp.task('img:vk-select', () => {
    return gulp.src('vk-select/images/*.*', {since: gulp.lastRun('img:vk-select')})
        .pipe(gulp.dest('public/images'));
});

gulp.task('js:vk-select', () => {
    return gulp.src('vk-select/scripts/*.js', {since: gulp.lastRun('js:vk-select')})
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public/scripts/'));
});

gulp.task('js:demo', () => {
    return gulp.src('assets/scripts/*.js', {since: gulp.lastRun('js:demo')})
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public/scripts/'));
});

gulp.task('less', () => {
    return gulp.src('assets/styles/main.less', {since: gulp.lastRun('less')})
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public/styles/'));
});

gulp.task('watch', () => {
    gulp.watch('assets/*.html', gulp.series('html:demo'));
    gulp.watch('assets/scripts/*.js', gulp.series('js:demo'));
    gulp.watch('vk-select/images/*.*', gulp.series('img:vk-select'));
    gulp.watch('vk-select/scripts/*.js', gulp.series('js:vk-select'));
    gulp.watch(['vk-select/styles/*.less', 'assets/styles/*.less'], gulp.series('less'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('html:demo', 'js:demo',  'img:vk-select', 'js:vk-select', 'less')));
gulp.task('start', gulp.series('build', 'watch'));
gulp.task('default', 'build');
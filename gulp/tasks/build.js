var gulp = require('gulp')
imagemin = require('gulp-imagemin')
del = require('del')
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify')
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    });
})
gulp.task('deleteDistFolder', ['icons'], function() {
    return del("./docs");
});
gulp.task('copyFonts', ['deleteDistFolder', 'copyGeneralFiles'], function() {
    let pathsToCopy = [
        './app/dist/styles/fonts/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./docs/assets/styles/fonts'));
});
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    let pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/dist',
        '!./app/dist/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./docs'))
});
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images'))
});
gulp.task('useMinTrigger', ['deleteDistFolder'], function() {
    gulp.start('useMin')
})
gulp.task('useMin', ['styles', 'scripts'], function() {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() { return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest('./docs'));
});
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'copyFonts', 'optimizeImages', 'useMinTrigger']);
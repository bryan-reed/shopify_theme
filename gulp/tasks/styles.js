const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'),
percentage = require('postcss-percentage');

gulp.task('styles', ['flexSliderFonts', 'slickCarouselFonts'], () => {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, mixins, cssvars, nested, percentage, hexrgba, autoprefixer]))
        .on('error', function(error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/dist/styles/'));
});
// Fonts
gulp.task('flexSliderFonts', function() {
    return gulp.src([
                    './node_modules/flexslider/fonts/*'])
            .pipe(gulp.dest('./app/dist/styles/fonts/'));
});
gulp.task('slickCarouselFonts', function() {
    return gulp.src([
                    './node_modules/slick-carousel/slick/fonts/*'])
            .pipe(gulp.dest('./app/dist/styles/fonts/'));
});
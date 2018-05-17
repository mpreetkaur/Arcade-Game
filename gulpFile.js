var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['css', 'imageMin', 'js', 'watch']);

gulp.task('css', () =>
    gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 12 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css/'))
);

gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('js', () =>
    gulp.src(['./src/js/**/resources.js', './src/js/**/app.js', './src/js/**/engine.js'])
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
);

gulp.task('watch', ()=> 
    gulp.watch('./src/css/**/*.css', ['css'])
);
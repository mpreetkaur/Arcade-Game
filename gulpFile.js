var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', () =>
    gulp.src('src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 12 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css/'))
);
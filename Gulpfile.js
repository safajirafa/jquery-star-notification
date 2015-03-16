var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    serve = require('gulp-serve');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('js', function () {
    return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(uglify())
        .pipe(rename({suffix: '.min' }))
		.pipe(gulp.dest('build'))
        .pipe(livereload());
});

gulp.task('sass', function () {
	return gulp.src('src/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('build'))
        .pipe(livereload());
});

gulp.task('demo', function () {
	return gulp.src('build/*.+(js|css)')
		.pipe(gulp.dest('demo'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/*.+(js|scss)', ['js','sass']);
});

gulp.task('serve:demo', serve({
    root: ['demo'],
    port: 8881
}));

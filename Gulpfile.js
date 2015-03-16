var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('js', function () {
	return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
	return gulp.src('src/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build'));
});

gulp.task('demo', function () {
	return gulp.src('build/*.+(js|css)')
		.pipe(gulp.dest('demo'));
});

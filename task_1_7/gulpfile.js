var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var del = require('del');
gulp.task('default', ['clean'],function () {
  // place code for your default task here
  gulp.start(
  	'resources',
  	'styles',
  	// 'scripts', 
  	'templates'
  	);
});
gulp.task('styles', function () {
	gulp.src('./src/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css'))
});
// gulp.task('scripts', function () {
// 	gulp.src('./src/coffee/*.coffee')
// 		.pipe(coffee())
// 		.pipe(gulp.dest('./dist/js'))
// });
gulp.task('templates', function () {
	gulp.src('./views/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./dist'))
});
gulp.task('resources', function () {
	gulp.src(['./resources/**','!./resources/task_1_7_2.jpg'])
		.pipe(gulp.dest('./dist/resources'))
});
gulp.task('clean', function () {
	return del(['./dist/*']);
});
gulp.task('watch', function() {
	gulp.watch('./resources/**', ['resources']);
	gulp.watch('./src/sass/*.sass', ['styles']);
	// gulp.watch('./src/coffee/*.coffee', ['scripts']);
	gulp.watch(['./views/*.jade','./views/layouts/*.jade'], ['templates']);
});
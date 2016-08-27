var gulp = require('gulp');
var watch = require('gulp-watch');

var copy = require('gulp-copy');

var less = require('gulp-less');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var cleancss = new LessPluginCleanCSS({ advanced: true });
var autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

gulp.task('compile-less', function () {
    return gulp.src(['app/**/**.less','!node_modules/**','!typings/**'])
		.pipe(less({}))
        .pipe(gulp.dest('build'));
});

gulp.task('copy-templates',function () {
	return gulp.src(['app/**/**.html','!node_modules/**','!typings/**'])
		.pipe(gulp.dest('build'));
});

gulp.task('watch',function () {
    watch(['app/**/**.less','!node_modules/**','!typings/**'],function(){
        gulp.start('compile-less');
    });
	watch(['app/**/**.html','!node_modules/**','!typings/**'],function () {
		gulp.start('copy-templates');
	});
});
gulp.task('default',['compile-less','copy-templates','watch']);
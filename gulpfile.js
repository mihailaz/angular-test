/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 12:47
 */

"use strict";

var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    minifyCSS  = require('gulp-minify-css'),
    uglify     = require('gulp-uglify'),
    //sourcemaps = require('gulp-sourcemaps'),
    //ngAnnotate = require('gulp-ng-annotate'),
    connect    = require('gulp-connect');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function(){
	connect.server({
		root      : 'app',
		livereload: true
	});
});

gulp.task('watch', ['css', 'html', 'js'], function(){
	gulp.watch(['src/css/**/*.css'], ['css']);
	gulp.watch(['src/js/**/*.js'], ['js']);
	gulp.watch(['src/**/*.html'], ['html']);
});

gulp.task('html', function(){
	gulp.src(['src/**/*.html'])
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src([
			'bower_components/angular-material/angular-material.min.css',
			'src/css/**/*.css'
		])
		.pipe(concat('app.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src([
			'bower_components/angular/angular.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/angular-messages/angular-messages.min.js',
			'bower_components/angular-aria/angular-aria.min.js',
			'bower_components/angular-animate/angular-animate.min.js',
			'bower_components/angular-material/angular-material.min.js',
			'src/*.js',
			'src/**/*.js'
		])
		//.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		//.pipe(ngAnnotate())
		//.pipe(uglify())
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});
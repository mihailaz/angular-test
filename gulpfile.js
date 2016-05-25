/**
 * User: Michael Lazarev <mihailaz.90@gmail.com>
 * Date: 18.05.16
 * Time: 12:47
 */

"use strict";

var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    minifyCSS   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    cacheBuster = require('gulp-cache-bust'),
    ngAnnotate  = require('gulp-ng-annotate'),
    connect     = require('gulp-connect');

gulp.task('default', ['connect', 'watch']);

gulp.task('build', ['css', 'html', 'js']);

gulp.task('connect', function(){
	connect.server({
		root      : 'app',
		livereload: true
	});
});

gulp.task('watch', ['build'], function(){
	gulp.watch(['src/css/**/*.css'], ['app-css']);
	gulp.watch(['src/js/**/*.js'], ['app-js']);
	gulp.watch(['src/**/*.html'], ['html']);
});

gulp.task('html', function(){
	gulp.src(['src/**/*.html'])
		.pipe(cacheBuster())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

gulp.task('css', ['vendor-css', 'app-css']);

gulp.task('vendor-css', function(){
	gulp.src([
			'bower_components/angular-material/angular-material.min.css'
		])
		.pipe(concat('vendor.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

gulp.task('app-css', function(){
	gulp.src([
			'src/css/**/*.css'
		])
		.pipe(concat('app.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

gulp.task('js', ['vendor-js', 'app-js']);

gulp.task('vendor-js', function(){
	gulp.src([
			'bower_components/angular/angular.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/angular-resource/angular-resource.min.js',
			'bower_components/angular-messages/angular-messages.min.js',
			'bower_components/angular-animate/angular-animate.min.js',
			'bower_components/angular-aria/angular-aria.min.js',
			'bower_components/angular-material/angular-material.min.js'
		])
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

gulp.task('app-js', function(){
	gulp.src([
			'src/**/*.module.js',
			'src/**/*.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

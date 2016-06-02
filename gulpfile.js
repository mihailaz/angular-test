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
    htmlmin     = require('gulp-htmlmin'),
    sourcemaps  = require('gulp-sourcemaps'),
    cacheBuster = require('gulp-cache-bust'),
    ngAnnotate  = require('gulp-ng-annotate'),
    tmplCache   = require('gulp-angular-templatecache'),
    connect     = require('gulp-connect');

gulp.task('default', ['connect', 'watch']);
gulp.task('run', ['build', 'connect']);
gulp.task('build', ['css', 'html', 'js']);
gulp.task('css', ['vendor-css', 'app-css']);
gulp.task('js', ['vendor-js', 'app-js', 'app-tmpls']);

gulp.task('connect', function(){
	connect.server({
		root      : 'app',
		livereload: true
	});
});

gulp.task('watch', ['build'], function(){
	gulp.watch(['src/css/**/*.css'], ['app-css']);
	gulp.watch(['src/js/**/*.js'], ['app-js']);
	gulp.watch(['src/**/*.tpl.html'], ['app-tmpls']);
	gulp.watch(['src/**/*.html', '!src/**/*.tpl.html'], ['html']);
});

gulp.task('html', function(){
	gulp.src(['src/**/*.html', '!src/**/*.tpl.html'])
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(cacheBuster())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

gulp.task('vendor-css', function(){
	gulp.src([
			'bower_components/angular-material/angular-material.min.css'
		])
		.pipe(concat('vendor.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('app'));
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

gulp.task('vendor-js', function(){
	gulp.src([
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-messages/angular-messages.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-aria/angular-aria.js',
			'bower_components/angular-material/angular-material.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js'
		])
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app'));
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

gulp.task('app-tmpls', function () {
	return gulp.src('src/**/*.tpl.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(tmplCache({
			filename: 'templates.js',
			module  : 'app.templates'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('app'))
		.pipe(connect.reload());
});

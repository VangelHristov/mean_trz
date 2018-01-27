'use strict';

let gulp = require('gulp'),
	browserSync = require('browser-sync'),
	nodemon = require('gulp-nodemon'),
	cleanCss = require('gulp-clean-css'),
	uglifyES = require('gulp-uglify-es'),
	useMin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	del = require('del'),
	ngAnnotate = require('gulp-ng-annotate'),
	pump = require('pump'),
	notify = require('node-notifier'),
	imageMin = require('gulp-imagemin'),
	sourceMaps = require('gulp-sourcemaps'),
	htmlMin = require('gulp-htmlmin'),
	run = require('gulp-run');

gulp.task('default', ['browser-sync'], function defaultTask() {
});

gulp.task('browser-sync', ['nodemon'], function browserSyncTask() {
	browserSync.init(null, {
		proxy  : "http://localhost:3000",
		files  : ["./**/*.*"],
		browser: "firefox",
		port   : 3001
	});
});
gulp.task('nodemon', ['test'], function nodemonTask(cb) {

	let started = false;

	return nodemon({
		script: 'bin/www',
		env   : {NODE_ENV: "development", JWT_SECRET: '123'}
	})
		.on('start', function nodemonStart() {
			if (!started) {
				cb();
				started = true;
			}
		});
});

gulp.task('test', ['test-server', 'test-client'], () => {});

gulp.task('test-client', () => {
	process.env.NODE_ENV = 'testing';

	return run(
		[
			'./node_modules/karma/bin/karma',
			'start',
			'tests/karma.config.js'
		].join(' ')
	)
		.exec();
});

gulp.task('test-server', () => {
	process.env.NODE_ENV = 'testing';

	run(
		[
			'./node_modules/mocha/bin/mocha',
			'tests/server/*.js',
			'--opts tests/mocha.opts'
		].join(' ')
	)
		.exec();
});

gulp.task('clean', function cleanDist() {
	return del(['dist']);
});

gulp.task('build', ['clean'], function build() {
	return gulp.start(
		'useMin',
		'copyfonts',
		'copyviews',
		'copyDirectives',
		'imageMin'
	);
});

gulp.task('useMin', function minifyIt() {
	return pump([
			gulp.src('./app_client/index.html'),
			useMin({
				html: [htmlMin({collapseWhitespace: true})],
				css : [
					sourceMaps.init(),
					cleanCss(),
					rev(),
					sourceMaps.write()
				],
				js  : [
					sourceMaps.init(),
					ngAnnotate(),
					uglifyES.default(),
					rev(),
					sourceMaps.write()
				]
			}),
			gulp.dest('./dist/')
		], (err) => {
			if (err) {
				notify.notify(err);
			}
		}
	);
});

gulp.task('copyfonts', function copyfonts() {
	return gulp.src(
		[
			'./app_client/bower_components/bootstrap/dist/fonts/*.{ttf,woff,eof,svg}*',
			'./app_client/bower_components/font-awesome/fonts/*.{ttf,woff,eof,svg}*'
		])
	           .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copyviews', function copyViews() {
	return gulp.src('./app_client/views/*.html')
	           .pipe(htmlMin({collapseWhitespace: true}))
	           .pipe(gulp.dest('./dist/views'));
});

gulp.task('copyDirectives', function copyDirect(){
	return gulp.src('./app_client/directives/**/*.*')
		.pipe(gulp.dest('./dist/directives'));
});

gulp.task('imageMin', function imagemin() {
	return gulp.src('./app_client/images/*')
	           .pipe(imageMin())
	           .pipe(gulp.dest('./dist/images'));
});
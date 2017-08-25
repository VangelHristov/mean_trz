'use strict';

const
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init(null, {
        proxy: 'http://localhost:3333', // port of node server
        files: ['../app_client/**/*.*'],
        browser: 'firefox',
        port: 3000
    });
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(['./**/*.html', './**/*.css'], reload);
});

gulp.task('nodemon', function (cb) {
    let callbackCalled = false;
    return nodemon({
        script: '../bin/www',
        env   : {JWT_SECRET: 'top secret', PORT: '3333', ENV_NODE: 'development'},
        ext   : 'js html css'
    }).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});
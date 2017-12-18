'use strict';

module.exports = function karmaConfig(config) {
	config.set({
		autoWatch    : false,
		basePath     : '../',
		browsers     : [/*'Chrome',*/ 'Firefox'],
		client       : {
			mocha: {
				opts: 'tests/mocha.opts'
			}
		},
		files        : [
			{
				pattern: 'node_modules/mocha/mocha.js',
				watch  : false
			},
			{
				pattern: 'node_modules/chai/chai.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/jquery/dist/jquery.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/bootstrap/dist/js/bootstrap.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/toastr/toastr.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/angular/angular.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/angular-resource/angular-resource.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/angular-route/angular-route.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/ng-page-title/dist/ng-page-title.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/angular-i18n/angular-locale_bg.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/angular-animate/angular-animate.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/angular-sanitize/angular-sanitize.js',
				watch  : false
			},
			{
				pattern: 'app_client/bower_components/angular-messages/angular-messages.js',
				watch  : false
			},

			{
				pattern: 'app_client/app.js',
				watch  : true
			},
			{
				pattern: 'app_client/app.config.js',
				watch  : true
			},
			{
				pattern: 'app_client/controllers/*.js',
				watch  : true
			},
			{
				pattern: 'app_client/directives/**/*.js',
				watch  : true
			},
			{
				pattern: 'app_client/services/*.js',
				watch  : true
			},
			{
				pattern: 'app_client/constants/*.js',
				watch  : true
			},

			{
				pattern: 'tests/client/*.js',
				watch  : true
			}
		],
		frameworks   : ['mocha', 'chai', 'sinon'],
		logLevel     : config.LOG_ERROR,
		plugins      : [
			require('karma-mocha'),
			require('karma-chai'),
			require('karma-sinon'),
			require('karma-chrome-launcher'),
			require('karma-firefox-launcher'),
			require('karma-mocha-reporter'),
			require('karma-notify-reporter')
		],
		reporters    : ['mocha', 'notify'],
		mochaReporter: {
			showDiff: true,
			output: 'autowatch'
		},
		singleRun    : true
	});
};
(function appInitModule() {
	'use strict';

	angular
		.module(
			'app',
			[
				'ngResource',
				'ngRoute',
				'ngPageTitle',
				'ui.bootstrap',
				'ngMessages'
			]
		);
}());
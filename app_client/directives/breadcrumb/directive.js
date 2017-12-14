(function breadcrumbModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzBreadcrumb', function trzBreadcrumb() {
			return {
				restrict   : 'AE',
				templateUrl: 'directives/breadcrumb/template.html',
				scope      : {
					breadcrumbs: '='
				}
			};
		});
}());
(function navBarDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzNavBar', function trzNavBar() {
				return {
					restrict   : 'E',
					templateUrl: 'directives/nav_bar/template.html'
				};
			}
		);
}());
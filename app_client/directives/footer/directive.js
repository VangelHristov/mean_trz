(function footerDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzFooter', function trzFooter() {
			return {
				restrict   : 'E',
				templateUrl: 'directives/footer/template.html',
				scope      : {
					text: '@'
				}
			};
		});
}());
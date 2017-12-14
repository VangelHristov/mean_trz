(function trzViewDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzView', function trzView() {
			return {
				restrict   : 'AE',
				templateUrl: 'directives/view/template.html'
			};
		});
}());
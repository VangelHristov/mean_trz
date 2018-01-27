(function loginModalDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzLoginModal', [
			'validationPatterns',
			'errorMessages',
			function trzLoginModal(validationPatterns, errorMessages) {
				return {
					restrict   : 'E',
					templateUrl: 'directives/modals/login/template.html',
					scope      : {
						submit: '&'
					},
					link       : function (scope) {
						scope.data = {};
						scope.submitForm = () => scope.submit({data: scope.data});
						scope.errors = errorMessages;
						scope.patterns = validationPatterns;
					}
				};
			}
		]);
}());
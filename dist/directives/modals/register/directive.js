(function registrationModalDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzRegisterModal', [
			'validationPatterns',
			'errorMessages',
			function trzRegisterModal(validationPatterns, errorMessages) {
				return {
					restrict   : 'E',
					templateUrl: 'directives/modals/register/template.html',
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
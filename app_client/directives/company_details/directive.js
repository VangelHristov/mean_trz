(function companyDetailsDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive(
			'companyDetails',
			[
				'validationPatterns',
				'errorMessages',
				function companyDetails(validationPatterns, errorMessages) {
					return {
						restrict   : 'EA',
						templateUrl: 'directives/company_details/template.html',
						scope      : {
							company: '=',
							save   : '&'
						},
						link       : (scope) => {
							scope.validationPatterns = validationPatterns;
							scope.errors = errorMessages;
						}
					};
				}
			]
		);
}());
(function companyDetailsDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive(
			'companyDetails',
			[
				function companyDetails() {
					return {
						restrict   : 'EA',
						templateUrl: 'directives/company_details/template.html',
						scope      : {
							company : '=',
							save    : '&',
							patterns: '=',
							errors  : '='
						}
					};
				}
			]
		);
}());
(function validateEgnDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive(
			'validateEgn',
			[
				'validate',
				function validateEgn(validate) {
					return {
						require : 'ngModel',
						restrict: 'A',
						link    : (scope, el, attr, ctrl) => {
							function isValidEgn(value) {
								if (validate.egn(value)) {
									ctrl.$setValidity('egn', true);
								} else {
									ctrl.$setValidity('egn', false);
								}

								return value;
							}

							ctrl.$parsers.push(isValidEgn);
						}
					};
				}
			]
		);
}());
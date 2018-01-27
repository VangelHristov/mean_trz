(function validateIbanDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('validateIban', [
			'validate',
			function validateIban(validate) {
				return {
					require : 'ngModel',
					restrict: 'A',
					link    : (scope, el, attr, ctrl) => {
						function isValidIban(value) {
							if (validate.iban(value)) {
								ctrl.$setValidity('iban', true);
							} else {
								ctrl.$setValidity('iban', false);
							}

							return value;
						}

						ctrl.$parsers.push(isValidIban);
					}
				};
			}
		]);
}());
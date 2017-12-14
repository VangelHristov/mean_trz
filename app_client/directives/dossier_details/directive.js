(function dossierDetailsDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzDossierDetails', function trzDossierDetails() {
			return {
				restrict   : 'AE',
				templateUrl: 'directives/dossier_details/template.html',
				scope      : {
					model : '=',
					errors: '=',
					submit: '&'
				}
			};
		});
}());
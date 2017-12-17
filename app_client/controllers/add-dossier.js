(function addDossierControllerModule() {
	'use strict';

	angular
		.module('app')
		.controller('AddDossierController', [
			'$scope',
			'dataContext',
			'notification',
			'$routeParams',
			'$location',
			'breadcrumb',
			'errorMessages',
			'notificationMessages',
			'validationPatterns',
			'storage',
			function addDossierController(
				$scope,
				dataContext,
				notification,
				$routeParams,
				$location,
				breadcrumb,
				errorMessages,
				notificationMsg,
				validationPatterns,
				storage
			) {
				$scope.errors = errorMessages;
				$scope.patterns = validationPatterns;

				$scope.breadcrumbs = breadcrumb();

				$scope.data = {
					company: $routeParams.companyId,
					id     : {type: 'bulgarian', bulgarian: {}, foreign: {}}
				};

				$scope.save = function save() {
					if (!$scope.data) {
						return notification.error(errorMessages.missingRequiredFields);
					}

					if ($scope.data.id.type === 'bulgarian') {
						$scope.data.id.foreign = undefined;
					} else if ($scope.data.id.type === 'foreign') {
						$scope.data.id.buldarian = undefined;
					}

					$scope.data.id.type = undefined;
					dataContext
						.dossier
						.save($scope.data)
						.$promise
						.then(dossier => {
							notification.success(notificationMsg.documentSaveSuccess);
							storage.setDossierName(dossier._id);
							$location.path([
									'/companies/',
									$scope.data.company,
									'/dossiers/',
									dossier._id,
									'/add-work-contract'
								].join('')
							);
						})
						.catch(notification.error);
				};
			}
		]);
}());
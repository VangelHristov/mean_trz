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
			function addDossierController(
				$scope,
				dataContext,
				notification,
				$routeParams,
				$location,
				breadcrumb,
				errorMessages,
				notificationMsg
			) {
				$scope.errors = errorMessages;
				$scope.breadcrumbs = breadcrumb.getAll();
				$scope.data = {
					company: $routeParams.companyId,
					id     : {type: 'bulgarian', bulgarian: {}, foreign: {}}
				};
				$scope.save = function save() {

					if (!$scope.data) {
						return notification.error('Попълнете всички' +
							' задължителни полета.');
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
						.then(result => {
							notification.success(notificationMsg.documentSaveSuccess);
							$location.path(`/companies/${$scope.data.company}/dossiers/${result._id}/add-work-contract`);
						})
						.catch(notification.error);
				};
			}
		]);
}());
(function addWorkContractControllerModule() {
	'use strict';

	angular
		.module('app')
		.controller('AddWorkContractController', [
			'$scope',
			'$routeParams',
			'$location',
			'dataContext',
			'notification',
			'breadcrumb',
			function AddWorkContractController(
				$scope,
				$routeParams,
				$location,
				dataContext,
				notification,
				breadcrumb
			) {
				$scope.breadcrumbs = breadcrumb.getAll();
				$scope.data = {
					dossier: $routeParams.dossierId
				};

				$scope.save = function save() {
					dataContext
						.workContract
						.save($scope.data)
						.$promise
						.then(result => {
							notification.success(result.message);
							$location.path(`companies/${$routeParams.companyId}`);
						})
						.catch(notification.error);
				};
			}
		]);
}());
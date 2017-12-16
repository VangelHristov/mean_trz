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
			'notificationMessages',
			function AddWorkContractController(
				$scope,
				$routeParams,
				$location,
				dataContext,
				notification,
				breadcrumb,
				notificationMsg
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
						.then(() => {
							notification.success(notificationMsg.documentSaveSuccess);
							$location.path(`companies/${$routeParams.companyId}`);
						})
						.catch(notification.error);
				};
			}
		]);
}());
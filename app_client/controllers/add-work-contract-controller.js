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
				let company = $routeParams.companyId;
				let dossier = $routeParams.dossierId;

				$scope.breadcrumbs = breadcrumb();

				$scope.data = {dossier: $routeParams.dossierId};

				$scope.save = function save() {
					dataContext
						.workContract
						.save($scope.data)
						.$promise
						.then(() => {
							notification.success(notificationMsg.documentSaveSuccess);
							$location.path(`companies/${company}/dossiers/${dossier}`);
						})
						.catch(notification.error);
				};
			}
		]);
}());
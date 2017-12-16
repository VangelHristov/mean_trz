(function addCompanyControllerModule() {
	'use strict';

	angular
		.module('app')
		.controller(
			'AddCompanyController',
			[
				'$scope',
				'storage',
				'dataContext',
				'notification',
				'$location',
				'breadcrumb',
				'notificationMessages',
				'validationPatterns',
				'errorMessages',
				function addCompanyController(
					$scope,
					storage,
					dataContext,
					notification,
					$location,
					breadcrumb,
					notificationMsg,
					validationPatterns,
					errorMessages
				) {
					$scope.patterns = validationPatterns;
					$scope.errors = errorMessages;
					$scope.data = {user: storage.getUserId()};
					$scope.breadcrumbs = breadcrumb();

					$scope.save = function save() {
						dataContext
							.company
							.save($scope.data)
							.$promise
							.then(() => {
								notification.success(notificationMsg.documentSaveSuccess);
								$location.path('/companies');
							})
							.catch(notification.error);
					};
				}
			]
		);
}());
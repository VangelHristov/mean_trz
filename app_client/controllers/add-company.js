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
				function addCompanyController(
					$scope,
					storage,
					dataContext,
					notification,
					$location,
					breadcrumb,
					notificationMsg
				) {
					$scope.company = {
						data: {
							user: storage.getUserId()
						},
						save: function () {
							dataContext
								.company
								.save($scope.company.data)
								.$promise
								.then(() => {
									notification.success(notificationMsg.documentSaveSuccess);
									$location.path('/companies');
								})
								.catch(notification.error);
						}
					};

					$scope.breadcrumbs = breadcrumb();
				}
			]
		);
}());
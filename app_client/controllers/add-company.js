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
				function addCompanyController(
					$scope,
					storage,
					dataContext,
					notification,
					$location,
					breadcrumb
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
								.then(result => {
									notification.success(result);
									$location.path('/companies');
								})
								.catch(notification.error);
						}
					};

					$scope.breadcrumbs = breadcrumb.getAll();
				}
			]
		);
}());
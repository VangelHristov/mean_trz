(function companiesControllerModule() {
	'use strict';

	angular
		.module('app')
		.controller('CompaniesController', [
			'$scope',
			'dataContext',
			'storage',
			'notification',
			function companiesController(
				$scope,
				dataContext,
				storage,
				notification
			) {
				$scope.buttons = [
					{
						label: 'Добави нова',
						icon : 'fa-plus',
						href : '#!/companies/add-new'
					}
				];

				dataContext
					.user
					.get()
					.$promise
					.then(user => {
						$scope.companies = user.companies;
					})
					.catch(notification.error);
			}
		]);
}());

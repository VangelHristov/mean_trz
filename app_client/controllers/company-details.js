(function companyDetailsControllerModule() {
	'use strict';

	angular
		.module('app')
		.controller('CompanyDetailsController', [
			'$scope',
			'$routeParams',
			'dataContext',
			'notification',
			'storage',
			'breadcrumb',
			'notificationMessages',
			'validationPatterns',
			'errorMessages',
			function CompanyDetailsController(
				$scope,
				$routeParams,
				dataContext,
				notification,
				storage,
				breadcrumb,
				notificationMsg,
				validationPatterns,
				errorMessages
			) {
				$scope.patterns = validationPatterns;
				$scope.errors = errorMessages;
				$scope.companyId = $routeParams.companyId;
				$scope.active = 'dossiers';

				$scope.tabs = [
					{
						target: 'dossiers',
						active: true,
						icon  : 'fa-folder',
						label : 'Досиета'
					},
					{
						target: 'company-info',
						icon  : 'fa-info-circle',
						label : 'Фирмени данни'
					}
				];

				$scope.buttons = [
					{
						href : `#!/companies/${$scope.companyId}/dossiers/add-new`,
						icon : 'fa-plus',
						label: 'Добави досие'
					}
				];

				$scope.setActive = function setActive(id) {$scope.active = id;};
				$scope.getActive = function getActive() {return $scope.active;};

				$scope.save = function save() {
					dataContext
						.company
						.edit({id: $scope.data._id}, $scope.data)
						.$promise
						.then(company => {
							notification.success(notificationMsg.documentSaveSuccess);
							storage.setCompanyName(company.name);
							$scope.breadcrumbs = breadcrumb();
						})
						.catch(notification.error);
				};

				dataContext
					.company
					.get({id: $scope.companyId})
					.$promise
					.then(company => {
						$scope.data = company;
						storage.setCompanyName(company.name);
						$scope.breadcrumbs = breadcrumb();
					})
					.catch(notification.error);
			}
		]);
}());
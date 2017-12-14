(function dossierDetailsControllerModule() {
	'use strict';

	angular
		.module('app')
		.controller('DossierDetailsController', [
			'$scope',
			'dataContext',
			'notification',
			'$routeParams',
			'storage',
			'breadcrumb',
			'toDateObject',
			function dossierDetailsController(
				$scope,
				dataContext,
				notification,
				$routeParams,
				storage,
				breadcrumb,
				toDateObject
			) {
				$scope.dossierId = $routeParams.dossierId;
				$scope.data = {id: {type: ''}};

				$scope.tabs = [
					{
						icon  : 'fa-user',
						target: 'dossier-details',
						label : 'Лични данни'
					},
					{
						active: true,
						icon  : 'fa-briefcase',
						target: 'work-contract',
						label : 'Трудов договор'
					}
				];

				$scope.selected = 'work-contract';
				$scope.setActive = function setActive(id) {$scope.selected = id;};
				$scope.getActive = () => $scope.selected;

				dataContext
					.dossier
					.get({id: $scope.dossierId})
					.$promise
					.then(dossier => {
						$scope.data = dossier;
						$scope.data.id.type = dossier.id.bulgarian
							? 'bulgarian'
							: 'foreign';

						toDateObject(
							$scope.data.workContracts[0],
							['signingDate', 'startingDate'],
							['terminationDate']
						);

						storage.setDossierName(`${dossier.names.first} ${dossier.names.last}`);
						$scope.breadcrumbs = breadcrumb.getAll();
					})
					.catch(notification.error);

				$scope.saveDossier = () => {
					dataContext
						.dossier
						.edit($scope.data)
						.$promise
						.then(dossier => {
							storage.setDossierName(`${dossier.names.first} ${dossier.names.last}`);
							$scope.breadcrumbs = breadcrumb.getAll();
							notification.success('Успешен запис.');
						})
						.catch(notification.error);
				};

				$scope.saveContract = () => {
					dataContext
						.workContract
						.edit($scope.data.workContracts[0])
						.$promise
						.then(() => notification.success('Успешен запис'))
						.catch(notification.error);
				};
			}
		]);
}());
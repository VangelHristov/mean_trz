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
			'notificationMessages',
			function dossierDetailsController(
				$scope,
				dataContext,
				notification,
				$routeParams,
				storage,
				breadcrumb,
				toDateObject,
				notificationMsg
			) {
				$scope.dossierButtons = [
					{
						label: 'Добави нов договор',
						icon : 'fa fa-plus',
						href : `#!/companies/${$routeParams.companyId}/dossiers/${$routeParams.dossierId}/add-work-contract`
					}
				];

				$scope.data = {id: {type: ''}};

				$scope.tabs = [
					{
						icon  : 'fa-user',
						target: 'dossier-details',
						label : 'Лични данни',
						active: true
					}
				];

				$scope.selected = 'dossier-details';
				$scope.setActive = function setActive(id) {$scope.selected = id;};
				$scope.getActive = () => $scope.selected;

				dataContext
					.dossier
					.get({id: $routeParams.dossierId})
					.$promise
					.then(dossier => {
						$scope.data = dossier;
						$scope.data.id.type = dossier.id.bulgarian
							? 'bulgarian'
							: 'foreign';

						let contractNumber = 0;
						dossier.workContracts.forEach(function getDates(
							contract,
							index
						) {
							$scope.tabs.push(
								{
									icon  : 'fa-briefcase',
									target: 'work-contract-' + index,
									label : 'Трудов договор '+ String(++contractNumber)
								});

							toDateObject(
								contract,
								['signingDate', 'startingDate'],
								['terminationDate']
							);
						});

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
							notification.success(notificationMsg.documentSaveSuccess);
						})
						.catch(notification.error);
				};

				$scope.saveContract = (index) => {
					dataContext
						.workContract
						.edit($scope.data.workContracts[index])
						.$promise
						.then(() => notification.success(notificationMsg.documentSaveSuccess))
						.catch(notification.error);
				};
			}
		]);
}());
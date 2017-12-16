(function appConfigModule() {
	'use strict';

	angular
		.module('app')
		.config([
			'$routeProvider',
			'$httpProvider',
			function config($routeProvider, $httpProvider) {
				$routeProvider
					.when('/about', {
						templateUrl: 'views/about.html',
						data       : {pageTitle: 'ТРЗ'}
					})
					.when('/companies', {
						authorization: true,
						templateUrl  : 'views/companies.html',
						data         : {pageTitle: 'Начало'}
					})
					.when('/companies/add-new', {
						authorization: true,
						templateUrl  : 'views/add-new-company.html',
						data         : {pageTitle: 'Добави фирма'}
					})
					.when('/companies/:companyId', {
						authorization: true,
						templateUrl  : 'views/company-details.html',
						data         : {pageTitle: 'Фирмени данни'}
					})
					.when('/companies/:companyId/dossiers/add-new', {
						authorization: true,
						templateUrl  : 'views/add-new-dossier.html',
						data         : {pageTitle: 'Добави досие'}
					})
					.when('/companies/:companyId/dossiers/:dossierId', {
						authorization: true,
						templateUrl  : 'views/dossier-details.html',
						data         : {pageTitle: 'Досие'}
					})
					.when(
						'/companies/:companyId/dossiers/:dossierId/add-work-contract',
						{
							authorization: true,
							templateUrl  : 'views/add-work-contract.html',
							data         : {pageTitle: 'Добави трудов договор'}
						}
					)
					.otherwise('/about');

				$httpProvider
					.interceptors
					.push('authenticationInterceptor');
			}
		])
		.run([
			'$rootScope',
			'$location',
			'storage',
			'notification',
			'notificationMessages',
			function run(
				$rootScope,
				$location,
				storage,
				notification,
				notificationMsg
			) {
				$rootScope.$on(
					'$routeChangeStart',
					function routeChangeStart(event, requestedRoute) {
						if (requestedRoute.authorization && !storage.getToken()) {
							event.preventDefault();
							$location.path('/about');
							notification.warning(notificationMsg.promptToLogIn);
						}
					}
				);
			}
		]);
}());
(function () {
    'use strict';

    angular
      .module('app')
      .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
          $routeProvider
            .when('/about', {template: '<trz-about></trz-about>'})
            .when('/companies', {
                authorization: true,
                templateUrl: 'views/companies.html'
            })
            .when('/companies/add-new', {
                authorization: true,
                templateUrl: 'views/add-new-company.html'
            })
            .when('/companies/:companyId', {
                authorization: true,
                templateUrl: 'views/company-details.html'
            })
            .when('/companies/:companyId/dossiers/add-new', {
                authorization: true,
                templateUrl: 'views/add-new-dossier.html'
            })
            .when('/companies/:companyId/dossiers/:dossierId', {
                authorization: true,
                templateUrl: 'views/dossier-details.html'
            })
            .when('/companies/:companyId/dossiers/:dossierId/add-work-contract', {
                authorization: true,
                templateUrl: 'views/add-work-contract.html'
            })
            .otherwise('/about');

          $httpProvider.interceptors.push('authenticationInterceptor');
      }])
      .run(['$rootScope', '$location', 'storage', 'notification', 'messages', function ($rootScope, $location, storage, notification, messages) {
          $rootScope.$on('$routeChangeStart', function (event, requestedRoute) {

              if (requestedRoute.authorization && !storage.getToken()) {
                  event.preventDefault();
                  $location.path('/about');
                  notification.warning(messages.promptToLogIn);
              }
          });
      }]);
}());
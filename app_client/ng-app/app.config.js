(function () {
    'use strict';

    angular
      .module('app')
      .config(['$routeProvider', function ($routeProvider) {
          $routeProvider
            .when('/about', {template: '<trz-about></trz-about>'})
            .when('/companies', {template: '<trz-modal-toggle-button label="Добави нова" icon="fa fa-plus" target="#"></trz-modal-toggle-button><trz-companies-table></trz-companies-table>'})
            .when('/companies/add-new', {template: '<h1>New company form(Reuse the company form with different controller)</h1>'})
            .when('/companies/:companyId', {template: '<h1>Company details here</h1>'})
            .when('/companies/:companyId/dossiers', {template: '<h1>Display a table containing all the dossiers names and egn'})
            .when('/companies/:companyId/dossiers/add-new', {template: '<h1>New dossier form </h1>'})
            .when('/companies/:companyId/dossiers/:dossierId', {template: '<h1>Dossier details</h1>'})
            .otherwise('/about');
      }]);
}());
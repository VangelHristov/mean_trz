(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzCompaniesTable', function () {
          return {
              restrict    : 'E',
              templateUrl : 'companies_table/template.html',
              controller  : 'CompaniesController',
              controllerAs: 'user'
          };
      });
}());
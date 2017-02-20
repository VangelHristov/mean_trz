(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzCompaniesTable', function () {
          return {
              restrict    : 'E',
              templateUrl : 'table/companies/template.html',
              controller  : 'CompaniesController',
              controllerAs: 'user'
          };
      });
}());
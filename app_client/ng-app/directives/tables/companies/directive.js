(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzCompaniesTable', function () {
          return {
              restrict   : 'E',
              templateUrl: 'directives/tables/companies/template.html',
              scope      : {
                  companies: '='
              }
          };
      });
}());
(function () {
    'use strict';

    angular
      .module('app')
      .directive('companyDetails', function () {
          return {
              restrict   : 'EA',
              templateUrl: 'directives/company_details/template.html',
              scope      : {
                  company: '='
              }
          };
      });
}());
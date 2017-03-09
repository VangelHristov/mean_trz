(function () {
    'use strict';

    angular
      .module('app')
      .directive('companyDetails', ['validationPatterns', 'errorMessages', function (validationPatterns, errorMessages) {
          return {
              restrict   : 'EA',
              templateUrl: 'directives/company_details/template.html',
              scope      : {
                  company: '='
              },
              link       : (scope) => {
                  scope.validationPatterns = validationPatterns;
                  scope.errors = errorMessages;
              }
          };
      }]);
}());
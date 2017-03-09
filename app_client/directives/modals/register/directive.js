(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzRegisterModal', ['validationPatterns', 'errorMessages', function (validationPatterns, errorMessages) {
          return {
              restrict   : 'E',
              templateUrl: 'directives/modals/register/template.html',
              scope      : {
                  submit: '&'
              },
              link       : function (scope) {
                  scope.data = {};
                  scope.submitForm = () => scope.submit({data: scope.data});
                  scope.errors = errorMessages;
                  scope.patterns = validationPatterns;
              }
          };
      }]);
}());
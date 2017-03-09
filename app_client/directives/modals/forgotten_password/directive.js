(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzForgottenPasswordModal', ['validationPatterns', 'errorMessages', function (validationPatterns, errorMessages) {
          return {
              restrict   : 'E',
              templateUrl: 'directives/modals/forgotten_password/template.html',
              scope      : {
                  submit: '&'
              },
              link       : function (scope) {
                  scope.email = '';
                  scope.submitForm = () => scope.submit({email: scope.email});
                  scope.errors = errorMessages;
                  scope.patterns = validationPatterns;
              }
          };
      }]);
}());
(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzRegisterModal', function () {
          return {
              restrict   : 'E',
              templateUrl: 'directives/modals/register/template.html',
              scope      : {
                  submit: '&'
              },
              link       : function (scope) {
                  scope.data = {};
                  scope.submitForm = () => scope.submit({data: scope.data});
              }
          };
      });
}());
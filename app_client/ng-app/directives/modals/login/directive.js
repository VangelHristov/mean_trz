(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzLoginModal', function () {
          return {
              restrict   : 'E',
              templateUrl: 'directives/modals/login/template.html',
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
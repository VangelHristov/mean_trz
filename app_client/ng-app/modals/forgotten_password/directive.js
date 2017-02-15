(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzForgottenPassword', function () {
          return {
              restrict    : 'E',
              templateUrl : 'modals/forgotten_password/template.html',
              controller  : 'ForgottenPasswordController',
              controllerAs: 'user',
              scope       : {
                  loginModalId   : '@',
                  registerModalId: '@'
              }
          };
      });
}());
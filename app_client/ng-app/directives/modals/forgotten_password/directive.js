(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzForgottenPasswordModal', function () {
          return {
              restrict    : 'E',
              templateUrl : 'directives/modals/forgotten_password/template.html',
              controller  : 'UserController',
              controllerAs: 'user'
          };
      });
}());
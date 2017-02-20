(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzRegisterModal', function () {
          return {
              restrict    : 'E',
              templateUrl : 'directives/modals/register/template.html',
              scope       : {
                  loginModalId            : '@',
                  forgottenPasswordModalId: '@'
              },
              controller  : 'RegisterController',
              controllerAs: 'user'
          };
      });
}());
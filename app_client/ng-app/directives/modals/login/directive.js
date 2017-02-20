(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzLoginModal', function () {
          return {
              restrict    : 'E',
              templateUrl : 'directives/modals/login/template.html',
              scope       : {
                  registerModalId : '@',
                  forgottenPasswordModalId:'@'
              },
              controller  : 'LoginController',
              controllerAs: 'user'
          };
      });
}());
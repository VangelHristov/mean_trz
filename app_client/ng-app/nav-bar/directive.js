(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzNavBar', function () {
            return {
                restrict    : 'E',
                templateUrl : 'nav-bar/template.html',
                scope       : {
                    profileHref    : '@',
                    loginModalId   : '@',
                    registerModalId: '@'
                },
                controller  : 'UserController',
                controllerAs: 'user'
            };
        }
      );
}());
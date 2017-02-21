(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzNavBar', function () {
            return {
                restrict   : 'E',
                templateUrl: 'directives/nav_bar/template.html',
                scope      : {
                    isLoggedIn: '&',
                    logOut    : '&'
                },
                link       : function (scope) {
                    scope.user={};
                    scope.user.loggedIn = scope.isLoggedIn() === true;
                    scope.user.exit = () => scope.$apply(scope.logOut);
                }
            };
        }
      );
}());
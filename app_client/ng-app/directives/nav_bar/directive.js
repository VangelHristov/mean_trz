(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzNavBar', function () {
            return {
                restrict   : 'E',
                templateUrl: 'directives/nav_bar/template.html'
            };
        }
      );
}());
(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzFooter', function () {
          return {
              restrict   : 'E',
              templateUrl: 'directives/footer/template.html',
              scope      : {
                  text: '@'
              }
          };
      });
}());
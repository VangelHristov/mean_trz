(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzInput', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/input/template.html',
              scope      : {
                  type    : '@',
                  id      : '@',
                  label   : '@',
                  required: '@'
              }
          };
      });
}());
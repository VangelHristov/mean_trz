(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzSelect', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/select/template.html',
              scope      : {
                  id     : '@',
                  text   : '@',
                  options: '='
              }
          };
      });
}());
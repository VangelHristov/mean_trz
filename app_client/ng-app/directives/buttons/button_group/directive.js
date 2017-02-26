(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzButtonGroup', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/buttons/button_group/template.html',
              scope      : {
                  buttons: '='
              }
          };
      });
}());
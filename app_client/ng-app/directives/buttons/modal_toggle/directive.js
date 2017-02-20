(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzModalToggleButton', function () {
          return {
              restrict   : 'E',
              templateUrl: 'directives/buttons/modal_toggle/template.html',
              scope      : {
                  label : '@',
                  icon  : '@',
                  target: '@'
              }
          };
      });
}());
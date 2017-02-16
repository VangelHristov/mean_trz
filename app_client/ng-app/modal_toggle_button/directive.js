(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzModalToggleButton', function () {
          return {
              restrict   : 'E',
              templateUrl: 'modal_toggle_button/template.html',
              scope      : {
                  label : '@',
                  icon  : '@',
                  target: '@'
              }
          };
      });
}());
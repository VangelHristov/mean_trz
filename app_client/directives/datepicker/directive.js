(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzDatepicker', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/datepicker/template.html',
              scope      : {
                  dateStr    : '=',
                  id         : '@',
                  label      : '@',
                  format     : '@',
                  required   : '@',
                  closeText  : '@',
                  clearText  : '@',
                  currentText: '@',
                  open       : '&',
                  isOpen     : '='
              },
              link       : (scope) => {
                  if (scope.dateStr && typeof scope.dateStr === 'string') {
                      scope.dateStr = new Date(scope.dateStr);
                  }
              }
          };
      });
}());
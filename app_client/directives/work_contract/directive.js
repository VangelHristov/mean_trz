(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzWorkContract', ['datepickerOptions', function (datepickerOptions) {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/work_contract/template.html',
              scope      : {
                  model : '=',
                  submit: '&'
              },
              link       : (scope) => {
                  scope.datepicker = datepickerOptions;
                  scope.open = (id) => scope[id] = true;
              }
          };
      }]);
}());
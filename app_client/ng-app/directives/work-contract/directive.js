(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzWorkContract', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/work_contract/template.html',
              scope      : {
                  model : '=',
                  submit: '&'
              }
          };
      });
}());
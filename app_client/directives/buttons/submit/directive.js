(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzSubmitButton', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/buttons/submit/template.html',
              scope      : {
                  submit: '&'
              }
          };
      });
}());
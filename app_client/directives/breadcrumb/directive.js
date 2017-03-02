(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzBreadcrumb', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/breadcrumb/template.html',
              scope      : {
                  breadcrumbs: '='
              }
          };
      });
}());
(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzTabs', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/tabs/template.html',
              scope      : {
                  tabs: '=',
                  set : '&'
              }
          };
      });
}());
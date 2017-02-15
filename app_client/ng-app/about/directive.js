(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzAbout', function () {
          return {
              restrict:'E',
              templateUrl:'about/template'
          };
      });
}());
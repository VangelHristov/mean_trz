(function () {
    'use strict';

    angular
      .module('app')
      .factory('core', ['$window', '$location', '$q', '$resource',
          function ($window, $location, $q, $resource) {
              return {
                  $window, $location, $q, $resource
              };
          }]);
}());
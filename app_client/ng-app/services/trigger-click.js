(function () {
    'use strict';

    angular
      .module('app')
      .factory('triggerClick', ['$timeout', function ($timeout) {
          return function (target) {
              $timeout(() => {
                  angular.element(target).triggerHandler('click');
              });
          };
      }]);
}());
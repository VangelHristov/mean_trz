(function () {
    'use strict';

    angular
      .module('app')
      .directive('validateBulstat', ['validate', function (validate) {
          return {
              require : 'ngModel',
              restrict: 'A',
              link    : (scope, el, attr, ctrl) => {
                  function isValidBulstat(value) {
                      if (validate.bulstat(value)) {
                          ctrl.$setValidity('bulstat', true);
                      } else {
                          ctrl.$setValidity('bulstat', false);
                      }

                      return value;
                  }

                  ctrl.$parsers.push(isValidBulstat);
              }
          };
      }]);
}());
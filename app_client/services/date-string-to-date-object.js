(function () {
    'use strict';

    angular
      .module('app')
      .factory('toDateObject', function () {
          return (sourceObject, required, optional) => {
              if (!sourceObject) {
                  return;
              }

              if (required) {
                  required.forEach(prop => {
                      if (sourceObject[prop]) {
                          sourceObject[prop] = new Date(sourceObject[prop]);
                      } else {
                          sourceObject[prop] = new Date();
                      }
                  });
              }

              if (optional) {
                  optional.forEach(prop => {
                      if (sourceObject[prop]) {
                          sourceObject[prop] = new Date(sourceObject[prop]);
                      }
                  });
              }
          };
      });
}());
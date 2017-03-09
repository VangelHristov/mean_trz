(function () {
    'use strict';

    angular
      .module('app')
      .factory('authenticationInterceptor', ['secureRoutes', 'storage', 'notification', '$location',
          function (secureRoutes, storage, notification, $location) {
              return {
                  request      : function (config) {

                      if (secureRoutes.some((route) => route.test(config.url))) {

                          if (storage.isLoggedIn()) {

                              config.headers.Authorization = `Bearer ${storage.getToken()}`;
                              return config;
                          }

                          storage.removeAllData();
                          notification.warning('Please login');
                          $location.path('/about');
                          return;
                      }

                      return config;
                  },
                  responseError: function (error) {
                      if (error.data && error.data.message) {
                          error.message = error.data.message;
                      }

                      return error;
                  }
              };
          }]);
}());
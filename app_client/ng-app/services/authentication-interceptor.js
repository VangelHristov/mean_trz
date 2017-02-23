(function () {
    'use strict';

    angular
      .module('app')
      .factory('authenticationInterceptor', ['secureRoutes', 'storage', 'notification', '$location',
          function (secureRoutes, storage, notification, $location) {
              return {
                  request     : function (config) {

                      if (secureRoutes.some((route) => route.test(config.url))) {
                          let token = storage.getToken();

                          if (token) {
                              config.headers.token = token;
                              return config;
                          }

                          $location.path('/about');
                          notification.warning('Please login.');
                          return;
                      }

                      return config;
                  },
                  response    : function (response) {
                      return response;
                  },
                  requestError: function (error) {
                      return error;
                  }
              };
          }]);
}());
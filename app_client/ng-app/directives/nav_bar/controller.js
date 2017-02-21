(function () {
    'use strict';

    angular
      .module('app')
      .controller("UserController", ['storage', 'notification', '$location', function (storage, notification, $location) {
          let ctrl = this;

          ctrl.isLoggedIn = function () {
              return !!storage.getToken();
          };

          ctrl.logOut = function () {
              storage.removeAllData();
              notification.success('Good bye!');
              $location.path('/about');
              // redirect to about
          };
      }]);
}());

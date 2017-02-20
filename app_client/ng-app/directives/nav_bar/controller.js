(function () {
    'use strict';
    angular
      .module('app')
      .controller("UserController", ['storage', 'notification', function (storage, notification) {
          let ctrl        = this;

          ctrl.isLoggedIn = !!storage.getToken();

          ctrl.logOut     = function () {
              storage.removeAllData();
              ctrl.isLoggedIn = false;
              notification.success('Good bye!');
              // redirect to about
          };
      }]);
}());

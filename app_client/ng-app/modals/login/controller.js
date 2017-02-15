(function () {
    'use strict';

    function LoginController(users, storage, notification) {

        let ctrl      = this;
        ctrl.email    = '';
        ctrl.password = '';
        ctrl.logIn    = function () {
            users
              .auth({email: ctrl.email, password: ctrl.password})
              .$promise
              .then(function (data) {
                  if (data.token) {
                      storage.setToken(data.token);
                      notification.success('Welcome back!');
                  } else {
                      notification.warning('Oops invalid credentials');
                  }
              });
        };
    }

    angular
      .module('app')
      .controller('LoginController', ['userDataContext', 'storage', 'notification', LoginController]);
}());

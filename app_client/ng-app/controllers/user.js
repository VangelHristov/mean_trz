(function () {
    'use strict';

    angular
      .module('app')
      .controller('UserController', ['core', 'common', 'messages', function (core, common, messages) {

          let ctrl = this;
          ctrl.getToken = () => common.storage.getToken();
          ctrl.getUserId = () => common.storage.getUserId();
          ctrl.getCompanyId = () => common.storage.getCompanyId();
          ctrl.isLoggedIn = () => !!common.storage.getToken();
          ctrl.logIn = function (data) {
              common.dataContext
                    .auth
                    .authenticate(data)
                    .$promise
                    .then(function (result) {
                        if (result.data) {
                            common.modalDismiss();
                            common.storage.setToken('abcd1234567890');
                            common.storage.setUserId('1234567890ab');
                            common.notification.success(messages.loginSuccess);
                            core.$location.path('/companies');
                        } else {
                            common.notification.warning(messages.invalidCredentials);
                        }
                    })
                    .catch(err => common.notification.error(err.data));
          };
          ctrl.logOut = function () {
              ctrl.email = '';
              ctrl.password = '';
              common.storage.removeAllData();
              common.notification.success(messages.logoutSuccess);
              core.$location.path('/about');
          };
          ctrl.register = function (data) {
              common.dataContext.register
                    .save(data)
                    .$promise
                    .then(function () {
                        common.modalDismiss();
                        common.notification.success(messages.registrationSuccess);
                    })
                    .catch(function (err) {
                        common.notification.error(err.data);
                    });
          };
          ctrl.resetPassword = (/*email*/) => common.notification.success(messages.passwordResetSuccess);
      }]);
}());
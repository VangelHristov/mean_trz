(function () {
    'use strict';

    angular
      .module('app')
      .controller('UserController', ['storage', 'dataContext', 'modalDismiss', 'notification', '$location','messages',
          function (storage, ctx, modalDismiss, notification, $location, messages) {

              let ctrl = this;
              ctrl.email = 'qa@qa.qa';
              ctrl.password = '1';
              ctrl.getToken = () => storage.getToken();
              ctrl.getUserId = () => storage.getUserId();
              ctrl.getCompanyId = () => storage.getCompanyId();
              ctrl.isLoggedIn = () => !!storage.getToken();
              ctrl.logIn = function () {
                  ctx
                    .auth
                    .authenticate({email: ctrl.email, password: ctrl.password})
                    .$promise
                    .then(function (result) {
                        if (result.data) {
                            modalDismiss();
                            storage.setToken('abcd1234567890');
                            storage.setUserId('1234567890ab');
                            notification.success(messages.loginSuccess);
                            $location.path('/companies');
                        } else {
                            notification.warning(messages.invalidCredentials);
                        }
                    })
                    .catch(err => notification.error(err.data));
              };
              ctrl.logOut = function () {
                  storage.removeAllData();
                  notification.success();
                  $location.path('/about');
              };
              ctrl.register = function () {
                  ctx.register
                     .save({email: ctrl.email, password: ctrl.password})
                     .$promise
                     .then(function () {
                         modalDismiss();
                         notification.success(messages.registrationSuccess);

                     })
                     .catch(function (err) {
                         notification.error(err.data);
                     });
              };
              ctrl.resetPassword = () => notification.success(messages.passwordResetSuccess);
          }]);
}());
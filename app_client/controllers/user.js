(function () {
    'use strict';

    angular
      .module('app')
      .controller('UserController', ['$location', 'storage', 'dataContext', 'notification', 'modalDismiss', 'messages',
          function ($location, storage, dataContext, notification, modalDismiss, messages) {

              let ctrl = this;
              ctrl.isLoggedIn = () => storage.isLoggedIn();
              ctrl.logIn = function (data) {
                  dataContext
                    .auth
                    .authenticate(data)
                    .$promise
                    .then(function (result) {
                        if (result.data) {
                            modalDismiss();

                            storage.setToken(result.data);

                            notification.success(messages.loginSuccess);

                            $location.path('/companies');
                        } else {
                            notification.error(messages.invalidCredentials);
                        }
                    })
                    .catch(notification.error);
              };

              ctrl.logOut = function () {
                  ctrl.email = '';
                  ctrl.password = '';
                  storage.removeAllData();
                  notification.success(messages.logoutSuccess);
                  $location.path('/about');
              };

              ctrl.register = function (data) {
                  dataContext.register
                             .save(data)
                             .$promise
                             .then(function () {
                                 modalDismiss();
                                 notification.success(messages.registrationSuccess);
                             })
                             .catch(notification.error);
              };

              ctrl.resetPassword = (/*email*/) => notification.success(messages.passwordResetSuccess);
          }]);
}());
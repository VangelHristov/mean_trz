(function () {
    'use strict';

    angular
      .module('app')
      .controller('LoginController', ['dataContext', 'storage', 'notification', '$location', 'modalDismiss',
          function (ctx, storage, notification, $location, modalDismiss) {

              let ctrl = this;
              ctrl.email = '';
              ctrl.password = '';
              ctrl.logIn = function () {
                  ctx.auth
                     .authenticate({email: ctrl.email, password: ctrl.password})
                     .$promise
                     .then(function (result) {
                         if (result.data) {
                             modalDismiss();
                             storage.setToken('abcd1234567890');
                             storage.setUserId('1234567890ab');
                             notification.success('TODO: redirect to dashboard.');
                             $location.path('/companies');
                         } else {
                             notification.warning('Не валидно име или парола.');
                         }
                     })
                     .catch(err => notification.error(err.data));
              };
          }]);
}());

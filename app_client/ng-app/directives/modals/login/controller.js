(function () {
    'use strict';

    angular
      .module('app')
      .controller('LoginController', ['dataContext', 'storage', 'notification', function (ctx, storage, notification) {

          let ctrl = this;
          ctrl.email = '';
          ctrl.password = '';
          ctrl.logIn = function () {
              ctx.auth
                 .authenticate({email: ctrl.email, password: ctrl.password})
                 .$promise
                 .then(function (data) {
                     notification.success(data);
                 });
          };
      }]);
}());

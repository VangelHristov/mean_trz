(function () {
    'use strict';

    angular
      .module('app')
      .controller('ForgottenPasswordController', ['notification', 'userDataContext', function (notification, users) {
          let ctrl           = this;
          ctrl.email         = '';
          ctrl.resetPassword = function () {
              //users.get();
              notification.info('TODO: implement the reset password logic!');
          };
      }]);
}());
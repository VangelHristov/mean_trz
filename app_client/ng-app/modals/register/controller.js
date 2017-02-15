(function () {
    'use strict';

    angular
      .module('app')
      .controller('RegisterController', ['userDataContext', 'notification', function (users, notification) {

          var ctrl      = this;
          ctrl.email    = '';
          ctrl.password = '';
          ctrl.register = function () {
              users
                .save({email: ctrl.email, password: ctrl.password})
                .$promise
                .then(function (response) {
                    if (response.message === 'ok') {
                        notification.success('You have registered, now you need to confirm your email!');
                    } else {
                        notification.warning(response.message);
                    }
                    // redirect to login
                })
                .catch(function (err) {
                    notification.error(err);
                });
          };
      }]);
}());

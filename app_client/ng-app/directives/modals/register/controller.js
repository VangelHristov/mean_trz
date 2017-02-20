(function () {
    'use strict';

    angular
      .module('app')
      .controller('RegisterController', ['dataContext', 'notification', function (ctx, notification) {

          var ctrl = this;
          ctrl.email = '';
          ctrl.password = '';
          ctrl.register = function () {
              ctx.register
                 .save({email: ctrl.email, password: ctrl.password})
                 .$promise
                 .then(function (response) {
                     notification.success(response.message);

                     // redirect to login
                 })
                 .catch(function (err) {
                     notification.error(err.data);
                 });
          };
      }]);
}());

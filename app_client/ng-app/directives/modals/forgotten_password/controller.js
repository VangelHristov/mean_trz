(function () {
    'use strict';

    angular
      .module('app')
      .controller('UserController', function () {
          let ctrl  = this;
          ctrl.data = {
              inputs : [
                  {name: 'email', type: 'email', placeholder: 'Имейл', model: ctrl.email},
                  {type: 'submit', class: 'trz-form-submit', value: 'Прати ми нова парола'}
              ],
              help   : [
                  {target: '#register-modal', label: 'Регистрация'},
                  {target: '#login-modal', label: 'Вход'}
              ],
              id     : 'forgotten-password-modal',
              submit : function () {
                  console.log('submitted');
              },
              heading: 'Забравена парола',
              email  : ''
          };
      });
})();
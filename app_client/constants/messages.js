(function () {
    'use strict';

    angular
      .module('app')
      .constant('messages', {
          loginSuccess        : 'Успешен вход.',
          invalidCredentials  : 'Невалидно име или парола.',
          logoutSuccess       : 'Успешен изход.',
          registrationSuccess : 'Успешна регистрация. До няколко минути ще получите имейл с инструкции. Моля следвайте инструкциите за да потвърдите имейл адреса си.',
          passwordResetSuccess: 'След неколко минути ще получите имейл с инструкции, ако не получите имейл проверете спам папката или се обадете на телефона за обслужване на клиенти',
          promptToLogIn       : 'Моля влезте в профила си.'
      });
}());